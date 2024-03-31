import Card from "@/app/components/card";
import Link from "next/link";
export default function ArchivedNotifications(){
    return(
        <Card>
            <div>Archived Notification</div>
            <Link href="/Dashboard">Default</Link>
        </Card>
    )
}