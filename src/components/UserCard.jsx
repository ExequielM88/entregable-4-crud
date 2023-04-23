import "./style/userCard.css"


const UserCard = ({user,deleteUserById,setupdateInfo}) => {
  
  const update = () => {
    setupdateInfo(user)
  }

  const handleDelete = () => {
    deleteUserById(user.id)
  }
  return (
    <article className='user'>
        <h2 className='user_name'>{user.first_name} {user.last_name}</h2>
        <ul className='user_list'>
          <li className='user_item'><span className='label'>Email: </span><span className='values'>{user.email}</span></li>
          <li className='user_item'><span className='label'>birthday: </span><span className='values'><i class='bx bx-gift'></i>{user.birthday}</span></li>
        </ul>
        <footer className='user_footer'>
          <button className='user_btn user_delete' onClick={handleDelete}><i className='bx bx-trash'></i></button>
          <button className='user_btn user_edit' onClick={update}><i className='bx bx-edit-alt'></i></button>
        </footer>
    </article>
  )
}

export default UserCard