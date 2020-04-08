import React from "react";
import "./CollectionPage.styles.scss";
import CollectionItem from "../../components/collection-item/CollectionItem";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selectors";

const CollectionPage = ({ match, collection }) => {
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
const mapStateToProps = (state, { match }) => ({
  collection: selectCollection(match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
