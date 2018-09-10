import React, { Component } from 'react';
import Editor from '../Editor';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="title">Markdown Editor</h1>
        </header>
        
        <Editor />
      </div>
    );
  }
}

export default App;
