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
  id: number; //Power Station id
  userId: number; //Owner ID
  capacity: string; //Installed Capacity
  capacityStr: string; //Installed Capacity Unit
  dayEnergy: number; //Today Generation
  dayEnergyStr: string; //Today Generation Unit
  monthEnergy: number; //Month Generation
  monthEnergyStr: string; //Month Generation Unit
  yearEnergy: number; //Year Generation
  yearEnergyStr: string; //Year Generation Unit
  allEnergy: number; //Total Generation
  allEnergyStr: string; //Total Generation Unit
  dayInCome: number; //Today Revenue
  dayInComeUnit: string; //Today Revenue Unit
  monthInCome: number; //Month Revenue
  monthInComeUnit: string; //Month Revenue Unit
  yearInCome: number; //Year Revenue
  yearInComeUnit: string; //Year Revenue Unit
  allInCome: number; //Total Revenue
  allInComeUnit: string; //Total Revenue Unit
  fullHour: number; //Peak Hours
  picName: string; //Pictures
  power: number; //Power
  powerStr: string; //Power Unit
  dip: number; //Tilt Angle
  azimuth: number; //Azimuth Angle
  price: string; //Revenue per kilowatt hour
  state: number; //Power station status  "1：Online 2：Offline 3：Alarm"
  dataTimestamp: number; //Power station update time Timestamp
  money: string; //Currency
  brand: string; //Brand
  condTxtN: string; //Night Weather
  condTxtD: string; //Daytime Weather
  tmpMax: string; //Max Temperature
  tmpMin: string; //Lowest Temperature
  tmpUnit: string; //Temperature Unit
  sr: string; //Sunris Time
  ss: string; //Sundown Time
  windSpd: string; //"Wind speed, km/hr"
  windDir: string; //Wind direction
  powerStationNumTree: string; //植树
  powerStationNumTreeUnit: string; //Tree Unit
  powerStationAvoidedCo2: string; //CO2 reduction
  powerStationAvoidedCo2Unit: string; //CO2 reduction unit
  module: number; //Module Number
  batteryPower: number; //Battery Power
  batteryPowerStr: string; //Battery Power unit
  batteryPowerPec: number; //Battery Power percentage
  batteryPercent: number; //Battery SOC
  batteryDischargeEnergy: number; //"Battery  this  day  discharge energy"
  batteryDischargeEnergyStr: string; //"Battery  this  day  discharge unit"
  batteryDischargeMonthEnergy: number; //"Battery        this        month discharge energy"
  batteryDischargeMonthEnergyStr: string; //"Battery        this        month discharge unit"
  batteryDischargeYearEnergy: number; //"Battery  this  year  discharge energy"
  batteryDischargeYearEnergyStr: string; //"Battery  this  year  discharge unit"
  batteryDischargeTotalEnergy: number; //"Battery disChargeTotalEnergy"
  batteryDischargeTotalEnergyStr: string; //"Battery disChargeTotalEnergy unit"
  batteryChargeEnergy: number; //"Battery   this    day   charge energy"
  batteryChargeEnergyStr: string; //Battery this day charge unit
  batteryChargeMonthEnergy: number; //"Battery  this  month  charge energy"
  batteryChargeMonthEnergyStr: string; //"Battery  this  month  charge unit"
  batteryChargeYearEnergy: number; //"Battery   this   year   charge energy"
  batteryChargeYearEnergyStr: string; //"Battery   this   year   charge unit"
  batteryChargeTotalEnergy: number; //batteryChargeTotalEnergy
  batteryChargeTotalEnergyStr: string; //"batteryChargeTotalEnergy unit"
  psum: number; //Meter power
  psumStr: string; //Meter power unit
  psumPec: number; //Meter powerPercentage
  gridPurchasedDayEnergy: number; //"Meter      today      purchase energy"
  gridPurchasedDayEnergyStr: string; //"Meter      today      purchase energy unit"
  gridPurchasedMonthEnergy: number; //"Meter  this  month  purchase energy"
  gridPurchasedMonthEnergyStr: string; //"Meter  this  month  purchase energy unit"
  gridPurchasedYearEnergy: number; //"Meter   this   year   purchase energy"
  gridPurchasedYearEnergyStr: string; //"Meter   this   year   purchase energy unit"
  gridPurchasedTotalEnergy: number; //"Meter       total       purchase energy"
  gridPurchasedTotalEnergyStr: string; //"Meter       total       purchase energy unit"
  gridSellDayEnergy: number; //Meter today sell energy
  gridSellDayEnergyStr: string; //"Meter   today   sell   energy unit"
  gridSellMonthEnergy: number; //"Meter    this    month    sell energy"
  gridSellMonthEnergyStr: string; //"Meter    this    month    sell energy unit"
  gridSellYearEnergy: number; //Meter this year sell energy
  gridSellYearEnergyStr: string; //"Meter this year sell energy unit"
  gridSellTotalEnergy: number; //Meter total sell energy
  gridSellTotalEnergyStr: string; //Meter total sell energy unit
  familyLoadPower: number; //Load power
  familyLoadPowerStr: string; //Load power unit
  familyLoadPowerPec: number; //Load powerPercentage
  homeLoadEnergy: number; //Today load energy
  homeLoadEnergyStr: string; //Today load energy unit
  homeLoadMonthEnergy: number; //Monthly load energy
  homeLoadMonthEnergyStr: string; //Monthly load energy unit
  homeLoadYearEnergy: number; //Yearly load energy
  homeLoadYearEnergyStr: string; //Yearly load energy unit
  homeLoadTotalEnergy: number; //Total load energy
  homeLoadTotalEnergyStr: string; //Total load energy unit
  inverterPower: string; //Sum of inverter AC power
  nmiCode: string; //Nmi code
  country: number; //Country id
  countryStr: string; //Country name
  region: number; //Region id,
  regionStr: string; //Region name,
  city: number; //City id,
  cityStr: string; //City Name,
  county: number; //District id,
  countyStr: string; //District Name,
  timeZone: number; //Timezone,
  timeZoneName: string; //Timezone name,
  timeZoneStr: string; //Time zone format string,
  timeZoneId: number; //Timezone id,
  daylight: number; //Daylight saving,
  createDate: number; //Create time,
  stationTypeNew: number; //Type :Default 0; // ,"1     –     Grid     tied;2     – Grid-tied+Meter  at   load side;3  -  Grid-tied+Meter at  grid  side;4  –  Hybrid+ Meter   at   load   side;5   - Hybrid+   Meter   at   grid side ;"
  fisPowerTime: number; //First power-on time,
  fisGenerateTime: number; //First generation time,
};
