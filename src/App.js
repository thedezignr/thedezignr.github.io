import './App.css';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Splash from './components/splash/Splash';
import { useState, useEffect, Suspense, lazy as lazyLoad } from 'react';

const Header = lazyLoad(() => import('./components/Header/Index'));
const Highlight = lazyLoad(() => import('./components/Highlight/Index'));
const Home = lazyLoad(() => import('./components/Home/Index'));
const Footer = lazyLoad(() => import('./components/footer/Index'));
const GenesysFacilitator = lazyLoad(() => import('./components/experience/GenesysFacilitator'));
const GenesysDesigner = lazyLoad(() => import('./components/experience/GenesysDesigner'));
const Tenece = lazyLoad(() => import('./components/experience/Tenece'));
const Bitfinex = lazyLoad(() => import('./components/experience/Bitfinex'));
const Portfolio = lazyLoad(() => import('./components/portfolio/Index'));
const LoveFootball = lazyLoad(() => import('./components/portfolio/love_football/Index'));
const LoanUp = lazyLoad(() => import('./components/portfolio/loan_up/Index'));
const Inventopal = lazyLoad(() => import('./components/portfolio/inventopal/Index'));
const Hexcord = lazyLoad(() => import('./components/portfolio/hexcord/Index'));
const PizzaJungle = lazyLoad(() => import('./components/portfolio/pizza_jungle/Index'));
const Deliverie = lazyLoad(() => import('./components/portfolio/deliverie/Index'));
const Spinero = lazyLoad(() => import('./components/portfolio/spinero/Index'));
const Sprintrip = lazyLoad(() => import('./components/portfolio/sprintrip/Index'));


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
            <Header back="/about" />
            <GenesysFacilitator />
            <Footer withBorderTop />
          </Route>
          <Route path="/genesys/designer">
            <Header back="/about" />
            <GenesysDesigner />
            <Footer />
          </Route>
          <Route path="/tenece">
            <Header back="/about" />
            <Tenece />
            <Footer />
          </Route>
          <Route path="/bitfinex">
            <Header back="/about" />
            <Bitfinex />
            <Footer />
          </Route>
          <Route path="/portfolio">
            <Header active="portfolio" />
            <Portfolio />
            <Footer small />
          </Route>
          <Route path="/p/love_football">
            <Header back="/portfolio" hideWork />
            <LoveFootball />
            <Footer />
          </Route>
          <Route path="/p/loan_up">
            <Header back="/portfolio" hideWork />
            <LoanUp />
            <Footer />
          </Route>
          <Route path="/p/inventopal">
            <Header back="/portfolio" hideWork />
            <Inventopal />
            <Footer />
          </Route>
          <Route path="/p/hexcord">
            <Header back="/portfolio" hideWork />
            <Hexcord />
            <Footer />
          </Route>
          <Route path="/p/pizza_jungle">
            <Header back="/portfolio" hideWork />
            <PizzaJungle />
            <Footer />
          </Route>
          <Route path="/p/deliverie">
            <Header back="/portfolio" hideWork />
            <Deliverie />
            <Footer />
          </Route>
          <Route path="/p/spinero">
            <Header back="/portfolio" hideWork />
            <Spinero />
            <Footer />
          </Route>
          <Route path="/p/sprintrip">
            <Header back="/portfolio" hideWork />
            <Sprintrip />
            <Footer />
          </Route>
        </Switch>
      </Suspense>
    </Router>
    );
}

export default App;
