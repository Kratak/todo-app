import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { StylesProvider } from "@material-ui/core/styles";

import { staticRoutes } from "logics/router";

import "./i18n";

import { EditTask, List, Login, NotFound } from "components/pages";

function App() {
  return (
    <div>
      <StylesProvider>
        <Router>
          <Switch>
            <Route
              component={Login}
              exact
              path={[staticRoutes.home, staticRoutes.login]}
            />
            <Route component={List} exact path={staticRoutes.list} />
            <Route component={EditTask} exact path={staticRoutes.edit} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
}

export default App;
