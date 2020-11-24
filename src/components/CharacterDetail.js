import React from 'react';
import '../stylesheets/App.scss';

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
  const {name, image, species, episode, status, origin } = props.data;
  return (
    <div >
      <img
        src={image}
        alt={name}
        title={name}
      />
      <h2>{name}</h2>
      <h2>{species}</h2>
      <h2>{episode.length}</h2>
      <h2>{status}</h2>
      <h2>{origin.name}</h2>
    </div>

  );
}
export default CharacterDetail;
