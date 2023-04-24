import axios from "axios";
import { useState } from "react"

const userCrud = () => {
  const [users, setusers] = useState();

  const url = "https://users-crud.academlo.tech/users/";

  //get
  const getAllUser = () => {
    axios.get(url)
      .then(res => setusers(res.data))
      .catch(err => console.log(err))
  }
  //post
  
  const createNewUser = (data) => {
    axios.post(url,data)
      .then(res => getAllUser())
      .catch(err => console.log(err))
  }
  //delete

  const deleteUserById = id => {

    const deleteUrl = `${url}${id}/`
    axios.delete(deleteUrl)
      .then(() => getAllUser())
      .catch(err => console.log(err))
    
  }

  //update

  const updateUserById = (id,data) => {
    const urlUpdate = `${url}${id}/`;
    axios.patch(urlUpdate,data)
      .then(() => getAllUser())
      .catch(err => console.log(err))
  }

  return {
    users,
    getAllUser,
    createNewUser,
    deleteUserById,
    updateUserById,
  }
}

export default userCrud