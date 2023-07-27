import { useParams } from "react-router-dom"
import { Form } from "../components/Form";
import { useUpdateUser } from "../hooks/useUpdateUser";
import { useUserDetails } from "../hooks/useUserDetails"

export const EditUserPage = () => {

  const {userId} = useParams()

  const id = Number(userId)
  
  const {data: userDetails, error, isError, isLoading} = useUserDetails(userId)
  const {mutate: updateUser} = useUpdateUser()

  const handleEditUser = (updateDataUser) => {
    updateUser({
      id,
      ...updateDataUser,
    });
  };

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  const { data } = userDetails;

  return (
    <Form title="Edit User" titleButton="Edit User" initialValue={data} onSubmit={handleEditUser}/>
  )
}
