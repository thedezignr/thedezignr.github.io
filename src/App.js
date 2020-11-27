import './App.css';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Splash from './components/splash/Splash';
import { useState, useEffect, Suspense, lazy as lazyLoad } from 'react';
import LoveFootball from './components/portfolio/love_football/Index';
import LoanUp from './components/portfolio/loan_up/Index';
import Inventopal from './components/portfolio/inventopal/Index';
import Hexcord from './components/portfolio/hexcord/Index';
import PizzaJungle from './components/portfolio/pizza_jungle/Index';
import Deliverie from './components/portfolio/deliverie/Index';
import Spinero from './components/portfolio/spinero/Index';
import Sprintrip from './components/portfolio/sprintrip/Index';

const Header = lazyLoad(() => import('./components/Header/Index'));
const Highlight = lazyLoad(() => import('./components/Highlight/Index'));
const Home = lazyLoad(() => import('./components/Home/Index'));
const Footer = lazyLoad(() => import('./components/footer/Index'));
const GenesysFacilitator = lazyLoad(() => import('./components/experience/GenesysFacilitator'));
const GenesysDesigner = lazyLoad(() => import('./components/experience/GenesysDesigner'));
const Tenece = lazyLoad(() => import('./components/experience/Tenece'));
const Portfolio = lazyLoad(() => import('./components/portfolio/Index'));

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
      <Suspense fallback={<Splash />}>
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
          <Route path="/p/love_football">
            <Header back />
            <LoveFootball />
            <Footer />
          </Route>
          <Route path="/p/loan_up">
            <Header back />
            <LoanUp />
            <Footer />
          </Route>
          <Route path="/p/inventopal">
            <Header back />
            <Inventopal />
            <Footer />
          </Route>
          <Route path="/p/hexcord">
            <Header back />
            <Hexcord />
            <Footer />
          </Route>
          <Route path="/p/pizza_jungle">
            <Header back />
            <PizzaJungle />
            <Footer />
          </Route>
          <Route path="/p/deliverie">
            <Header back />
            <Deliverie />
            <Footer />
          </Route>
          <Route path="/p/spinero">
            <Header back />
            <Spinero />
            <Footer />
          </Route>
          <Route path="/p/sprintrip">
            <Header back />
            <Sprintrip />
            <Footer />
          </Route>
        </Switch>
      </Suspense>
    </Router>
    );
}

export default App;
