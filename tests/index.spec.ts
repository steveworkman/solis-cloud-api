import { test, beforeEach } from "node:test";
import assert from "node:assert";
import solisApi from "../src/index";

let api;
beforeEach(() => {
  api = solisApi("https://www.soliscloud.com:13333", "2424", "6680182547");
});

test("The app initialises", async (t) => {
  assert.ok(api);
});

// test("userStationList gets a station", async (t) => {
//   const stationList = await api.getUserStationList();
//   assert.ok(stationList.success);
// });
