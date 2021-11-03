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
import Penny from "./components/Penny";
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
            <Route exact path="/electra-project" component={Electra} />
            <Route exact path="/Penny-project" component={Penny} />
            <Route
              exact
              path="/marketing-channels"
              component={MarketingChannels}
            />
            <Route exact path="/gaming-hub" component={GamingHub} />
            <Route exact path="/mobile" component={Mobile} />
            <Route component={Default} />
          </Switch>
          <Footer />
        </Router>
      </React.Fragment>
    );
  }
}
export default App;
