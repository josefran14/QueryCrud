import { Typography } from "@mui/material";
import { TableUsers } from "../components/TableUsers";
import { ButtonAdd } from "../components/ButtonAdd";
import { DeleteModal } from "../components/DeleteModal";
import { useModal } from "../hooks/useModal";

export const AppQueryCrud = () => {

  const {modal, handleCloseModal, handleOpenModal} = useModal()

  return (
    <>
      <Typography
        variant="h4"
        sx={{ textAlign: "center", fontFamily: "Open Sans" }}
      >
        Query Crud Of Francisco Saavedra 
      </Typography>

      <ButtonAdd/>
      
      <TableUsers handleOpenModal={handleOpenModal} modal={modal} handleCloseModal={handleCloseModal}/>

       <DeleteModal modal={modal} handleCloseModal={handleCloseModal}/>
    </>
  );
};
