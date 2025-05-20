"use client"
import { trpc } from "@/trpc/client/Provider";



type Props = {}

const Test:React.FC<Props> = () => {
    const {data} = trpc.users.getUsers.useQuery(3);
    
    
    return (
        <>
            data: <strong>{JSON.stringify(data)}</strong>
        </>
    )
}

export default Test