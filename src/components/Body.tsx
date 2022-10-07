import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Calen } from "./Calendar";
import { Button, Stack, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Course from "./Course";

import NavigationOutlinedIcon from "@mui/icons-material/NavigationOutlined";

let nav = [
  "Course sections",
  "Participants",
  "Competencies",
  "Grades",
  "Files",
];
let tools = ["Meet", "Your advance", "Report a Problem", "More info"];

const Body = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1, height: "100%" }}>
        <Grid container direction="row" justifyContent="space-between" sx={{}}>
          <Grid item xs={2} sm={2} md={2} lg={2}>
            <Box
              sx={{
                width: "100%",
                color: "",
                backgroundColor: "white",
                borderRadius: 5,
                fontFamily: "Roboto",
                fontSize: "18px",
                boxShadow: 3,
                p: 3,
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  color: "#101010",
                  fontFamily: "IBM Plex Sans",
                  textTransform: "upperCase",
                  fontWeight: "700",
                  lineHeight: 1.5,
                  letterSpacing: ".08rem",
                }}
              >
                🧭 Navigation
              </Typography>
              <br />
              {nav.map((item) => (
                <>
                  <br />
                  <Divider />
                  <br />
                  <Typography
                    component="a"
                    href="/"
                    sx={{ color: "#757575", textDecoration: "none" }}
                  >
                    {item}
                  </Typography>

                  <br />
                </>
              ))}
              <br />
              <br />
              <Typography
                variant="caption"
                sx={{
                  color: "#101010",
                  fontFamily: "IBM Plex Sans",
                  textTransform: "upperCase",
                  fontWeight: "700",
                  lineHeight: 1.5,
                  letterSpacing: ".08rem",
                }}
              >
                ⚙️ Tools
              </Typography>
              <br />
              {tools.map((item) => (
                <>
                  <br />
                  <Divider />
                  <br />
                  <Typography
                    component="a"
                    href="/"
                    sx={{ color: "#757575", textDecoration: "none" }}
                  >
                    {item}
                  </Typography>
                  <br />
                </>
              ))}
            </Box>
          </Grid>

          <Grid item xs={8} sm={6} md={6} lg={6}>
            <Typography variant="h5" sx={{ color: '#002B5B', pb: 2 }}>
              <strong>In Progress</strong>
            </Typography>
            <Stack
              spacing={2}
              sx={{
                display: "flex",
                width: "100%",
                height: "100%",
                borderRadius: 5,
                fontFamily: "Roboto",
                fontSize: "18px",
              }}
            >
              <Course
                img="https://cdn.worldvectorlogo.com/logos/javascript-1.svg"
                tittle="JavaScript"
                name="Algoritms and Software Structure"
                value={42}
              />
              <Course
                img="https://cdn-icons-png.flaticon.com/512/919/919826.png"
                tittle="CSS Advance "
                name="Front End Developer"
                value={11}
              />
              <Course
                img="https://avatars.githubusercontent.com/u/18133?s=200&v=4"
                tittle="Git Tools"
                name="Git & GitHub"
                value={75}
              />
            </Stack>
          </Grid>

          <Grid item container direction="column" md="auto" spacing={3}>
            <Grid item xs={2} sm={2} md={2} lg={2}>
              <Box
                sx={{
                  width: "200px",
                  backgroundColor: "white",
                  borderRadius: 5,
                  fontFamily: "Roboto",
                  fontSize: "18px",
                  boxShadow: 3,
                  p: 3,
                }}
              >
                <Typography
                  component="a"
                  href="/"
                  sx={{
                    color: "#101010",
                    fontFamily: "inherit",
                    textDecoration: "none",
                  }}
                >
                  🚀 DeadLine master!
                </Typography>
                <br />
                <br />
                <Typography sx={{ fontFamily: "inherit", color: "#757575" }}>
                  Set a limit time for all of your homework with our tool, and
                  see the all that in Google Calendar!
                </Typography>
              </Box>
            </Grid>
            <Grid item sx={{ justifyContent: "right" }}>
              <Box
                sx={{
                  width: "200px",
                  backgroundColor: "white",
                  borderRadius: 5,
                  fontFamily: "Roboto",
                  fontSize: "18px",
                  boxShadow: 3,
                  p: 3,
                }}
              >
                <Typography
                  component="a"
                  href="/"
                  sx={{
                    color: "#101010",
                    fontFamily: "inherit",
                    textDecoration: "none",
                  }}
                >
                  🚀 DeadLine master!
                </Typography>
                <br />
                <br />
                <Typography sx={{ fontFamily: "inherit", color: "#757575" }}>
                  Set a limit time for all of your homework with our tool, and
                  see the all that in Google Calendar!
                </Typography>
              </Box>
            </Grid>
            <Grid item>
              <Calen />
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Body;
