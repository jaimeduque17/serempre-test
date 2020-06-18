import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Tasks from './components/Tasks';
import NewTask from './components/NewTask';
import EditTask from './components/EditTask';


function App() {
  return (
    <Router>
      <Header />
      <div className="container mt-5">
        <Switch>
          <Route exact path="/" component={Tasks} />
          <Route exact path="/tasks/new" component={NewTask} />
          <Route exact path="/tasks/edit/:id" component={EditTask} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
