import React from 'react';
import '../stylesheets/App.scss';
import getDataFromApi from '../services/Fetch';
import CharacterList from './CharacterList';
import Filters from './Filter';
import { Route, Switch } from 'react-router-dom';
import CharacterDetail from './CharacterDetail';
import CharacterNotFound from './CharacterNotFound';
import Header from './Header';
import CharacterNotExist from './CharacterNotExItst';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      data: [],
      dataFilter: [],
      textAlert: '',
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleFormSubmit = this.handleFormSubmit(this);
    this.filter = this.filter.bind(this);
    this.renderCharacterDetail = this.renderCharacterDetail.bind(this);
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

  //PreventDefault
  handleFormSubmit(event) {}

  //evento de filtrado
  handleInput(value) {
    this.setState(
      {
        inputValue: value,
      },
      () => this.filter()
    );
  }

  filter() {
    console.log(this.state.inputValue);
    const filterMortyCard = this.state.data.filter((cardFiltred) =>
      cardFiltred.name
        .toLowerCase()
        .includes(this.state.inputValue.toLowerCase())
    );
    this.setState({ dataFilter: filterMortyCard });
//Preguntar como hacer que funcione desde aqui y no desde app
    if (filterMortyCard.length === 0) {
     this.setState({
        textAlert: `No hay ningún personaje que coincida con la palabra ${this.state.inputValue}`
      })
      return (<CharacterNotFound value={this.state.textAlert} />)
      ;
    }
  }

  // pitamos la tarjeta de detalles, para ello en la rruta que queremos que aparezca declaramos la fucion que pinta los datos, despues con un find, decimos que compare la ruta que hemos puesto (nombre., nickname) con los datos dentro del array incial(name)
  renderCharacterDetail(props) {
    console.log(props);
    const id = parseInt(props.match.params.id);
    const dataObj = this.state.data.find((cardDetail) => {
      return cardDetail.id === id;
    });
    if (dataObj) {
      return <CharacterDetail data={dataObj} />;
    } else {
      return <CharacterNotExist />;
    }
  }

  render() {
    // // Pasamos los datos del archivo json a través del estado del componente y luego por props a su componente hijo
    const MortyDataFilter = this.state.dataFilter;
    const inputValue = this.state.imputValue;
    return (
      <>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Filters
              inputValue={inputValue}
              handleInput={this.handleInput} //props para que filer avise a app del evento
              handleFormSubmit={this.handleFormSubmit}
            />
            {this.state.dataFilter.length === 0 ? (
              <CharacterNotFound value = {this.state.textAlert}/>
            ) : ( 
            <CharacterList
              dataMortylist={MortyDataFilter} // para filtrar tengo que pasarte el estado, donde se guardara el array completo y el filtrado en funcion de si tengo algo en el value o no
            />
            )}
          </Route>
          <Route path='/:id' render={this.renderCharacterDetail} />
        </Switch>
      </>
    );
  }
}

export default App;
