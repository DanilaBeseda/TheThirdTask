import React, { useCallback, useEffect, useMemo } from 'react';
import Layout from '../../components/layout'
import BasketSimple from '../../components/basket-simple'
import useSelector from "../../utils/use-selector"
import useStore from "../../utils/use-store"
import { useParams } from 'react-router-dom'
import GoodsInfo from '../../components/goods-info'

function Goods() {
  const store = useStore()
  const { id } = useParams()

  useEffect(async () => {
    await store.catalog.getGoodsInfo(id)
  }, [id])

  const select = useSelector(state => ({
    amount: state.basket.amount,
    sum: state.basket.sum,
    info: state.catalog.info,
  }))

  const callbacks = {
    addToBasket: useCallback((_id) => store.basket.add(_id), [store]),
    openModal: useCallback(() => store.modals.open('basket'), [store]),
  }

  return (
    <Layout head={<h1>{select.info.title}</h1>}>
      <BasketSimple onOpen={callbacks.openModal} amount={select.amount} sum={select.sum} />
      <GoodsInfo info={select.info} onAdd={callbacks.addToBasket} id={id} />
    </Layout>
  )
}

export default React.memo(Goods)
