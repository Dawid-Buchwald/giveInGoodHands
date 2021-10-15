import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import HomeAbout from './components/HomeAbout';
import HomeThreeColumns from './components/HomeThreeColumns';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import LogOut from './components/LogOut';
import HomeContact from './components/HomeContact';




function App() {
  return (
    <Router>
        
        <Switch>
          <Route exact path="/logowanie" component={LogIn} />
          <Route exact path="/rejestracja" component={SignUp} />
          <Route exact path="/wylogowano" component={LogOut} />
          <Route exact path="/" component={Home} />
          <Route exact path="/o co chodzi" component={HomeThreeColumns} />
          <Route exact path="/o nas" component={HomeAbout} />
          <Route exact path="/kontakt" component={HomeContact} />
        </Switch>
    </Router>
  );
}

export default App;
