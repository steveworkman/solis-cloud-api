import md5 from "md5";
import {
  arrayToBase64,
  hexStringToArray,
  getKeyArray,
  arrayToB64String,
} from "./auth-utils.js";
import { webcrypto } from "node:crypto"; // Needed for Node 16

const { subtle } =
  process.versions.node.split(".").map(Number)[0] >= 20
    ? globalThis.crypto // Node 20+
    : webcrypto;

export function md5InBase64(content: string): string {
  return arrayToBase64(
    Array.from(new Uint8Array(hexStringToArray(md5(content))))
  );
}

export async function convertKeyForHmac(
  secret: string
): Promise<webcrypto.CryptoKey> {
  let keyArray = await getKeyArray({
    keyvalue: secret,
    coding: "utf-8",
  });
  return subtle.importKey(
    "raw", // raw format of the key - should be Uint8Array
    keyArray,
    {
      // algorithm details
      name: "HMAC",
      hash: "SHA-1",
    },
    false, // export = false
    ["sign", "verify"] // what this key can do
  );
}

export const signContent = async (
  content: any,
  secret: string
): Promise<string> => {
  const utf8Encoder = new TextEncoder();
  const message = utf8Encoder.encode(
    content.replace(new RegExp("(\r\n|\n)", "g"), "\n")
  );
  const hmacKey = await convertKeyForHmac(secret);
  const resBuffer = await subtle.sign("HMAC", hmacKey, message);
  const hashArray = Array.from(new Uint8Array(resBuffer));
  return arrayToB64String(hashArray);
};
