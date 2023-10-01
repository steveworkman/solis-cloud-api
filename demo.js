import solisApi from "./dist/index.js";

const api = solisApi(process.env.BASEURL, process.env.KEY, process.env.SECRET);
const stationList = await api.getUserStationList();

console.log(stationList.data.page.records[0]);

console.log(
  "Getting station data for station id: " + stationList.data.page.records[0].id
);

const stationData = await api.getStationDetail(
  stationList.data.page.records[0].id
);

console.log(stationData);
