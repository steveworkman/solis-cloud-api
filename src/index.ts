import { makeAPICall } from "./api.js";
import { config } from "dotenv";
import type {
  PowerStationDetails,
  SolisAPIResponse,
  UserStationListResponse,
} from "./types/apiResponse.js";
config();

export default function (baseUrl: string, key: string, secret: string) {
  return {
    getUserStationList: async (
      pageNo = 1,
      pageSize = 20,
      NmiCode?: string
    ): Promise<SolisAPIResponse<UserStationListResponse>> => {
      return await makeAPICall(
        "POST",
        "/v1/api/userStationList",
        { pageNo, pageSize, NmiCode },
        key,
        secret,
        baseUrl
      );
    },
    getStationDetail: async (
      id: string, // Power station ID
      nmiCode?: string // NMI code
    ): Promise<SolisAPIResponse<PowerStationDetails>> => {
      return await makeAPICall(
        "POST",
        "/v1/api/stationDetail",
        { id, nmiCode },
        key,
        secret,
        baseUrl
      );
    },
    getDataloggerList: async (
      stationId: string,
      pageNo = 1,
      pageSize = 20,
      NmiCode?: string
    ): Promise<SolisAPIResponse<any>> => {
      return await makeAPICall(
        "POST",
        "/v1/api/collectorList",
        { pageNo, pageSize, stationId, NmiCode },
        key,
        secret,
        baseUrl
      );
    },
    getDataloggerDetail: async (
      id: string,
      sn?: string
    ): Promise<SolisAPIResponse<any>> => {
      return await makeAPICall(
        "POST",
        "/v1/api/collectorDetail",
        { id, sn },
        key,
        secret,
        baseUrl
      );
    },
    getInverterList: async (
      stationId: string,
      pageNo = 1,
      pageSize = 20,
      NmiCode?: string
    ): Promise<SolisAPIResponse<any>> => {
      return await makeAPICall(
        "POST",
        "/v1/api/inverterList",
        { pageNo, pageSize, stationId, NmiCode },
        key,
        secret,
        baseUrl
      );
    },
    getInverterDetail: async (
      id: string,
      sn?: string
    ): Promise<SolisAPIResponse<any>> => {
      return await makeAPICall(
        "POST",
        "/v1/api/inverterDetail",
        { id, sn },
        key,
        secret,
        baseUrl
      );
    },
    getStationDay: async (
      id: string, // Power station ID
      money: string, // Currency code for monetary values
      date: string, // YYYY-MM-DD
      timeZone: number, // Appears to be the offset from UTC in hours
      nmiCode?: string
    ): Promise<SolisAPIResponse<any>> => {
      return await makeAPICall(
        "POST",
        "/v1/api/stationDay",
        { id, money, date, timeZone, nmiCode },
        key,
        secret,
        baseUrl
      );
    },
    getStationMonth: async (
      id: string, // Power station ID
      money: string, // Currency code for monetary values
      month: string, // Use YYYY-MM
      nmiCode?: string
    ): Promise<SolisAPIResponse<any>> => {
      return await makeAPICall(
        "POST",
        "/v1/api/stationMonth",
        { id, money, month, nmiCode },
        key,
        secret,
        baseUrl
      );
    },
    getStationYear: async (
      id: string, // Power station ID
      money: string, // Currency code for monetary values
      year: string, // Use YYYY
      nmiCode?: string
    ): Promise<SolisAPIResponse<any>> => {
      return await makeAPICall(
        "POST",
        "/v1/api/stationYear",
        { id, money, year, nmiCode },
        key,
        secret,
        baseUrl
      );
    },
    getStationAll: async (
      id: string, // Power station ID
      money: string, // Currency code for monetary values
      nmiCode?: string
    ): Promise<SolisAPIResponse<any>> => {
      return await makeAPICall(
        "POST",
        "/v1/api/stationAll",
        { id, money, nmiCode },
        key,
        secret,
        baseUrl
      );
    },
    getInverterDay: async (
      money: string, // Currency code for monetary values
      date: string, // YYYY-MM-DD
      timeZone: number, // Appears to be the offset from UTC in hours
      id?: string, // Inverter ID
      sn?: string, // Inverter Serial number
      nmiCode?: string
    ): Promise<SolisAPIResponse<any>> => {
      return await makeAPICall(
        "POST",
        "/v1/api/inverterDay",
        { id, sn, money, date, timeZone, nmiCode },
        key,
        secret,
        baseUrl
      );
    },
    getInverterMonth: async (
      money: string, // Currency code for monetary values
      month: string, // Use YYYY-MM
      id?: string, // Inverter ID
      sn?: string, // Inverter Serial number
      nmiCode?: string
    ): Promise<SolisAPIResponse<any>> => {
      return await makeAPICall(
        "POST",
        "/v1/api/inverterMonth",
        { id, sn, money, month, nmiCode },
        key,
        secret,
        baseUrl
      );
    },
    getInverterYear: async (
      money: string, // Currency code for monetary values
      year: string, // Use YYYY
      id?: string, // Inverter ID
      sn?: string, // Inverter Serial number
      nmiCode?: string
    ): Promise<SolisAPIResponse<any>> => {
      return await makeAPICall(
        "POST",
        "/v1/api/inverterYear",
        { id, sn, money, year, nmiCode },
        key,
        secret,
        baseUrl
      );
    },
    getInverterAll: async (
      money: string, // Currency code for monetary values
      id?: string, // Inverter ID
      sn?: string, // Inverter Serial number
      nmiCode?: string
    ): Promise<SolisAPIResponse<any>> => {
      return await makeAPICall(
        "POST",
        "/v1/api/inverterAll",
        { id, sn, money, nmiCode },
        key,
        secret,
        baseUrl
      );
    },
  };
}
