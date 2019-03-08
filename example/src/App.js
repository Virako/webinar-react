import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class Card extends Component {

  render() {
    return(
      <div class="ficha">
        <h1>{this.props.name}</h1>
        <h2>{this.props.species}</h2>
        <img src={this.props.image}></img>
      </div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      filter: ""
    }
  }

  componentDidMount() {
    fetch('characters.json')
      .then(function(response) {
        return response.json();
      })
      .then((myJson) => {
        this.setState({characters: myJson})
      });
  }
  handleInput = (event) => {
    this.setState({filter: event.target.value});
    console.log(this.state.filter);
  }
  render() {
    return (
      <div>
        <input onChange={this.handleInput}/><br/>
        { this.state.characters.map((ch, i) => {
          if (ch.name.includes(this.state.filter)) {
          return <Card key={i} name={ch.name} species={ch.species} image={ch.image}/>;
          }
        })}
      </div>
    );
  }
}

export default App;
