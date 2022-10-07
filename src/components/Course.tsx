import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, CardActionArea, CardActions, Grid } from "@mui/material";
import Stack from "@mui/material/Stack";
import PlayCircleRoundedIcon from "@mui/icons-material/PlayCircleRounded";

import LinearProgress, {
  LinearProgressProps,
} from "@mui/material/LinearProgress";

interface CourseProps {
  tittle: string;
  value: number;
  img: string;
  name: string;
}

export default function Course({ tittle, value, img, name }: CourseProps) {
  return (
    <Card >
      <CardActionArea sx={{ p: 2 }}>
        <Grid
          container
          direction="row"
          spacing={0}
          sx={{
            fontFamily: "Roboto",
            alignContent: "center",
            width: "100%",
          }}
        >
          <Grid item>
            <Box sx={{ width: "100px", height: "100px" }}>
              <img src={img} width="100%" height="100%" />
            </Box>
          </Grid>
          <Grid item>
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              sx={{
                height: "100%",
                width: "100%",
              }}
            >
              <CardContent>
                <Typography gutterBottom variant="h5">
                  {tittle}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Course | {name}
                </Typography>
              </CardContent>
            </Stack>
          </Grid>
        </Grid>

        <Stack
          direction="row"
          spacing={0}
          sx={{
            display: "flex",
            alignItems: "center",
            fontFamily: "Roboto",
            alignContent: "center",
            pt: 1,
          }}
        >
          {/* <Button
            size="small"
            color="primary"
            startIcon={<PlayCircleRoundedIcon />}
          >
            Continue
          </Button> */}
          <LinearProgress
            variant="determinate"
            value={value}
            sx={{
              fontFamily: "Roboto",
              alignContent: "center",
              width: "100%",
            }}
          />
          <Box>
            <Typography
              sx={{ m: 1, minWidth: 100 }}
              variant="body2"
              color="text.secondary"
              textAlign="center"
            >
              <strong>{value}%</strong> completed
            </Typography>
          </Box>
        </Stack>
      </CardActionArea>
    </Card>
  );
}
