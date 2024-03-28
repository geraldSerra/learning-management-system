import "./ProgresCard.css";
import { styled } from "@mui/material/styles";

import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "#fff",
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#0DB5A0" : "#308fe8",
  },
}));

interface ProgresCardProps {
  title: string;
  img: string;
  progres: number;
}

const ProgresCard = ({title, img, progres}: ProgresCardProps) => {
  return (
    <div className="progres-card">
      <div className="progres-img-wrap">
        <img
          className="progres-img"
          src={img}
        />
      </div>
      <div className="progres-content">
        <div className="progres-title">{title}</div>
        <div className="progres-bar">
          <BorderLinearProgress
            variant="determinate"
            value={progres}
            sx={{ width: "70%" }}
          />
          <div className="progres-value">{progres}%</div>
        </div>
      </div>
    </div>
  );
};

export default ProgresCard;
