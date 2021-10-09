import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Home from './components/Home';
import HomeHeader from './components/HomeHeader';


function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
    </Router>
  );
}

export default App;
