import React from "react";
import styled from "styled-components";

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 12px;
  margin: 50px 0px;
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
    <Copyright>
      부산시 남구 자성로 152 한일오피스텔 601호 | TEL 051-646-0456 | FAX
      051-645-0453 | 사업자등록번호 617-81-56655
      <br />
      Copyright © www.doulit.co.kr All rights reserved.
    </Copyright>
  </Footer>
);
