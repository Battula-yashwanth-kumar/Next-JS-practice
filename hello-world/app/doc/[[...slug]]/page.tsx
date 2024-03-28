// for opitional routing so that 404 page will not be seen even if you type only doc in  url

export default function Docs({
    params,
}:{
    params:{
        slug:string[];
    };
}){
    if(params.slug?.length===2){
        return(
            <h1>Viewing  docs for feature {params.slug[0]} and concept {params.slug[1]}</h1>
        );
    }
    else if(params.slug?.length===1){
        return <h1>Viewing docs for feature {params.slug[0]}</h1>
    }
    return(
        <div>Docs Home Page</div>
    )
}

