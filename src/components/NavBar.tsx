import React from "react";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import { MenuItem } from "@mui/material";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import { Stack } from "@mui/system";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";

const pages = ["Donate", "Login", "Sign up"];
const settings = ["Profile", "Account", "Logout"];

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const [open, setOpen] = useState(false);

  interface Props {
    window?: () => Window;
    children: React.ReactElement;
  }

  const ScrollDown = (props: Props) => {
    const { children, window } = props;
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
    });

    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  };

  return (
    <>
      <AppBar
        position="sticky"
        color="transparent"
        sx={{
          width: "100%",
          height: { sm: 65 },
          color: "000000",
          fontFamily: "roboto",
          textTransform: "none",
          justifyContent: "center",
          bgcolor: "#FFFFFF",
          px: 5,
          transition: "0.2s",
        }}
      >
        <Box sx={{ display: "flex", width: "100%" }}>
          <Toolbar
            disableGutters
            sx={{ mx: 0, justifyContent: "space-between", width: "100%" }}
          >
            <Button
              variant="contained"
              disableElevation
              sx={{
                m: 2,
                px: 2,
                color: "white",
                display: "block",
                textTransform: "inherit",
                fontSize: "15px",
                borderRadius: 10,
                width: 100,
                backgroundColor: '#002B5B'
              }}
            >
              Explore
            </Button>
            <Stack
              direction="row"
              spacing={0}
              sx={{
                display: { xs: "none", md: "flex" },
                fontFamily: "inherit",
                // flexGrow: 1,
                justifyContent: "center",
                mx: 0,
                alignContent: "center",
              }}
            >
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { my: 1, width: "30ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="outlined-basic"
                  label="What do you want to learn?"
                  variant="outlined"
                  size="small"
                  sx={{ borderRadius: 10, width: "200ch" }}
                />
              </Box>
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  color: "#FFFFFF",
                  my: 1,
                  borderRadius: 2,
                  backgroundColor: "#002B5B",
                }}
              >
                <SearchIcon sx={{fontSize: 30, width: '100%', py:0.5}} />
              </Box>
            </Stack>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                fontFamily: "inherit",
                flexGrow: 1,
                mx: 0,
                justifyContent: "right",
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    px: 2,
                    color: "inherit",
                    display: "block",
                    textTransform: "inherit",
                    fontSize: "15px",
                    justifyContent: "right",
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>
            <Stack
              direction="row"
              spacing={2}
              sx={{
                display: { xs: "none", md: "flex" },
                fontFamily: "inherit",
                // flexGrow: 1,
                justifyContent: "center",
                width: 80,
                mx: 0,
              }}
            >
              <IconButton aria-label="Change mode" sx={{ color: "inherit" }}>
                <LightModeOutlinedIcon />
              </IconButton>
            </Stack>
            <Box
              sx={{
                px: 3,
              }}
            >
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    alt="User"
                    src="https://iconape.com/wp-content/png_logo_vector/avatar-10.png"
                    sx={{ width: 60, height: 60 }}
                  />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Box>
      </AppBar>
    </>
  );
};

export default NavBar;
