import {Link} from 'react-router-dom';
import React from 'react';
import '../stylesheets/CharacterDetail.scss';

// class CharacterDetail extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     // const {name, image, species, status, origin} = this.props.data;
//     return (
//       <>
//         <div>
//           <img
//             src={this.props.image}
//             alt={this.props.name}
//             title={this.props.name}
//           />
//           <h2>{this.props.name}</h2>
//           <h2>{this.props.species}</h2>
//           <h2>{this.props.episode}</h2>
//           <h2>{this.props.status}</h2>
//           <h2>{this.props.origin.name}</h2>
//         </div>
//       </>
//     );
//   }
// }

// export default CharacterDetail;

const CharacterDetail = (props) => {
    console.log (props)
  const { name, image, species, episode, status, origin } = props.data;
  return (
    <>
      <article className= "cardDetail">
        <img className = "cardDetail_imagen"src={image} alt={name} title={name} />
        <h2 className= "cardDetail_title">{name}</h2>
        <h2>{species}</h2>
        <h2>{episode.length}</h2>
        <h2>{status}</h2>
        <h2>{origin.name}</h2>
     
      <Link to='/'>
        <button className = "cardButton">Volver</button>
      </Link> 
      </article>
    </>
  );
};
export default CharacterDetail;
