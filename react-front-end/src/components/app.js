import React, { Component } from 'react';
import {
    BrowserRouter,
    Route,
    Switch,
} from 'react-router-dom';
import './App.css';
import Navigation from "./navigation/navigation.js";
import Welcome from "./welcome/welcome";


class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <div>
                <Navigation/>
                <div className={"container"}>
                    <div className={"jumbotron"}>
                      <Switch>
                          <Route exact path='/' component={Welcome} />
                          {/*<Route path='/about' component={AboutPage} />*/}
                          {/*<Route path="/projects" component={ProjectsPage} />*/}
                      </Switch>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
  }
}

export default App;
