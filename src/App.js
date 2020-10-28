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
        </Switch>
      </Suspense>
    </Router>
    );
}

export default App;
