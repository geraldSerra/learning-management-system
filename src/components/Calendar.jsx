import { useState } from "react";
import Calendar from "moedim";
import { Box } from "@mui/material";

const Calen = () => {
  const [value, setValue] = useState(new Date());

  return (
    <>
      <Box sx={{width: '100%', fontFamily: "Roboto", p:0 }}>
        <Calendar value={value} onChange={(d) => setValue(d)} />
      </Box>
    </>
  );
};

export { Calen };
