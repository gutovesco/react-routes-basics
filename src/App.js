import React from 'react';
import { Link, Route } from 'react-router-dom'
import './App.css';
import routes from './routes';

function App() {
  return (
    <>
    <div>
      <Link to="/">Home</Link>
      <Link to="/user">user</Link>
    </div>
    {routes.map((value, key) => {
      return <Route key={key} path={value.path} component={value.component} exact={value.exact}></Route>
    })}
    </>
  );
}

export default App;
