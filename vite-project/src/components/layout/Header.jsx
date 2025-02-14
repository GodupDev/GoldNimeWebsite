import React from "react";
import { Layout, Menu } from "antd";
import SearchBar from "../ui/SearchBar";
import styled from "styled-components";

const { Header } = Layout;

const HeaderCustom = styled(Header)`
  background-color: #192026;
  padding: 0 0 0 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.div`
  color: #fff;
  font-size: 36px;
  font-weight: bold;
`;

const MenuCustom = styled(Menu)`
  display: flex;
  justify-content: left;
  background-color: transparent;
  border-bottom: none;
  margin-left: 40px;
  flex: 1;

  .ant-menu-item {
    font-size: 18px;
    color: #5d626a !important;
  }
`;

const HeaderBar = (props) => {
  return (
    <div style={{ paddingBottom: "25px" }}>
      <HeaderCustom>
        <Logo
          onClick={() => {
            props.setCurrentFilm("None");
          }}
        >
          GoldNime
        </Logo>

        <MenuCustom mode="horizontal">
          <Menu.Item
            key="1"
            onClick={() => {
              props.setCurrentFilm("None");
            }}
          >
            Trang chủ
          </Menu.Item>
          <Menu.Item key="2">Danh sách anime</Menu.Item>
        </MenuCustom>

        <div>
          <SearchBar />
        </div>
      </HeaderCustom>
    </div>
  );
};

export default HeaderBar;
