import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Components/Header.jsx'
import Stock from './Components/Stock.jsx'

const App = ()=> {
  return (
    <div className="app">
      <Header name="Elderen" login="Logout" />
      <Stock />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("app"));