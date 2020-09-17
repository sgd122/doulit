import React from "react";
import styled from "styled-components";
import iconAddressImage from "../Images/footer/icon_address.png";
import iconEmailImage from "../Images/footer/icon_email.png";
import iconFaxImage from "../Images/footer/icon_fax.png";
import iconTellImage from "../Images/footer/icon_tell.png";

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
  color: white;
  margin-top:50px;
  justify-content: center;
  align-items: center;
`;

const ListItem = styled.li`
  padding: 0 50px;  
  font-size: 18px;
  line-height: 26px;
  color: #FFFFFF;
  font-weight: bold;
`;

const ListItemIcon = styled.div`
  background:url(${(props) => props.src});
  background-repeat: no-repeat;
  background-size:contain;
  width:30px;
  height:30px;
  margin: 0 auto 20px auto;
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

export default () => {
  const ListMap = [{
    src:iconAddressImage,
    text:"051 - 646 - 0456"
  },{
    src:iconEmailImage,
    text:"051 - 646 - 0453"
  },{
    src:iconFaxImage,
    text:"chitosoo@gmail.com"
  },{
    src:iconTellImage,
    text:"한일오피스텔 601호"
  }];

  return(
  <Footer>
    <List>
        {
          ListMap.map(data => (
            <ListItem>
              <ListItemIcon src={data.src}/>
              {data.text}
            </ListItem>
          ))
        }
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
};
