import { Box, Button, Typography } from "@mui/material";
import Modal from "@mui/material/Modal";
import React from "react";

type Props = {
  children: React.ReactNode;
  open: boolean;
  close: () => void;
};

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};

const AddModal = (props: Props) => {
  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.close}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>{props.children}</Box>
      </Modal>
    </div>
  );
};

export default AddModal;
