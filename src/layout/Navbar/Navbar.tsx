import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";

import CallIcon from "@mui/icons-material/Call";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

import { COLORS } from "@muc/constant";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";
import { Divider } from "@mui/material";

const drawerWidth = 240;
const navItems = [
  { title: "HOME", path: "/" },
  { title: "ABOUT US", path: "/aboutUs" },
  { title: "OUR SERVICES", path: "/ourServices" },
  { title: "PROJECTS", path: "/projects" },
  { title: "CONTACT US", path: "/contactUs" },
];

export default function Navbar(props: any) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      bgcolor={COLORS.darkBlack}
      padding={"30px"}
      height={"100vh"}
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center" }}
    >
      <List>
        {navItems.map((item) => (
          <ListItem key={item.title} disablePadding>
            <NavLink
              to={item.path}
              style={{
                textDecoration: "none",
                width: "100%",
                color: COLORS.White,
                fontSize: "14px",
                fontWeight: 600,
                fontFamily: "Fira Sans",
                padding: "10px 20px",
              }}
            >
              <ListItemText primary={item.title} />
              <Divider />
            </NavLink>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Box
        component={"header"}
        display={"flex"}
        justifyContent={"space-between"}
        width={{ lg: 1200, md: 900, sm: "100%" }}
        mx={"auto"}
        paddingY={"25px"}
        paddingX={{ xs: "15px", md: 0 }}
        flexWrap={"wrap"}
        alignItems={"center"}
      >
        <NavLink to="/">
          <img
            src="assets/Images/logo-sm.png"
            style={{ width: "300px", height: "60px", objectFit: "cover" }}
            alt=""
          />
        </NavLink>
        <Box display={"flex"} flexWrap={"wrap"} gap={{ md: 2, sm: 3 }}>
          {contactData.map((item, i) => (
            <Box
              display={"flex"}
              flexDirection={{ md: "row", sm: "column", xs: "column" }}
              mt={3}
              marginRight={i === 0 ? 2 : 0}
              gap={2}
            >
              <Box
                width={36}
                display={"flex"}
                color={COLORS.White}
                fontSize={"14px"}
                alignItems={"center"}
                justifyContent={"center"}
                height={34}
                bgcolor={COLORS.Blue}
                borderRadius={"3px"}
              >
                {item.icon}
              </Box>
              <Box>
                <Typography
                  variant="body2"
                  fontFamily="Exo"
                  color={COLORS.Black}
                  mb={"5px"}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="body2"
                  fontFamily="Fira Sans"
                  fontWeight={500}
                  color={COLORS.Black}
                >
                  {item.title_one}
                </Typography>
                <Typography
                  variant="body2"
                  fontFamily="Fira Sans"
                  fontWeight={500}
                  color={COLORS.Black}
                >
                  {item.title_two}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
      <AppBar
        component="nav"
        position="sticky"
        sx={{
          backgroundColor: COLORS.Blue,
          height: 70,
          alignItems:'center',
          transition: "allow-discrete",
        }}
      >
        <Box width={{ lg: 1200, md: 900, xs: "100%" }}  mx={"auto"}>
          <Toolbar sx={{height:70}}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { md: "none" } }}
            >
              <MenuIcon />
            </IconButton>

            <Box sx={{ display: { xs: "none", md: "block" } }}>
              {navItems.map((item) => (
                <NavLink
                  to={item.path}
                  key={item.title}
                  style={({ isActive }) => ({
                    textDecoration: "none",
                    padding: "0 15px",
                    fontSize: "15px",
                    fontFamily: "Exo",
                    fontWeight: "500",
                    color: isActive ? COLORS.hoverBlue : COLORS.White,
                  })}
                >
                  {item.title}
                </NavLink>
              ))}
            </Box>
            <Box
              sx={{
                backgroundColor: COLORS.Brown,

                padding: "10px 25px",
                textDecoration: "none",

                fontFamily: "Fira Sans",
                fontWeight: 700,
                fontSize: 13,
                boxShadow: "none",
                textWrap: "nowrap",
                marginLeft: "auto",
                "&:hover": {
                  color: COLORS.hoverBlue,
                  backgroundColor: COLORS.Blue,
                  boxShadow: "none",
                },
              }}
            >
              <NavLink
                to={"/Request-Quote"}
                style={{ color: COLORS.White, textDecoration: "none" }}
              >
                {" "}
                REQUEST A QUOTE
              </NavLink>
            </Box>
          </Toolbar>
        </Box>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { sm: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      {/* <Box bgcolor={'red'} component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box> */}
    </>
  );
}

const contactData = [
  {
    icon: <CallIcon sx={{ fontSize: "17px" }} />,
    title: "Contact Number",
    title_one: "+27 (011) 425-5375",
    title_two: "+27 (079) 527-4936",
  },
  {
    icon: <MailOutlineIcon sx={{ fontSize: "17px" }} />,
    title: "Send Your Query",
    title_one: "mike.jones[at]shippingandsourcing.co.za",
  },
];
