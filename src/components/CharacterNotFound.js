import React from 'react';
import '../stylesheets/CharacterNotFound.scss';


class CharacterNotFound extends React.Component {
  render() {
    return (
      <textarea className= "notFound" name="textarea" rows="2" cols="50" value={this.props.value}></textarea>

      //DUda, porque no aparece lo que muestro dentro de text area
    );
  }
}

export default CharacterNotFound;
