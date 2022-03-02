import React, { FunctionComponent } from 'react';
import {
  // Redirect,
  Route,
  RouteComponentProps,
  RouteProps,
} from 'react-router-dom';

interface PrivateRouteProps extends RouteProps {
  component:
    | React.ComponentType<RouteComponentProps<any>>
    | React.ComponentType<any>;
}

const PrivateRoute: FunctionComponent<PrivateRouteProps> = ({
  component: Component,
  ...rest
}) => {
  return <Route {...rest} render={(props) => <Component {...props} />} />;
};

export default PrivateRoute;
