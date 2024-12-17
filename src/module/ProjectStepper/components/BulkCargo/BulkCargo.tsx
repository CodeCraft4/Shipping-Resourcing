import { Box, Divider, Grid, Typography } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import { COLORS } from "@muc/constant";
import React from "react";

type Props = {
  title: string;
  img: { img: string }[]; // Update the type here
  accordionData: { title: string; description: string }[];
};

const BulkCargo = ({ accordionData, title, img }: Props) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <CustomArrow direction="next" onClick={() => {}} />, // Custom next arrow
    prevArrow: <CustomArrow direction="prev" onClick={() => {}} />, // Custom previous arrow
  };

  const [expanded, setExpanded] = React.useState<number | false>(false);
  const handleChange =
    (panel: number) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  return (
    <Box maxWidth={"1140px"} paddingX={2} mx={"auto"}>
      <Typography
        variant="body1"
        fontFamily={"Exo"}
        fontSize={"28px"}
        my={"10px"}
        color={COLORS.Black}
        fontWeight={700}
      >
        {title}
      </Typography>
      <Grid container paddingY={"20px"}  >
        <Grid item md={8} xs={12}  maxHeight={"500px"}>
          <Box
            sx={{
              
              maxWidth: "100%",
            }}
            className="slider-container"
          >
            <Slider {...settings}>
              {img.map((item, index) => (
                <Box key={index}>
                  <img src={item.img} width={"100%"} height={"100%"} alt="" />
                </Box>
              ))}
            </Slider>
          </Box>
        </Grid>
        <Grid item md={4} paddingX={2}>
          <Typography
            fontSize={"20px"}
            fontFamily={"Exo"}
            color={COLORS.Black}
            mb={"10px"}
            fontWeight={700}
          >
            Project Details
          </Typography>
          {accordionData.map((item, i) => (
            <Accordion
              sx={{
                mb: "7px",
                boxShadow: "none",
                border: `1px solid #d3d3d3,`,
                borderRadius: "0px",
              }}
              expanded={expanded === i}
              onChange={handleChange(i)}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography
                  fontWeight={700}
                  fontFamily={"Fira Sans"}
                  color={COLORS.Black}
                  variant="body2"
                >
                  {item.title}
                </Typography>
              </AccordionSummary>
              <Divider />
              <AccordionDetails>
                <Typography
                  color={COLORS.Black}
                  fontFamily={"Fira Sans"}
                  variant="body2"
                >
                  {item.description}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default BulkCargo;

function CustomArrow({
  direction,
  onClick,
}: {
  direction: any;
  onClick: () => void;
}) {
  return (
    <Box
      onClick={onClick}
      sx={{
        position: "absolute",
        color: COLORS.White,
        top: "50%",
        transform: "translateY(-50%)",
        [direction === "next" ? "right" : "left"]: "10px",
        zIndex: 1,
        cursor: "pointer",
        bgcolor: "rgba(0, 0, 0, 0.5)",
        width: "60px",
        height: "70px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      }}
    >
      {direction === "next" ? (
        <i className="fa-solid fa-greater-than"></i>
      ) : (
        <i className="fa-solid fa-less-than"></i>
      )}
    </Box>
  );
}
