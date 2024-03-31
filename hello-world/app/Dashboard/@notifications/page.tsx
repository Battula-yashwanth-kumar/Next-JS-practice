
import Card from "@/app/components/card";
import Link from "next/link";
export default function Notifications(){
    return(
        <Card>
            <div>Archived Notification</div>
            <Link href="/Dashboard/archived">Archived</Link>
        </Card>
    )
}