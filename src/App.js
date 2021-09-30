import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import Friends from './Components/Home/Friends/Friends';
import About from './Components/About/About';
import NotFound from './Components/NotFound/NotFound';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Friend from './Components/Friend/Friend';
import Header from './Components/Header/Header';
import FriendDetail from './Components/FriendDetail/FriendDetail';
import Culture from './Components/Culture/Culture';

function App() {
  return (
    <div className="App">



      <Router>
        <Header></Header>

        <Switch>
          <Route path="/home">
            <Home></Home>

          </Route>
          <Route path="/about">
            <About></About>

          </Route>
          <Route path="/friends">
            <Friends></Friends>
          </Route>
          <Route path="/friend/:friendId">
            <FriendDetail>
            </FriendDetail>
          </Route>
          <Route exact path="/friend/:friendId">
            <About></About>
          </Route>
          <Route exact path="/about/culture">
            <Culture></Culture>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>





      {/* <BrowserRouter>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/friends">
            <Friends></Friends>
          </Route>
          <Route path="not found">
            <NotFound></NotFound>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
