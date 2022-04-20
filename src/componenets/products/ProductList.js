import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Badge, Table } from "reactstrap";

import { bindActionCreators } from "redux";
import * as productsActions from "../../redux/actions/productsActions";
import * as summaryActions from "../../redux/actions/summaryActions";
import * as alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';
import {Link} from "react-router-dom"

class ProductList extends Component {
  componentDidMount() {
    this.props.actions.getProducts();
   
  }

  addSummary = (product) => {
    console.log("burdas");
    
  
    this.props.actions.getProductToSummary(product);
    
      alertify.success(product.product.productName + ' added to cart.'); 
 

  };

  render() {
    return (
      <div>
        <h3>
          {" "}
          <Badge color="warning"> Products List </Badge>{" "}
          <Badge>
            {this.props.currentCategory.categoryName}
          </Badge>{" "}
        </h3>

        <Table>
          <thead>
            <tr>
              <th><Badge color="primary">#</Badge></th>
              <th> <Badge color="info">Product Name  </Badge></th>
              <th> <Badge color="info">Quantity PerUnit </Badge></th>
              <th> <Badge color="info">Unit Price </Badge></th>
              <th> <Badge color="info">Units In Stock </Badge></th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map((product) => (
              <tr key={product.id}>
                <th> <Badge>{product.id}</Badge></th>
                <th><Link to={"/saveproduct/" + product.id}> {product.productName} </Link> </th>
                <th>{product.quantityPerUnit}</th>
                <th>{product.unitPrice}</th>
                <th>{product.unitsInStock}</th>
                <th>
                  <Button
                    color="danger"
                    onClick={() => this.addSummary({product,quantity:1})}
                  >
                    add
                  </Button>{" "}
                </th>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    products: state.productsListReducer,
    currentCategory: state.changeCategoryReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getProducts: bindActionCreators(productsActions.getProducts, dispatch),
     
      getProductToSummary:bindActionCreators(summaryActions.getProductToSummary,dispatch)
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
