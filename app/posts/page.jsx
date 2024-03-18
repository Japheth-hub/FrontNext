'use client'
import Link from "next/link"
import { useState, useEffect } from "react"
import '@/Style/postPage.css'


export default function Posts() {

    const [posts, setPosts] = useState([])
    const [users, setUsers] = useState([])
    const [user, setUser] = useState('0')

    async function handleUser(e){
        const user = e.target.value
        if(e.target.value === 'todos'){
            const res = await fetch('http://localhost:3005/posts')
            const todos = await res.json()
            setPosts(todos)
            setUser('0')
            return
        }
        const res = await fetch(`http://localhost:3005/posts/all/${user}`) 
        const postUser = await res.json()
        setPosts(postUser)
        setUser(user)
    }

    useEffect(()=>{
        async function getData() {
            const resposts = await fetch('http://localhost:3005/posts')
            const posteos = await resposts.json()
            const resUsers = await fetch('http://localhost:3005/users')
            const usuarios = await resUsers.json()
            return {posteos, usuarios}
        }
        
        async function setData(){
            const {posteos, usuarios} = await getData()
            setPosts(posteos)
            setUsers(usuarios)
        }
        setData()
    }, [])


    return (
        <div>

            <div className="flex m-4 justify-center items-center">
                <h2 className="text-center font-bold text-4xl mr-8">Posteos</h2>

                <select className={`text-black border font-bold rounded-lg px-2 postUser${user}`} name="Users" defaultValue='todos' onChange={handleUser}>
                    <option value='todos'>Todos los Posts</option>
                    {users.map((user) => (
                        <option key={user.id} value={user.id}>{user.name}</option>
                    ))}
                </select>
            </div>

                        <hr />

            <div className="grid grid-cols-3 gap-2 p-2 items-center mt-3">
                {posts && posts.map((post) => (
                    <Link key={post.id} href={`/posts/${post.id}`}><div className={`p-2 border-4 rounded-lg flex flex-col border-black border-dotted postUser${post.userId}`}>
                        <h4 className="text-center text-lg font-bold ">{post.title.toUpperCase()}</h4>
                        <span className="textShadow text-end text-white font-bold m-3">{users.find((user) => user.id === post.userId).name}</span>
                        <p className="text-center">{post.body}</p>
                    </div></Link>
                ))}
            </div>
        </div>
    )
}
