import { makeAPICall } from "./api.js";
import { config } from "dotenv";
import type { UserStationListResponse } from "./types/apiResponse.js";
config();

const userStationList = {
  verb: "POST",
  uri: "/v1/api/userStationList",
} as {
  verb: "POST" | "GET";
  uri: string;
};

export default function (baseUrl: string, key: string, secret: string) {
  return {
    getUserStationList: async (
      pageNo = 1,
      pageSize = 20,
      NmiCode: string
    ): Promise<UserStationListResponse> => {
      return await makeAPICall(
        userStationList.verb,
        userStationList.uri,
        { pageNo, pageSize, NmiCode },
        key,
        secret,
        baseUrl
      );
    },
  };
}
