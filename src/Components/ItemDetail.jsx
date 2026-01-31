import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';
import { CartContext } from '../context/CartContext';

function ItemDetail({ product }) {
  const [quantityAdded, setQuantityAdded] = useState(0);
  const { addItem } = useContext(CartContext);

  const handleAddToCart = (quantity) => {
    setQuantityAdded(quantity);
    addItem(product, quantity);
  };

  return (
    <div className="max-w-6xl mx-auto">
      <Link to="/" className="text-blue-500 hover:text-blue-700 mb-4 inline-block">
        ← Volver al catálogo
      </Link>
      
      <div className="grid md:grid-cols-2 gap-8 mt-4">
        <div className="space-y-4">
          <img 
            src={product.images?.[0] || product.thumbnail} 
            alt={product.title}
            className="w-full rounded-lg shadow-lg"
          />
          <div className="grid grid-cols-4 gap-2">
            {product.images?.slice(1, 5).map((img, index) => (
              <img 
                key={index}
                src={img} 
                alt={`${product.title} ${index + 2}`}
                className="w-full h-20 object-cover rounded cursor-pointer hover:opacity-75 transition-opacity"
              />
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="text-4xl font-bold mb-2">{product.title}</h1>
            <p className="text-gray-600 text-sm uppercase">{product.category}</p>
          </div>

          <div className="flex items-baseline space-x-4">
            <span className="text-4xl font-bold text-green-600">${product.price}</span>
            {product.discountPercentage > 0 && (
              <span className="text-lg text-red-500">-{product.discountPercentage}%</span>
            )}
          </div>

          <div>
            <h3 className="font-semibold mb-2">Descripción:</h3>
            <p className="text-gray-700">{product.description}</p>
          </div>

          <div className="flex items-center space-x-4">
            <span className="font-semibold">Rating:</span>
            <div className="flex items-center">
              <span className="text-yellow-500">★</span>
              <span className="ml-1">{product.rating} / 5</span>
            </div>
          </div>

          <div>
            <span className="font-semibold">Stock disponible: </span>
            <span className={product.stock > 0 ? 'text-green-600' : 'text-red-600'}>
              {product.stock} unidades
            </span>
          </div>

          <div className="border-t pt-6">
            {quantityAdded > 0 ? (
              <div className="space-y-4">
                <p className="text-green-600 font-semibold text-center">
                  ✓ Agregado {quantityAdded} unidad(es) al carrito
                </p>
                <div className="flex gap-4">
                  <Link 
                    to="/cart" 
                    className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg transition-colors text-center"
                  >
                    Ir al Carrito
                  </Link>
                  <Link 
                    to="/" 
                    className="flex-1 bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-8 rounded-lg transition-colors text-center"
                  >
                    Seguir Comprando
                  </Link>
                </div>
              </div>
            ) : (
              <ItemCount 
                stock={product.stock} 
                initial={1} 
                onAdd={handleAddToCart}
              />
            )}
          </div>

          {product.tags && product.tags.length > 0 && (
            <div>
              <h3 className="font-semibold mb-2">Tags:</h3>
              <div className="flex flex-wrap gap-2">
                {product.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="bg-gray-200 px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
