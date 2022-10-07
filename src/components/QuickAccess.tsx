import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import StickyNote2OutlinedIcon from "@mui/icons-material/StickyNote2Outlined";
import NoteAltOutlinedIcon from "@mui/icons-material/NoteAltOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";

const QuickAccess = () => {
  const handleClick = () => {
    console.info("You clicked the Chip.");
  };

  return (
    <Stack
      direction="row"
      spacing={1}
      sx={{
        fontFamily: "Roboto",
        color: "#808080",
        backgroundColor: "#FFFFFF",
        height: 51,
        justifyContent: "space-evenly",
        alignItems: "center",
        borderRadius: 10,
        p: 0.5,
        my: 3,
        transition: "0.3s",
        boxShadow: 3,
      }}
    >
      <Chip
        icon={<HomeOutlinedIcon sx={{ color: "inherit" }} />}
        label="Home"
        onClick={handleClick}
        sx={{
          width: "100%",
          height: "100%",
          fontFamily: "inherit",
          color: "inherit",
          backgroundColor: "inherit",
          borderRadius: 10,
          mx: 0,
          // transition: '0.3s',
          "&:hover": {
            color: "white",
            backgroundColor: "#002B5B",
          },
        }}
      />

      <Chip
        icon={<FavoriteBorderOutlinedIcon />}
        label="Favorites"
        onClick={handleClick}
        sx={{
          width: "100%",
          height: "100%",
          fontFamily: "inherit",
          color: "inherit",
          backgroundColor: "inherit",
          borderRadius: 10,
          mx: 0,
          "&:hover": {
            color: "white",
            backgroundColor: "#002B5B",
          },
        }}
      />
      <Chip
        icon={<StickyNote2OutlinedIcon />}
        label="Your Tests"
        onClick={handleClick}
        sx={{
          width: "100%",
          height: "100%",
          fontFamily: "inherit",
          color: "inherit",
          backgroundColor: "inherit",
          borderRadius: 10,
          mx: 0,
          "&:hover": {
            color: "white",
            backgroundColor: "#002B5B",
          },
        }}
      />
      <Chip
        icon={<NotificationsActiveOutlinedIcon />}
        label="Alerts"
        onClick={handleClick}
        sx={{
          width: "100%",
          height: "100%",
          fontFamily: "inherit",
          color: "inherit",
          backgroundColor: "inherit",
          borderRadius: 10,
          mx: 0,
          "&:hover": {
            color: "white",
            backgroundColor: "#002B5B",
          },
        }}
      />
      <Chip
        icon={<NoteAltOutlinedIcon />}
        label="Notes"
        onClick={handleClick}
        sx={{
          width: "100%",
          height: "100%",
          fontFamily: "inherit",
          color: "inherit",
          backgroundColor: "inherit",
          borderRadius: 10,
          mx: 0,
          "&:hover": {
            color: "white",
            backgroundColor: "#002B5B",
          },
        }}
      />
      <Chip
        icon={<SchoolOutlinedIcon />}
        label="Certificates"
        onClick={handleClick}
        sx={{
          width: "100%",
          height: "100%",
          fontFamily: "inherit",
          color: "inherit",
          backgroundColor: "inherit",
          borderRadius: 10,
          mx: 0,
          "&:hover": {
            color: "white",
            backgroundColor: "#002B5B",
          },
        }}
      />
    </Stack>
  );
};

export default QuickAccess;
