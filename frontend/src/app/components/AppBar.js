import React, { useState } from "react";
import ResponsiveAppBar from "./ResponsiveAppBar";
import SwipeableTemporaryDrawer from "./SwipeableTemporaryDrawer";

const AppBar = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <ResponsiveAppBar onOpen={handleOpen}/>
      <SwipeableTemporaryDrawer open={open} onClose={handleClose} />
    </div>
  );
};

export default AppBar;
