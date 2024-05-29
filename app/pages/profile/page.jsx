'use client'
import React from 'react'
import {useEffect} from 'react'
import { useRouter } from 'next/navigation';
import { withPageAuthRequired, useUser } from '@auth0/nextjs-auth0/client';



function profile() {

   const {error, isLoading, user} = useUser()
   console.log(user)

   if(error){
    return (
        <div>Error</div>
    )
   }

   if(isLoading){
    return (
        <div>Loading...</div>
    )
   }

   if(user){
       return (
         <div>
             <img src={user.picture} alt="" />
                 <h2>Bienvenido {user.nickname}</h2>
     
         <hr />
         </div>
       )

   }

}

export default withPageAuthRequired(profile)