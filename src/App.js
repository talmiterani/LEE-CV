import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Work from "./components/Work";
import Academic from "./components/Academic";
import Contact from "./components/Contact";
import About from "./components/About";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Default from "./components/Default";
import Electra from "./components/Electra";
import Mobile from "./components/Mobile";
import MarketingChannels from "./components/MarketingChannels";
import GamingHub from "./components/GamingHub";

// import GoTop from "./components/ScrollToTop";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Navigation />
          {/* <GoTop scrollStepInPx="50" delayInMs="30" /> */}

          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/" component={Work} />
            <Route exact path="/work" component={Work} />
            <Route exact path="/academic" component={Academic} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <PrivateRoute exact path="/electra-project" component={Electra} />
            <PrivateRoute
              exact
              path="/marketing-channels"
              component={MarketingChannels}
            />
            <PrivateRoute exact path="/gaming-hub" component={GamingHub} />
            <PrivateRoute exact path="/mobile" component={Mobile} />
            <Route component={Default} />
          </Switch>
          <Footer />
        </Router>
      </React.Fragment>
    );
  }
}
export default App;
