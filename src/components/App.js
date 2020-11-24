import React from 'react';
import '../stylesheets/App.scss';
import getDataFromApi from '../services/Fetch';
import CharacterList from './CharacterList';
import Filters from './Filter';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      data: [],
    };
    this.handleInput = this.handleInput.bind(this);
    this.filter = this.filter.bind(this);
  }

  componentDidMount() {
    getDataFromApi().then((data) => {
      console.log(data.results);
      this.setState(
        {
          data: data.results,
        },
        () => this.filter()
      );
    });
  }

  //lifttin, evento de filtrado
  handleInput(value) {
    this.setState(
      {
        inputValue: value,
      },
      () => this.filter()
    );
    //para filtrar
    //   // const data = this.state.data
    //   // if (this.state.inputvalue !== null) {
    //   //   const mortyData = this.state.data;
    //   //   const filterMortyCard = mortyData.filter((cardFiltred) =>
    //   //     cardFiltred.name.toUpperCase().includes(value.toUpperCase())
    //   //   );
    //   //   this.setState({
    //   //     data: filterMortyCard,
    //   //   });
    //   // }
    //   // if (this.state.inputValue === '') {
    //   //   this.setState({
    //   //     data: [],
    //   //   });
    //   // }
    //   // console.log (fecth.results);
  }

  filter() {
    const filterMortyCard = this.state.data.filter((cardFiltred) =>
      cardFiltred.name
        .toLowerCase()
        .includes(this.state.inputValue.toLowerCase())
    );
    this.setState({ data: filterMortyCard });
  }

  render() {
    // // Pasamos los datos del archivo json a través del estado del componente y luego por props a su componente hijo
    const MortyData = this.state.data;
    const inputValue = this.state.imputValue;
    return (
      <>
        <CharacterList
          dataMortylist={MortyData} // para filtrar tengo que pasarte el estado, donde se guardara el array completo y el filtrado en funcion de si tengo algo en el value o no
        />
        <Filters
          inputValue={inputValue}
          handleInput={this.handleInput} //props para que filer avise a app del evento
        />
      </>
    );
  }
}

export default App;
