import React from "react";
import "./NavBar.css";
import SearchBar from "components/SearchBar/SearchBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import { MenuItem } from "@mui/material";
import { Stack } from "@mui/system";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SearchIcon from "@mui/icons-material/Search";
import Logo from "../Logo/Logo";

const settings = ["Profile", "Account", "Logout"];

const NavBar = () => {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <nav className="navbar-container">
      <div className="navbar">
        <Box
          sx={{
            display: { sm: "flex", md: "flex", lg: "none" },
          }}
        >
          <Logo />
        </Box>
        <Box
          className="searchBar"
          sx={{
            display: { xs: "none", md: "flex" },
          }}
        >
          <SearchBar />
        </Box>

        <Stack
          direction={"row"}
          alignItems={"center"}
          sx={{ gap: { xs: 0, sm: 2 } }}
        >
          <IconButton
            sx={{
              display: { md: "none" },
            }}
          >
            <SearchIcon />
          </IconButton>
          <IconButton>
            <NotificationsNoneOutlinedIcon />
          </IconButton>
          <IconButton>
            <LightModeOutlinedIcon />
          </IconButton>

          <Box>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
              }}
            >
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    alt="User"
                    src="https://iconape.com/wp-content/png_logo_vector/avatar-10.png"
                    sx={{ width: 55, height: 55 }}
                  />
                </IconButton>
              </Tooltip>
            </Box>

            <Menu
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
        </Stack>
      </div>
      {/* <SubBar /> */}
    </nav>
  );
};

export default NavBar;
