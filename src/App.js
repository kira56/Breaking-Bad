import React, { useState, useEffect } from 'react';
import styled from "@emotion/styled";
import Frase from './components/Frase';

const Boton = styled.button`
  background:-webkit-linear-gradient(top left,#007d35 0%,#007d35 40%,#0f574e 100%);
  background-size:300px;
  font-family:Arial, Helvetica, sans-serif;
  color:#fff;
  margin-top:3rem;
  padding:1rem 3rem;
  font-size:2rem;
  border:2px solid black;
  transition:background-size .8s ease;

  :hover {
    cursor: pointer;
    background-size:400;
  }
`;

const Contenedor = styled.div`
  display:flex;
  align-items:center;
  padding-top:5rem;
  margin-top: 50px;
  flex-direction:column;
`;

function App() {
  // State de frases
  const [frase, obtenerFrase] = useState({})
  // UseEffect cargar una frase
  useEffect(() => {
    consultarAPI();
  }, []);
  const consultarAPI = async () => {
    console.log('Consultando ...')
    const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    // const frase = api.then(respuesta => {
    //   return respuesta.json();
    // })
    // frase.then(resultado => console.log(resultado))
    const frase = await api.json();
    obtenerFrase(frase[0])

  }
  return (
    <Contenedor>
      <Frase
        frase={frase}
      />
      <Boton
        onClick={consultarAPI}
      >
        Obtener Frase
      </Boton>
    </Contenedor>

  );
}

export default App;
