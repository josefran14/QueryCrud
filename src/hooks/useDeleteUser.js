import axios from "axios"
import { useMutation, useQueryClient } from "react-query"

export const useDeleteUser = () => {

    const deleteUser = (userId) =>{
        return axios.delete(`https://fake-api-spartan.herokuapp.com/users/${userId}`)
    }

    const queryClient = useQueryClient()

  return useMutation(deleteUser, {
    onSuccess: () =>{
        queryClient.invalidateQueries("users")
    }
  })
}
