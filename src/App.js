import React, {Component} from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import Navigation from './components/Navigation'
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import Login from './components/Login';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import PrivateRoute from "./components/PrivateRoute"
import Default from './components/Default';

class App extends Component{


  render() {
   return ( 
    <React.Fragment>
      <Router>
        <Navigation/>
          <Switch>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/" component={Homepage}/>
            <Route component={Default}/>
          </Switch>
        <Footer/>
      </Router>

    </React.Fragment>
    

    );
  }
}
export default App;
