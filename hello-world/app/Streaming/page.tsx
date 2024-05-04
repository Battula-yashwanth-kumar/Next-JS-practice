import { Suspense } from "react";
import { Product } from "../components/Product";
import { Review } from "../components/Review";

export default function Streaming(){
    return (
        <div>
            <h1>Product Details</h1>
            <Suspense fallback={<p>Loading Product</p>}>
                <Product />
            </Suspense>
            <Suspense fallback={<p>Laoding Review</p>}>
                <Review />
            </Suspense>

        </div>
    )
}