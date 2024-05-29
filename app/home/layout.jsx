'use client'

import { useUser } from '@auth0/nextjs-auth0/client';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';




function layout(props) {
    const {error, isLoading, user} = useUser()
    if(!user){
      return (
        <div>Debes iniciar secion primero</div>
      )
    }
    console.log(user)
  return (
    <div>
      <div className='w-20 mx-auto'>
        <img src={user.picture} alt={user.nickname} />
        <p>{user.nickname}</p>
        <span>{user.email}</span>
      </div>
      {props.children}
      </div>
  )
}


export default withPageAuthRequired(layout)
