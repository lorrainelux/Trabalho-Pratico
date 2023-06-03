import React from 'react';
import { Link } from 'react-router-dom';
import productsData from '../data/productsData';
import './ProductList.css'; // Importe o arquivo CSS para aplicar os estilos

function ProductList() {
  return (
    <div>
      <h1 style={{ margin: '50px' }}>Lista de Produtos</h1>
      <div className="product-list">
        {productsData.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id} style={{ textDecoration: 'none' }}>
            <div className="product-item">
              <img src={product.image} alt={product.description} className="product-image" />
              <p className="product-title">{product.description}</p>
              <p>Preço: R$ {product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProductList;