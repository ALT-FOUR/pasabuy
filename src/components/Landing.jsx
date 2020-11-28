const { Link } = require("react-router-dom");

const Landing = () => {
  return (
    <div className="Landing">
      <Link to="/chips">Chips</Link>
      <Link to="/detergent">Detergent</Link>
      <Link to="/frozenFoods">Frozen Foods</Link>
    </div>
  );
};

export default Landing;
