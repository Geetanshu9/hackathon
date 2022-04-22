import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Map_ from './components/map.js'

function App() {
  return (
    <>
     <Router>
        
        <Switch>
          <Route path="/">
            <Map_ />
          </Route>
        </Switch>

      </ Router>
    </>
  );
}

export default App;
