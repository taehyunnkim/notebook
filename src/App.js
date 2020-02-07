import React from 'react';
import './App.css';
import Dashboard from './components/notes/Dashboard';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Note from './components/notes/Note'

function App() {
  return (
    <BrowserRouter>
      <div className="App container">
        <h1 className="text-center">Notebook</h1>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/:note_id" component={Note} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
