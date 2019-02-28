import React, { Component } from "react";
import { Link } from 'react-router-dom';
import ball from "../../assets/images/glasses_5.png";


// import { Link } from "react-router-dom";

export default class Product extends Component {
  render() {
    return (
    <div className="post card" key={ this.props.product.id}>
        <div className="card-content">
        {/* <img className="imges" src={ball} alt="Product"/> */}
        <img className="imges" src="../../assets/images/glasses_5.png" alt="Product"/>
        <Link to={ "./" + this.props.product.id }>
        <span className="card-title">{ this.props.product.naziv }</span>
        </Link>
        <p> { this.props.product.opis } </p>
        
        </div>
    </div>
      
  )}
}


