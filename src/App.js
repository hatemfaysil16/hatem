import { Component } from 'react';
import {Switch,Route} from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Component/Navbar';
import ProductList from './Component/ProductList';
import Details from './Component/Details';
import Cart from './Component/Cart';
import Default from './Component/Default';


class App extends Component{
  render(){
    return(
     <>
      <Navbar/>
        <Switch>
          <Route exact path="/" component={ProductList}/>
          <Route path="/details" component={Details}/>
          <Route path="/cart" component={Cart}/>
          <Route path="/default" component={Default}/>
        </Switch>
     </>
    );
  }
}

export default App;
