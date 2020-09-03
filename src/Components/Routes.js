import React from "react";
import PropTypes from "prop-types";
import { Route, Switch } from "react-router-dom";
import Feed from "../Routes/Feed";
import Explore from "../Routes/Explore";
import Profile from "../Routes/Profile";
import Search from "../Routes/Search";

const LoggedInRoutes = () => (
  <Switch>
    <Route exact path="/" component={Feed} />
    <Route path="/explore" component={Explore} />
    <Route exact path="/search" component={Search} />
    <Route path="/:username" component={Profile} />
  </Switch>
);

const AppRouter = () => <LoggedInRoutes />;

export default AppRouter;
