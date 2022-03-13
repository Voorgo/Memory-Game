import styled from "styled-components"

const Button = (props) => {
  return (
    <CustomButton onClick={props.changeMode}>Hard Mode</CustomButton>
  )
}

const CustomButton = styled.button`
  width: 100px;
  height: 30px;
  background: linear-gradient(to bottom right, #4d3677, #351e5f);
  color: #0ed9f8;
  border-radius: 3px;
  font-size: 1.3rem;
  outline: none;
  text-shadow: 0px 0px 3px #0ed9f8;
  border: none;
  cursor: pointer;
  &:hover {
    color: #351e5f;
    background: #0ed9f8;
  }
`

export default Button;