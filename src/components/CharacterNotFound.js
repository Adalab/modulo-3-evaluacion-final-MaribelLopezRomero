import React from 'react';
import '../stylesheets/App.scss';


class CharacterNotFound extends React.Component {
  render() {
    return (
      <textarea name="textarea" rows="10" cols="50" value={this.props.value}></textarea>

      //DUda, porque no aparece lo que muestro dentro de text area
    );
  }
}

export default CharacterNotFound;
