import React, { Component } from 'react';
import './App.css';
import PdfViewer from './components/PdfViewer';
class App extends Component {
  render() {
    return (
      <div className="App">
        <PdfViewer/>
      </div>
    );
  }
}

export default App;
