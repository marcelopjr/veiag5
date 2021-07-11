import React, {createContext, useState, useEffect} from 'react';

import ProductService from '../../services/ProductService';

const ProductContext = createContext({});

export function ProductProvider({children}) {
  const [products, setProducts] = useState([]);
  const productService = new ProductService();

  useEffect(() => {
    productService.getProduto().then(data => setProducts(data));
  }, []);

  function getProductsAtt() {
    productService.getProduto().then(data => setProducts(data));
  }

  function newProduct(data) {
    productService
      .createProduto(data)
      .then(resp => {
        getProductsAtt(), alert('Produto Cadastrado');
      })
      .catch(error => alert('Produto nao Cadastrado'));
  }

  function deleteProduct(data) {
    productService
      .deleteProdutoId(data.id)
      .then(resp => getProductsAtt())
      .catch(error => alert('Nao e possivel deletar este Produto!'));
  }

  function updateProduct(data, id) {
    productService
      .updateProduto(data, id)
      .then(resp => {
        alert('Produto Atualizado'), getProductsAtt();
      })
      .catch(error => console.log(error));
  }

  return (
    <ProductContext.Provider
      value={{
        products,
        newProduct,
        deleteProduct,
        updateProduct,
        getProductsAtt,
      }}>
      {children}
    </ProductContext.Provider>
  );
}

export default ProductContext;
