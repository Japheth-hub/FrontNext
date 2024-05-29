'use client'
import React from 'react'
import { useUser } from '@auth0/nextjs-auth0/client';



export default function page() {

    const {error, isLoading, user} = useUser()

    if (error) {
        return (
          <div>Error</div>
        );
      }
    
      if (isLoading) {
        return (
          <div>Loading ...</div>
        );
      }
    
      if (user) {
        console.log(user);
      }

  return (
    <div>  
        <a href="/api/auth/login">Login</a>
        <a href="/api/auth/logout">Logout</a>
    </div>
  )
}
