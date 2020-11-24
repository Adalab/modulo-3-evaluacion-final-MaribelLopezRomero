import React from 'react';
import '../stylesheets/CharacterList.scss';
import CharacterCard from './CharacterCard';

class CharacterList extends React.Component {
  render() {
    //para pintar la lista
    const mortyCards = this.props.dataMortylist; //props que me pasa el array de datos
    const itemsMortyCards = mortyCards.map((card) => {
      return (
        <li className = "card" key={card.id}>
          <CharacterCard
            name={card.name}
            image={card.image}
            species={card.species}
            id={card.id}
          />
        </li>
      );
    });

    return (
      <>
        <section>
          <ul className ='list'>{itemsMortyCards}</ul>
        </section>
      </>
    );
  }
}

export default CharacterList;
