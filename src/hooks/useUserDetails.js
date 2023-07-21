import axios from "axios"
import { useQuery } from "react-query"

export const useUserDetails = (userId) => {

    const fetchUser = () =>{
        return axios.get(`https://fake-api-spartan.herokuapp.com/users/${userId}`)
    }

  return useQuery(["users", userId], fetchUser)
}
