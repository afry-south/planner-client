import React, { Component } from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import Main from './components/Main/index';
import './App.css';
import  { BrowserRouter as  Router, Route, Switch } from 'react-router-dom'; 
import NotFound from './components/ErrorHandling/index';

class App extends Component {
  render() {
    return (
      <Router>
        <MuiThemeProvider>
          <div className="App">
          <Switch>
            <Route exact path="/" component={Main}/>
            <Route exact path="*" component={NotFound}/>
          </Switch>
          </div>
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;
