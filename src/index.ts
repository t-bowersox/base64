export class Base64 {
  public static encode(utf8Str: string): string {
    return Buffer.from(utf8Str).toString("base64");
  }

  public static decode(base64Str: string): string {
    return Buffer.from(base64Str, "base64").toString("utf-8");
  }
}
