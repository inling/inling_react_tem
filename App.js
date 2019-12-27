import React from 'react';
import './App.scss';
import 'antd/dist/antd.css';
import '../assets/style/_color.scss';
import '../assets/style/_common.scss';
import '../assets/style/_reset.scss';
import Home from './pages/home/home';
import Login from './pages/login/login';
import Register from './pages/register/register';
import {BrowserRouter , Route, Switch} from 'react-router-dom';
function App() {
  return (
    <div style={{minWidth:'320px'}}>
      <BrowserRouter >
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/register" component={Register}/>
        </Switch>
      </BrowserRouter >
    </div>
  );
}

export default App;

/**v1.0.0 */
