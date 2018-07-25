import React from 'react';
import { storiesOf } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import MainContentContainer from './index';

const blocks = [
  {
    type: 'headline',
    blockId: '1',
    model: {
      blocks: [
        {
          type: 'text',
          blockId: 't-1',
          model: {
            blocks: [
              {
                type: 'paragraph',
                blockId: 'p-1',
                model: {
                  text: 'This is a headline!',
                },
              },
            ],
          },
        },
      ],
    },
  },
  {
    type: 'text',
    blockId: '2',
    model: {
      blocks: [
        {
          type: 'paragraph',
          blockId: 'p-2',
          model: {
            text: 'This is some text content!',
          },
        },
      ],
    },
  },
  {
    blockId: 'v-1',
    type: 'video',
    model: {
      locator: 'urn:bbc:pips:pid:p067gq6h',
      blocks: [
        {
          blockId: 'l-1',
          type: 'rawVideo',
          model: {
            guidance: null,
            isLive: false,
            duration: 'PT1M34S',
            allowOffsiteEmbedding: false,
            locator: 'urn:bbc:pips:pid:p067gq6h',
          },
        },
        {
          blockId: 'a-1',
          type: 'altText',
          model: {
            blocks: [
              {
                blockId: 't-1',
                type: 'text',
                model: {
                  blocks: [
                    {
                      type: 'paragraph',
                      blockId: 'p-1',
                      model: {
                        text:
                          'Vestibulum sagittis neque at consequat porttitor. Maecenas vitae arcu vitae augue lobortis porta eget non erat.',
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
        {
          blockId: 'c-1',
          type: 'caption',
          model: {
            blocks: [
              {
                blockId: 't-2',
                type: 'text',
                model: {
                  blocks: [
                    {
                      type: 'paragraph',
                      blockId: 'p-2',
                      model: {
                        text:
                          'Duis vitae ipsum hendrerit, commodo metus vel, mattis sapien. Proin eleifend vulputate porta. Curabitur mollis nunc nec felis ultricies, vitae tempor metus imperdiet.',
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
        {
          blockId: 'i-1',
          type: 'image',
          model: {
            blocks: [
              {
                blockId: 'ri-1',
                type: 'rawImage',
                model: {
                  width: 640,
                  height: 420,
                  locator:
                    '/cpsprodpb/6E15/production/_101718182_scischoolgetty.jpg',
                  originCode: null,
                  copyrightHolder: 'Getty Images',
                },
              },
              {
                blockId: 'at-1',
                type: 'altText',
                model: {
                  blocks: [
                    {
                      blockId: 't-3',
                      type: 'text',
                      model: {
                        blocks: [
                          {
                            type: 'paragraph',
                            blockId: 'p-3',
                            model: {
                              text: 'Pellentesque pellentesque sem magna.',
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
      ],
    },
  },
  {
    type: 'test',
    blockId: '3',
    model: {
      blocks: [
        {
          model: {
            text: 'This is some test content!',
          },
        },
      ],
    },
  },
];

storiesOf('MainContent', module)
  .add('with just a headline', () => {
    const blocksOnlyHeadline = blocks.filter(({ type }) => type === 'headline');

    return <MainContentContainer blocks={blocksOnlyHeadline} />;
  })
  .add('with a headline and other blocks', () => (
    <MainContentContainer blocks={blocks} />
  ));
