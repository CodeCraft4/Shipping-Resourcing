import { COLORS } from '@muc/constant'
import { Typography,Box } from '@mui/material'
import { NavLink } from 'react-router-dom'

const QuoteBanner = () => {
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
          Request Quote
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
            Request Quote
          </Typography>
        </Box>
      </Box>
    </>
  )
}

export default QuoteBanner
