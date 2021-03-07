import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Menu from './pages/Menu';
import Order from './pages/Order';

// TODO Create a data object for menu page to map over
// FIXME data.js in src folder is for hero page. Loop over the objects and create components to display the data
// TODO Each page will have a separate data object to map over

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/about' component={About}></Route>
        <Route path='/contact' component={Contact}></Route>
        <Route path='/menu' component={Menu}></Route>
        <Route path='/order' component={Order}></Route>
        <Route path='/' component={Home} exact></Route>
      </Switch>
    </Router>
  );
}

export default App;
