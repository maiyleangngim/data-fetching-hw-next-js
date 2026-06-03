

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function proxy(request: NextRequest) {

    console.log("Welcome to proxy route");
    const token = request.cookies.get('access-token')?.value;
    const dashboardRoute = request.nextUrl.pathname.startsWith('/dashboard');
    const aboutRoute = request.nextUrl.pathname.startsWith('/about');

    if(!token && dashboardRoute || aboutRoute)
    {
          return NextResponse.redirect(new URL('/login', request.url))

    }
    return NextResponse .next();
}
 
// Alternatively, you can use a default export:
// export default function proxy(request: NextRequest) { ... }
 
export const config = {
  matcher:    '/((?!api|_next/static|_next/image|.*\\.png$).*)',


}