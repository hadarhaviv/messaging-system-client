import React from 'react';
import './App.scss';
import Dashboard from './Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <div className="navbar">navbar</div>
      <div className="main_view">
        <div className="sidebar">side bar</div>
        <Dashboard view={'inbox'} />
      </div>
    </div>
  );
}

export default App;
