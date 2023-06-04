import React from 'react';
import { useParams, Link } from 'react-router-dom';
import productsData from '../data/productsData';

function ProductDetails() {
  const { id } = useParams();
  const product = productsData.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div>not find</div>;
  }

  return (
    <div>
      <Link to="/">Back</Link>
      <h2 style={{ margin: '50px' }}>{product.description}</h2>
      <img src={product.image} alt={product.description} style={{width:'500px', margin:'50px'}} />
      <p style={{ margin: '50px' }}> R$ {product.price}</p>
      <p style={{ margin: '50px' }}> {product.manufacturer}</p>
      <p style={{ margin: '50px' }}>{product.specifications}</p>
    </div>
  );
}

export default ProductDetails;