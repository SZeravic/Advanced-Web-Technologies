import React, { Component } from "react";
// import { Link } from 'react-router-dom';
import Product from "../product/Product";

class Products extends Component {

  state = {
    filtered: [],
    naslov: '',
    id: 0
  }

  componentDidMount() {
    this.state.filtered = this.props.productList;
  }

  handleChange = (e) => {
    this.setState({
      naslov: e.target.value
    })
  }

  // handleChange = (e) => {
  //   let currentList = [];
  //   let newList = [];
  //   if (e.target.value !== "") {
  //     currentList = this.props.items;
  //     newList = currentList.filter(item => {
  //       const lc = item.toLowerCase();
  //       const filter = e.target.value.toLowerCase();
  //       return lc.includes(filter);
  //     });
  //   } else {
  //     newList = this.props.items;
  //   }
  //   this.setState({
  //     filtered: newList
  //   });
  // }

  render() {
    let prod = this.props.productList.filter(data => {
      return  data.id !== this.state.id
    });

    let products = prod.map( product => {
        return <Product key={product.id} product={product} />
    });    

    console.log(prod);

      return (
        <div className="container">
          <h2 className="center"> { this.state.naslov } </h2>
          <input type="text" onChange={this.handleChange}/>
          <h4>Product list</h4>
          <div className="row align-items-center product-list">
            {products.length > 0 ? products : 'No search results found.'}
            {products}
          </div>
        </div>
      );
    }
}
export default Products