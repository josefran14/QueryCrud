import { Typography } from "@mui/material"
import { TableUsers } from "../components/TableUsers"

export const AppQueryCrud = () => {
  return (
    <>
      <Typography variant="h4" sx={{textAlign: "center"}}>Query Crud</Typography>
      <TableUsers/>
    </>
  )
}
