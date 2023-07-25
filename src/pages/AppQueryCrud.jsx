import { Typography } from "@mui/material";
import { TableUsers } from "../components/TableUsers";
import { ButtonAdd } from "../components/ButtonAdd";

export const AppQueryCrud = () => {

  return (
    <>
      <Typography
        variant="h4"
        sx={{ textAlign: "center", fontFamily: "Open Sans" }}
      >
        Query Crud Of Francisco Saavedra 
      </Typography>

      <ButtonAdd/>
      
      <TableUsers />
    </>
  );
};
