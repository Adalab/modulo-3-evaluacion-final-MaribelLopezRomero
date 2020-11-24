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
      dataFilter: [],

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
      // const data = this.state.data
      // if (this.state.inputvalue !== null) {
      //   const mortyData = this.state.data;
      //   const filterMortyCard = mortyData.filter((cardFiltred) =>
      //     cardFiltred.name.toUpperCase().includes(value.toUpperCase())
      //   );
      //   this.setState({
      //     data: filterMortyCard,
      //   });
      // }
      // if (this.state.inputValue === '') {
      //   this.setState({
      //     data: [],
      //   });
      // }
  }

  filter() {
    console.log (this.state.inputValue)
    const filterMortyCard = this.state.data.filter((cardFiltred) =>
      cardFiltred.name
        .toLowerCase()
        .includes(this.state.inputValue.toLowerCase())
    );
    this.setState({ dataFilter: filterMortyCard });
  }

//   filter() {
//     if (this.state.inputvalue !== null) { const filterMortyCard = this.state.data.filter((cardFiltred) =>
//       cardFiltred.name
//         .toLowerCase()
//         .includes(this.state.inputValue.toLowerCase())
//     );
//     this.setState({ data: filterMortyCard });

//     } else { this.setState({
//       data: [],}

//   }
// }

  render() {
    // // Pasamos los datos del archivo json a través del estado del componente y luego por props a su componente hijo
    const MortyDataFilter = this.state.dataFilter;
    const inputValue = this.state.imputValue;
    return (
      <>
       <Filters
          inputValue={inputValue}
          handleInput={this.handleInput} //props para que filer avise a app del evento
        />
        <CharacterList
          dataMortylist={MortyDataFilter} // para filtrar tengo que pasarte el estado, donde se guardara el array completo y el filtrado en funcion de si tengo algo en el value o no
        />
       
      </>
    );
  }
}

export default App;
