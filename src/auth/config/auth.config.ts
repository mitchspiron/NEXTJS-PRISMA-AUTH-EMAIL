import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  trustHost: true,

  // Default login page to redirect
  pages: {
    signIn: "/login",
  },

  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      // Checking if the user is logged in
      const isLoggedIn = !!auth?.user;

      // Determining if the user is currently on the dashboard
      const isOnDashboard = nextUrl.pathname.startsWith("/member");

      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false;
      } else if (isLoggedIn) {
        const isOnAuth =
          nextUrl.pathname === "/login" || nextUrl.pathname === "/signup";
        if (isOnAuth) return Response.redirect(new URL("/member", nextUrl));
        return true;
      }
      return true;
    },
  },

  providers: [],
} satisfies NextAuthConfig;
