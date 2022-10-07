import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Logo from "./Logo";
import IconButton from "@mui/material/IconButton";

import Divider from "@mui/material/Divider";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const community = [
  "Learners",
  "Partners",
  "Developers",
  "Beta Testers",
  "Translators",
  "Blog",
];

const more = [
  "Investors",
  "Terms",
  "Privacy",
  "Help",
  "Accessibility",
  "Contact",
  "Articles",
  "Directory",
  "Affiliates",
];

const Footer = () => {
  return (
    <>
      <Box sx={{ width: "100%", mt: 5 }}>
        <Grid
          container
          direction="column"
          columns={2}
          spacing={0}
          display="flex"
        >
          <Grid
            item
            container
            direction="row"
            sx={{
              width: "100%",
              bgcolor: "#03091E",
              color: "white",
              fontFamily: "roboto",
              textDecoration: "none",
              justifyContent: "space-between",
              alignContent: "center",
              px: 13,
              pt: 5,
            }}
          >
            <Grid item>
              <Logo />
            </Grid>

            <Grid item sx={{ justifyContent: "left" }}>
              <Typography
                variant="h6"
                textAlign="left"
                component="a"
                noWrap
                href=""
                sx={{
                  display: { xs: "none", md: "flex" },
                  color: "inherit",
                  fontFamily: "inherit",
                  fontWeight: 700,
                  textDecoration: "inherit",
                  mb: 1,
                }}
              >
                Community
              </Typography>
              {community.map((item) => {
                return (
                  <Typography
                    variant="body2"
                    textAlign="center"
                    component="a"
                    href=""
                    sx={{
                      display: { xs: "none", md: "flex" },
                      color: "inherit",
                      fontFamily: "inherit",
                      textDecoration: "inherit",
                    }}
                  >
                    {item}
                  </Typography>
                );
              })}
            </Grid>

            <Grid item>
              <Typography
                variant="h6"
                textAlign="left"
                component="a"
                noWrap
                href=""
                sx={{
                  display: { xs: "none", md: "flex" },
                  color: "inherit",
                  fontFamily: "inherit",
                  fontWeight: 700,
                  textDecoration: "inherit",
                  pb: 1,
                }}
              >
                More
              </Typography>
              {more.map((item) => {
                return (
                  <Typography
                    variant="body2"
                    textAlign="center"
                    component="a"
                    href=""
                    sx={{
                      display: { xs: "none", md: "flex" },
                      color: "inherit",
                      fontFamily: "inherit",
                      textDecoration: "inherit",
                    }}
                  >
                    {item}
                  </Typography>
                );
              })}
            </Grid>

            <Grid item direction="column" sx={{ justifyContent: "left" }}>
              <Typography
                variant="h6"
                textAlign="center"
                component="a"
                noWrap
                href=""
                sx={{
                  display: { xs: "none", md: "flex" },
                  color: "inherit",
                  fontFamily: "inherit",
                  fontWeight: 700,
                  textDecoration: "inherit",
                  alignContent: "center",
                  mb: 1,
                }}
              >
                Mobile App
              </Typography>
              <Box sx={{ cursor: "pointer", mb: 1 }}>
                <img
                  src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d3njjcbhbojbot.cloudfront.net/web/images/icons/download_on_the_app_store_badge_en.svg?auto=format%2Ccompress&amp;dpr=1&amp;w=152&amp;h=45&amp;q=40"
                  width="152"
                  height="45"
                  alt="Download on the App Store"
                />
              </Box>
              <Box sx={{ cursor: "pointer", mb: 1 }}>
                <img
                  src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d3njjcbhbojbot.cloudfront.net/web/images/icons/en_generic_rgb_wo_45.png?auto=format%2Ccompress&amp;dpr=1&amp;w=152&amp;h=45&amp;q=40"
                  width="152"
                  height="45"
                  alt="Get it on Google Play"
                />
              </Box>
            </Grid>
          </Grid>

          <Grid
            container
            item
            sx={{
              height: "80px",
              width: "100%",
              bgcolor: "#03091e",
              color: "white",
              fontFamily: "roboto",
              textDecoration: "none",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <Divider sx={{ color: "white" }} />

            <Grid item container justifyContent="space-between" sx={{ px: 5 }}>
              <Grid item>
                <Typography
                  variant="body2"
                  component="a"
                  href=""
                  sx={{
                    color: "inherit",
                    fontFamily: "inherit",
                    textDecoration: "inherit",
                  }}
                >
                  © Copyright 2022. All rights reserved. forbidden the total or
                  partial reproduction of the content of this site.
                </Typography>
              </Grid>

              <Grid item>
                <IconButton aria-label="Facebook" sx={{ color: "inherit" }}>
                  <FacebookOutlinedIcon />
                </IconButton>
                <IconButton aria-label="Instagram" sx={{ color: "inherit" }}>
                  <InstagramIcon />
                </IconButton>
                <IconButton aria-label="Twitter" sx={{ color: "inherit" }}>
                  <TwitterIcon />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Footer;
