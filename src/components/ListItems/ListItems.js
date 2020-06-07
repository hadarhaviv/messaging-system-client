import React from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem/ListItem';

const ListItems = ({ items }) => {
  if (!items) {
    return <h1>No items to present</h1>;
  }
  return items.map(item => <ListItem item={item} key={item._id} />);
};

export default ListItems;

ListItems.propTypes = {
  items: PropTypes.array
};
