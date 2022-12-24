import { BrowserRouter, Switch, Route, Redirect, Link } from 'react-router-dom';
import About from "./about";
import Home from "./home";

export default function Root(props) {
  // return <section>{props.name} is mounted!</section>;
  return (
    <BrowserRouter basename='react'>
      <div>
        <Link to='/home'>Home</Link>
        <Link to='/about'>About</Link>
      </div>
      <Switch>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/home'>
          <Home />
        </Route>
        <Route path='/'>
          <Redirect to='/home' />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
