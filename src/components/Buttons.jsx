import { Box, Button } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';

export const Buttons = () => {
  return (
    <Box sx={{display: "flex", justifyContent: "center", gap: "15px"}}>
        <Button variant="contained" color="error">
            <DeleteIcon/>
        </Button>
        <Button variant="contained" color="warning">
            <VisibilityIcon/>
        </Button>
        <Button variant="contained" color="primary">
            <EditIcon/>
        </Button>
    </Box>
  )
}
