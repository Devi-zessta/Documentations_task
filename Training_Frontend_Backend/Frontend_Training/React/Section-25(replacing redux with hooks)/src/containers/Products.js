import React from 'react';
// import { useSelector } from 'react-redux';
import { ProductsContext } from '../context/Products-context';
import ProductItem from '../components/Products/ProductItem';
import './Products.css';
import {useContext} from 'react'
import { useStore } from '../Hooks-store/store';

const Products = props => {
  //const productList = useContext(ProductsContext).products;
  const state=useStore()[0];
  return (
    <ul className="products-list">
      {state.products.map(prod => (
        <ProductItem
          key={prod.id}
          id={prod.id}
          title={prod.title}
          description={prod.description}
          isFav={prod.isFavorite}
        />
      ))}
    </ul>
  );
};

export default Products;
