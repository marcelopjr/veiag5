import React, {createContext, useState} from 'react';

const CartContext = createContext({});

export function CartProvider({children}) {
  const [product, setProduct] = useState([]);

  let quantidade = product.length;

  function addProduct(newProduct) {
    setProduct([...product, newProduct]);
  }

  function removeProduct(itemId) {
    const indexItem = product.findIndex(item => item.id == itemId);
    product.splice(indexItem, 1);
    setProduct([...product]);
  }

  return (
    <CartContext.Provider
      value={{addProduct, product, quantidade, removeProduct}}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
