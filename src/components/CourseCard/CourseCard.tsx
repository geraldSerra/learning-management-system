import "./CourseCard.css";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import { Box, IconButton, Tooltip } from "@mui/material";

interface CourseCardInterface {
  image: string;
  title: string;
  certification: string;
}

const CourseCard = ({ image, title, certification }: CourseCardInterface) => {
  return (
    <div className="card">
      <Box sx={{ height: { xs: "15rem", sm: "12rem" } }}>
        <img className="card-img" src={image} />
      </Box>
      <div className="card-content">
        <div className="card-info">
          <div className="card-title">{title}</div>
          <div className="card-subtext">{certification}</div>
        </div>
        <div className="card-actions">
          <Tooltip title="Add My List">
            <IconButton sx={{ p: "2px" }}>
              <BookmarkBorderIcon />
            </IconButton>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
