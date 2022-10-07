import { Box } from "@mui/material";
import { Container } from "@mui/system";
import Body from "../components/Body";
import Footer from "../components/Footer";
import Header from "../components/Header";
import QuickAccess from "../components/QuickAccess";

const Main = () => {
  return (
    <>
      <Box sx={{ backgroundColor: "#ebf3ff" }}>
        <Header />
        <Box sx={{ px: 5 }}>
          <QuickAccess />
          <Body />
        </Box>
        <Footer />
      </Box>
    </>
  );
};

export default Main;

// "#F6FBFF"
