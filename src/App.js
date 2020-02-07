import React from 'react';
import './App.css';
import Dashboard from './components/notes/Dashboard';
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import Note from './components/notes/Note'

function App() {
  return (
    <BrowserRouter>
      <div className="App container">
        <h1 className="text-center">Notebook</h1>
        <Switch>
          <Route exact path="/notebook" component={Dashboard} />
          <Route path="/notebook/:note_id" component={Note} />
          <Redirect to='/notebook'/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
