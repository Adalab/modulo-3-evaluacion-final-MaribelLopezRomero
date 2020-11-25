import React from 'react';
import '../stylesheets/CharacterCard.scss';
import { Link } from 'react-router-dom';

class CharacterCard extends React.Component {
  render() {
    return (
      <Link to={'/' + this.props.id}>
        <article className=''>
          <img
            className='card_imagen'
            src={this.props.image}
            alt={this.props.name}
            title={this.props.name}
          />
          <h2 className='card_title'>{this.props.name}</h2>
          <h3 className='card_subtitle'>{this.props.species}</h3>
        </article>
      </Link>
    );
  }
}

export default CharacterCard;
