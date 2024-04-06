import {NextResponse, type NextRequest} from "next/server";

export function middleware(request: NextRequest){
   // using if else statement
    const response=NextResponse.next();
    const themePrefernece =request.cookies.get("theme");
    if(!themePrefernece){
        response.cookies.set("theme","dark");
    }
    response.headers.set("custom-header","custom-value");

    return response;

    // using config
    // if(request.nextUrl.pathname==='/profile'){
    //     // return NextResponse.redirect(new URL("/hello",request.url));
    //     return NextResponse.rewrite(new URL("/hello",request.url));
    // }
    // return NextResponse.redirect(new URL("/",request.url));
}

// export const config={
//     matcher:'/profile',
// };