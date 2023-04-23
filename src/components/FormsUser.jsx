import React, { useEffect } from 'react'
import "./style/formsUser.css"
import { useForm } from 'react-hook-form'
import defaultValues from '../utils/defaultValues'


const FormsUser = ({createNewUser,updateInfo,updateUserById,setupdateInfo,setformClose,formClose}) => {

  const {register , handleSubmit, reset} = useForm()

  useEffect(() => {
    reset(updateInfo) 
  
  }, [updateInfo])

  const submit = (data) => {
    if(updateInfo){
      updateUserById(updateInfo.id,data)
      setupdateInfo={setupdateInfo}
    }else{
      createNewUser(data)
    }
    reset(defaultValues)
  }
  
  const handleExit = () => {
    setformClose(true)
  }
  return (
    <div className={`form_container ${formClose && "form_close"}`}>
      <form className='form' onSubmit={handleSubmit(submit)}>
        <h2 className='form_title'>{updateInfo? "Update" : "Create a new user"}</h2>
        <span className='form_exit'  onClick={handleExit}>x</span>
        <div className='forms_item'> 
          <label className='forms_label'   htmlFor="email">Email</label>
          <input className='forms_input' {...register   ("email")} type="email" id='email' />
        </div>
        <div className='forms_item'>  
          <label className='forms_label'    htmlFor="password">Password</label>
          <input className='forms_input' {...register   ("password")} type="password" id='password'/>
        </div> 
        <div className='forms_item'> 
          <label className='forms_label'   htmlFor="first_name">Name</label>
          <input className='forms_input' {...register   ("first_name")} type="text" id="first_name"/>
        </div> 
        <div className='forms_item'>
          <label className='forms_label'   htmlFor="last_name" >Last Name</label>
          <input className='forms_input' {...register   ("last_name")} type="text"   id="last_last_name"/>
        </div>
        <div className='forms_item'>
          <label className='forms_label'   htmlFor="birthday">Birthday</label>
          <input className='forms_input' {...register   ("birthday")} type="date" id='birthday' />
        </div>
        <button className='form_btn'>{updateInfo ?   "Update" : "Create"}</button> 
      </form>
    </div>
  )
}

export default FormsUser