import { Box, Button, Stack, Typography } from "@mui/material";
import { TableUsers } from "../components/TableUsers";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import logo from "../assets/reactjs.svg";

export const AppQueryCrud = () => {

  const navigate = useNavigate();

  const handleNavigateToPageForm = () => {
    navigate("/form");
  };

  return (
    <>
      <Typography
        variant="h4"
        sx={{ textAlign: "center", fontFamily: "Open Sans" }}
      >
        Query Crud Of Francisco Saavedra 
      </Typography>
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
      <TableUsers />
    </>
  );
};
