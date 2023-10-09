import solisApi from "./dist/index.js";

const api = solisApi(process.env.BASEURL, process.env.KEY, process.env.SECRET);
const stationList = await api.getUserStationList();

// console.log(stationList.data.page.records[0]);

console.log(
  "Getting station data for station id: " + stationList.data.page.records[0].id
);

const stationData = await api.getStationDetail(
  stationList.data.page.records[0].id
);

// console.log(stationData);

console.log("PV Power:", stationData.data.generatorPower);
console.log(`Battery: ${stationData.data.batteryPercent}%`);
console.log(
  "Battery is",
  stationData.data.batteryPower > 0 ? "charging" : "discharging"
);
console.log(
  `Power needed ${stationData.data.familyLoadPower}${stationData.data.familyLoadPowerStr}`
);
