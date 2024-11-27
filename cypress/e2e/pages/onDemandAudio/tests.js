/* eslint-disable cypress/no-unnecessary-waiting */
/* eslint-disable consistent-return */
import path from 'ramda/src/path';
import { getEpisodeAvailability } from '../../../support/helpers/onDemandRadioTv';
import envConfig from '../../../support/config/envs';

export default ({ service, pageType, variant }) => {
  describe(`Tests for ${service} ${pageType}`, () => {
    describe(
      'Audio Player',
      {
        retries: 3,
      },
      () => {
        it('should render a valid media player', () => {
          cy.getPageDataFromWindow().then(({ pageData }) => {
            if (!getEpisodeAvailability(pageData)) {
              return cy.log(
                `Episode is not available: ${Cypress.env('currentPath')}`,
              );
            }

            cy.get('[data-e2e="media-loader__container"]').should('be.visible');
          });
        });
      },
    );
    describe(`Tests for ${service} ${pageType} ${variant} with toggle use`, () => {
      before(() => {
        cy.getToggles(service);
      });
      describe('Recent Episodes component', () => {
        it('should be displayed if the toggle is on, and shows the expected number of items', function test() {
          let toggleName;

          if (Cypress.env('currentPath').includes('podcasts')) {
            toggleName = 'recentPodcastEpisodes';
          } else {
            toggleName = 'recentAudioEpisodes';
          }
          cy.fixture(`toggles/${service}.json`).then(toggles => {
            const recentEpisodesEnabled = path(
              [toggleName, 'enabled'],
              toggles,
            );
            cy.log(
              `Recent Episodes component enabled? ${recentEpisodesEnabled}`,
            );
            // There cannot be more episodes shown than the max allowed
            if (recentEpisodesEnabled) {
              const recentEpisodesLimit = path([toggleName, 'value'], toggles);

              const recentEpisodesMaxNumber = Number(recentEpisodesLimit);

              cy.getPageDataFromWindow().then(({ pageData }) => {
                const processedEpisodesData = pageData.recentEpisodes;

                const totalNumberOfEpisodes = processedEpisodesData.length;

                cy.log(
                  `Number of available episodes? ${totalNumberOfEpisodes}`,
                );

                cy.window().then(win => {
                  const renderedEpisodes = win.document.querySelectorAll(
                    '[data-e2e=recent-episodes-list-item]',
                  );

                  const renderedEpisodesArray =
                    Array.prototype.slice.call(renderedEpisodes);

                  const renderedEpisodesInnerText = renderedEpisodesArray.map(
                    episode => episode.innerText,
                  );

                  const convertTimestampsToLocaleString =
                    recentEpisodesArray => {
                      return recentEpisodesArray.map(episode => ({
                        ...episode,
                        timestamp: new Date(episode.timestamp).toLocaleString(),
                      }));
                    };

                  const cypressJsonResWithLocaleStringTimestamp =
                    convertTimestampsToLocaleString(processedEpisodesData);

                  const simorghJsonResWithLocaleStringTimestamp =
                    convertTimestampsToLocaleString(
                      win.SIMORGH_DATA.pageData.recentEpisodes,
                    );

                  if (
                    renderedEpisodesArray.length !==
                    cypressJsonResWithLocaleStringTimestamp.length
                  ) {
                    /* eslint-disable no-console */
                    cy.log(
                      'Cypress json response - ',
                      JSON.stringify(cypressJsonResWithLocaleStringTimestamp),
                    );
                    cy.log('HTML on page - ', renderedEpisodesInnerText);

                    cy.log(
                      'Simorgh json response - ',
                      JSON.stringify(simorghJsonResWithLocaleStringTimestamp),
                    );

                    /* eslint-enable no-console */
                  }

                  // More than one episode expected
                  if (totalNumberOfEpisodes > 1) {
                    cy.get('[data-e2e=recent-episodes-list]').should('exist');

                    cy.get('[data-e2e=recent-episodes-list]').within(() => {
                      cy.get('[data-e2e=recent-episodes-list-item]')
                        .its('length')
                        .should(length => {
                          expect(length).to.be.closeTo(
                            recentEpisodesMaxNumber,
                            1,
                          );
                        });
                    });
                  }
                  // If there is only one item, it is not in a list
                  else if (totalNumberOfEpisodes === 1) {
                    cy.get('aside[aria-labelledby=recent-episodes]').within(
                      () => {
                        cy.get('[data-e2e="recent-episodes-list"]').should(
                          'not.exist',
                        );
                      },
                    );
                  }
                  // No items expected
                  else {
                    cy.get('aside[aria-labelledby=recent-episodes]').should(
                      'not.exist',
                    );

                    cy.log('No episodes present or available');
                  }
                });
              });
            }
            // Not toggled on for this service
            else {
              cy.get('[data-e2e=recent-episodes-list]').should('not.exist');
              cy.log('Recent episodes is not toggled on for this service');
            }
          });
        });
      });
      describe('Radio Schedule', () => {
        it('should be displayed if there is enough schedule data', function test() {
          cy.getPageDataFromWindow().then(({ pageData }) => {
            cy.fixture(`toggles/${service}.json`).then(toggles => {
              const scheduleIsEnabled = path(
                ['onDemandRadioSchedule', 'enabled'],
                toggles,
              );
              cy.log(
                `On Demand Radio Page configured for Radio Schedule? ${scheduleIsEnabled}`,
              );

              if (scheduleIsEnabled) {
                const { radioScheduleData } = pageData;
                if (scheduleIsEnabled && radioScheduleData) {
                  cy.log('Schedule has enough data');
                  cy.get('[data-e2e=radio-schedule]').should('exist');
                  // cy.get('[data-e2e=live]').should('exist');
                } else {
                  cy.get('[data-e2e=radio-schedule]').should('not.exist');
                }
              } else {
                cy.get('[data-e2e=radio-schedule]').should('not.exist');
              }
            });
          });
        });
      });
    });
    describe('Chartbeat', () => {
      if (envConfig.chartbeatEnabled) {
        it('should have a script with src value set to chartbeat source', () => {
          cy.hasScriptWithChartbeatSrc();
        });
        it('should have chartbeat config set to window object', () => {
          cy.hasGlobalChartbeatConfig();
        });
      }
    });
  });
};
