import { Input } from "antd";
import styled from "styled-components";

const Search = styled(Input)`
  background-color: #374151;
  border: none;
  color: #fff;
  border-radius: 20px;
  font-size: 18px;
  width: 350px;
  height: 30px;
  box-sizing: border-box;
  transition: all 0.3s ease;

  &::placeholder {
    color: #5d626a;
  }
  &:focus {
    background-color: rgb(66, 75, 90);
    outline: none;
    border: 1px solid #fff;
  }
  &:hover {
    background-color: rgb(66, 75, 90);
  }
`;

const SearchBar = () => {
  return <Search placeholder="Tìm kiếm anime hoặc movie" enterButton />;
};

export default SearchBar;
