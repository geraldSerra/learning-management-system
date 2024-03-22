import { useState } from "react";
import "./SideBar.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import TvOutlinedIcon from "@mui/icons-material/TvOutlined";

interface sideBarOptionProps {
  text: string;
  icon: any;
  selected: boolean;
}

const SideBarOption = ({ text, icon, selected }: sideBarOptionProps) => {
  return (
    <div
      className={`sidebar-option-container ${
        selected ? "sidebar-option-container-selected" : ""
      }`}
    >
      <div
        className={`sidebar-option ${
          selected ? "sidebar-option-selected" : ""
        }`}
      >
        <div
          className={`sidebar-icon ${selected ? "sidebar-icon-selected" : ""}`}
        >
          {icon}
        </div>
        <div className="sidebar-option-text">{text}</div>
      </div>
    </div>
  );
};

const SideBar = () => {
  const [options, setOptions] = useState([
    { text: "Home", icon: <HomeOutlinedIcon />, selected: true },
    { text: "My learning", icon: <SchoolOutlinedIcon />, selected: false },
    { text: "My progres", icon: <TrendingUpOutlinedIcon />, selected: false },
    { text: "Classroom", icon: <TvOutlinedIcon />, selected: false },
  ]);

  const handleSelected = (index: number) => {
    const updatedOptions = options.map((item, ind) => ({
      ...item,
      selected: ind === index ? true : false,
    }));

    setOptions(updatedOptions);
  };

  return (
    <div className="sidebar">
      {options.map((item, index) => (
        <div onClick={() => handleSelected(index)}>
          <SideBarOption
            text={item.text}
            icon={item.icon}
            selected={item.selected}
          />
        </div>
      ))}
    </div>
  );
};

export default SideBar;
