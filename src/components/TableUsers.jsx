import { Table, TableCell, TableContainer, TableHead, TableRow, TableBody, Box } from "@mui/material"
import { useUsersData } from "../hooks/useUsersData"
import { Buttons } from "./Buttons"

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
      <TableContainer sx={{ width: "100%", marginTop: "10px" }}>
        <Table size="small" aria-label="a dense table">
          <TableHead sx={{ width: "80%" }}>
            <TableRow>
              <TableCell sx={{color: "black"}}>N#</TableCell>
              <TableCell sx={{color: "black"}} align="center">Name</TableCell>
              <TableCell sx={{color: "black"}} align="center">Email</TableCell>
              <TableCell sx={{color: "black"}} align="right">Gender</TableCell>
              <TableCell sx={{color: "black"}} align="right">Username</TableCell>
              <TableCell sx={{color: "black"}} align="right">Website</TableCell>
              <TableCell sx={{color: "black"}} align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody sx={{ width: "80%" }}>
            {data?.data.map(
              ({ id, name, email, city, username, website }, index) => (
                <TableRow
                  key={id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell sx={{color: "black"}}>
                    {index + 1}
                  </TableCell>
                  <TableCell align="center" sx={{color: "black"}}>
                    {name}
                  </TableCell>
                  <TableCell sx={{color: "black"}} align="center">{email}</TableCell>
                  <TableCell sx={{color: "black"}} align="right">{city}</TableCell>
                  <TableCell sx={{color: "black"}} align="right">{username}</TableCell>
                  <TableCell sx={{color: "black"}} align="right">{website}</TableCell>
                  <TableCell sx={{color: "black"}} align="right">
                    <Buttons id={id}/>
                  </TableCell>
                </TableRow>

              )
              )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}
