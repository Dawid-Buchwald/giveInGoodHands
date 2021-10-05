import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Home from './components/Home';
import HomeHeader from './components/HomeHeader';

function App() {
  return (
    <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/HomeHeader" component={HomeHeader} />
        </div>
    </Router>
  );
}

export default App;
