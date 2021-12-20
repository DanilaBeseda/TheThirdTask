import React from 'react';
import propTypes from 'prop-types';
import './styles.css';

function MainPagination({ activePage, setActivePage, pagesCount }) {
  return (
    <div className='Pages'>
      {/* не знаю откуда брать страницы, поэтому вставил массив [1,2,3,4,5]*/}
      {Array.from({ length: pagesCount }, (_, i) => i + 1).map(item => (
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
  pagesCount: propTypes.number
}

MainPagination.defaultProps = {
  activePage: 1,
  setActivePage: () => { },
  pagesCount: 1
}

export default React.memo(MainPagination)
