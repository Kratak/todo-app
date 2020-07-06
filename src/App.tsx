import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { staticRoutes } from "logics/router";

import { EditTask, List, Login, NotFound } from "components/pages";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route
            children={Login}
            exact
            path={[staticRoutes.home, staticRoutes.login]}
          />
          <Route children={List} exact path={staticRoutes.list} />
          <Route children={EditTask} exact path={staticRoutes.edit} />
          <Route children={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
