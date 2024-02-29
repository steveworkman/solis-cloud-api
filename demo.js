import solisApi from "./dist/index.js";

const api = solisApi(process.env.BASEURL, process.env.KEY, process.env.SECRET);
const stationList = await api.getUserStationList();

// console.log(stationList.data.page.records[0]);

stationList.data.page.records.forEach(async (station) => {
  console.log("Getting station data for station id: " + station.id);
  const stationId = station.id;

  const stationData = await api.getStationDetail(stationId);

  console.log("Station ID:", station.id);
  console.log("PV Power:", stationData.data.power);
  if (stationData.data.batteryPower !== 0) {
    console.log(`Battery: ${stationData.data.batteryPercent}%`);
    console.log(
      "Battery is",
      stationData.data.batteryPower > 0 ? "charging" : "discharging"
    );
  }

  console.log(
    `Power needed ${stationData.data.familyLoadPower}${stationData.data.familyLoadPowerStr}`
  );

  try {
    const inverterList = await api.getInverterList(stationId);
    const inverter = inverterList.data.page.records[0];
    const answer = await api.getInverterDay(
      "GBP",
      "2024-02-28",
      1,
      inverter.id,
      inverter.sn
    );
    // console.log(answer);
  } catch (e) {
    console.log("Error in inverterList", e);
  }
  const stationDay = await api.getStationDay(stationId, "GBP", "2024-02-09", 0);
  // console.log(stationDay);
});

// const dataloggerList = await api.getDataloggerList(stationId);
// console.log(dataloggerList.data.page.records);

// const dataLogger = await api.getDataloggerDetail(
//   dataloggerList.data.page.records[0].id
// );
// console.log(dataLogger.data);

// const inverterList = await api.getInverterList(stationId);
// console.log(inverterList.data.page.records);

// const inverter = await api.getInverterDetail(
//   inverterList.data.page.records[0].id
// );
// console.log(inverter.data);
