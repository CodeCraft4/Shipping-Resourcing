import { Footer, Navbar } from "@muc/layout";
import { Box } from "@mui/material";
import React, { ReactNode } from "react";

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <React.Fragment>
      <Navbar />
      <Box component={"main"}>{children}</Box>
      <Footer />
    </React.Fragment>
  );
};

export default AppLayout;
