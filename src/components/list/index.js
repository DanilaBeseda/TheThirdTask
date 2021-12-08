import React from 'react';
import propTypes from 'prop-types';
import './styles.css';
import { Link } from 'react-router-dom';

function List({ items, renderItem, onClose }) {
  return (
    <div className='List'>
      {items.map(item =>
        <Link to={item._id} key={item._id} className='List__item' onClick={onClose}>
          {renderItem(item)}
        </Link>
      )}
    </div>
  );
}

List.propTypes = {
  items: propTypes.arrayOf(propTypes.object).isRequired,
  renderItem: propTypes.func,
  onClose: propTypes.func,
}

List.defaultProps = {
  items: [],
  renderItem: (item) => {
    return item.toString()
  },
  onClose: () => { },
}

export default React.memo(List);
