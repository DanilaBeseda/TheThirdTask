import React from 'react';
import Main from "./main";
import Goods from './goods'
import Basket from "./basket";
import useSelector from "../utils/use-selector";
import { Routes, Route } from 'react-router-dom';

/**
 * Приложение
 */
function App() {

  const select = useSelector(state => ({
    name: state.modals.name
  }));

  return (
    <>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/:id' element={<Goods />} />
      </Routes>

      {select.name === 'basket' && <Basket />}
    </>
  );
}

export default React.memo(App);
