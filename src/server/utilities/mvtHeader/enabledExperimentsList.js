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
    name: 'top_bar_oj_experiment',
    services: ['gujarati', 'hindi', 'marathi', 'tamil', 'telugu', 'urdu'],
    pageTypes: ['article'],
  },
];

export default enabledExperimentList;
