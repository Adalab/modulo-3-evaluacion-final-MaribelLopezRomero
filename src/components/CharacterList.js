import React from 'react';
import '../stylesheets/CharacterList.scss';
import CharacterCard from './CharacterCard';

class CharacterList extends React.Component {
  render() {
    const mortyCards = this.props.dataMortylist;
    const itemsMortyCards = mortyCards.map((card) => {
      return (
        <li className='card' key={card.id}>
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
          <ul className='list'>{itemsMortyCards}</ul>
        </section>
      </>
    );
  }
}

export default CharacterList;
