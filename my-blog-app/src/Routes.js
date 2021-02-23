import { Switch, Redirect, Route } from "react-router-dom";
import {
  Home,
  Institutional,
} from "./views";

const Routes = () => {
  return (
    <Switch>
      <Redirect exact from="/" to="/home" />
      <Route component={Home} exact  path="/home" />
      <Route
        component={Home}
        exact
        path="/home"
      />
      <Route
        component={Institutional}
        exact
        path="/institutional"
      />
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;

