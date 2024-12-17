import React, { useRef } from "react";
import Slider from "react-slick";
import { Box } from "@mui/material";
import { COLORS } from "@muc/constant";
import { motion, Variants } from "framer-motion"; // Import motion and Variants

interface SlideData {
  img: string;
}

const slideData: SlideData[] = [
  { img: "assets/Images/slide-1.png" },
  { img: "assets/Images/slide-2.png" },
  { img: "assets/Images/slide-3.png" },
  { img: "assets/Images/slide-4.png" },
];

const HomeSlider: React.FC = () => {
  const sliderRef = useRef<Slider | null>(null);

  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, 
    arrows: true,
    nextArrow: <CustomArrow direction="next" onClick={() => sliderRef.current?.slickNext()} />,
    prevArrow: <CustomArrow direction="prev" onClick={() => sliderRef.current?.slickPrev()} />,
  };

  return (
    <Box
      sx={{
        maxWidth: "100%",
        
        position: "relative",
        overflow: "hidden",
      }}
      className="slider-container"
    >
      <Slider ref={sliderRef} {...settings}>
        {slideData.map((item, index) => (
          <motion.div
            key={index}
            variants={getSlideVariants(index)}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 1 }}
          >
            <Box sx={{ maxWidth: "100%" }}>
              <motion.img
                src={item.img}
                width="100%"
                style={{ maxHeight: '100%', objectFit: 'cover' }}
                alt=""
                variants={getSlideVariants(index)} 
              />
            </Box>
          </motion.div>
        ))}
      </Slider>
    </Box>
  );
};

const getSlideVariants = (index: number): Variants => {
  switch (index) {
    case 0:
      return {
        initial: { opacity: 0, x: 100 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -100 },
      };
    case 1:
      return {
        initial: { opacity: 0, y: -100 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 100 },
      };
    case 2:
      return {
        initial: { opacity: 0, rotate: 10 },
        animate: { opacity: 1, rotate: 0 },
        exit: { opacity: 0, rotate: -10 },
      };
    case 3:
      return {
        initial: { opacity: 0, scale: 0.8 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.8 },
      };
    default:
      return {
        initial: { opacity: 0, x: 100 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -100 },
      };
  }
};

interface CustomArrowProps {
  direction: "next" | "prev";
  onClick: () => void;
}

const CustomArrow: React.FC<CustomArrowProps> = ({ direction, onClick }) => (
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
      bgcolor: "rgba(0, 0, 0, 0.25)",
      width: "30px",
      height: "110px",
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

export default HomeSlider;
