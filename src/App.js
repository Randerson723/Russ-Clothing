import React from 'react';
import Homepage from './views/homepage/homepage.component.jsx'
import './App.css';
import { Route, Switch } from 'react-router-dom';
import ShopPage from './views/shop/shop.component.jsx';
import Header from './components/header/header.component'



function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App
