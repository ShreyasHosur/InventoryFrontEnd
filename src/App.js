import React from 'react';
import './App.css';
import Home from './Containers/Home';
import {Switch , Route} from 'react-router-dom';
import Store from './Containers/ProductStore/Store'
import ProductForm from './Containers/ProductStore/ProductForm/ProductForm';

function App() {
  return (
    <div className="App">
      <Switch>
      <Route path="/store" exact component={Store}/>
      <Route path="/store/:id" exact component={ProductForm}/>
      <Route path="/" exact component={Home}/>

      </Switch>

    </div>
  );
}

export default App;
