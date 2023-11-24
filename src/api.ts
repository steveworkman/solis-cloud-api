import "isomorphic-fetch";

import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone.js";
import utc from "dayjs/plugin/utc.js";
import advancedFormat from "dayjs/plugin/advancedFormat.js";
import { createHash, createHmac } from "crypto";

dayjs.extend(advancedFormat);
dayjs.extend(utc);
dayjs.extend(timezone);

export async function generateHeaders(
  verb: "GET" | "POST",
  uri: string,
  payload: any,
  secret: string,
  key: string
) {
  const md5Payload = createHash("md5").update(payload).digest("base64");
  const date = dayjs().tz("GMT").format("ddd, D MMM YYYY HH:mm:ss [GMT]");
  const content = `${verb}\n${md5Payload}\napplication/json\n${date}\n${uri}`;
  const sign = createHmac("sha1",secret).update(content).digest("base64");
  const Authorization = `API ${key}:${sign}`;

  return {
    "Content-Type": "application/json",
    "Content-MD5": md5Payload,
    Date: date,
    Authorization,
  };
}

export async function makeAPICall(
  verb: "GET" | "POST",
  uri: string,
  payload: any,
  key: string,
  secret: string,
  baseUrl: string
): Promise<any> {
  payload = JSON.stringify(payload);
  const headers = await generateHeaders(verb, uri, payload, secret, key);
  const response = await fetch(baseUrl + uri, {
    method: verb,
    body: payload,
    headers,
  });
  return await response.json();
}
