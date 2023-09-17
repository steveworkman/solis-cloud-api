import { makeAPICall } from "./api.js";
import { config } from "dotenv";
config();

const BASEURL = process.env.BASEURL;
const SECRET = process.env.SECRET;
const KEY = process.env.KEY;

async function tryApi() {
  const response = await makeAPICall(
    "POST",
    "/v1/api/userStationList",
    '{"pageNo":1,"pageSize":10}',
    KEY,
    SECRET,
    BASEURL
  );
  console.log(await response);
}

tryApi();
