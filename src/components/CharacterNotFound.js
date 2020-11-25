import React from 'react';
import '../stylesheets/CharacterNotFound.scss';


class CharacterNotFound extends React.Component {
  render() {
    return (
      <p className= "notFound">
        {this.props.value}
      </p>

    );
  }
}

export default CharacterNotFound;
