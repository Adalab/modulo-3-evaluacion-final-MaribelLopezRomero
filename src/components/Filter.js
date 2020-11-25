import React from 'react';
import '../stylesheets/Filter.scss';

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.searchCharacter = this.searchCharacter.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }
  searchCharacter(event) {
    const value = event.target.value;
    this.props.handleInput(value);
  }

  handleFormSubmit(event) {
    event.preventDefault();
  }
  render() {
    return (
      <form className='form' onSubmit={this.handleFormSubmit}>
        <label htmlFor='title'></label>
        <input
          className='form_input'
          placeholder='¿A quien estas buscando?'
          type='text'
          id='title'
          name='title'
          value={this.props.inputValue}
          onChange={this.searchCharacter}
        />
      </form>
    );
  }
}

export default Filter;
