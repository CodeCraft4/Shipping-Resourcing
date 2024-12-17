import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import { COLORS } from "@muc/constant";
import { Box, Grid } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer"; // Import hook

interface CardItem {
  img: string;
  Heading: string;
  title_1: string;
  title_2?: string;
}

interface ScrollAnimationCardProps {
  item: CardItem;
  delay: number;
}

const HomeCards: React.FC = () => {
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      flexDirection={"column"}
      paddingY={"70px"}
    >
      <Typography
        fontFamily={"Exo"}
        fontSize={"40px"}
        color={COLORS.darkBlack}
        fontWeight={900}
      >
        Our Service
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
          <Grid item md={4} sm={6} xs={12} paddingX={2} marginTop={"70px"} key={i}>
            <ScrollAnimationCard item={item} delay={i * 0.2} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

const ScrollAnimationCard: React.FC<ScrollAnimationCardProps> = ({ item, delay }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.5,    
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{
        opacity: inView ? 1 : 0,
        y: inView ? 0 : 50,
      }}
      transition={{ delay, duration: 0.8 }}
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
            sx={{ backgroundSize: "cover",objectFit:'cover'}}
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
        <CardActions>
          <NavLink
            to="/OurServices"
            style={{
              textDecoration: "none",
              fontFamily: "Exo",
              fontSize: "13px",
              color: COLORS.Blue,
              fontWeight: 700,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Read More{" "}
            <ArrowRightAltIcon sx={{ fontSize: "18px", paddingTop: "2px" }} />
          </NavLink>
        </CardActions>
      </Card>
    </motion.div>
  );
};

const cardData: CardItem[] = [
  {
    img: "/assets/Images/service-1.jpg",
    Heading: "Air Freight",
    title_1: "Shipping and Sourcing provides a full range of airfreight services to meet your specific requirements.",
    title_2: "Whether you have time-sensitive cargo, general cargo, consolidations services, or dangerous goods that need extra care.",
  },
  {
    img: "/assets/Images/service-2.jpg",
    Heading: "Imports and Exports",
    title_1: `Sea Freight – FCL / LCL / Break Bulk / Out of Gauge Air Freight – Direct / Consolidations Road Freight Over Border – Containerised / Break Bulk`,
  },
  {
    img: "/assets/Images/service-3.jpg",
    Heading: "Customs Clearing",
    title_1: "Our customs clearing is paperless (EDI) to speed up clearances and deliveries",
  },
  {
    img: "/assets/Images/service-4.jpg",
    Heading: "Packing & Crating",
    title_1: "We offer a turnkey solution to our clients enabling them to have surety that they have chosen the correct packaging partner for their packaging needs.",
    title_2: "We cater packaging for all types of dangerous goods, crating, palletizing and general packaging materials.",
  },
  {
    img: "/assets/Images/service-5.jpg",
    Heading: "Marine Insurance",
    title_1: "Insurance made easy, as an authorised representative of the Financial Advisory and Intermediary Services Act, we are able to offer marine insurance at a premium price. Free quotations are available on request.",
  },
  {
    img: "/assets/Images/service-6.jpg",
    Heading: "Dangerous Goods",
    title_1: "Can meet most hazardous cargo requirements with the exception of radioactive materials",
  },
];

export default HomeCards;
