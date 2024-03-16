import Link from "next/link"
import { Suspense } from "react"
import User from '../../users/page'

async function getUser(id){
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  const data = await res.json()
  return data
}

export default async function userId(props) {
    const {id} = props.params
        
    const user = await getUser(id)
  


  return (
    <div>
        <Link href='/posts'><button>Posts</button></Link>
        <h3>{user.title}</h3>
        <p>{user.body}</p>

        <hr />

        <Suspense fallback={<div><h1>Cragando usuarios.....</h1></div>}>
          <User></User>
        </Suspense>
    </div>
  )
}
