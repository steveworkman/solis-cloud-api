export type SolisAPIResponse<T> = {
  success: boolean;
  code: string;
  msg: string;
  data: T;
};

export type UserStationListResponse = {
  stationStatusVo: {
    all: number; // Total number of power stations
    normal: number; // Number of normal power stations
    offline: number; // Number of offline power stations
    fault: number; // Number of failed power stations
    building: number;
    mppt: number;
  };
  mpptSwitch: number; // MPPT switch
  page: {
    records: Array<UserStationDetails>; // Power Station List
    total: number; // Total number of results
    size: number; // Page size
    current: number; // Current page number
    orders: Array<any>;
    optimizeCountSql: boolean;
    searchCount: boolean;
    pages: number; // Total number of pages
  };
};

export type UserStationDetails = {
  id: number; // Power station ID
  userId: number; // Owner ID
  capacity: string; // Installed capacity
  capacityStr: string; // Installed capacity unit
  capacity1: number; // Installed capacity (not carry)
  fullHour: number; // Number of full hours of sunshine
  picName: string; // URL of the picture of the power plant
  installerId: number; // ID of the installation organisation
  installer: string; // Installer Organisation
  dataTimestamp: number; // Last updated time
  installerMobile: string; // Installer
  sno: string; // Plant short ID
  country: number; // Country short ID
  countryStr: string; // Country name
  region: number; // Region ID
  regionStr: string; // Region name
  city: number; //City id
  cityStr: string; //City Name
  county: number; //District id
  countyStr: string; //District name
  dip: number; //Tilt angle
  azimuth: number; //Azimuth angle
  timeZone: number; //Time zone
  timeZoneName: string; //Time zone name
  timeZoneStr: string; //format timeZoneStr string string
  timeZoneId: number; //Time zone id
  daylight: number; //Daylight saving
  createDate: number; //Create Time
  price: number; //Pirce per kwh
  module: number; //Module number
  pic: URL; //string Plant Picture 1 url
  power: number; //Power
  powerStr: string; //Power unit
  dayEnergy: number; //Daily Energy
  dayEnergyStr: string; //Daily Energy unit
  dayIncome: number; //Daily income
  dayIncomeUnit: string; //Daily income unit
  monthEnergy: number; //Monthly Energy
  monthEnergyStr: string; //Monthly Energy unit
  yearEnergy: number; //Yearly Energy
  yearEnergyStr: string; //Yearly Energy unit
  allEnergy: number; //Total Energy
  allEnergyStr: string; //Total Energy unit
  allEnergy1: number; //Total Energy Original
  allIncome: number; //Total Income
  allIncomeUnit: string; //Total Income Unit
  synchronizationType: number; //0Full Grid Tied 1Self-consumption synchronizationType number Grid type 2Off-grid
  stationTypeNew: number; //Type: Default 0 1 – Grid tied;2 – Grid-tied+Meter at 13 load:side;3 - Grid-tied+Meter at grid side;4 – Hybrid+ Meter at load side;5 - Hybrid+ Meter at grid side;
  batteryTotalDischargeEnergy: number; // Battery total energy discharge
  batteryTotalChargeEnergy: number; // Battery total charge energy
  gridPurchasedTotalEnergy: number; // Meter total import energy
  gridSellTotalEnergy: number; // Meter total sell energy
  homeLoadTotalEnergy: number; // Load total consumption energy
  oneSelf: number; // Self consumption
  batteryTodayDischargeEnergy: number; // Battery daily discharge energy
  batteryTodayChargeEnergy: number; // Battery daily charge energy
  gridPurchasedTodayEnergy: number; // Meter daily import energy
  gridSellTodayEnergy: number; // Meter daily export energy
  homeLoadTodayEnergy: number; // Daily consumption energy
  money: string; // Currency unit
  fisPowerTime: number; // First power on time
  fisGenerateTime: number; // First generate time
  remark1: string; // Remark 1
  remark2: string; // Remark 2
  remark3: string; // Remark 3
  state:
    | 1 // Online
    | 2 // Offline
    | 3; // Alarm
  inverterPower: string; // Inverter rated AC power
  nmiCode: string; // NMI code (AU only)
};

