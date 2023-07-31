import { Form } from "../components/Form";
import { useAddUser } from "../hooks/useAddUser";

export const AddUserPage = () => {

  const {mutate: addUser} = useAddUser()

  const handleAddUser = (user) =>{
    addUser(user)
  }

  return (
    <Form title="Add New User" titleButton="Add User" onSubmit={handleAddUser} initialValue={{}}/>
  )
};
