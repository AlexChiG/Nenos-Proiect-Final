import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

function CustomDialog({ open, onYes, onNo, title, content }) {
  return (
    <Dialog open={open} onYes={onYes} onNo={onNo}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{content}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onYes}>Yes</Button>
        <Button onClick={onNo} autoFocus>
          No
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default CustomDialog;
