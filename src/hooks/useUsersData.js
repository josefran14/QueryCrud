import axios from "axios"
import { useQuery } from "react-query"

export const useUsersData = () => {

    const fetchUsers = () =>{
        return axios.get("https://fake-api-spartan.herokuapp.com/users")
    }

  return useQuery("users", fetchUsers)
}
