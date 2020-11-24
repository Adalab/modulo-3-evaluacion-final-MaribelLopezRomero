import React from 'react';
import '../stylesheets/App.scss';

class Filter extends React.Component {
  constructor (props) {
    super (props);
   this.searchCharacter = this.searchCharacter.bind(this)
   this.handleFormSubmit=this.handleFormSubmit.bind (this)
}
searchCharacter (event) {
  const value = event.target.value;
  this.props.handleInput (value) //funcion que avisa a app de que se activa el evento
}

handleFormSubmit (event) {
  event.preventDefault ();
  this.props.handleFormSubmit()
}
  render() {
    return (
      <form onSubmit= {this.handleFormSubmit}>
            <label htmlFor="title"></label>
            <input
                type="text"
                id="title"
                name="title"
                value= {this.props.inputValue} // pasa por props el nuevo valor del imput (el que el usuario busca)
                onChange= {this.searchCharacter} //Evento para el filtrado.
            />
        </form>
    );
  }
}

export default Filter;