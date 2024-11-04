/* 
This is a maintained list of experiments that we are running.
Add enabled experiments objects inside this array in this format:
{
  name: '',
  services: [],
  pageTypes: [],
}
*/
const enabledExperimentList = [
  {
    name: 'visible_engagement_2',
    services: ['mundo', 'portuguese'],
    pageTypes: ['article'],
  },
];

export default enabledExperimentList;
