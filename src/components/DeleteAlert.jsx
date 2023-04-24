import React from 'react'
import "./style/alertDelete.css"

const DeleteAlert = ({user,setAlertDeleteClose,AlertDeleteClose,deleteUserById}) => {

  const handleExitAlert = () => {
    setAlertDeleteClose(true)
       
  }
  const handleDelete = () => {
    deleteUserById(user.id);
    
}

  const handleExitAlertAcept = () => {
    setAlertDeleteClose(true)
    handleDelete()
  }


  return (
    <div className={`contain-Alert ${AlertDeleteClose && "contain-Alert_close"}`}>
        <div className='Alert'>
            <h4 className='titulo__alert'>Estas seguro que deseas eliminar el usuario?</h4>
            <div className='contain__btn'>
              <button className='btn__aceptar' onClick={handleExitAlertAcept} >Aceptar</button>
              <button className='btn__cancel' onClick={handleExitAlert}>Cancel</button>
            </div>
        </div>
    </div>
  )
}

export default DeleteAlert