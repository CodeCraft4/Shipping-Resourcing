import { Box, Grid, ListItem, Typography, List } from "@mui/material";
import { COLORS } from "@muc/constant";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import CallIcon from "@mui/icons-material/Call";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { AddLocation } from "@mui/icons-material";
const Footer = () => {
  return (
    <>
      <Box component={"footer"}>
        <Box
          sx={{
            background: ` linear-gradient( rgba(0, 0, 0, .9), rgba(0, 0, 0, 0.9)), url('assets/Images/footer-bg.png')`,
          }}
          paddingY={'70px' }
          paddingX={{ md: 9, sm: 4, xs: 1 }}
        >
          <Grid container width={{ lg: "1170px", xs: "100%" }} mx={"auto"}>
            <Grid item md={4} xs={12}>
              <img
                src="assets/Images/logo-white.png"
                width={"195px"}
                height={"45px"}
                style={{ marginBottom: "16px" }}
                alt=""
              />
              <Box>
                <Typography
                  fontFamily={"Fira Sans"}
                  variant="body2"
                  sx={{ color: COLORS.White }}
                  mb={3}
                >
                  Welcome to Shipping and Sourcing and thank you for visiting
                  our website.
                </Typography>
                <Typography
                  my={5}
                  variant="body2"
                  fontFamily={"Fira Sans"}
                  color={COLORS.White}
                >
                  Shipping and Sourcing is proudly South African owned, which
                  started operation in Johannesburg 2008. We have gained a
                  stronghold as a leading international freight forwarding
                  company.
                </Typography>
                <Typography
                  variant="body2"
                  fontFamily={"Fira Sans"}
                  color={COLORS.White}
                >
                  We are Proudly South African !!!
                </Typography>
              </Box>
            </Grid>
            <Grid item md={4} sm={6} xs={12} paddingX={{sm:1.5,md:3,xs:0.5}} paddingY={3}>
              {linksData.map((item) => (
                <Box>
                  <Typography
                    variant="body1"
                    color="white"
                    sx={{
                      border: "none",
                      textWrap: "nowrap",
                      borderLeft: `3px solid ${COLORS.Blue} `,
                      height: "16px",
                      lineHeight: "16px",
                      paddingLeft: 2,
                      fontSize: "20px",
                      marginBottom: "40px",
                      fontWeight: 700,
                      fontFamily: "Exo",
                    }}
                  >
                    {item.heading}
                  </Typography>
                  <List sx={{ display: "flex", flexWrap: "wrap" }}>
                    <ListItem
                      sx={{
                        textWrap: "nowrap",
                        width: "50%",
                        color: "white",
                        padding: 0,
                        fontSize: "14px",
                        paddingBottom: "20px",
                        fontFamily: "Fira Sans",
                        ":hover": {
                          color: COLORS.hoverBlue,
                        },
                      }}
                    >
                      <ArrowRightAltIcon
                        sx={{ color: COLORS.Blue, marginRight: "10px" }}
                      />{" "}
                      {item.item_one}
                    </ListItem>
                    <ListItem
                      sx={{
                        textWrap: "nowrap",
                        width: "50%",
                        color: "white",
                        padding: 0,
                        fontSize: "14px",
                        paddingBottom: "20px",
                        fontFamily: "Fira Sans",
                        ":hover": {
                          color: COLORS.hoverBlue,
                        },
                      }}
                    >
                      <ArrowRightAltIcon
                        sx={{ color: COLORS.Blue, marginRight: "10px" }}
                      />
                      {item.item_two}
                    </ListItem>
                    <ListItem
                      sx={{
                        textWrap: "nowrap",
                        width: "50%",
                        color: "white",
                        padding: 0,
                        fontSize: "14px",
                        fontFamily: "Fira Sans",
                        paddingBottom: "20px",
                        ":hover": {
                          color: COLORS.hoverBlue,
                        },
                      }}
                    >
                      <ArrowRightAltIcon
                        sx={{ color: COLORS.Blue, marginRight: "10px" }}
                      />
                      {item.item_three}
                    </ListItem>
                    <ListItem
                      sx={{
                        textWrap: "nowrap",
                        width: "50%",
                        color: "white",
                        padding: 0,
                        paddingBottom: "20px",
                        fontSize: "14px",
                        fontFamily: "Fira Sans",
                        ":hover": {
                          color: COLORS.hoverBlue,
                        },
                      }}
                    >
                      <ArrowRightAltIcon
                        sx={{ color: COLORS.Blue, marginRight: "10px" }}
                      />
                      {item.item_four}
                    </ListItem>
                  </List>
                </Box>
              ))}
            </Grid>
            <Grid item  paddingX={{sm:1.5,md:3,xs:0.5}} paddingY={3} md={4} sm={6} xs={12}>
              <Typography
                variant="body1"
                color="white"
                sx={{
                  border: "none",
                  textWrap: "nowrap",
                  borderLeft: `3px solid ${COLORS.Blue} `,
                  height: "16px",
                  lineHeight: "16px",
                  paddingLeft: 2,
                  fontSize: "20px",
                  marginBottom: "40px",
                  fontWeight: 700,
                  fontFamily: "Exo",
                }}
              >
                CONTACT INFORMATION
              </Typography>

              {contactInformation.map((item) => (
                <Box display={"flex"} mt={3} gap={2}>
                  <Box
                    width={36}
                    display={"flex"}
                    color={COLORS.White}
                    fontSize={"14px"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    height={34}
                    // bgcolor={COLORS.Blue}
                    borderRadius={"3px"}
                  >
                    {item.icon}
                  </Box>
                  <Box>
                    <Typography
                      variant="body1"
                      fontFamily="Exo"
                      fontWeight={700}
                      color={COLORS.White}
                      mb={"5px"}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      fontFamily="Fira Sans"
                      fontWeight={600}
                      color={COLORS.White}
                    >
                      {item.title_one}
                    </Typography>
                    <Typography
                      variant="body2"
                      fontFamily="Fira Sans"
                      fontWeight={600}
                      color={COLORS.White}
                    >
                      {item.title_two}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            background: "linear-gradient(145deg, #304f71 5%, #0074bd 100%)",
          }}
          width={"100%"}
          padding={2}
        >
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            maxWidth={"1170px"}
            flexDirection={'row'}
            mx={"auto"}
            flexWrap={"wrap"}
          >
            <Typography variant="body1" color={COLORS.White}>
              © 2021 Shipping And Sourcing. All Rights Reserved.
            </Typography>
            <Box width={'100px'} display={{xs:'flex',sm:'inline-block'}} ml={'auto'} >
              <FacebookOutlinedIcon
                sx={{ color: COLORS.White, marginRight: 2,ml:'auto' }}
              />
              <LinkedInIcon sx={{ color: COLORS.White, }} />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Footer;

const linksData = [
  {
    heading: "QUICK LINKS",
    item_one: "FTW",
    item_two: "SARS",
    item_three: "NCRS",
    item_four: "ITAC",
  },
  {
    heading: "NAVIGATION MENU",
    item_one: "Home",
    item_two: "About Us",
    item_three: "Our Services",
    item_four: "Projects",
  },
];

const contactInformation = [
  {
    icon: <AddLocation sx={{ fontSize: "24px" }} />,
    title: "Address:",
    title_one: "4 REID STREET, RYNFIELD, BENONI, GP, RSA",
  },
  {
    icon: <MailOutlineIcon sx={{ fontSize: "24px" }} />,
    title: "Email Address:",
    title_one: "mike.jones[at]shippingandsourcing.co.za",
  },

  {
    icon: <CallIcon sx={{ fontSize: "24px" }} />,
    title: "Contact Number:",
    title_one: "+27 (011) 425-5375",
    title_two: "+27 (079) 527-4936",
  },
  {
    icon: <Inventory2Icon sx={{ fontSize: "24px" }} />,
    title: "PO Box:",
    title_one: "PO BOX 564, ISANDO, 1600, GP, RSA",
  },
];
