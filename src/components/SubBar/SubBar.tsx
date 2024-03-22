import "./SubBar.css";
import { useState } from "react";

const SubBar = () => {
  const [options, setOptions] = useState([
    { page: "Home", selected: false },
    { page: "My learning", selected: false },
  ]);

  const handleSelected = (index: number) => {
    const updatedOptions = options.map((item, ind) => ({
      ...item,
      selected: ind === index ? true : false,
    }));

    setOptions(updatedOptions);
  };

  return (
    <div className="sub-bar-container">
      {options.map((item, index) => (
        <div
          className={`sub-bar-option ${
            item.selected && "sub-bar-option-selected"
          }`}
          onClick={() => handleSelected(index)}
        >
          {item.page}
        </div>
      ))}
    </div>
  );
};

export default SubBar;
