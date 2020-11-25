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
    this.filter = this.filter.bind(this);
    this.renderCharacterDetail = this.renderCharacterDetail.bind(this);
  }
  //Fetch
  componentDidMount() {
    getDataFromApi().then((data) => {
      this.setState(
        {
          data: data.results,
        },
        () => this.filter()
      );
    });
  }

  //Filtro
  handleInput(value) {
    this.setState(
      {
        inputValue: value,
      },
      () => this.filter()
    );
  }

  filter() {
    const filterMortyCard = this.state.data.filter((cardFiltred) =>
      cardFiltred.name
        .toLowerCase()
        .includes(this.state.inputValue.toLowerCase())
    );
    this.setState({ dataFilter: filterMortyCard });
    if (filterMortyCard.length === 0) {
      this.setState({
        textAlert: `No hay ningún personaje que coincida con la palabra ${this.state.inputValue}`,
      });
    }
  }

  // Tarjeta de detalles del personaje
  renderCharacterDetail(props) {
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
    const MortyDataFilter = this.state.dataFilter;
    const inputValue = this.state.imputValue;
    return (
      <>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Filters inputValue={inputValue} handleInput={this.handleInput} />
            {this.state.dataFilter.length === 0 ? (
              <CharacterNotFound value={this.state.textAlert} />
            ) : (
              <CharacterList dataMortylist={MortyDataFilter} />
            )}
          </Route>
          <Route path='/:id' render={this.renderCharacterDetail} />
        </Switch>
      </>
    );
  }
}

export default App;
