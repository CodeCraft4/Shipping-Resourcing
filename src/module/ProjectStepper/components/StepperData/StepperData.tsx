import { useState } from "react";
import { Button, Box } from "@mui/material";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import BulkCargo from "../BulkCargo/BulkCargo";
import { COLORS } from "@muc/constant";


const StepperData = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prev) => prev + 1);
  };
  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  const StepperContent = () => {
    switch (activeStep) {
      case 0:
        return (
          <BulkCargo
            title="Bulk Cargo"
            img={slideData.bulkCargo}
            accordionData={accordionData.bulkCargo}
          />
        );
      case 1:
        return (
          <BulkCargo
            title="Harvesting Equipment"
            img={slideData.hervesting}
            accordionData={accordionData.harvestingEquipment}
          />
        );
      case 2:
        return (
          <BulkCargo
          img={slideData.radio}
            title="Radio Actives"
            accordionData={accordionData.radio}
          />
        );
      case 3:
        return (
          <BulkCargo
          img={slideData.hervesting}
            title="Harvesting Equipment"
            accordionData={accordionData.harvestingEquipment}
          />
        );
      case 4:
        return (
          <BulkCargo
          img={slideData.helicopterImport}
            title="Helicopter Import"
            accordionData={accordionData.helicopterImport}
          />
        );
      case 5:
        return (
          <BulkCargo
          img={slideData.deepSlide}
            title="Deep Sea Fishing Boat"
            accordionData={accordionData.deepSeaFishingBoat}
          />
        );
      case 6:
        return (
          <BulkCargo
          img={slideData.borehole}
            title="Borehole Drilling Machine"
            accordionData={accordionData.boreholeDrillingMachine}
          />
        );
      case 7:
        return (
          <BulkCargo
          img={slideData.fish}
            title="Fishing Boat"
            accordionData={accordionData.fishingBoat}
          />
        );
      case 8:
        return (
          <BulkCargo
          img={slideData.copper}
            title="Copper / Fibre Optic Cable Supply"
            accordionData={accordionData.copperFibreOpticCableSupply}
          />
        );
        case 9:
          return (
            <BulkCargo
            img={slideData.helicopterImport}
              title="Helicopter Import"
              accordionData={accordionData.helicopterImport}
            />
          );
        

      default:
        return null;
    }
  };

  return (
    <Box
    maxWidth={'1170px'}
    paddingY={'70px'} 
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      flexDirection={"column"}
      // sx={{ width: '400px' }}
    >
      <Box mt={2} width="100%">
        {StepperContent()}
      </Box>

      <Box
        display="flex"
        justifyContent="space-between"
        mt={'20px'}
        width={'100%'}
      >
        <Button
          onClick={handleBack}
          variant="contained"
          startIcon={<ChevronLeftIcon/>}
          disabled={activeStep === 0}
          sx={{
            backgroundColor: COLORS.Blue,
            padding: "7px 25px",
            fontSize: "14px",
            fontFamily: "Fira Sans",
            borderRadius: "50px",
          }}
        >
          Prev
        </Button>
        <Button
          onClick={handleNext}
          variant="contained"
          endIcon={<ChevronRightIcon/>}
          disabled={activeStep === 9}
          sx={{
            backgroundColor: COLORS.Blue,
            padding: "7px 25px",
            fontSize: "14px",
            fontFamily: "Fira Sans",
            borderRadius: "50px",
          }}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default StepperData;

const accordionData = {
  bulkCargo: [
    {
      title: "Project Name",
      description: "Bulk Cargo",
    },
    {
      title: "Description",
      description: "Transported various cargo in large quantities",
    },
    {
      title: "Location",
      description: "South Africa",
    },
    {
      title: "Date",
      description: "2014",
    },
  ],
  harvestingEquipment: [
    {
      title: "Project Name",
      description: "Harvesting Equipment / Crop Sprayer",
    },
    {
      title: "Description",
      description: "Delivery of harvesting equipment/crop sprayer",
    },
    {
      title: "Location",
      description: "South Africa",
    },
    {
      title: "Date",
      description: "2013",
    },
  ],
  radio: [
    {
      title: "Project Name",
      description: "Radio Actives",
    },
    {
      title: "Description",
      description: "Transportation of radio active devices",
    },
    {
      title: "Location",
      description: "South Africa",
    },
    {
      title: "Date",
      description: "2014",
    },
  ],
  helicopterImport: [
    {
      title: "Project Name",
      description: "Helicopter Import",
    },
    {
      title: "Description",
      description: "Importing a helicopter into South America",
    },
    {
      title: "Location",
      description: "South Africa",
    },
    {
      title: "Date",
      description: "2015",
    },
  ],
  deepSeaFishingBoat: [
    {
      title: "Project Name",
      description: "Deep Sea Fishing Boat (Import)",
    },
    {
      title: "Description",
      description: "Transportation of a deep sea fishing boat",
    },
    {
      title: "Location",
      description: "Florida, USA",
    },
    {
      title: "Date",
      description: "2015",
    },
  ],
  boreholeDrillingMachine: [
    {
      title: "Project Name",
      description: "Borehole Drilling Machine (Local Delivery)",
    },
    {
      title: "Description",
      description: "Delivered a borehole drilling machine locally",
    },
    {
      title: "Location",
      description: "Western Cape, South Africa",
    },
    {
      title: "Date",
      description: "2017",
    },
  ],
  fishingBoat: [
    {
      title: "Project Name",
      description: "Fishing Boat",
    },
    {
      title: "Description",
      description: "Transportation of a fishing boat",
    },
    {
      title: "Location",
      description: "From U.A.E to Nigeria",
    },
    {
      title: "Date",
      description: "2017",
    },
  ],
  copperFibreOpticCableSupply: [
    {
      title: "Project Name",
      description: "Copper & Fibre Optic Cable Supply",
    },
    {
      title: "Description",
      description: "Supplying copper & fibre optic cables to mines",
    },
    {
      title: "Location",
      description: "South Africa",
    },
    {
      title: "Date",
      description: "2016",
    },
  ],
};
const slideData= {
  
  bulkCargo:[
  {
    img: "assets/Images/bulkSlide1.jpg",
  },
  {
    img: "assets/Images/bulkSlide2.jpg",
  },
  {
    img: "assets/Images/bulkSlide3.jpg",
  }],
  hervesting:[
    {
      img: "assets/Images/hervstingSlide1.jpg",
    },
    {
      img: "assets/Images/hervestingSlide2.jpg",
    },
    {
      img: "assets/Images/hervestingSlide3.jpg",
    }],
    radio:[
      {
        img: "assets/Images/radioSlide1.jpg",
      },
      {
        img: "assets/Images/radioSlide1.jpg",
      },
      {
        img: "assets/Images/radioSlide1.jpg",
      }],
      helicopterImport:[
        {
          img: "assets/Images/helicopterSlide1.jpg",
        },
        {
          img: "assets/Images/helicopterSlide2.jpg",
        },
],
deepSlide:[
  {
    img: "assets/Images/deepSlide1.jpg",
  },
  {
    img: "assets/Images/deepSlide2.jpg",
  },
  {
    img: "assets/Images/deepSlide3.jpg",
  }],
borehole:[
    {
      img: "assets/Images/boreholeSlide1.jpg",
    },
    {
      img: "assets/Images/borehole2.jpg",
    },
   ],
   fish:[
    {
      img: "assets/Images/fishSlide1.jpg",
    },
    {
      img: "assets/Images/fishSlide2.jpg",
    },
    {
      img: "assets/Images/fishSlide3.jpg",
    }],
    copper:[
      {
        img: "assets/Images/copperSlide.jpg"},
        {
          img: "assets/Images/copperSlide.jpg"},
     ],

};
