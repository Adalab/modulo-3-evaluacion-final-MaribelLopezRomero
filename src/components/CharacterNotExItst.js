import React from 'react';
import '../stylesheets/App.scss';
import { Link } from 'react-router-dom';

class CharacterNotExist extends React.Component {
  render() {
    return (
      <article>
        <p>El personaje que buscas no existe</p>
        <Link to='/' title='Volver al listado'>
          <button>Volver</button>
        </Link>
      </article>
    );
  }
}

export default CharacterNotExist;
