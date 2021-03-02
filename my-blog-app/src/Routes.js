import { Switch, Redirect } from 'react-router-dom';
import { RouteWithLayout } from './components';
import { Main } from './layouts';
import { Home, Institutional } from './views';

const Routes = () => {
  return (
    <Switch>
      <Redirect exact from="/" to="/home" />
      <RouteWithLayout component={Home} exact layout={Main} path="/home" />
      <RouteWithLayout
        component={Home}
        exact
        layout={Main}
        path="/home"
      />
      <RouteWithLayout
        component={Institutional}
        exact
        layout={Main}
        path="/institutional"
      />
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;