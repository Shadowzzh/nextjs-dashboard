import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      /** 是否登录 */
      const isLoggedIn = !!auth?.user;
      /** 是否在仪表盘 */
      const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');

      if (isOnDashboard) {
        // 如果已登录，返回 true
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      }
      // 如果登录了，重定向到仪表盘
      else if (isLoggedIn) {
        return Response.redirect(new URL('/dashboard', nextUrl));
      }
      return true;
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;
