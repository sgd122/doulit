import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
import Input from "./Input";
import useInput from "../Hooks/useInput";
import { Compass, HeartEmpty, User, Logo } from "./Icons";
import headerImage from "../Images/img_mainvisual.jpeg";

const Header = styled.header`
  width: 100%;
  min-height: 650px;
  background: url(${headerImage});
  background-size: contain;
  background-repeat: no-repeat;
`;

const HeaderTitle = styled.header`
  width: 100%;
  border: 0;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px 5px;
  z-index: 2;
`;

const HeaderWrapper = styled.div`
  width: 100%;
  max-width: ${(props) => props.theme.maxWidth};
  display: flex;
  justify-content: center;
`;

const HeaderColumn = styled.div`
  width: 45%;
  text-align: center;
  &:first-child {
    margin-right: auto;
    text-align: left;
  }
  &:last-child {
    margin-left: auto;
    text-align: right;
  }
`;

const SearchInput = styled(Input)`
  background-color: ${(props) => props.theme.bgColor};
  padding: 5px;
  font-size: 14px;
  border-radius: 3px;
  height: auto;
  text-align: center;
  width: 70%;
  &::placeholder {
    opacity: 0.8;
    font-weight: 200;
  }
`;

const HeaderLink = styled(Link)`
  &:not(:last-child) {
    margin-right: 30px;    
`;

const HeaderText = styled.span`
  color: white;
  // color: ${(props) => props.theme.white};
`;

export default withRouter(({ history }) => {
  const search = useInput("");

  const onSearchSubmit = (e) => {
    e.preventDefault();
    history.push(`/search?term=${search.value}`);
  };

  const menus = [
    { id: "1", name: "회사소개" },
    { id: "2", name: "주요사업" },
    { id: "3", name: "Partners" },
    { id: "4", name: "Contact" },
  ];
  return (
    <Header>
      <HeaderTitle>
        <HeaderWrapper>
          <HeaderColumn>
            <Link to="/">
              <Logo />
            </Link>
          </HeaderColumn>
          <HeaderColumn>
            {menus.map((map) => (
              <HeaderLink to="#">
                <HeaderText>{map.name}</HeaderText>
              </HeaderLink>
            ))}
          </HeaderColumn>
        </HeaderWrapper>
      </HeaderTitle>
    </Header>
  );
});
