import React from "react";
import styled from "styled-components";

const Footer = styled.footer`
  width: 100%;
  min-height: 340px;
  position: absolute;
  left: 0;
  justify-content: center;
  align-items: center;

  font-weight: 600;
  font-size: 12px;
  text-align: center;
  margin: 50px 0 0 0;
  padding: 25px 0px;
  background-color: #2d3236;
`;

const List = styled.ul`
  display: flex;
`;

const ListItem = styled.li`
  &:not(:last-child) {
    margin-right: 16px;
  }
`;

const Link = styled.a`
  color: ${(props) => props.theme.darkBlueColor};
`;

const Line = styled.div`
  display: block;
  border: 1px solid #666666;
  margin: 25px auto;
  height: 0px;
  max-width: 1200px;
`;

const Copyright = styled.span`
  color: ${(props) => props.theme.darkGreyColor};
  text-align: center;
  font-weight: 500;
  font-size: 18px;
  line-height: 30px;
  letter-spacing: -0.03em;
`;

export default () => (
  <Footer>
    <List>
      <ListItem>1</ListItem>
      <ListItem>2</ListItem>
      <ListItem>3</ListItem>
    </List>
    <Line />
    <Copyright>
      부산시 남구 자성로 152 한일오피스텔 601호 | TEL 051-646-0456 | FAX
      051-645-0453 | 사업자등록번호 617-81-56655
      <br />
      Copyright © www.doulit.co.kr All rights reserved.
    </Copyright>
  </Footer>
);
