import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts, getProductsByCategory } from '../services/products.jsx';
import ItemList from './ItemList';

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    
    const fetchProducts = categoryId 
      ? getProductsByCategory(categoryId)
      : getProducts();

    fetchProducts
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(error => {
        setLoading(false);
      });
  }, [categoryId]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-2xl">Cargando productos...</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">
        {categoryId ? `Categoría: ${categoryId}` : 'Todos los Productos'}
      </h2>
      <ItemList products={products} />
    </div>
  );
}

export default ItemListContainer;
