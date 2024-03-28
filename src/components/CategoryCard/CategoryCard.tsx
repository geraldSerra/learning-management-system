import "./CategoryCard.css";

interface CategoryCardProps {
  label: string;
  color: string;
}

const CategoryCard = ({ label, color }: CategoryCardProps) => {
  return (
    <div className="category-card" style={{ backgroundColor: `${color}` }}>
      <div className="category-hole"> </div>
      <div className="category-title">{label}</div>
    </div>
  );
};

export default CategoryCard;
