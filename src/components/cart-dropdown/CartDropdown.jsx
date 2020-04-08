import React from "react";
import { withRouter } from "react-router-dom";
import "./CartDropdown.styles.scss";
import CustomButton from "../custom-button/CustomButton";
import CartItem from "../cart-item/CartItem";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import * as actions from "../../redux/cart/cart.actions";

const CartDropdown = ({ cartItems, toggleHidden, history }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          toggleHidden();
          history.push("/checkout");
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

const mapDispatchToProps = (dispatch) => ({
  toggleHidden: () => dispatch(actions.toggleCartHidden()),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CartDropdown)
);
