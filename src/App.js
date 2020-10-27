import './App.css';
import Header from './components/Header/Index';
import Highlight from './components/Highlight/Index';
import Home from './components/Home/Index';
import Footer from './components/footer/Index';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import GenesysFacilitator from './components/experience/GenesysFacilitator';
import GenesysDesigner from './components/experience/GenesysDesigner';
import Tenece from './components/experience/Tenece';
import Portfolio from './components/portfolio/Index';
import Splash from './components/splash/Splash';
import { useState, useEffect } from 'react';

function App() {
  const [showSplash, shouldShowSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      shouldShowSplash(false);
    }, 3000);
  }, []);

  return showSplash ?
    <Splash /> :
    (<Router>
      <Switch>
        <Route path="/" exact>
          <Header />
          <Highlight />
          <Footer forHighlight />
        </Route>
        <Route path="/about">
          <Header active="about" />
          <Home />
          <Footer />
        </Route>
        <Route path="/genesys/facilitator">
          <Header back />
          <GenesysFacilitator />
          <Footer forHighlight />
        </Route>
        <Route path="/genesys/designer">
          <Header back />
          <GenesysDesigner />
          <Footer />
        </Route>
        <Route path="/tenece">
          <Header back />
          <Tenece />
          <Footer />
        </Route>
        <Route path="/portfolio">
          <Header active="portfolio" />
          <Portfolio />
          <Footer />
        </Route>
      </Switch>
    </Router>
    );
}

export default App;
