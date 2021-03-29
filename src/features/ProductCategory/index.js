import React from "react";
import PropTypes from "prop-types";
import { Switch, Route, useRouteMatch } from "react-router";

import NotFound from "components/NotFound";
import MainPage from "./pages/MainPage";

ProductCategory.propTypes = {};

function ProductCategory(props) {
  const match = useRouteMatch();

  return (
    <div className="product-category">
      <Switch>
        <Route path={`${match.url}/:categoryCode`} component={MainPage} />

        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default ProductCategory;
