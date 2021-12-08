import React from 'react'
import propTypes from 'prop-types'

function GoodsInfo({ info, onAdd, id }) {
  return (
    <div className='Info'>
      <div className='Info__description'>{info.description}</div>
      <div className='Info__country'>Страна производитель: <b>{`${info.maidInTitle} (${info.maidInCode})`}</b></div>
      <div className='Info__category'>Категория: <b>{info.category}</b></div>
      <div className='Indo__edition'>Год выпуска: <b>{info.edition}</b></div>
      <div className='Info__price'><b>{`Цена: ${info.price}`}</b></div>
      <button onClick={() => onAdd(id)}>Добавить</button>
    </div>
  )
}

GoodsInfo.propTypes = {
  info: propTypes.object,
  onAdd: propTypes.func,
  id: propTypes.string.isRequired
}

GoodsInfo.defaultProps = {
  info: {},
  onAdd: () => { },
}

export default React.memo(GoodsInfo)
