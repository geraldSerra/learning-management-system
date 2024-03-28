import reactImg from "../assets/course-react.jpg";
import bootstrapImg from "../assets/course-bootstrap.jpg";
import htmlCssImg from "../assets/course-html-and-css.jpg";
import jsImg from "../assets/course-javascript.jpg";
import pwaImg from "../assets/course-pwa.jpeg";
import reduxImg from "../assets/course-redux.jpg";
import webOptimizationImg from "../assets/course-web-optimization.jpg";

export const courses = [
  {
    img: reactImg,
    title: "Avanced React",
    certification: "Course",
    enrolled: false,
    progres: 0,
  },
  {
    img: htmlCssImg,
    title: "HTML and CSS Fundamentals",
    certification: "Course",
    enrolled: false,
    progres: 0,
  },
  {
    img: jsImg,
    title: "Modern JavaScript: ES6+",
    certification: "Course",
    enrolled: false,
    progres: 0,
  },
  {
    img: bootstrapImg,
    title: "Responsive Design and Bootstrap",
    certification: "Course",
    enrolled: true,
    progres: 82,
  },
  {
    img: webOptimizationImg,
    title: "Web Performance Optimization",
    certification: "Course",
    enrolled: true,
    progres: 25,
  },
  {
    img: reduxImg,
    title: "State Management with Redux",
    certification: "Course",
    enrolled: true,
    progres: 52,
  },
  {
    img: pwaImg,
    title: "Progressive Web Development",
    certification: "Course",
    enrolled: false,
    progres: 0,
  },
];

export const categories = [
  { label: "Fronted", color: "#7BD3EA" },
  { label: "Data base", color: "#FFC0D9" },
  { label: "Linux", color: "#BEADFA" },
  { label: "Data science", color: "#FAF2A8" },
  { label: "Algorithm", color: "#8EA7E9" },
  { label: "Backend", color: "#BFD8AF" },
];
