import { useEffect, useState } from 'react';
import './App.css'
import userCrud from './hook/userCrud'
import UserCard from './components/UserCard';
import FormsUser from './components/FormsUser';
import DeleteAlert from './components/DeleteAlert';

function App() {

  const [updateInfo, setupdateInfo] = useState()
  const [formClose, setformClose] = useState(true)
  const [AlertDeleteClose, setAlertDeleteClose] = useState(true)

  const {
    users,
    getAllUser,
    createNewUser,
    deleteUserById,
    updateUserById
  } = userCrud();

  useEffect (() => {
    getAllUser()
  },[]);
  
  const handleOpenForm = () => {
    setformClose(false)
  }

 


  return (
    <div className="App">
      <header className='app_header'>
        <h1 className='app_title'>Users</h1>
        <button onClick={handleOpenForm} className='app_btn'>Create new user</button>
      </header>
      <FormsUser
        createNewUser={createNewUser}
        updateInfo={updateInfo}
        updateUserById={updateUserById}
        setupdateInfo={setupdateInfo}
        setformClose={setformClose}
        formClose={formClose}
        
      />
      <div className='app_user_container'>
        {
          users?.map(user => (
            <UserCard
              key={user.id}
              user={user}
              setupdateInfo={setupdateInfo}
              setformClose={setformClose}
              AlertDeleteClose={AlertDeleteClose}
              setAlertDeleteClose={setAlertDeleteClose}
              deleteUserById={deleteUserById}
            />
          ))
        }
      </div>
     { users?.map(user => (
        <DeleteAlert
          key={user.id}
          user={user}
          setAlertDeleteClose={setAlertDeleteClose}
          AlertDeleteClose={AlertDeleteClose}
          deleteUserById={deleteUserById}
        />
      ))}
    </div>
    
  )
}

export default App
