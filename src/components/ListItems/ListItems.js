import React from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem/ListItem';

const ListItems = ({ items }) => {
  return items.map(item => <ListItem item={item} key={item._id} />);
};

export default ListItems;

ListItems.propTypes = {
  items: PropTypes.array.isRequired
};
