import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./CartIcon.styles.scss";
import { connect } from "react-redux";
import * as actions from "../../redux/cart/cart.actions";

const CartIcon = ({ toggleCartHidden }) => {
  return (
    <div className="cart-icon">
      <ShoppingIcon className="shopping-icon" />
      <span onClick={toggleCartHidden} className="item-count">
        0
      </span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(actions.toggleCartHidden()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
