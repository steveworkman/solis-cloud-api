import { test, beforeEach } from "node:test";
import assert from "node:assert";
import solisApi from "../dist/index.js";
import { config } from "dotenv";
config();

let api = null;
beforeEach(() => {
  api = solisApi(process.env.BASEURL, process.env.KEY, process.env.SECRET);
});

test("The app initialises", async (t) => {
  assert.ok(api);
});

test("userStationList gets a station", async (t) => {
  const stationList = await api.getUserStationList();
  assert.ok(stationList.success);
});
