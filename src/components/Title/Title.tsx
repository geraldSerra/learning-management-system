import "./Title.css";

interface TitleProps {
  children: string;
}

const Title = ({ children }: TitleProps) => {
  return <div className="title">{children}</div>;
};

export default Title;
