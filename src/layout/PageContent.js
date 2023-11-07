import { Switch, Route } from "react-router-dom";
import Anasayfa from "../pages/Anasayfa";
import OrderPizza from "../pages/OrderPizza";

const PageContent = () => {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <Anasayfa />
        </Route>

        <Route path="/order-pizza" exact>
          <OrderPizza />
        </Route>
      </Switch>
    </div>
  );
};
export default PageContent;
