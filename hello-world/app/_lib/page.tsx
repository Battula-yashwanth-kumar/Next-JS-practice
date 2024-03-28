import { League_Gothic } from "next/font/google"

export default function privatefiles(){
    return(
        <div> you can view this files</div>
    )
}

// For separating UI logic from routing Logic
// For consistently organizing internal files across a project
// For sorting and grouping files in code editors
// and finally, for avoiding potential naming conflicts with future Next.js file conventions
// If you want ot include an undersocre in URL segmemts, you can prefix the foldername with "%5F", which is the URL-endcoded form of an underscore