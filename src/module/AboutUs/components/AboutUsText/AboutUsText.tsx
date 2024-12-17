import { COLORS } from "@muc/constant";
import { Box, Typography } from "@mui/material";

const AboutUsText = () => {
  return (
    <>
      <Box  padding={2} >
        <Typography
          variant="h3"
          fontSize={"18px"}
          fontFamily={"Exo"}
          color={COLORS.Black}
          fontWeight={700}
        >
          About Us
        </Typography>
        <Typography
          variant="body1"
          fontFamily={"Fira Sans"}
          fontSize={"30px"}
          fontWeight={700}
          mb={"30px"}
          color={COLORS.Black}
        >
          Who we are?
        </Typography>
        
        <Typography variant="body2" color={COLORS.Black} fontFamily={'Fira Sans'} lineHeight={'24px'}>
          Welcome to Shipping and Sourcing and thank you for visiting our
          website.
        </Typography>
        <Typography variant="body2"  mb={'10px'}color={COLORS.Black} fontFamily={'Fira Sans'}lineHeight={'24px'}>
          Shipping and Sourcing is proudly South African owned, which started
          operation in Johannesburg 2008. We have gained a stronghold as a
          leading international freight forwarding company.
        </Typography>
        <Typography variant="body2" mb={'10px'}color={COLORS.Black} fontFamily={'Fira Sans'}lineHeight={'24px'}>
        We offer tailor made international and local logistics solutions to businesses of all sizes.
        </Typography>
        <Typography variant="body2"  mb={'10px'} color={COLORS.Black} fontFamily={'Fira Sans'}lineHeight={'24px'}>
        Our network comprises of affiliated agents with 90 offices in 58 countries which enables our customers to benefit from global experience and expertise across all industry sectors, making Shipping and Sourcing your number one choice as your freight forwarder.
        </Typography>
      </Box>
    </>
  );
};

export default AboutUsText;
