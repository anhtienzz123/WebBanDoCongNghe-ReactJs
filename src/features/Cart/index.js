import React from "react";
import PropTypes from "prop-types";
import { Route, Switch, useRouteMatch } from "react-router";
import MainPage from "./pages/MainPage";

Cart.propTypes = {};

function Cart(props) {
  const match = useRouteMatch();

  return (
    <div className="cart">
      <Switch>
        <Route path={match.url} component={MainPage} />
      </Switch>
    </div>
  );
}

export default Cart;
