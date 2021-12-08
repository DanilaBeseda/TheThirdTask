import React from 'react';
import propTypes from 'prop-types';
import './styles.css';

function MainPagination({ activePage, setActivePage }) {
  return (
    <div className='Pages'>
      {/* не знаю откуда брать страницы, поэтому вставил массив [1,2,3,4,5]*/}
      {[1, 2, 3, 4, 5].map(item => (
        <button
          key={item}
          className={activePage === item ? 'Pages__page active' : 'Pages__page'}
          onClick={() => setActivePage(item)}
        >
          {item}
        </button>
      )
      )}
    </div>
  )
}

MainPagination.propTypes = {
  activePage: propTypes.number,
  setActivePage: propTypes.func,
}

MainPagination.defaultProps = {
  activePage: 1,
  setActivePage: () => { },
}

export default React.memo(MainPagination)
