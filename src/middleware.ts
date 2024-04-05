export { default } from "next-auth/middleware";
// 未ログイン状態で以下のパスにアクセスした場合、ログイン画面へリダイレクト
export const config = {
  matcher: ["/mypage/:path*", "/create"],
};
