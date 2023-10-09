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
  };
}
