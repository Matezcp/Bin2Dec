import Navbar from "./NavBar";
import Home from "./Home";
import About from "./About";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path='/Bin2Dec/'>
              <Home />
            </Route>
            <Route exact path='/Bin2Dec/about'>
              <About />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
