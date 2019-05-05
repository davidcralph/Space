import React, { Component } from 'react';
import { render } from 'react-dom';
import Title from './Components/Title';
import './style.css';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Title></Title>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
