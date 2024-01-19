import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import { useState } from "react";

function Modal() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button variant="contained" onClick={() => setOpen(true)}>
        Open Modal
      </Button>
      <Dialog onClose={() => setOpen(false)} fullScreen open={open}>
        <div className="w-[400px] p-4 flex items-center flex-col justify-center h-80">
          <h1>ABCD</h1>
          <Button variant="contained" onClick={() => setOpen(false)}>
            Close Modal
          </Button>
        </div>
      </Dialog>
    </>
  );
}

export default Modal;
