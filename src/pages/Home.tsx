import CourseCardLayout from "layouts/CourseCardLayout";
import "./Home.css";
import { Logo, NavBar, SideBar, SmallNav } from "components";
import SliderCardLayout from "layouts/SliderCardLayout";
import Grid from "@mui/material/Unstable_Grid2";

import { courses } from "../store/data";
import { Box } from "@mui/material";

const Home = () => {
  return (
    <>
      <Grid container direction={"column"}>
        <Grid
          container
          direction={"row"}
          xs={12}
          sx={{
            position: "fixed",
            zIndex: "1000",
            height: "5rem",
            maxHeight: "5rem",
          }}
        >
          <Grid xs={0} lg={2} sx={{ display: "flex", alignItems: "center" }}>
            <Box sx={{ px: "1rem" }}>
              <Logo />
            </Box>
          </Grid>
          <Grid xs={12} lg={10}>
            <NavBar />
          </Grid>
        </Grid>

        <Grid container xs={12}>
          <Grid
            container
            xs={0}
            lg={2}
            sx={{ display: { xs: "none", lg: "flex" } }}
          >
            <Grid
              xs={0}
              lg={2}
              sx={{
                position: "fixed",
                top: "5rem",
              }}
            >
              <SideBar />
            </Grid>
          </Grid>

          {/*Body*/}
          <Grid container xs={12} lg={10} sx={{ justifyContent: "center" }}>
            <Grid
              container
              rowGap={3}
              sx={{
                my: "7rem",
                mx: "1rem",
                maxWidth: "1200px",
              }}
            >
              <Grid xs={12}>
                <CourseCardLayout data={courses} />
              </Grid>
              <Grid xs={12}>
                <SliderCardLayout />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid xs={12} sx={{ display: { lg: "none" } }}>
          <SmallNav />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
