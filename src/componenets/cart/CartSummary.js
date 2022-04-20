import React, { Component } from "react";
import { connect } from "react-redux";
import {
  DropdownItem,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownToggle,
  Badge,
} from "reactstrap";
import { bindActionCreators } from "redux";
import *as summaryActions from "../../redux/actions/summaryActions";

import * as alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';
import { Link } from "react-router-dom";

class CartSummary extends Component {
  shortProductName(name) {
    return [name].map(function (index) {
      const shortName = index.split("");
      if (shortName.length > 10) {
        shortName.length = 10;
        shortName.push("...");
      }

      return shortName.join("");
    });
  }

  removeAllItem(){

    if (window.confirm()){
      this.props.actions.removeAllProductFromSummary();
      alertify.error("All items removed.");
    }
  }

  renderSummary() {
    return (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          {" "}
          <Badge color="success">Cart</Badge>{" "}
          <Badge color="warning"> {this.props.cartSummary.length} </Badge>
        </DropdownToggle>

        <DropdownMenu>
          {this.props.cartSummary.map((item) => (
            <DropdownItem
             className="spaceBetween"
              key={item.product.id}
            >
              <div style={{ marginRight: "3rem" }}>
                {this.shortProductName(item.product.productName)}
                {" "}
                <Badge color="success">{item.quantity} </Badge>
              </div>

              <div>
                <Badge color="danger" onClick={()=> this.props.actions.removeProductFromSummary(item)}>- </Badge>
              </div>
            </DropdownItem>
          ))}
          
          <DropdownItem   className="spaceBetween" >
         
            <Badge  color="success" > 

            <Link to="/cart" className="editLinktext" >
            Go Cart List
           
            </Link >
            </Badge>

           
          <Badge  onClick={()=>this.removeAllItem() } color="danger" >
            Remove Cart
          </Badge>
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }

  renderEmpty() {
    return (
      <div>
        <Badge color="primary"> Cart Empty</Badge>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.props.cartSummary.length > 0
          ? this.renderSummary()
          : this.renderEmpty()}
      </div>
    );
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



export default connect(mapStateToProps,mapDispatchToProps)(CartSummary);
