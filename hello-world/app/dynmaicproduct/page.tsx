import Link from "next/link"
export default function Product(){
  const productId=100;
    return(
      <>
      <Link href='/'>Home</Link>
      <h1>Product List</h1>
      <Link href="products/1">Product1</Link>
      <Link href="products/2">Product2</Link>
      <Link href="products/3" replace>Product3</Link>
      <Link href={`products/${productId}`}>Product {productId}</Link>

{/* replace keyword ---> It is used to replace the history with this new URL, for example  whenyou clicked on the link which has replace and when you clikced on back button in browser then you will directly navigated to home becase it completely removes history of url in the stack */}
      </>  
    )
} 