import axios from "axios"
import { useMutation, useQuery, useQueryClient } from "react-query"

export const useUpdateUser = () => {

    const editUser = async(userId, newData) =>{
        try {
            const response = axios.put(`https://fake-api-spartan.herokuapp.com/users/${userId}`, newData)
            return response.data
        } catch (error) {
            console.log(error)
        }
    }

    const mutation = useMutation(editUser, {
        onSuccess: () =>{
            console.log("Success")
        }
    })

  return mutation
}
