import React, { Component } from "react";
import Aside from "./components/aside/Aside";
import Header from "./components/header/Header";
// import Product from "./components/product/Product";
import Products from "./components/products/Products";
import Product_details from "./components/product_details/Product_details.jsx";
import Footer from "./components/footer/Footer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      products: [],
      favorites: []
    };
  }

  componentDidMount() {
    this.fetchProducts();    
  }

  fetchProducts(){
    fetch(`./products.json`, {
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }  
      })
      .then((response) => response.json())
      .then(data => {
        this.setState({
          products: data
        });
      });      
  }

  render() {

    return (
      <BrowserRouter>
        <div className="site-container">
          <Header />

          <main className="site-main">
            <div className="content">
              <Switch>
                <Route exact path="/" render={() => ( 
                <Products 
                        productList={ this.state.products }
                /> )} 
                />
                {/* <Route path="/:product_id" render={() => ( 
                <Product_details
                        productList={ this.state.products }
                /> )} 
                /> */}
                <Route path="/:product_id" component={Product_details} />
              </Switch>
            </div>
            <Aside />
          </main>

          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
