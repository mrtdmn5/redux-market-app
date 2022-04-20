import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Table,Button, Badge
} from "reactstrap";
import { bindActionCreators } from "redux";
import *as summaryActions from "../../redux/actions/summaryActions";
import  "../../style/commonStyle.css"




 class CartDetails extends Component {


  cartlist() {
    return (
    <Table>
    <thead>
      <tr>
        <th>#</th>
        <th>Product Name</th>
        <th>Quantity PerUnit</th>
        <th>Unit Price</th>
        <th>Units In Stock</th>
        <th>Quantity</th>
      </tr>
    </thead>
    <tbody>
      {this.props.cartSummary.map((item) => (
        <tr key={item.product.id}>
          <th>{item.product.id}</th>
          <th>{item.product.productName}</th>
          <th>{item.product.quantityPerUnit}</th>
          <th>{item.product.unitPrice}</th>
          <th>{item.product.unitsInStock}</th>
          <th>
            <Badge color="success">{item.quantity} </Badge>
          
          </th>
          <th>
            <Button
              color="danger"
              onClick={() =>this.props.actions.removeProductFromSummary(item)}
            >
              Remove
            </Button>{" "}
          </th>
        </tr>
      ))}
    </tbody>
  </Table>);
  }

  emptyCart(){
    return (
      <div  > 
        <div style={{justifyContent:"center", display:"flex", marginTop:"7rem"}}>
          Cart is Empty
        </div>
        
      </div>
    );
  }


  render() {
    return (
      <div>
          {this.props.cartSummary.length>0?this.cartlist():this.emptyCart()}

      </div>
    )
  }
}



function mapStateToProps(state) {
  return {
    cartSummary: state.cartSummaryReducer,
  };
}
  
function mapDispatchToProps(dispatch){
  return {
    actions:{
      removeProductFromSummary:bindActionCreators(summaryActions.removeProductFromSummary,dispatch),
      removeAllProductFromSummary:bindActionCreators(summaryActions.removeAllProductFromSummary,dispatch)
    }
  }
}



export default connect(mapStateToProps,mapDispatchToProps)(CartDetails);
