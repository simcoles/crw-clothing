import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./CartIcon.styles.scss";
import { connect } from "react-redux";
import * as actions from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <div className="cart-icon">
      <ShoppingIcon className="shopping-icon" />
      <span onClick={toggleCartHidden} className="item-count">
        {itemCount}
      </span>
    </div>
  );
};

const mapStateToProps = (state) => ({
  itemCount: selectCartItemsCount(state),
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(actions.toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
