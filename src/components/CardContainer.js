import styled from "styled-components";
import Card from "./Card";

const CardContainer = ({pokemons, handleClick, toggle}) => {
  const pokemonList = pokemons.map((pokemon) => <Card pokemon={pokemon} id={pokemon.id} key={pokemon.id} handleClick={handleClick}></Card>)
  return (
    <CardContainerWraper hard={toggle}>{pokemonList}</CardContainerWraper>
  )

}

const CardContainerWraper = styled.div`
  background: white;
  backdrop-filter: blur(15px);
  border-radius: 8px;
  max-height: 720px;
  overflow: hidden;
  display: grid;
  grid-template-columns: ${(props) => props.hard ? "repeat(8, 1fr)" : "repeat(4, 1fr)"};
  gap: 2rem;
  padding: 2rem;
`
export default CardContainer;
