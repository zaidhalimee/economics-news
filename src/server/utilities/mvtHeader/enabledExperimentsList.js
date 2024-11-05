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
    name: 'newswb_01_ap_banner_election',
    services: ['mundo', 'portuguese'],
    pageTypes: ['article'],
  },
];

export default enabledExperimentList;
