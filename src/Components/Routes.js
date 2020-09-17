import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Route, Switch } from "react-router-dom";
import Feed from "../Routes/Feed";
import Information from "../Routes/Information";
import System from "../Routes/System";
import Partners from "../Routes/Partners";

const Wrapper = styled.div`
  margin: auto 5px;
`;

const LoggedInRoutes = () => (
  <Wrapper>
    <Feed />
    <Information />
    <System />
    <Partners />
  </Wrapper>
);

const AppRouter = () => <LoggedInRoutes />;

export default AppRouter;
