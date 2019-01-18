import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Nav from "./components/Nav";
import JumboTron from "./components/JumboTron";
import Footer from "./components/Footer";
import characters from "./util/characters.json";
import CharacterCard from "./components/CharacterCard";
import CharacterWrap from "./components/CharacterWrap";

class App extends Component {
  // Think of each state as a variable that holds data to be passed.

  state = {
    characters
  };

  
  
  // WHen a card is clicked the following need to happen
  
  //-Record which card has been clicked
  //--Do This by grabbing it's id and putting it into an array of clicked cards
  //--Each id should have an initial value of false
  
  //-Shuffled the cards
  // --look on line for a shuffler
  
  //-Check to see if the card has already been clicked
  // --Need an array need to give the card an initial prop of clicked false
  
  //-If the card has been clicked before then give alert

  render() {
    return (
      <Wrapper>
        <Nav />
        <JumboTron />
        <CharacterWrap>
          {/* map(aka for each in js) through the characters json file and feed it's props to the CharacterCard component */}
          {this.state.characters.map(characters => (
            <CharacterCard
              id={characters.id}
              name={characters.name}
              image={characters.image}
            />
          ))}
        </CharacterWrap>
        <Footer />
      </Wrapper>
    );
  }
}

export default App;
