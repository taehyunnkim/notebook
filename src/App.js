import React from 'react';
import './App.css';
import Dashboard from './components/notes/Dashboard';

function App() {
  return (
    <div className="App container">
      <h1 className="text-center">Notebook</h1>
      <Dashboard />
    </div>
  );
}

export default App;
