import { withAuth } from "next-auth/middleware"

export default withAuth(
    function middleware(req) {},
    {
      pages: {
        signIn: "/api/auth/signin", // redirect do loginu
      },
      callbacks: {
        authorized: ({ token, req }) => {
          if (req.nextUrl.pathname === "/") return true // home public
          return !!token
        },
      },
    }
)

export const config = {
  matcher: ["/((?!api/auth|_next|favicon.ico).*)"], // chroni wszystkie strony oprócz /api i static
}