import "./layouts.css";
import Grid from "@mui/material/Unstable_Grid2";
import { CourseCard, Title } from "components";

const CourseCardLayout = ({ data }: any) => {
  return (
    <div className="course-card-layout">
      <Grid container spacing={2}>
        <Grid xs={12}>
          <Title>Earn a Degree</Title>
        </Grid>
        <div className="section-body">
          <Grid container xs={12}>
            {data.map((item: any) => (
              <Grid
                xs={12}
                sm={6}
                md={4}
                lg={3}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <CourseCard
                  image={item.image}
                  title={item.title}
                  certification={item.certification}
                />
              </Grid>
            ))}
          </Grid>
        </div>
      </Grid>
    </div>
  );
};

export default CourseCardLayout;
