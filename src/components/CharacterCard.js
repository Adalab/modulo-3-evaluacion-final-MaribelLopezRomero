import React from 'react';
import '../stylesheets/App.scss';
import { Link } from 'react-router-dom';

class CharacterCard extends React.Component {
  render() {
    return (
      <Link to={'/' + this.props.id}>
        <div>
          <img
            src={this.props.image}
            alt={this.props.name}
            title={this.props.name}
          />
          <h2>{this.props.name}</h2>
          <h2>{this.props.species}</h2>
        </div>
      </Link>
    );
  }
}

export default CharacterCard;
