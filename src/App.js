import React, { Component } from 'react';
import './App.css';
import './bootstrap.m.css';
import FormApp from './form';

class App extends Component {
  render() {
    return (
      <div className="container">
        <FormApp email="karan@gmail.com" />
      </div>
    );
  }
}

export default App;
