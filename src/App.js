import React from 'react'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Settings from './components/Settings/Settings'
import Single from './components/pages/Single/Single'
import Topbar from './components/topbar/TopBar'
import Write from './components/Write/Write'
import Home from './components/pages/Home'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

export default function App() {
  const user = false;
  return (
    <Router>
      <Topbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/register">
          {user ? <Home />: <Register/>}
        </Route>
        <Route path="/login">
        {user ? <Home />: <Login/>}
        </Route>
        <Route path="/write">
        {user ? <Write/>: <Register/>}
        </Route>
        <Route path="/settings">
        {user ? <Settings />: <Login/>}
        </Route>
        <Route path="/post/:postID">
          <Single />
        </Route>

      </Switch>
    </Router>
  )
}
