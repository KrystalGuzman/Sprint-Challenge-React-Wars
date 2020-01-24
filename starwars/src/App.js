import React, {useState, useEffect} from 'react';
import axios from "axios"; 
import './App.css';
import StarWars from "./components/StarWars"
import { Container, Row } from 'reactstrap';
import styled from "styled-components";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [charData, setCharData] = useState([]);
  const [number,setNumber] = useState(1);

const Button1 = styled.button`
padding=2px;
text-align: center;
margin: 0 auto;
${(number === 1 ? 'display:none' : 'display:block')}
`
const Button2 = styled.button`
padding=2px;
text-align: center;
margin: 0 auto;
${(number === 6 ? 'display:none' : 'display:block')}
`

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const nextPage = element => {
    setNumber(number + 1)
  }
  const previousPage = element => {
    setNumber(number - 1)
  }

  useEffect(() => {
    axios.get(`https://swapi.co/api/people/?search=a&page=${number}`)
      .then((response) => {
        console.log(response); 
        setCharData(response.data.results)
      }).catch((error) => {
        console.log("Error: " + error); 
      }); 
  }, [number]);
	
  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      
      <Container>
        <Row>
      {charData.map( (char) => (
        <StarWars char = {char} />
      ))}
      </Row>
</Container>
<div>
  <br></br>
  <Button1 onClick={previousPage}>Previous</Button1>
  <br></br>
  <Button2 onClick={nextPage}>Next</Button2>

</div>
      
</div>
    
  );
}

export default App;
