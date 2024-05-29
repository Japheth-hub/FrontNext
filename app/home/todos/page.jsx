'use client'
import React from 'react'
import { useState, useEffect } from 'react'

function page() {
    
    const [users, setUsers] = useState([])
    const [todos, setTodos] = useState([])
    

    useEffect(()=>{
        async function getData(){
            const resUsers = await (await fetch('http://localhost:3005/users')).json()
            setUsers(resUsers)
            const resTodos = await (await fetch('http://localhost:3005/todos')).json()
            setTodos(resTodos)
        }
        getData()
    }, [])

   
    


  return (<div className='flex flex-wrap justify-center'>
    {
        users.map((user)=>(
            <div key={user.id} className='max-w-52 m-2'>
                <h3 className='text-center font-bold textShadow text-white'>{user.name}</h3>
                <ol className='list-decimal'>
                    {
                        todos
                        .filter((todo)=> todo.userId === user.id)
                        .map((todo)=>(
                                <li key={todo.id} className='text-sm'>{todo.title} <span>{todo.completed}</span></li>
                        ))
                    }
                </ol>
            </div>
        ))
    }
  </div>)
}


export default page