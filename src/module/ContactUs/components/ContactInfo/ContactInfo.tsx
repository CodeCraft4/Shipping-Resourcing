import { Grid, Typography, Box } from "@mui/material";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import CallIcon from "@mui/icons-material/Call";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import React from "react";
import { COLORS } from "@muc/constant";
import { AddLocation } from "@mui/icons-material";
import ContactForm from "../ContactForm/ContactForm";

const ContactInfo = () => {
  return (
    <>
      <Grid container maxWidth={"1170px"} mx={"auto"} py={"70px"}>
        <Grid item sm={6} padding={2} xs={12}>
          <Typography
            variant="body1"
            fontSize={"28px"}
            fontFamily={"Exo"}
            fontWeight={700}
            color={COLORS.Black}
          >
            Contact Us
          </Typography>
          <Typography
            variant="body2"
            color={COLORS.Black}
            fontFamily={"Fira Sans"}
          >
            {" "}
            Free free to contact us
          </Typography>
          {contactInformation.map((item) => (
            <Box display={"flex"} padding={0} mt={3} gap={2}>
              <Box
                display={"flex"}
                color={COLORS.Black}
                justifyContent={"center"}
                // bgcolor={COLORS.Blue}
                borderRadius={"3px"}
              >
                {item.icon}
              </Box>
              <Box>
                <Typography
                  variant="body1"
                  fontFamily="Exo"
                  fontSize={"18px"}
                  fontWeight={700}
                  color={COLORS.Black}
                  mb={"5px"}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="body2"
                  fontFamily="Fira Sans"
                  fontWeight={600}
                  color={COLORS.Black}
                >
                  {item.title_one}
                </Typography>
                <Typography
                  variant="body2"
                  fontFamily="Fira Sans"
                  fontWeight={600}
                  color={COLORS.Black}
                >
                  {item.title_two}
                </Typography>
              </Box>
            </Box>
          ))}
        </Grid>
        <Grid item sm={6} padding={2} xs={12}>
          <ContactForm />
        </Grid>
      </Grid>
    </>
  );
};

export default ContactInfo;

const contactInformation = [
  {
    icon: <AddLocation sx={{ fontSize: "24px" }} />,
    title: "Address:",
    title_one: "4 REID STREET, RYNFIELD, BENONI, GP, RSA",
  },
  {
    icon: <MailOutlineIcon sx={{ fontSize: "24px" }} />,
    title: "Email Address:",
    title_one: "mike.jones[at]shippingandsourcing.co.za",
  },

  {
    icon: <CallIcon sx={{ fontSize: "24px" }} />,
    title: "Contact Number:",
    title_one: "+27 (011) 425-5375",
    title_two: "+27 (079) 527-4936",
  },
  {
    icon: <Inventory2Icon sx={{ fontSize: "24px" }} />,
    title: "PO Box:",
    title_one: "PO BOX 564, ISANDO, 1600, GP, RSA",
  },
];
