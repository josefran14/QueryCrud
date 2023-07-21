import { Box, Button, Typography } from "@mui/material"
import { TableUsers } from "../components/TableUsers"
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from "react-router-dom";

export const AppQueryCrud = () => {

  const navigate = useNavigate()

  const handleNavigateToPageForm = () =>{
    navigate("/form")
  }

  return (
    <>
      <Typography variant="h4" sx={{textAlign: "center"}}>Query Crud</Typography>
      <Box sx={{width: "89%", display: "flex", justifyContent: "flex-end", marginLeft: "8px"}}>
        <Button onClick={handleNavigateToPageForm} variant="contained" color="primary">
              <AddIcon/>
          </Button>
      </Box>
      <TableUsers/>
    </>
  )
}
