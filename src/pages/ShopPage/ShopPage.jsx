import React from "react";
import { Route } from "react-router-dom";
import CollectionsOverview from "../../components/collections-overview/CollectionsOverview";
import CollectionPage from "../collection/CollectionPage";
import { addShopItems } from "../../redux/shop/shop.actions";
import { connect } from "react-redux";
import WithSpinner from "../../components/with-spinner/withSpinner";

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionsPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  state = { loading: true };
  unsubscribeFromSnapshot = null;

  componentDidMount = () => {
    const collectionRef = firestore.collection("collections");

    collectionRef.get().then((snapShot) => {
      this.props.addShopItems(convertCollectionsSnapshotToMap(snapShot));
      this.setState({ loading: false });
    });
  };

  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionsPageWithSpinner isLoading={loading} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addShopItems: (shopItems) => dispatch(addShopItems(shopItems)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
