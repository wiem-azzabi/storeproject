import './App.css';
import { Route, Switch } from "react-router-dom";
import Navbaar from './components/Navbaar.js';
import Footer from './components/Footer.js';
import Carouselhome from './components/Carouselhome.js';
import Listmen from './components/Men/Listmen.js';
import Listwomen from './components/Women/Listwomen.js';
import Cover from './components/Men/Cover.js';
import Cover2 from './components/Women/Cover2.js';
import Welcome from './components/Welcome.js';
function App() {
  return (
    <div className="App">
      
      <Switch>
        <Route exact path="/">
          <Navbaar/>
          <Welcome/>
          <Carouselhome/>
          <Footer/>
        </Route>
        <Route exact path="/Men">
          <Navbaar/>
          <Cover/>
          <Listmen/>
          <Footer/>
        </Route>
        <Route exact path="/Women">
          <Navbaar/>
          <Cover2/>
          <Listwomen/>
          <Footer/>
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;
