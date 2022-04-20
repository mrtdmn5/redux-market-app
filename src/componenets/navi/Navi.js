import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, NavbarToggler, Collapse, Nav, NavbarBrand } from "reactstrap";
import { connect } from "react-redux";
import CartSummary from "../cart/CartSummary";

class Navi extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    return (
      <div>
        <Navbar className="mb-2" color="info" light expand="md">
          <div className="fullWidth spaceAround">
            <div>
              <NavbarBrand style={{padding:0,margin:0, border:"2px solid rgba(255, 255, 255, 0.762)",borderRadius:"10px"}} href="/"><span className="mx-2" style={{ color:"white"}}> Online Shopping
                </span> </NavbarBrand>
              <NavbarToggler />
            </div>
            <div>
              <Collapse style={{}} navbar>
                <Nav navbar>
                  <CartSummary></CartSummary>
                </Nav>
              </Collapse>
            </div>
          </div>
        </Navbar>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cartSummary: state.cartSummaryReducer,
  };
}

export default connect(mapStateToProps)(Navi);
