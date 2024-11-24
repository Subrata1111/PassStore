import './PasswordList.scss'

const PasswordList = ({passwords, onDelete, onEdit}) => {  
   console.log("THis ", passwords)
  return (
   <>
      <div className='outer-container'>
         <h4>Password List</h4>
         <div className="container">
            <div className="list">
               <p>Id</p>
               <p>Website name</p>
               <p>Username</p>
               <p>Password</p>
               <p>Action</p>
            </div>
            {
               passwords && passwords.map((p) => (
                  <div className="list" key={p.id}>
                    <p>{p.id}</p>
                    <p>{p.title}</p>
                    <p>{p.username}</p>
                    <p>{p.password}</p>
                    <div>
                      <button id="edit" onClick={() => onEdit(p)}>Edit</button>  
                      <button id="delete" onClick={() => onDelete(p.id)}>Delete</button>
                    </div>
                  </div>
                ))
            }
            </div>  
      </div>
   </>
  )
}

export default PasswordList