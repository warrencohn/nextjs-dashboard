// import type { NextAuthConfig } from "next-auth";

// export const authConfig: NextAuthConfig = {
//   pages: {
//     signIn: "/login",
//   },
//   callbacks: {
//     authorized({ auth, request: { nextUrl } }) {
//       const isLoggedIn = !!auth?.user;
//       const isOnDashboard = nextUrl.pathname.startsWith("/dashboard");

//       if (isOnDashboard) {
//         return isLoggedIn; // Allow or deny based on login status
//       } else if (isLoggedIn) {
//         // Here you should handle redirection in your app logic or middleware, not directly in the callback
//         return true; // Normally, you'd handle redirection elsewhere
//       }
//       return true; // By default, allow access
//     },
//   },
//   providers: [], // Add providers with an empty array for now
// };
import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith("/dashboard");
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        return Response.redirect(new URL("/dashboard", nextUrl));
      }
      return true;
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;