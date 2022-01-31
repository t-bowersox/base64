import { Base64 } from "./index";

describe("Base64", () => {
  const str = "foobar";
  const strBase64 = Buffer.from(str).toString("base64");

  test("encodes a utf-8 string as base64", () => {
    expect(Base64.encode(str)).toEqual(strBase64);
  });

  test("decodes a base64 string as utf-8", () => {
    expect(Base64.decode(strBase64)).toEqual(str);
  });
});
