import "./layouts.css";
import Grid from "@mui/material/Unstable_Grid2";
import { Slider, Title } from "components";
import useBreakpoints from "hooks/useBreakpoints";

const SliderCardLayout = () => {
  useBreakpoints();

  return (
    <div className="layout slidercard-layout">
      <Grid container rowSpacing={2}>
        <Grid xs={12}>
          <Title>Explore</Title>
        </Grid>
        <div className="section-body">
          <Grid
            container
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center"
            }}
          >
            <Grid xs={10} sm={6}>
              <Slider />
            </Grid>
          </Grid>
        </div>
      </Grid>
    </div>
  );
};

export default SliderCardLayout;
