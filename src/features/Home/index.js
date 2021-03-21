import React from "react";
import PropTypes from "prop-types";

import { Switch, Route, useRouteMatch } from "react-router-dom";
import MainPage from "./pages/MainPage";

function Home(props) {
  const match = useRouteMatch();

  return (
    <div className="home">
      <Switch>
        <Route path={match.url} component={MainPage} />
      </Switch>
    </div>
  );
}

export default Home;
