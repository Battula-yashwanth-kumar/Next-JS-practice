"use client"
import {useRouter} from "next/navigation";

export default function Order(){
    const router=useRouter();
    const handleClick=()=>{
        console.log("Placing your order");
        router.push("/");
        // router.replace("/");
        // router.back();
        // router.forward();
    };
    return(
        <>
        <h1>Order Product</h1>
        <button onClick={handleClick}>PlaceOrder</button>
        </>
    )
}