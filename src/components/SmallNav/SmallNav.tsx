import "./SmallNav.css";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import TvOutlinedIcon from "@mui/icons-material/TvOutlined";
import { useState } from "react";

import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import { Avatar, Box, IconButton } from "@mui/material";

import useBreakpoints from "hooks/useBreakpoints";

interface SmallNavTagsProps {
  label: string;
  icon: any;
  selected: boolean;
}

const SmallNavTags = ({ label, icon, selected }: SmallNavTagsProps) => {
  return (
    <div className={`small-tag ${selected ? "small-tag-selected" : ""}`}>
      <div
        className={`small-tag-icon ${
          selected ? "small-tag-icon-selected" : ""
        }`}
      >
        {icon}
      </div>
      <div
        className={`small-tag-label ${
          selected ? "small-tag-label-selected" : ""
        }`}
      >
        {label}
      </div>
    </div>
  );
};

const SmallNav = () => {
  const [options, setOptions] = useState([
    { label: "Home", icon: <HomeOutlinedIcon />, selected: true },
    { label: "Progres", icon: <TrendingUpOutlinedIcon />, selected: false },
    { label: "Learning", icon: <SchoolOutlinedIcon />, selected: false },
    { label: "Classroom", icon: <TvOutlinedIcon />, selected: false },
    {
      label: "You",
      icon: (
        <IconButton>
          <Avatar
            alt="User"
            src="https://iconape.com/wp-content/png_logo_vector/avatar-10.png"
          />
        </IconButton>
      ),
      selected: false,
    },
  ]);

  const handleSelected = (index: number) => {
    const updatedOptions = options.map((item, ind) => ({
      ...item,
      selected: ind === index ? true : false,
    }));

    setOptions(updatedOptions);
  };

  return (
    <div className="small-nav">
      {options.map((item, index) => (
        <Box
          sx={item.label === "You" ? { display: { md: "none" } } : {}}
          onClick={() => handleSelected(index)}
        >
          <SmallNavTags
            label={item.label}
            icon={item.icon}
            selected={item.selected}
          />
        </Box>
      ))}
    </div>
  );
};

export default SmallNav;
