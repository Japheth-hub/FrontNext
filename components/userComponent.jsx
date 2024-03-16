'use client'

export default function User({user}) {

  return (<>
    <li>{user.name} - <i>{user.email}</i> <button onClick={()=>{alert(user.phone)}}>Phone</button></li>
  </>
  )
}
