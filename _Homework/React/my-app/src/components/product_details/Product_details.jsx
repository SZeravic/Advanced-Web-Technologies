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
        <h2>Product list</h2>
        <h4>This is specific Product placeholder</h4>
        <h5>This product has an ID of: {this.state.id} </h5>
      </div>
    );
  }
}

export default Product_details;
