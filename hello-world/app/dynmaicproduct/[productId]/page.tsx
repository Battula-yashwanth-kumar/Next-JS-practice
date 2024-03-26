export default function ProductDetails({params}:{params:{productId:string}}){
    return(
        <div>Deatils about product{params.productId}</div>
    )
}