import React from "react";
import "./CollectionItem.styles.scss";
import CustomButton from "../custom-button/CustomButton";
import { connect } from "react-redux";
import * as actions from "../../redux/cart/cart.actions";

const CollectionItem = ({ item, addToCart }) => {
  const { name, price, imageUrl } = item;

  return (
    <div className="collection-item">
      <div
        className="image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton onClick={() => addToCart(item)} inverted>
        Add to cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addToCart: (cartItem) => dispatch(actions.addCartItem(cartItem)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
