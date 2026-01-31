import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';
import { CartContext } from '../context/CartContext';

function ItemDetail({ product }) {
  const [quantityAdded, setQuantityAdded] = useState(0);
  const { addItem } = useContext(CartContext);

  const imageUrl = product.url || product.imagen || product.thumbnail || 'https://via.placeholder.com/400?text=Sin+Imagen';
  const price = product.price || 0;
  const name = product.name || 'Sin título';
  const description = product.description || 'Sin descripción';
  const category = product.category || '';
  const stock = product.stock || 0;

  const handleAddToCart = (quantity) => {
    setQuantityAdded(quantity);
    const productToAdd = {
      id: product.id,
      name: name,
      price: price,
      precio: price,
      url: imageUrl,
      category: category,
      quantity: quantity
    };
    addItem(productToAdd, quantity);
  };

  return (
    <div className="max-w-6xl mx-auto">
      <Link to="/" className="text-black hover:text-gray-600 mb-4 inline-block font-semibold">
        ← Volver al catálogo
      </Link>
      
      <div className="grid md:grid-cols-2 gap-8 mt-4">
        <div className="space-y-4">
          <img 
            src={imageUrl}
            alt={name}
            className="w-full rounded border border-gray-200"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/400?text=Sin+Imagen';
            }}
          />
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="text-4xl font-bold mb-2 text-black">{name}</h1>
            <p className="text-gray-600 text-sm uppercase tracking-wide">{category}</p>
          </div>

          <div className="flex items-baseline space-x-4">
            <span className="text-4xl font-bold text-black">${price}</span>
          </div>

          <div>
            <h3 className="font-semibold mb-2 text-black">Descripción:</h3>
            <p className="text-gray-700">{description}</p>
          </div>

          <div>
            <span className="font-semibold text-black">Stock disponible: </span>
            <span className={stock > 0 ? 'text-black' : 'text-gray-400'}>
              {stock} unidades
            </span>
          </div>

          <div className="border-t border-gray-200 pt-6">
            {quantityAdded > 0 ? (
              <div className="space-y-4">
                <p className="text-black font-semibold text-center">
                  ✓ Agregado {quantityAdded} unidad(es) al carrito
                </p>
                <div className="flex gap-4">
                  <Link 
                    to="/cart" 
                    className="flex-1 bg-black hover:bg-gray-800 text-white font-bold py-3 px-8 rounded transition-colors text-center uppercase tracking-wide text-sm"
                  >
                    Ir al Carrito
                  </Link>
                  <Link 
                    to="/" 
                    className="flex-1 bg-white hover:bg-gray-100 text-black border border-gray-300 font-bold py-3 px-8 rounded transition-colors text-center uppercase tracking-wide text-sm"
                  >
                    Seguir Comprando
                  </Link>
                </div>
              </div>
            ) : (
              <ItemCount 
                stock={stock} 
                initial={1} 
                onAdd={handleAddToCart}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
