import { Box, Grid, Typography } from "@mui/material";
import { useEffect, useState, useRef } from 'react';
import CountUp from 'react-countup';


const LogisticsFields = () => {
       const [isVisible, setIsVisible] = useState(false);
       const numberRef =  useRef<HTMLDivElement>(null);
     
       useEffect(() => {
         const observer = new IntersectionObserver(
           ([entry]) => {
             if (entry.isIntersecting) {
               setIsVisible(true);
             }
           },
           { threshold: 0.5 } 
         );
     
         if (numberRef.current) {
           observer.observe(numberRef.current);
         }
     
         return () => {
           if (numberRef.current) {
             observer.unobserve(numberRef.current);
           }
         };
       }, []);
  return (
    <>
      <Box
        sx={{
          background: ` linear-gradient( rgba(0, 0, 0, .8), rgba(0, 0, 0, 0.8)), url(' assets/Images/bg.jpg') `,
          height:{sm:'350px',xs:'900px'},
          width: "100%",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
       
        }}
      >
        <Grid container  display={'flex'} justifyContent={'center'} alignItems={'center'}>
          <Grid
            item
            md={4}
            color={"white"}
            fontWeight={700}
            fontSize={"30px"}
            fontFamily={"Exo"}
            textAlign={{sm:'left',xs:'center'}}
          >
            35+ Years of Experience in the Logistics Field
          </Grid>
          <Grid item md={6} display={"flex"} gap={10} mt={{md:2,lg:0,xs:4}} justifyContent={'center'} flexDirection={{sm:'row',xs:'column'}} >
           {logisticsData.map((item)=>(
               <Box
               display={"flex"}
               alignItems={"center"}
               justifyContent={"center"}
               flexDirection={"column"}
              
             >
               <img src={item.img} alt="ShipImage" />
               <Typography ref={numberRef}
      variant="body1"
      color="white"
      marginTop="10px"
      fontSize="36px"
      fontWeight={700}
      fontFamily="Fira Sans"
      sx={{ transition: 'all 0.7s linear' }}
    >
      {isVisible ? <CountUp start={0} end={item.number} duration={2} /> : '0'}
    </Typography>

               <Typography variant="body1" color="white" textAlign={'center'}  fontFamily={'Fira Sans'} >
                 {item.title}
               </Typography>
             </Box>
           ))}
          
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default LogisticsFields;

const logisticsData=[
       {
              img:'assets/Images/fact1.png',
              number:90,
              title:'Affiliate Offices Worldwide',
       },
       {
              img:'assets/Images/fact2.png',
              number:58,
              title:'Countries',
       },
       {
              img:'assets/Images/fact3.png',
              number:35,
              title:'Years in Operation',
       },
]