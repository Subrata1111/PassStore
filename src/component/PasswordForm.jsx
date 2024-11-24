import React, {useEffect, useState } from 'react'
import './PasswordForm.scss'

const PasswordForm = ({onSavePassword, editPassword}) => {
  const [title, setTitle] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  useEffect(()=>{
    if(editPassword){
      setTitle(editPassword.title)
      setUsername(editPassword.username)
      setPassword(editPassword.password)
    }
  },[editPassword])

  const handleClick = (e)=> {
    e.preventDefault();
    onSavePassword({ title, username, password, id: editPassword?.id || null })
    setTitle("")
    setUsername("")
    setPassword("")
  }
  

  return (
   <>
      <div>
        <form>         
            <label>Enter Website Name</label>
            <input onChange={(e)=>setTitle(e.target.value)} value={title} type="text" name="website" id="website" required/>   
            <label>Enter UserName</label>
            <input onChange={(e)=>setUsername(e.target.value)} value={username} type="text" name="username" id="username" required/>      
            <label>Enter Password</label>
            <input onChange={(e)=>setPassword(e.target.value)} value={password} type="text" name="password" id="password" required />
            <button onClick={(e)=>handleClick(e)} type="submit">
              {
                editPassword? "Update Password": "Save Password"
              }
            </button>
          </form>
      </div>
   </>
  )
}

export default PasswordForm