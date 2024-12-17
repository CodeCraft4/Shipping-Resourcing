import { COLORS } from '@muc/constant'

import React from 'react'
import { Typography,Box } from '@mui/material'
import { NavLink } from 'react-router-dom'

const ContactBanner = () => {
  return (
    <>
       <Box
        sx={{
          background: `url('assets/Images/banner2.jpg')`,
          padding: "100px 0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="body1"
          color={COLORS.White}
          fontSize={"48px"}
          fontFamily={"Exo"}
          fontWeight={700}
          textAlign={'center'}
        >
          Contact Us
          </Typography>
        <Box display={"flex"} gap={1}>
          <NavLink
            to="/"
            style={{
              color: COLORS.White,
              textDecoration: "none",
              fontSize: "14px",
              fontFamily: "Fira Sans",
            }}
          >
            Home /
          </NavLink>
          <Typography
            color="#ffffffcc"
            fontSize={"14px"}
            fontFamily={"Fira Sans"}
          >
            {" "}
          Contact Us
          </Typography>
        </Box>
      </Box>
    </>
  )
}

export default ContactBanner
