import React, { Component } from 'react';
import {Button, Container, Jumbotron} from 'reactstrap';
import {
    BrowserRouter,
    Route,
    Switch,
} from 'react-router-dom';
import '../App.css';
import Navigation from "./navigation.js";


class App extends Component {
  render() {
    return (
            <BrowserRouter>
                <div>
                    <Navigation/>
                    <Container>
                      <Jumbotron>
                          <Switch>
                              {/*<Route exact path='/' component={HomePage} />*/}
                              {/*<Route path='/about' component={AboutPage} />*/}
                              {/*<Route path="/projects" component={ProjectsPage} />*/}
                          </Switch>
                      </Jumbotron>
                    </Container>
                </div>

            </BrowserRouter>
    );
  }
}

export default App;
