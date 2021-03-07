import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/about' component={About}></Route>
        <Route path='/' component={Home} exact></Route>
      </Switch>
    </Router>
  );
}

export default App;
