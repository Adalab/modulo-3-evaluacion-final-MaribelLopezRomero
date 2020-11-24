import React from 'react';
import '../stylesheets/App.scss';
import CharacterCard from './CharacterCard';

class CharacterList extends React.Component {
  render() {
    //para pintar la lista
    const mortyCards = this.props.dataMortylist; //props que me pasa el array de datos
    const itemsMortyCards = mortyCards.map((card) => {
      return (
        <li key={card.id}>
          <CharacterCard
            name={card.name}
            image={card.image}
            species={card.species}
            id = {card.id}
          />
        </li>
      );
    });

    return (
      <>
        <ul>{itemsMortyCards}</ul>
      </>
    );
  }
}

export default CharacterList;
