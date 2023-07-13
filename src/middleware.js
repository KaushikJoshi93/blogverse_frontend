import { NextResponse } from 'next/server'

// This function can be marked `async` if using `await` inside
export async function middleware(request) {

  const hasUser = request.cookies.has("blogverse_user");
  
  if (hasUser) {
    const user = JSON.parse(request.cookies.get("blogverse_user").value);
    console.log(user)
    if (request.nextUrl.pathname.startsWith("/admin") && user.role !== "admin") {
      return NextResponse.redirect(new URL('/', request.url))
    }
    else if (request.nextUrl.pathname.startsWith("/admin") && user.role === "admin"){
      return NextResponse.next();
    }
    else {
      return NextResponse.redirect(new URL('/', request.url))
    }
  } else {
    if (request.nextUrl.pathname.startsWith("/admin")) {
      return NextResponse.redirect(new URL('/', request.url))
    }
  }

  return NextResponse.next();
}

// return NextResponse.redirect(new URL('/home', request.url))


// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/login/:path*', '/register/:path*', '/admin/:path*'],
}