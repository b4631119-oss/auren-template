import createMiddleware from "next-intl/middleware"
import { routing } from "./i18n/routing"

export default createMiddleware(routing)

export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/_next` or `/_vercel`
  // - … the ones containing a dot (e.g. favicon.ico)
  // - … metadata image routes (no dot in the path)
  matcher: "/((?!api|trpc|_next|_vercel|opengraph-image|twitter-image|.*\\..*).*)",
}
