import React from 'react';
import '../stylesheets/App.scss';

class CharacterCard extends React.Component {
  render() {
    return (
        <div>
          <img
            src={this.props.image} 
            alt={this.props.name}
            title={this.props.name}
          />
          <h2>{this.props.name}</h2>
          <h2>{this.props.species}</h2>
        </div>
    );
  }
}

export default CharacterCard;
