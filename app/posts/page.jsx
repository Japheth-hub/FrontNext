'use client'
import Link from "next/link"
import { useState, useEffect } from "react"

export default function Posts() {

    let [posts, setPosts] = useState([])

    function deletePost(id){
        const filter = posts.filter((post)=> post.id !== id)
        setPosts(filter)
    }

    useEffect(()=>{
        async function getPosts(){
            const res = await fetch('https://jsonplaceholder.typicode.com/posts')
            const data = await res.json()
            setPosts(data)
        }
        getPosts()
    },[])

  return (
    <div>
        <Link href='/'><p>Home</p></Link>
        Posteos

        <div>
            {posts.map((post)=>(
                <p key={post.id}>{post.id} - <Link href={`/posts/${post.id}`}>{post.title}</Link> - <button onClick={()=>{deletePost(post.id)}}>x</button></p>
            ))}
        </div>

    </div>
  )
}
