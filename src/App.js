import React from 'react';
import Homepage from './views/homepage/homepage.component.jsx'
import './App.css';
import { Route, Switch } from 'react-router-dom';
import ShopPage from './views/shop/shop.component.jsx';



function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/shop' component={ShopPage} />
        
      </Switch>
    </div>
  );
}

export default App
