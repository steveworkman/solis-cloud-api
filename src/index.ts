import { makeAPICall } from "./api.js";
import { config } from "dotenv";
import type {
  PowerStationDetails,
  SolisAPIResponse,
  UserStationListResponse,
} from "./types/apiResponse.js";
config();

export type APIURIConfig = {
  verb: "POST" | "GET";
  uri: string;
};

const userStationList: APIURIConfig = {
  verb: "POST",
  uri: "/v1/api/userStationList",
};
const stationDetail: APIURIConfig = {
  verb: "POST",
  uri: "/v1/api/stationDetail",
};

export default function (baseUrl: string, key: string, secret: string) {
  return {
    getUserStationList: async (
      pageNo = 1,
      pageSize = 20,
      NmiCode?: string
    ): Promise<SolisAPIResponse<UserStationListResponse>> => {
      return await makeAPICall(
        userStationList.verb,
        userStationList.uri,
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
        stationDetail.verb,
        stationDetail.uri,
        { id, nmiCode },
        key,
        secret,
        baseUrl
      );
    },
  };
}
