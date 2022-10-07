import PetsIcon from "@mui/icons-material/Pets";
import Typography from "@mui/material/Typography";

const Logo = () => {
  return (
    <Typography
      variant="h4"
      textAlign="center"
      component="a"
      noWrap
      href=""
      sx={{
        display: { xs: "none", md: "flex" },
        color: "inherit",
        fontFamily: "inherit",
        fontWeight: 700,
        letterSpacing: ".1rem",
        textDecorationStyle: "none",
      }}
    >
      <PetsIcon sx={{ color: "#FFBFB6", fontSize: "40px" }} /> PetShop
    </Typography>
  );
};

export default Logo;
