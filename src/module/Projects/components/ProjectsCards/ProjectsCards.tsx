import { COLORS } from "@muc/constant";
import { Box, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ProjectsCards = () => {
  
  const cardVariants = {
    hidden: (direction: string) => ({
      opacity: 0,
      x: direction === "left" ? -50 : 50, 
    }),
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 80, damping: 15 }, 
    },
  };

  return (
    <>
      <Box padding={"70px 0"}>
        <Typography
          variant="body1"
          textAlign={"center"}
          fontSize={"18px"}
          fontFamily={"Exo"}
          fontWeight={500}
          color={COLORS.darkBlack}
        >
          We make shipping easy
        </Typography>
        <Typography
          fontFamily={"Exo"}
          fontSize={"40px"}
          color={COLORS.Black}
          fontWeight={900}
          textAlign={"center"}
          mb={"70px"}
        >
          Our Delivery Projects
        </Typography>

        <Grid
          container
          maxWidth={"1170px"}
          
          rowGap={"20px"}
          mx={"auto"}
          justifyContent={"center"}
        >
          {projectData.map((item, index) => (
            <Grid item md={4} sm={6} xs={12} maxHeight={'216px'} padding={2}  key={index}>
      
              <motion.div
                custom={index % 2 === 0 ? "left" : "right"} 
                initial="hidden"
                whileInView="visible" 
                viewport={{ once: true, amount: 0.3 }} 
                variants={cardVariants}
              >
                <Box position={"relative"}  width={'100%'} mb={'20px'}   height={"216px"}>
                  <Box>
                    <img
                      src={item.img}
                      width={"100%"}
                      height={'216px'}
                      style={{
                        objectFit: "cover",
                        opacity: "95%",
                        borderRadius: "10px",
                      }}
                      alt={item.title}
                    />
                  </Box>
                  <Box
                    position={"absolute"}
                    top={"50%"}
                    left={"50%"}
                    sx={{
                      transform: "translate(-50%, -50%)",
                      padding: "30px",
                      backgroundColor: "rgba(0, 0, 0, 0.5)",
                      borderRadius: "10px",
                      width: "80%",
                    }}
                  >
                    <Typography
                      variant="body1"
                      fontSize={"20px"}
                      fontFamily={"Exo"}
                      fontWeight={700}
                      color={COLORS.White}
                    >
                      {item.title}
                    </Typography>
                    <Box mt={"20px"}>
                      <Link
                        to={"/ProjectsInfo"}
                        style={{
                          backgroundColor: COLORS.Brown,
                          textDecoration: "none",
                          color: COLORS.White,
                          fontSize: "13px",
                          fontFamily: "Fira Sans",
                          fontWeight: 700,
                          padding: "10px 25px",
                          display: "inline-block",
                          borderRadius: "5px",
                        }}
                      >
                        Read More
                      </Link>
                    </Box>
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default ProjectsCards;

const projectData = [
  {
    img: "assets/Images/project1.jpg",
    title: "Bulk Cargo",
  },
  {
    img: "assets/Images/project2.jpg",
    title: "Harvesting Equipment",
  },
  {
    img: "assets/Images/project3.jpg",
    title: "Radio Actives",
  },
  {
    img: "assets/Images/project4.jpg",
    title: "Helicopter Import",
  },
  {
    img: "assets/Images/project5.jpg",
    title: "Deep Sea Fishing Boat",
  },
  {
    img: "assets/Images/project6.jpg",
    title: "Borehole Drilling Machine",
  },
  {
    img: "assets/Images/project7.jpg",
    title: "Fishing Boat",
  },
  {
    img: "assets/Images/project8.jpg",
    title: "Copper / Fibre Optic Cable Supply",
  },
  {
    img: "assets/Images/project9.jpg",
    title: "Helicopter Import",
  },
];
