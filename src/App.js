import React from "react";
import { Switch, Route } from "react-router-dom";
import OrderPizza from "./pages/OrderPizza";
import Anasayfa from "./pages/Anasayfa";
import Success from "./pages/Success";


const App = () => {
  return (
    <div>
    <div>
      <Switch>
        <Route path="/" exact>
          <Anasayfa/>
        </Route>

        <Route path="/order-pizza" exact>
          <OrderPizza/>
        </Route>
        <Route path="/order-button" exact>
          <Success/>
        </Route>
      </Switch>
    </div>
    </div>
  );
};
export default App;