export type PowerStationDetails = {
  id: string;
  dataTimestamp: string;
  fullHour: number;
  monthCarbonDioxide: number;
  installerId: string;
  installer: string;
  userId: string;
  sno: string;
  country: string;
  countryStr: string;
  region: string;
  regionStr: string;
  city: string;
  cityStr: string;
  state: number;
  dip: number;
  azimuth: number;
  power: number;
  timeZone: number;
  timeZoneName: string;
  timeZoneStr: string;
  timeZoneId: string;
  daylight: number;
  powerStr: string;
  price: number;
  capacity: number;
  capacityStr: string;
  capacityPercent: number;
  capacity1: number;
  picName: string;
  dayEnergy: number;
  dayEnergyStr: string;
  monthEnergy: number;
  monthEnergyStr: string;
  yearEnergy: number;
  yearEnergyStr: string;
  allEnergy: number;
  allEnergyStr: string;
  allEnergy1: number;
  updateDate: number;
  type: number;
  epmType: number;
  gridSwitch: number;
  shareProcess: number;
  dcInputType: number;
  stationTypeNew: number;
  gridPurchasedTotalEnergy: number;
  gridSellTotalEnergy: number;
  homeLoadTotalEnergy: number;
  oneSelf: number;
  homeLoadTodayEnergy: number;
  money: string;
  condTxtD: string;
  condTxtN: string;
  condCodeD: string;
  condCodeN: string;
  simFlowState: number;
  jxbType: number;
  createDate: number;
  createDateStr: string;
  connectTime: number;
  accessTime: number;
  fisPowerTime: number;
  fisPowerTimeStr: string;
  fisGenerateTime: number;
  fisGenerateTimeStr: string;
  generateDays: number;
  generateDaysContinuous: number;
  inverterCount: number;
  orgCode: string;
  visitorCount: number;
  daylightSwitch: number;
  daylightType: number;
  fullHourStr: string;
  capacityPec: string;
  dipStr: string;
  azimuthStr: string;
  dateTime: string;
  offset: number;
  offsetStr: string;
  dayInCome: number;
  dayInComeUnit: string;
  monthInCome: number;
  monthInComeUnit: string;
  yearInCome: number;
  yearInComeUnit: string;
  allInCome: number;
  allInCome1: number;
  allInComeUnit: string;
  powerStationNumTree: number;
  powerStationNumTreeUnit: string;
  powerStationAvoidedCo2: number;
  powerStationAvoidedCo2Unit: string;
  powerPec: string;
  porwerPercent: number;
  batteryPower: number;
  batteryPowerStr: string;
  batteryPowerPec: string;
  batteryPowerZheng: number;
  batteryPowerFu: number;
  batteryPercent: number;
  familyLoadPercent: number;
  psum: number;
  psumStr: string;
  psumPec: string;
  psumZheng: number;
  psumFu: number;
  gridPurchasedTotalEnergyStr: string;
  gridSellTotalEnergyStr: string;
  gridPurchasedEnergy: number;
  gridPurchasedEnergyStr: string;
  gridSellEnergy: number;
  gridSellEnergyStr: string;
  gridPurchasedDayEnergy: number;
  gridPurchasedDayEnergyStr: string;
  gridSellDayEnergy: number;
  gridSellDayEnergyStr: string;
  gridPurchasedMonthEnergy: number;
  gridPurchasedMonthEnergyStr: string;
  gridSellMonthEnergy: number;
  gridSellMonthEnergyStr: string;
  gridPurchasedYearEnergy: number;
  gridPurchasedYearEnergyStr: string;
  gridSellYearEnergy: number;
  gridSellYearEnergyStr: string;
  batteryDischargeEnergy: number;
  batteryDischargeEnergyStr: string;
  batteryChargeEnergy: number;
  batteryChargeEnergyStr: string;
  batteryDischargeMonthEnergy: number;
  batteryDischargeMonthEnergyStr: string;
  batteryChargeMonthEnergy: number;
  batteryChargeMonthEnergyStr: string;
  batteryDischargeYearEnergy: number;
  batteryDischargeYearEnergyStr: string;
  batteryChargeYearEnergy: number;
  batteryChargeYearEnergyStr: string;
  batteryDischargeTotalEnergy: number;
  batteryDischargeTotalEnergyStr: string;
  batteryChargeTotalEnergy: number;
  batteryChargeTotalEnergyStr: string;
  familyLoadPower: number;
  familyLoadPowerStr: string;
  familyLoadPowerPec: string;
  homeGridTodayEnergy: number;
  homeGridTodayEnergyStr: string;
  homeGridMonthEnergy: number;
  homeGridMonthEnergyStr: string;
  homeGridYearEnergy: number;
  homeGridYearEnergyStr: string;
  homeGridTotalEnergy: number;
  homeGridTotalEnergyStr: string;
  backupTodayEnergy: number;
  backupTodayEnergyStr: string;
  backupMonthEnergy: number;
  backupMonthEnergyStr: string;
  backupYearEnergy: number;
  backupYearEnergyStr: string;
  backupTotalEnergy: number;
  backupTotalEnergyStr: string;
  totalLoadPower: number;
  totalLoadPowerStr: string;
  bypassLoadPower: number;
  bypassLoadPowerStr: string;
  homeLoadEnergy: number;
  homeLoadEnergyStr: string;
  homeLoadTodayEnergyStr: string;
  homeLoadMonthEnergy: number;
  homeLoadYearEnergy: number;
  picUrl: string;
  weather: string;
  sr: string;
  ss: string;
  tmpMax: string;
  tmpMin: string;
  tmpUnit: string;
  hum: string;
  weatherUpdateDate: string;
  weatherUpdateDateStr: string;
  pcpn: string;
  pres: string;
  windSpd: string;
  windDir: string;
  weatherType: number;
  windSpeed: number;
  windDirection: number;
  humidity: number;
  temp: number;
  rainfall: number;
  airPressure: number;
  contribution: number;
  screenMap: number;
  screenGuideState: number;
  storedInverterType: number;
  countryShortName: string;
  postCode: string;
  priceGroupId: string;
  inverterPower: number;
  bypassAcOnoffSet: number;
  priceMap: PriceMap;
  sysGridPriceList?: Array<any>;
  generatorPower: number;
  generatorPowerStr: string;
  generatorPowerPec: string;
  generatorTodayEnergy: number;
  generatorTodayEnergyStr: string;
  generatorTodayEnergyPec: string;
  generatorTotalEnergy: number;
  generatorTotalEnergyStr: string;
  generatorTotalEnergyPec: string;
  weatherCount: number;
  powerAmmeter2: number;
  hourEnergyAmmeter2: number;
  dayEnergyAmmeter2: number;
  dayIncomeAmmeter2: number;
  monthEnergyAmmeter2: number;
  monthIncomeAmmeter2: number;
  yearEnergyAmmeter2: number;
  yearIncomeAmmeter2: number;
  totalEnergyAmmeter2: number;
  totalIncomeAmmeter2: number;
  doubleAmmeterStoragePower: number;
  doubleAmmeterStorageDayEnergy: number;
  homeLoadMonthEnergyStr: string;
  homeLoadYearEnergyStr: string;
  homeLoadTotalEnergyStr: string;
  gridMonthEnergy: number;
  powerAmmeter2Str: string;
  powerAmmeter2Pec: string;
  dayEnergyAmmeter2Str: string;
  dayEnergyAmmeter2Pec: string;
  monthEnergyAmmeter2Str: string;
  monthEnergyAmmeter2Pec: string;
  yearEnergyAmmeter2Str: string;
  yearEnergyAmmeter2Pec: string;
  totalEnergyAmmeter2Str: string;
  totalEnergyAmmeter2Pec: string;
  doubleAmmeterStoragePowerStr: string;
  doubleAmmeterStoragePowerPec: string;
  doubleAmmeterStorageDayEnergyStr: string;
  doubleAmmeterStorageDayEnergyPec: string;
  inverterPowerStr: string;
  monthEnergy1: number;
  dayEnergy1: number;
  yearEnergy1: number;
  power1: number;
};
export interface PriceMap {
  sell: string;
  buy: string;
}
