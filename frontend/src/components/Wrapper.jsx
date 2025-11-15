import React from 'react'
import { Link } from 'react-router-dom'

const Wrapper = ({token,handleLogout,children}) => {

    const logout =()=>{
        handleLogout()
    }

  return (
    <div>
      {token ? (
       
       <button onClick={logout}>logout</button>
       

      ):
      <Link to ="/login"> 
      <button>login</button>
      </Link>
        }
      <main>{children}</main>
        </div>
   
  )
}

export default Wrapper
