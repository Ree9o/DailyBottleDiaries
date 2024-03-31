import "next-auth";

declare module "next-auth" {
  /**
   * セッションとユーザーの型を拡張します。
   */
  interface Session {
    user?: {
      id?: string;
      name?: string;
      email?: string;
      image?: string;
    };
  }
}
