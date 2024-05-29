import Link from "next/link"
import User from "@/components/userComponent"


async function getUsers(){
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()
    await new Promise((resolve) => setTimeout(resolve, 5000))
    return data
}

export default async function Users() {
   

    const users = await getUsers()

  return (
    <div>
        <Link href='/'><p>Home</p></Link>
        
        <h2>Users</h2>
        <ul>
            {
                users.map((user)=>(
                    <User user={user} key={user.id}/>
                ))
            }
        </ul>
    </div>
  )
}
