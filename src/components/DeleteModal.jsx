import { Box, Button, Modal, Typography } from "@mui/material";
import { useModal } from "../hooks/useModal";
import { useUserDetails } from "../hooks/useUserDetails";

export const DeleteModal = ({ modal, handleCloseModal}) => {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };

    return(
      <Modal
        open={modal}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Estas seguro que deseas eliminar el usuario
          </Typography>
          </Box>
          <Button onClick={handleCloseModal}>
            no
          </Button>
        </Box>
      </Modal>
    )
}