import { Button, Box } from "@mui/material"
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";

export const ButtonAdd = () => {

  const navigate = useNavigate();

  const handleNavigateToPageForm = () => {
    navigate("/form");
  };

  return (
    <Box
        sx={{
          width: "89%",
          display: "flex",
          justifyContent: "flex-end",
          marginLeft: "8px",
        }}
      >
        <Button
          onClick={handleNavigateToPageForm}
          variant="contained"
          color="primary"
          sx={{borderRadius: "12px"}}
        >
          <AddIcon />
        </Button>
      </Box>
  )
}
