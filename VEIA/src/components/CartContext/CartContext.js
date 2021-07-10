import React, {createContext, useState, useEffect} from 'react';

const CartContext = createContext({});

export function CartProvider({children}) {
  const [product, setProduct] = useState([]);

  let quantidade = product.length;

  function addProduct(newProduct) {
    var prodVerify = false;

    if (product.length > 0) {
      product.map(item => {
        if (item.id === newProduct.id && prodVerify === false) {
          productIncrement(item);
          prodVerify = true;
        } else {
          const indexItem = product.findIndex(item => item.id == newProduct.id);
          if (indexItem < 0) {
            setProduct([...product, newProduct]);
          }
        }
      });
    } else {
      setProduct([...product, newProduct]);
    }
  }

  function productIncrement(item) {
    item.amount++;
    setProduct([...product]);
  }

  function productDecrement(item) {
    if (item.amount > 1) {
      item.amount--;
      setProduct([...product]);
    } else {
      removeProduct(item.id);
    }
  }

  function removeProduct(itemId) {
    const indexItem = product.findIndex(item => item.id == itemId);
    product.splice(indexItem, 1);
    setProduct([...product]);
  }

  return (
    <CartContext.Provider
      value={{
        addProduct,
        product,
        quantidade,
        removeProduct,
        productIncrement,
        productDecrement,
      }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
