import mediumJson from './medium-large-data.json'

export const getJsonData = () => {
  const json = mediumJson;
  const outputdata = json.data[0];
  return outputdata
}