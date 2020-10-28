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
      <Switch>
        <Route path="/" exact>
          <Suspense fallback={<Splash />}>
            <Header />
            <Highlight />
            <Footer forHighlight />
          </Suspense>
        </Route>
        <Route path="/about">
          <Suspense fallback={<Splash />}>
            <Header active="about" />
            <Home />
            <Footer />
          </Suspense>
        </Route>
        <Route path="/genesys/facilitator">
          <Suspense fallback={<Splash />}>
            <Header back />
            <GenesysFacilitator />
            <Footer forHighlight />
          </Suspense>
        </Route>
        <Route path="/genesys/designer">
          <Suspense fallback={<Splash />}>
            <Header back />
            <GenesysDesigner />
            <Footer />
          </Suspense>
        </Route>
        <Route path="/tenece">
          <Suspense fallback={<Splash />}>
            <Header back />
            <Tenece />
            <Footer />
          </Suspense>
        </Route>
        <Route path="/portfolio">
          <Suspense fallback={<Splash />}>
            <Header active="portfolio" />
            <Portfolio />
            <Footer />
          </Suspense>
        </Route>
      </Switch>
    </Router>
    );
}

export default App;
