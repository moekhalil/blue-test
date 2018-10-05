import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import logo from './logo.svg';
import Fizzbuzz from './components/Fizzbuzz';
import Reversed from './components/Reversed';
import ReversedSentence from './components/ReversedSentence';
import Todo from './components/Todo';
import './App.css';

const appStore = store();

class App extends Component {
  render() {
    return (
      <Provider store={appStore}>
        <div className="app-container">
          <header className="header">
            <img src={logo} className="logo" alt="logo" />
            <div>Moe Khalil - Created from create-react-app</div>
          </header>
          <Fizzbuzz />
          <Reversed />
          <ReversedSentence />
          <Todo />
        </div>
      </Provider>
    );
  }
}

export default App;
