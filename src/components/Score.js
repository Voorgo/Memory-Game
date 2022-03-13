import styled from "styled-components";
import Button from "./Button";

const Score = (props) => {
  return (
    <ScoreWraper>
      <CurrentScore>Current Score: {props.score}</CurrentScore>
      <BestScore>Best Score: {props.bestScore}</BestScore>
      <Button changeMode={props.changeMode}/>
    </ScoreWraper>
  )
}

const ScoreWraper = styled.div`
  display: flex;
  font-size: 2.5rem;
  align-items: center;
  gap: 20px;
`;

const CurrentScore = styled.div`
  background: #4bbf8d;
  padding: 10px;
  border-radius: 3px;
`;
const BestScore = styled(CurrentScore)`
  background: #942c2c;
  color: white;
`

export default Score;