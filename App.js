import React from 'react';
import './App.scss';
import Home from './pages/home/home'
import Login from './pages/login/login'
import Register from './pages/register/register'
import {BrowserRouter , Route, Switch} from 'react-router-dom';
function App() {
  return (
    <div>
      <BrowserRouter >
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/login" component={Login}/>
            <Register exact path="/register" component={Register}/>
        </Switch>
      </BrowserRouter >
    </div>
  );
}

export default App;
