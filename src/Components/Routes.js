import React from "react";
import PropTypes from "prop-types";
import { Route, Switch } from "react-router-dom";
import Feed from "../Routes/Feed";
import Information from "../Routes/Information";
import System from "../Routes/System";
import Partners from "../Routes/Partners";

const LoggedInRoutes = () => (
  <>
    <Feed />
    <Information />
    <System />
    <Partners />
  </>
);

const AppRouter = () => <LoggedInRoutes />;

export default AppRouter;
