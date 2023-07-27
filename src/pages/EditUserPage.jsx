import { useParams } from "react-router-dom"
import { Form } from "../components/Form"
import { useUserDetails } from "../hooks/useUserDetails"

export const EditUserPage = () => {

  const {userId} = useParams()

  const {data: updateData, error, isError, isLoading} = useUserDetails(userId)

  if(isLoading){
    return <h2>Loading...</h2>
  }

  if(isError){
    return <h2>{error.message}</h2>
  }

  const {data} = updateData

  return (
    <Form title="Edit User" titleButton="Edit User" data={data} userId={userId}/>
  )
}
