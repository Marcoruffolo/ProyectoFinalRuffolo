import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function CartItem({ item }) {
  const { removeItem } = useContext(CartContext);
  
  const imageUrl = item.url || item.imagen || item.thumbnail || 'https://via.placeholder.com/100?text=Sin+Imagen';
  const price = item.price || item.precio || 0;
  const name = item.name || 'Sin título';
  const category = item.category || '';

  return (
    <div className="flex items-center gap-4 p-4 bg-white rounded border border-gray-200">
      <img 
        src={imageUrl}
        alt={name}
        className="w-24 h-24 object-cover rounded"
        onError={(e) => {
          e.target.src = 'https://via.placeholder.com/100?text=Sin+Imagen';
        }}
      />
      
      <div className="flex-1">
        <h3 className="text-xl font-semibold text-black">{name}</h3>
        <p className="text-gray-600 text-sm uppercase tracking-wide">{category}</p>
        <p className="text-gray-700 mt-1">Cantidad: {item.quantity}</p>
      </div>

      <div className="text-right">
        <p className="text-lg font-semibold text-gray-700">
          ${price} c/u
        </p>
        <p className="text-xl font-bold text-black">
          ${(price * item.quantity).toFixed(2)}
        </p>
      </div>

      <button
        onClick={() => removeItem(item.id)}
        className="bg-black hover:bg-gray-800 text-white px-4 py-2 rounded transition-colors uppercase tracking-wide text-sm font-semibold"
      >
        Eliminar
      </button>
    </div>
  );
}

export default CartItem;
