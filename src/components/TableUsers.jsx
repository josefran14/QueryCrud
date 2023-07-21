import { Table, TableCell, TableContainer, TableHead, TableRow, TableBody } from "@mui/material"
import { useUsersData } from "../hooks/useUsersData"

export const TableUsers = () => {

    const {data, error, isError, isLoading} = useUsersData()

    if(isLoading){
        return <h2>Loading...</h2>
    }

    if(isError){
        return <h2>{error.message}</h2>
    }

  return (
    <>
      
    </>
  )
}
