import React from 'react';
import { Link } from 'react-router-dom';
import productsData from '../data/productsData';
import './ProductList.css';

function ProductList() {
  return (
    <div>
      <h1 style={{ margin: '110px', color: 'orange' }}>LEGO offers</h1>
      <div className="product-list">
        {productsData.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id} style={{ textDecoration: 'none' }}>
            <div className="product-item">
              <img src={product.image} alt={product.description} className="product-image" />
              <p className="product-title">{product.description}</p>
              <p>R$ {product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
