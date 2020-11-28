import Chips from "./items/Chips";
import Detergent from "./items/Detergent";
import FrozenFoods from "./items/FrozenFoods";

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
