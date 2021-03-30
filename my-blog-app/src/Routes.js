import { Switch, Redirect } from 'react-router-dom';
import { RouteWithLayout } from './components';
import { Main } from './layouts';
import { Home, Contact, Institutional, PostsView } from './views';

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
      <RouteWithLayout
        component={Contact}
        exact
        layout={Main}
        path="/contact"
      />
      <RouteWithLayout
        component={PostsView}  
        exact
        layout={Main}
        path="/posts/:id"
      />
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;