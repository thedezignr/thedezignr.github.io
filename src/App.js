import './App.css';
import Header from './components/Header/Index';
import Highlight from './components/Highlight/Index';
import Home from './components/Home/Index';
import Footer from './components/footer/Index';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import GenesysFacilitator from './components/portfolio/GenesysFacilitator';
import GenesysDesigner from './components/portfolio/GenesysDesigner';
import Tenece from './components/portfolio/Tenece';

function App() {
  return (
    <Router>
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
      </Switch>
    </Router>
  );
}

export default App;
