import styled from "styled-components";

const Footer = () => {
  return (
    <HeaderWraper>
      <Text>Copyright © 2021 Voorg</Text>
    </HeaderWraper>
  )
}

const HeaderWraper = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  background: black;
  width: 100%;
  padding: 10px 0;
`
const Text = styled.p`
  color: white;
  text-align: center;
  font-size: 1.8rem;
`

export default Footer;