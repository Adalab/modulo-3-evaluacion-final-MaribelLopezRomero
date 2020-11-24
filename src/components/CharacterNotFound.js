import React from 'react';
import '../stylesheets/App.scss';
import { Link } from 'react-router-dom';

class CharacterNotFound extends React.Component {
  render() {
    return (
      <article>
        <p>No exite ningun personaje llamado {this.props.name}</p>
        <Link to='/' title='Volver al listado'>
          <button>Volver</button>
        </Link>
      </article>
    );
  }
}

export default CharacterNotFound;
