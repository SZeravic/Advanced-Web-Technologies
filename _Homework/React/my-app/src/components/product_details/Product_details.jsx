import React, { Component } from "react";

class Product_details extends Component {
  state = {
    id: null
  };

  componentDidMount() {
    let id = this.props.match.params.product_id;
    this.setState({
      id: id
    });
  }

  render() {
    return (
      <div className="container">
        <h4> {this.state.id} </h4>
        <h1>Product list</h1>
      </div>
    );
  }
}

export default Product_details;
