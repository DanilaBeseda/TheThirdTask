import React from 'react'
import propTypes from 'prop-types'
import './styles.css'

function GoodsInfo({ info, onAdd, id }) {
  return (
    <ul className='Info'>
      <li className='Info__description'>{info.description}</li>
      <li className='Info__country'>Страна производитель: <b>{`${info.maidIn?.title} (${info.maidIn?.code})`}</b></li>
      <li className='Info__category'>Категория: <b>{info.category?.title}</b></li>
      <li className='Indo__edition'>Год выпуска: <b>{info.edition}</b></li>
      <li className='Info__price'><b>{`Цена: ${info.price}`}</b></li>
      <button onClick={() => onAdd(id)}>Добавить</button>
    </ul>
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
