import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Home from './components/Home';
import HomeAbout from './components/HomeAbout';
import HomeSimpleSteps from './components/HomeSimpleSteps';
import HomeThreeColumns from './components/HomeThreeColumns';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';




function App() {
  return (
    <Router>
        
        <Switch>
          <Route exact path="/logowanie" component={LogIn} />
          <Route exact path="/rejestracja" component={SignUp} />
          <Route exact path="/" component={Home} />
          <Route exact path="/o co chodzi" component={HomeThreeColumns} />
          <Route exact path="/o nas" component={HomeAbout} />
        </Switch>
    </Router>
  );
}

export default App;
