import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Chips from "./components/items/Chips";
import Detergent from "./components/items/Detergent";
import FrozenFoods from "./components/items/FrozenFoods";
import Landing from "./components/Landing";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/chips" component={Chips} />
          <Route path="/detergent" component={Detergent} />
          <Route path="/frozenFoods" component={FrozenFoods} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
