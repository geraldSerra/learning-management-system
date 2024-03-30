import { Title } from "components";
import "./LearningPathsCard.css";
import EastRoundedIcon from "@mui/icons-material/EastRounded";

interface PathCardProps {
  label: string;
  level: string;
}

const PathCard = ({ label, level }: PathCardProps) => {
  return (
    <div className={`path-card path-card-${level}`}>
      <div className="path-label ">{label}</div>
      <div className="path-icon">
        <EastRoundedIcon />
      </div>
    </div>
  );
};

const LearningPathsCard = () => {
  return (
    <div className="learning-paths-card">
      <Title>Learning Paths</Title>
      <div>Build relevant skills with guided courses</div>
      <Title>Find your next role:</Title>
      <PathCard label="Frontend" level="1" />
      <PathCard label="UI/UX" level="2" />
      <PathCard label="Networking" level="3" />
      <PathCard label="Ethical hacking" level="4" />
    </div>
  );
};

export default LearningPathsCard;
