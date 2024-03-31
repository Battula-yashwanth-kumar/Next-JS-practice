import {Metadata} from 'next';

type Props={
    params:{
        productId: string;
    }
}

export const generateMetadata=async({
    params,
}:Props): Promise<Metadata>=>{
const title=await new Promise((resolve)=>{
    setTimeout(()=>{
        resolve(`IPhone ${params.productId}`);

    },100);
});
return {
    title:`Product ${title}`
};
};



export default function ProductDetails({params}:{params:{productId:string}}){
    return(
        <div>Deatils about product{params.productId}</div>
    )
}