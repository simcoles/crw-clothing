import React from "react";
import "./CheckoutItem.styles.scss";
import { connect } from "react-redux";
import * as actions from "../../redux/cart/cart.actions";

const CheckoutItem = ({
  item,
  addToQuantity,
  removeFromQuantity,
  removeFromCart,
}) => {
  const { imageUrl, name, quantity, price } = item;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div onClick={() => removeFromQuantity(item)} className="arrow">
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div onClick={() => addToQuantity(item)} className="arrow">
          &#10095;
        </div>
      </span>
      <span className="price">£{price}</span>
      <div onClick={() => removeFromCart(item)} className="remove-button">
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addToQuantity: (cartItem) => dispatch(actions.addCartItem(cartItem)),
  removeFromQuantity: (cartItem) => dispatch(actions.removeCartItem(cartItem)),
  removeFromCart: (cartItem) => dispatch(actions.removeItemFromCart(cartItem)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
