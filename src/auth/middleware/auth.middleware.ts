import NextAuth from "next-auth";
import { authConfig } from "../config/auth.config";

export default NextAuth(authConfig).auth;

export const config = {
  // Defining a matcher to specify routes where the middleware should be applied
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
