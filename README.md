# Solis Cloud API in NodeJS

This is a NodeJS wrapper for the [Solis Cloud API](https://www.soliscloud.com/). It is a work in progress and is not yet ready for production use. The API is written in TypeScript and is fully typed.

## Installation

```sh
npm i solis-cloud-api
```

## Usage

You'll need to get access to Solis Cloud API which is available through a service ticket with Solis. [Read full instructions here](https://solis-service.solisinverters.com/en/support/solutions/articles/44002212561-api-access-soliscloud).

Create a `.env` file in the root of your project and add the following:

```sh
BASEURL="https://www.soliscloud.com:13333"
SECRET="YOUR_SECRET"
KEY="YOUR_KEY"
```

Then your implementation may look something like this

```js
import solisApi from "solis-cloud-api";

const api = solisApi(process.env.BASEURL, process.env.KEY, process.env.SECRET);
const stationList = await api.getUserStationList();
```

## Completion status

The following APIs are available:

- [x] getUserStationList (Power Station List)
- [x] getStationDetail (Power Station Details)
- [x] getCollectorList (Datalogger List)
- [x] getCollectorDetail (Datalogger Details)
- [x] getInverterList (Inverter List)
- [x] getInverterDetail (Inverter Details)
- [x] getStationDay (Plant Daily Graph)
- [x] getStationMonth (Plant Monthly Graph)
- [x] getStationYear (Plant Yearly Graph)
