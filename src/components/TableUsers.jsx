import { Table, TableCell, TableContainer, TableHead, TableRow, TableBody } from "@mui/material"
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
      <TableContainer sx={{ width: "100%", marginTop: "50px" }}>
        <Table size="small" aria-label="a dense table">
          <TableHead sx={{ width: "80%" }}>
            <TableRow>
              <TableCell>N#</TableCell>
              <TableCell>Name</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="right">Gender</TableCell>
              <TableCell align="right">Username</TableCell>
              <TableCell align="right">Website</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody sx={{ width: "80%" }}>
            {data?.data.map(
              ({ id, name, email, city, username, website }, index) => (
                <TableRow
                  key={id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {index + 1}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {name}
                  </TableCell>
                  <TableCell align="center">{email}</TableCell>
                  <TableCell align="right">{city}</TableCell>
                  <TableCell align="right">{username}</TableCell>
                  <TableCell align="right">{website}</TableCell>
                  <TableCell align="right">
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
