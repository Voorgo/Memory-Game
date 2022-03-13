import styled from "styled-components";
import CardContainer from "./components/CardContainer";
import Score from "./components/Score";
import { useState, useEffect } from "react";
import shuffleArray from "./utils/shuffleArray";

const Main = () => {
  const [pokemons, setPokemons] = useState([]);
  const [score, setScore] = useState(0);
  const [pokemonList, setPokemonList] = useState([]);
  const [bestScore, setBestScore] = useState(0);
  const [toggle, setToggle] = useState(false);
  const [numOfPokemons, setNumOfPokemons] = useState(32);
  const [loading, setLoading] = useState(false);

    // useEffect(() => {
    //   setLoading(true)
    //   const loadCards = async () => {
    //     setPokemons(await fetchPokemons(numOfPokemons))
    //     setLoading(false)
    //   }

    //   setTimeout(() => {
    //     loadCards()
    //   }, 300)
      

    //   return () => setPokemons([])
    // }, [numOfPokemons])

    // const fetchPokemons = async (num) => {
    //   const pokemons = []
  
    //   for (let i = 1; i <= num; i += 2) {
    //     const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${i}`
    //     const response = await fetch(pokemonUrl)
    //     const pokemon = await response.json()
    //     pokemons.push(pokemon)
    //   }
    //   return pokemons
    // }

    const fetchPokemon = (num) => {
      const arr = [];
      for(let i = 1; i <= num; i += 2) {
        arr.push(fetch(`https://pokeapi.co/api/v2/pokemon/${i}`).then(res => res.json()))
      }
      return arr;
    }

    useEffect(() => {
      setLoading(true);
       Promise.all(fetchPokemon(numOfPokemons))
      .then(data => {setPokemons(data)
        setLoading(false)
      })
    }, [numOfPokemons])

  const handleClick = (id) => {
    setPokemons(shuffleArray(pokemons))
    if(pokemonList.includes(id)) {
      setScore(0);
      setPokemonList([]);
      if(score > bestScore) setBestScore(score);
    } else {
      setScore((prev) => prev + 1)
    }
    setPokemonList((prev) => [...prev, id])
  }

  const changeMode = () => {
    setScore(0)
    setPokemonList([])
    setBestScore(0)
    setToggle(!toggle)
    if(toggle === false) setNumOfPokemons(64);
    else setNumOfPokemons(32);
  }
  
  return (
    <MainContainer>
      <Score score={score} bestScore={bestScore} changeMode={changeMode}/>
      {loading ? <p style={{fontSize: "1.5rem"}}>...Loading</p> : <CardContainer pokemons={pokemons} handleClick={handleClick} toggle={toggle}></CardContainer>}
    </MainContainer>
  )
};

export default Main;

const MainContainer = styled.main`
  width: 100%;
  height: 100%;
  margin-bottom: 5rem;
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`