import { Footer, Navbar } from "@muc/layout";
import { Box } from "@mui/material";
import React from "react";

const AppLayout = ({ children }: any) => {
  return (
    <React.Fragment>
      <Navbar />
      <Box component={'main'}>{children}</Box>
      <Footer />
    </React.Fragment>
  );
};

export default AppLayout;
