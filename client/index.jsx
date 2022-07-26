import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Components/Header.jsx'

const App = ()=> {
  return (
    <div className="app">
      <Header name="Elderen" login="Logout" />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("app"));