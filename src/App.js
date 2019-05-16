import React, { Component } from 'react';
import data from './data/data.json'
import './App.css';
import FilterableProductTable from './components/FilterableProductTable'

class App extends Component {

  state = {
    data: data.data
  }
  
  render() {

    return (
      <div className="App">

      <FilterableProductTable products={this.state.data}/>

      </div>
    );
  }
}

export default App;
