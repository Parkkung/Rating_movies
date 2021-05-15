import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import SimpleBottomNavigation from "./components/MainNav";
import Movies from "./Pages/Movies/Movies";
import Search from "./Pages/Search/Search";
import { Container } from "@material-ui/core";
import Home from './components/Home'
import LogIn from './components/LogIn'
import SignUp from './components/SignUp'
import Dashboard from './components/Dashboard'
import { AuthProvider } from './components/Auth'

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <div className="app">
          <Container>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/LogIn" component={LogIn} />
              <Route path="/SignUp" component={SignUp} />
              <Route path="/Dashboard" component={Dashboard} />
              <Route path="/movies" component={Movies} />
              <Route path="/search" component={Search} />
            </Switch>
          </Container>
        </div>
        {/* <SimpleBottomNavigation /> */}
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
