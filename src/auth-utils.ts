// These Utils translated to TS from https://dinochiesa.github.io/hmachash/index.html

type EncodingOption = "utf-8" | "hex" | "base64";

/**
 * Turns a hex string into an array buffer
 * @param hex hexadecimal string
 * @returns the hex string as an array buffer
 */
export function hexStringToArray(hex: string): ArrayBufferLike {
  // convert hex string to bytes
  let bytes: Array<number> = [];
  for (let c = 0; c < hex.length; c += 2) {
    bytes.push(parseInt(hex.substr(c, 2), 16));
  }

  return new Uint8Array(bytes).buffer;
}

/**
 * Turns a base64 string into an array buffer
 * @param str base64 string
 * @returns the base64 string as an array buffer
 */
export function b64StringToArray(str: string): Array<number> {
  return atob(str)
    .split("")
    .map(function (c) {
      return c.charCodeAt(0);
    });
}

/**
 * Turns an array of bytes into a base64 string
 * @param bytes Array of bytes
 * @returns base64 string
 */
export function arrayToBase64(bytes: Array<number>): string {
  let binary = "";
  var len = bytes.length;
  for (var i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}

export function strToArray(
  value: string,
  coding: EncodingOption
): Uint8Array | ArrayBufferLike | number[] {
  const utf8Encoder = new TextEncoder();
  if (coding == "utf-8") {
    return utf8Encoder.encode(value);
  }
  if (coding == "hex") {
    return hexStringToArray(value);
  }
  if (coding == "base64") {
    return b64StringToArray(value);
  }
  throw new Error("unsupported key encoding: " + coding);
}

export function arrayToB64String(u8: number[]): string {
  return btoa(String.fromCharCode.apply(null, u8));
}

export async function getKeyArray(options: {
  keyvalue: string;
  coding: EncodingOption;
}) {
  // returns a Promise which will be fulfilled with a Uint8Array containing the key.
  const knownCodecs = ["utf-8", "base64", "hex"];

  if (knownCodecs.indexOf(options.coding) >= 0) {
    let b = null;
    try {
      b = strToArray(options.keyvalue, options.coding);
    } catch (e) {
      console.log(e);
      // bad coding: either bad length, invalid chars for the given coding, etc.
      b = [];
    }
    return Promise.resolve(new Uint8Array(b));
  }

  throw new Error("unknown key encoding: " + options.coding); // will not happen
}
