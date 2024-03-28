import CourseCardLayout from "layouts/CourseCardLayout";
import "./Home.css";
import {
  CategoryCard,
  CourseCard,
  Greetings,
  Logo,
  NavBar,
  ProgresCard,
  SideBar,
  Slider,
  SmallNav,
  Title,
} from "components";
import SliderCardLayout from "layouts/SliderCardLayout";
import Grid from "@mui/material/Unstable_Grid2";
import { courses, categories } from "../store/data";
import { Box } from "@mui/material";

import useBreakpoints from "hooks/useBreakpoints";

const enrolledCourses = courses.filter((course) => course.enrolled);

const HomeSmall = () => {
  return (
    <div className="home-small">
      <Grid container xs={12} direction={"column"}>
        <Grid xs={12}>
          <NavBar />
        </Grid>

        <Grid
          container
          xs={12}
          rowSpacing={"15px"}
          sx={{ mb: "5rem", mt: "1rem" }}
        >
          <Grid xs={12}>
            <div className="item-on-display">
              <Greetings />
            </div>
          </Grid>
          <Grid xs={12}>
            <div className="item-on-display">
              <Title>Categories</Title>
            </div>
          </Grid>
          <Grid xs={12}>
            <Slider>
              {categories.map((item) => (
                <CategoryCard label={item.label} color={item.color} />
              ))}
            </Slider>
          </Grid>
          <Grid xs={12}>
            <div className="item-on-display">
              <Title>Earn a Degree</Title>
            </div>
          </Grid>
          <Grid xs={12}>
            <Slider>
              {courses.map((item) => (
                <Box sx={{ width: "16rem", height: "12rem" }}>
                  <CourseCard
                    img={item.img}
                    title={item.title}
                    certification={item.certification}
                  />
                </Box>
              ))}
            </Slider>
          </Grid>
          <Grid xs={12}>
            <div className="item-on-display">
              <Title>Continue learning</Title>
            </div>
          </Grid>
          <Grid xs={12}>
            <Slider>
              {enrolledCourses.map((item) => (
                <ProgresCard
                  img={item.img}
                  title={item.title}
                  progres={item.progres}
                />
              ))}
            </Slider>
          </Grid>

          <Grid xs={12}>
            <div className="item-on-display">
              <Title>For you</Title>
            </div>
          </Grid>

          <Grid xs={12}>
            <div className="item-on-display">
              <Box sx={{ height: "16rem" }}>
                <CourseCard
                  img={courses[5].img}
                  title={courses[5].title}
                  certification={courses[5].certification}
                />
              </Box>
            </div>
          </Grid>
        </Grid>
        <Grid xs={12}>
          <SmallNav />
        </Grid>
      </Grid>
    </div>
  );
};

const Home = () => {
  const breakpoint = useBreakpoints();

  return (
    <>
      {breakpoint === "xs" ? (
        <HomeSmall />
      ) : (
        <div className="home">
          <Grid className="MuiGrid-root" container direction={"column"}>
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
              <Grid
                xs={0}
                lg={2}
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
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
        </div>
      )}
    </>
  );
};

export default Home;
