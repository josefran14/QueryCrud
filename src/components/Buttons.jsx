import { Box, Button } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import { useDeleteUser } from "../hooks/useDeleteUser";
import { useNavigate } from "react-router-dom";

export const Buttons = ({id}) => {

    const navigate = useNavigate()

    const {mutate: deleteUser} = useDeleteUser()

    const handleDeleteUser = () =>{
        deleteUser(id)
    }

    const handleNavigate = () =>{
        navigate(`/users/${id}`)
    }

    const handleNavigateEdit = () =>{
        navigate(`/edit/${id}`)
    }

  return (
    <Box sx={{display: "flex", justifyContent: "center", gap: "15px"}}>
        <Button onClick={handleDeleteUser} variant="contained" color="error"sx={{borderRadius: "12px"}}>
            <DeleteIcon/>
        </Button>
        <Button onClick={handleNavigate} variant="contained" color="secondary" sx={{borderRadius: "12px"}}>
            <VisibilityIcon/>
        </Button>
        <Button onClick={handleNavigateEdit} variant="contained" color="info" sx={{borderRadius: "12px"}} >
            <EditIcon/>
        </Button>
    </Box>
  )
}
