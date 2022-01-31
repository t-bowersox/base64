export class Base64 {
  /**
   * Encodes a UTF-8 string as Base64.
   * @param utf8Str The UTF-8 string to encode.
   * @returns Base64-encoded string.
   */
  public static encode(utf8Str: string): string {
    return Buffer.from(utf8Str).toString("base64");
  }

  /**
   * Decodes a Base64 string as UTF-8.
   * @param base64Str The Base64 string to decode.
   * @returns UTF-8-encoded string.
   */
  public static decode(base64Str: string): string {
    return Buffer.from(base64Str, "base64").toString("utf-8");
  }
}
