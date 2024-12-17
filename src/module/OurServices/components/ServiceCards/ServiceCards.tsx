import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { Box, Grid } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { COLORS } from "@muc/constant"; 

interface ServiceCardItem {
  img: string;
  Heading: string;
  title_1: string;
  title_2?: string;
}

const ServiceCards: React.FC = () => {
  return (
    <>
      <Box
        sx={{
          background: `url('assets/Images/banner4.jpg')`,
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
          textAlign={"center"}
        >
          Our Service
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
            Our Service
          </Typography>
        </Box>
      </Box>

      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={"column"}
        paddingY={"70px"}
      >
        <Typography
          variant="body1"
          textAlign={"center"}
          fontSize={"18px"}
          fontFamily={"Exo"}
          fontWeight={500}
        >
          We make shipping easy
        </Typography>
        <Typography
          fontFamily={"Exo"}
          fontSize={"40px"}
          color={COLORS.darkBlack}
          fontWeight={900}
          textAlign={"center"}
        >
          Our Global Services
        </Typography>
        <Grid
          container
          display={"flex"}
          flexWrap={"wrap"}
          justifyContent={"center"}
          alignItems={"center"}
          maxWidth={"1170px"}
        >
          {cardData.map((item, i) => (
            <Grid
              item
              mx={'auto'}
              md={4}
              sm={6}
              xs={12}
              paddingX={2}
              marginTop={"70px"}
              key={i}
            >
              <ServiceCard item={item} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

interface ServiceCardProps {
  item: ServiceCardItem;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ item }) => {
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
      <Card
        sx={{
          maxWidth: '100%',
          height: "480px",
          border: "none",
          padding: 0,
          boxShadow: "none",
          mx: "auto",
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="246"
            image={item.img}
            sx={{ backgroundSize: "cover" }}
            alt={item.Heading}
          />
          <CardContent sx={{ padding: "0" }}>
            <Typography
              gutterBottom
              variant="h3"
              margin={"30px 0 10px"}
              fontSize={"20px"}
              color={COLORS.darkBlack}
              fontFamily={"Exo"}
              fontWeight={700}
            >
              {item.Heading}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: COLORS.Black }}
              fontFamily={"Fira Sans"}
              mb={"10px"}
            >
              {item.title_1}
            </Typography>
            {item.title_2 && (
              <Typography
                variant="body2"
                sx={{ color: COLORS.Black }}
                fontFamily={"Fira Sans"}
                mb={"10px"}
              >
                {item.title_2}
              </Typography>
            )}
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
};

const cardData: ServiceCardItem[] = [
  {
    img: "/assets/Images/service-1.jpg",
    Heading: "Air Freight",
    title_1:
      "Shipping and Sourcing provides a full range of airfreight services to meet your specific requirements.",
    title_2:
      "Whether you have time sensitive cargo, general cargo, consolidations services or dangerous goods that need extra care.",
  },
  {
    img: "/assets/Images/service-2.jpg",
    Heading: "Sea Freight",
    title_1:
      "Shipping and Sourcing provides a comprehensive range of seafreight services, whether it be full container loads (FCL), consolidation / groupage service (LCL), flack racks / bolster container for out-of-gauge cargo, or project cargo.",
  },
  {
    img: "/assets/Images/service-3.jpg",
    Heading: "Bonded Cargo",
    title_1:
      "Can facilitate the movement of imported cargo in-bound to its final destination",
  },
  {
    img: "/assets/Images/service-4.jpg",
    Heading: "Customs Clearing",
    title_1:
      "Our customs clearing is paperless (EDI) to speed up clearances and deliveries.",
    title_2:
      "We offer removal-in-bond (RIB / RIT), warehouse entries (WE / WH), and tariff determinations",
  },
  {
    img: "/assets/Images/service-2.jpg",
    Heading: "Marine Insurance",
    title_1:
      "Insurance made easy, as an authorised representative of the Financial Advisory and Intermediary Services Act, we are able to offer marine insurance at a premium price.",
    title_2: "Free quotations are available on request.",
  },
  {
    img: "/assets/Images/service-1.jpg",
    Heading: "Sourcing",
    title_1: "Sourcing the right mode of transport for the job at hand.",
  },
  {
    img: "/assets/Images/service-6.jpg",
    Heading: "Dangerous Goods",
    title_1:
      "Can meet most hazardous cargo requirements with the exception of radioactive materials.",
  },
  {
    img: "/assets/Images/service-4.jpg",
    Heading: "Warehousing",
    title_1: "Offering short term and long term warehousing.",
  },
  {
    img: "/assets/Images/service-5.jpg",
    Heading: "Imports & Exports",
    title_1:
      "For your import and export airfreight requirements we offer daily, weekly and consolidation services.",
    title_2:
      "We also offer courier door to door services using appointed leading courier companies, giving you a one-stop shop for all your freighting requirements.",
  },
];

export default ServiceCards;
