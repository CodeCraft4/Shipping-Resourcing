import React from "react";
import { COLORS } from "@muc/constant";
import { Box, Grid, Typography } from "@mui/material";
import { useInView } from "react-intersection-observer";

const CoreServices = () => {
  return (
    <Box bgcolor={"#f7f7f7"} padding={"80px 0"}>
      <Box>
        <Typography
          variant="body1"
          fontSize={"18px"}
          fontFamily={"Exo"}
          fontWeight={500}
          textAlign={"center"}
          color={COLORS.Black}
        >
          We Offer The Following Services
        </Typography>
        <Typography
          variant="body1"
          fontSize={"40px"}
          fontWeight={900}
          color={COLORS.Black}
          textAlign={"center"}
          fontFamily={"Exo"}
        >
          Core Services
        </Typography>
      </Box>

      <Grid container maxWidth={"1170px"} mt={{ md: 8, sm: 5, xs: 3 }} mx={"auto"}>
        {iconData.map((item, i) => (
          <Grid item md={4} sm={6} xs={12} textAlign={"center"} key={i}>
            <ServiceCard item={item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

const ServiceCard = ({ item }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <Box
      ref={ref}
      sx={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(20px)",
        transition: "all 400ms ease",
      }}
    >
      <Typography variant="body1" fontSize={"70px"} sx={{ color: COLORS.Blue }}>
        {item.icon}
      </Typography>
      <Typography
        variant="body1"
        fontSize={"24px"}
        fontFamily={"Exo"}
        fontWeight={700}
        color={COLORS.Black}
        sx={{ margin: "10px 0 5px" }}
      >
        {item.title}
      </Typography>
    </Box>
  );
};

export default CoreServices;

const iconData = [
  { icon: <i className="fa-solid fa-plane"></i>, title: "Freight Forwarding" },
  { icon: <i className="fa-solid fa-arrow-right-arrow-left"></i>, title: "Imports and Exports" },
  { icon: <i className="fa-solid fa-cubes"></i>, title: "Customs Clearing" },
  { icon: <i className="fa-solid fa-building-columns"></i>, title: "Customs Clearing" },
  { icon: <i className="fa-solid fa-umbrella"></i>, title: "Marine Insurance" },
  { icon: <i className="fa-solid fa-triangle-exclamation"></i>, title: "Dangerous Goods" },
  { icon: <i className="fa-solid fa-location-dot"></i>, title: "Bonded Cargo" },
  { icon: <i className="fa-solid fa-road"></i>, title: "Road Freight Over Border" },
  { icon: <i className="fa-regular fa-money-bill-1"></i>, title: "Tariff Determinations" },
];
