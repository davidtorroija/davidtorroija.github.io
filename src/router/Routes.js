import React from "react";
import Preview from "../views/Preview";
import HomeLight from "../views/all-home-version/HomeLight";
import HomeDark from "../views/all-home-version/HomeDark";
import NotFound from "../views/NotFound";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollTopBehaviour from "../components/ScrollTopBehaviour";

const Routes = () => {
  return (
    <>
      <Router>
        <ScrollTopBehaviour />
        <Switch>
          <Route path="home-light" component={HomeLight} />
          <Route path="home-dark" component={HomeDark} />
          <Route path="#home-dark" component={HomeDark} />
          <Route path="/#home-dark" component={HomeDark} />
          <Route path="build/#home-dark" component={HomeDark} />
          {/* <Route exact path="/build/#" component={Preview} />
          <Route exact path="/build/" component={Preview} /> */}
          {/* <Route exact path="/" component={Preview} /> */}
          <Route component={HomeDark} />
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
