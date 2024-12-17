import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box } from "@mui/material";
import { COLORS } from "@muc/constant";

function AboutSlider() {
  const settings = {
    
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <CustomArrow direction="next" onClick={() => {}}  />, // Custom next arrow
    prevArrow: <CustomArrow direction="prev" onClick={()=>{}} />, // Custom previous arrow
  };

  return (
    <Box
      sx={{
        padding: "0 16px",
        maxWidth: "100%",
        
      }}
      className="slider-container"
    >
      <Slider {...settings}>
        {slideData.map((item, index) => (
          <Box key={index}>
            <img src={item.img} width={"100%"} height={"100%"} alt="" />
          </Box>
        ))}
      </Slider>
    </Box>
  );
}

export default AboutSlider;

const slideData = [
  {
    img: "assets/Images/slide1.jpg",
  },
  {
    img: "assets/Images/slide2.jpg",
  },
  {
    img: "assets/Images/slide3.jpg",
  },
];

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
        [direction === "next" ? "right" : "left"]: "0px",
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
