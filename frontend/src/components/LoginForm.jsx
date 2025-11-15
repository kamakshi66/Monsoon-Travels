import React ,{useState}from 'react'

import axios from 'axios'

const LoginForm = ({onLogin}) => {
    const [form,setFrom] = useState({
        username:'',password:''
    })
    const[message,setMessage] = useState('')

    const handleChange = (e)=>{
        setFrom({...form,[e.target.name]: e.target.value})

    }

    
const handleSubmit = async(e)=>{
    e.preventDefault()
    try{
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/login/`,form)
        setMessage("login sucessful")

        if(onLogin){
            onLogin(response.data.token, response.data.user_id)
        }
    }catch(error){
        setMessage("Login failed")
    }
}

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
            <label>Username</label>
            <input type="text" name ='username' value={form.username} onChange={handleChange}/><br/>
        
            <label>password</label>
            <input type="password" name ='password' value={form.password} onChange={handleChange}/><br/>
            <button type = 'submit'>Login</button>
          {message && <p>{message}</p>}
        </div>
      </form>
    </div>
  )
}

export default LoginForm
