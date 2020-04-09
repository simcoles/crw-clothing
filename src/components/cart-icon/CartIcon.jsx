import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
// import "./CartIcon.styles.scss";
import {
  CartIconContainer,
  ShoppingIconContainer,
  ItemCountContainer,
} from "./CartIcon.styles";
import { connect } from "react-redux";
import * as actions from "../../redux/cart/cart.actions";
import { createStructuredSelector } from "reselect";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <CartIconContainer>
      <ShoppingIconContainer />
      <ItemCountContainer onClick={toggleCartHidden} className="item-count">
        {itemCount}
      </ItemCountContainer>
    </CartIconContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(actions.toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
