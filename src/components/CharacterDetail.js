import { Link } from 'react-router-dom';
import React from 'react';
import '../stylesheets/CharacterDetail.scss';

const CharacterDetail = (props) => {
  const { name, image, species, episode, status, origin } = props.data;
  return (
    <>
      <article className='cardDetail'>
        <img
          className='cardDetail_imagen'
          src={image}
          alt={name}
          title={name}
        />
        <h2 className='cardDetail_title'>Name: {name}</h2>
        <h2>Specie: {species}</h2>
        <h2>Episodes: {episode.length}</h2>
        <h2>Status: {status}</h2>
        <h2>Origin: {origin.name}</h2>

        <Link to='/'>
          <button className='cardButton'>Volver</button>
        </Link>
      </article>
    </>
  );
};
export default CharacterDetail;
