import axios from "axios"
import { useQuery, useQueryClient } from "react-query"

export const useUserDetails = (userId) => {

    const fetchUser = () =>{
        return axios.get(`https://fake-api-spartan.herokuapp.com/users/${userId}`)
    }

    const queryClient = useQueryClient()

    const user = queryClient.getQueryData("users")

    console.log(user?.data)

  return useQuery(["users", userId], fetchUser, {
    initialData: () => {
      const user = queryClient?.getQueryData("users")?.data?.find((user) => user.id === parseInt(userId));
      if(user){
        return{
          data: user
        }
      }else{
        return undefined
      }
    }
  })
}
