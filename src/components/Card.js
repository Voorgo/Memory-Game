import styled from "styled-components";

const Card = ({pokemon, handleClick}) => {
  const pokemonImg = pokemon.sprites.front_default;
  const name = pokemon.name;
  return (
    <CardWraper onClick={(id) => handleClick(pokemon.id)}>
      <Img src={pokemonImg}/>
      <Title>{name}</Title>
    </CardWraper>
  )
};

const CardWraper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 7px;
  cursor: pointer;
  box-shadow: 0px 0px 6px 1px gray;
  transition: transform 150ms;
  user-select: none;
  &:hover {
    transform: scale(1.1);
  }
`;
const Img = styled.img`
  display: block;
  width: 13rem;
  pointer-events: none;
`;

const Title = styled.p`
  text-align: center;
  font-size: 2rem;
  text-transform: capitalize;
`;

export default Card;