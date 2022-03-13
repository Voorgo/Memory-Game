import styled from "styled-components";

const Header = () => {
  return (
    <HeaderWraper>
      <Title>Pokemon Memory Game</Title>
    </HeaderWraper>
)
}

const HeaderWraper = styled.header`
  width: 100%;
  background: black;
  padding: 20px 40px;
`;

const Title = styled.h1`
  color: white;
  font-size: 2.6rem;
  user-select: none;
`;

export default Header;