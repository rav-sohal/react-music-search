import React, {Component} from 'react';
import axios from 'axios';
import Header from './components/Header';
import Search from './components/Search';
import Results from './components/Results';

const terms = [
  'drake',
  'balvin',
  'black eyes peas',
  'madonna',
  'weekend',
  'khalid',
];

class App extends Component {

  state = {
    albums: [],
    loading: true,
    title: true, 
    errorMessage: ''
  };

  componentDidMount () {
    this.initValue();
  }

  // componentDidMount () {
  //   fetch ('https://itunes.apple.com/search?term=drake&enitity=album&limit=10') // fetch data
  //     .then (res => res.json ()) // parse to json
  //     .then (responseData => {
  //       // take json data and insert into state using callback
  //       this.setState ({albums: responseData.results});
  //     })
  //     .catch (error => {
  //       // catch errors
  //       console.log ('Error fetching and parsing data', error);
  //     });
  // }

  randomInitValue (element = []) {
    const randomElement = element[Math.floor (Math.random () * element.length)];
    return randomElement;
  }

  initValue = (searchQuery = this.randomInitValue (terms)) => {
    axios
    .get (
      `https://itunes.apple.com/search?term=${searchQuery}&entity=album&limit=10`
    ) // fetch data from iTunes
    .then (response => {
      // axios returns data in json, so just need to upate state
      this.setState (prevState => ({
        // update the album array state to the response
        albums:  response.data.results,
        loading: prevState.false,
      }));
    })
    .catch (error => {
      // catch errors
      if (error) {
      console.log ('Error fetching and parsing data', error);
      this.setState (prevState => ({
        loading: prevState.false,
        errorMessage: 'This is an error' + error
      }));
    } 
    });
    
  }

  performSearch = (searchQuery) => {
    axios
      .get (
        `https://itunes.apple.com/search?term=${searchQuery}&entity=album&limit=10`
      ) // fetch data from iTunes
      .then (response => {
        // axios returns data in json, so just need to upate state
        this.setState ({
          // update the album array state to the response
          albums: response.data.results,
          loading: false,
        });
      })
      .catch (error => {
        // catch errors
        console.log ('Error fetching and parsing data', error)       
      });
      this.setState (prevState => ({
        title: prevState.false,
        errorMessage: prevState.false
      }));
  };

  render () {
    return (
      <div>
        <Header />
        <Search onSearch={this.performSearch} />
        {this.state.title ? <div className="container title"><h4>Todays random selection</h4><hr /></div> : <div className="container"><h4>Results</h4><hr /></div>}
        {this.state.errorMessage ? <div className="container"><h4>Error fetching data, please refresh browser {this.state.errorMessage}</h4></div> : <div className="container"></div>}
        {
        this.state.loading
          ? <div className="container text-center mt-3">
              <div className="spinner-border text-secondary">
                <span className="sr-only text-center">Loading...</span>
              </div>
            </div>
          : <Results data={this.state.albums} />}
      </div>
    );
  }
}

export default App;
