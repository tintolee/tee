import React, { Component } from 'react';
import Input from './components/input';
import Result from './components/result'
import axios from "axios"

import './App.css';



class App extends Component {
  constructor() {
    super();
    this.state = {
      box:{},
      stock: {
      id:'',
      input: '',
      price: '',
      high: '',
      low: '',
      OutstandingShares: '',
    }
    }

  }

  componentDidMount() {
    this.refreshList();
  }

  refreshList = () => {
    axios
      .get("/api/stock/")
      .then((res) => this.setState({ stock: res.data }))
      
      .catch((err) => console.log(err));
  };
  onButtonSubmit = (stock) => {
    if (stock.id) {
      axios
        .put(`/api/stock/${stock.id}/`, stock)
        .then((res) => this.refreshList());
        
      return;
    }
   
  }
  display = (box) => {
    this.setState({box: box});
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  render() {
    
    return (
      <div className="App">
        
       
           
              
              <Input
                onInputChange={this.onInputChange}
                onButtonSubmit={this.onButtonSubmit}
              />
              
            
           
         
      </div>
    );
  }
}

export default App;