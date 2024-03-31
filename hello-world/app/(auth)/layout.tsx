"use client"
import Link from "next/link";
import  {usePathname} from "next/navigation";
import "./style.css";
import { useState } from "react";

const navLink=[
    {name:"Register",href:"/Register"},
    {name:"Login",href:"/Login"},
    {name:"Forgot Password",href:"/ForgotPassword"},

];

export default function AuthLayout({
    children,
}:{
    children:React.ReactNode;

}){
    const pathname=usePathname();
    const [input, setInput]=useState("");
    return(
        <div>
            <div>
                <input type="text" value ={input} onChange={(e)=>setInput(e.target.value)}/>
            </div>
        <div>
            {
                navLink.map((link)=>{
                    const isActive=pathname.startsWith(link.href);
                    return(
                        <Link href={link.href} key={link.name}
                        className={isActive?"font-bold mr-4":"text-blue-500 mr-4"}
                        >
                            {link.name}
                        </Link>
                    )
                })
            }
        </div>
        </div>
    )
}


// Rename the layout.tsx to template.tsx and observe changes it will not preserve the state
