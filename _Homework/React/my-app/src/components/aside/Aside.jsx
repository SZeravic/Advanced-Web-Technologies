import React, { Component } from 'react'
import Product from "../product/Product"

class Aside extends Component {

    state = {
        filtered: [],
        naslov: '',
        id: 0
    }

    componentDidMount() {
        this.state.filtered = this.props.favoriteProducts;
    }

    render() {
        let prod = this.props.favoriteProducts.filter(data => {
            return data.id === 2
        });

        let products = prod.map(product => {
            return <Product key={product.id} product={product} />
        });

        console.log(prod);

        return (
            <div className="container">
                <h2 className="center"> {this.state.naslov} </h2>
                <h4>Favorites</h4>
                <div className="row align-items-center product-list">
                    {products.length > 0 ? products : 'No Favorites present.'}
                    {products}
                </div>
            </div>
        );
    }
}

export default Aside