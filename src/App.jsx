import { useEffect, useState } from 'react'
import PasswordForm from './component/PasswordForm'
import PasswordList from './component/PasswordList'
import Header from './component/Header' 

function App() {
  const [passwords,setPasswords]= useState([])
  const [editPassword,setEditPassword]= useState(null)
  // console.log(passwords);
  
  useEffect(()=>{
    const storedPasswords = JSON.parse(localStorage.getItem('passwords')) || [];
    setPasswords(storedPasswords)
  },[])

  useEffect(()=>{
    localStorage.setItem("passwords", JSON.stringify(passwords))
  },[passwords])

  const handleSavePassword= (password)=>{
    console.log("Edit password ", password)
    if(editPassword){
      
      setPasswords(passwords.map(p => ( p.id === editPassword.id ? password: p)))
      setEditPassword(null)

    }else{
      setPasswords([...passwords, {...password, id: Date.now()}])

    }
  }

  const handleDeletePassword = (id)=>{
    setPasswords(passwords.filter((p)=>( p.id !== id)))
  }

  return (
    <>
      <Header />
      <PasswordForm onSavePassword={handleSavePassword} editPassword={editPassword} />
      <PasswordList passwords ={passwords} onDelete={handleDeletePassword} onEdit={setEditPassword}/>
    </>
  )
}
export default App
