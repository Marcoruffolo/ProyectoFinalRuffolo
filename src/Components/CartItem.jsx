import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function CartItem({ item }) {
  const { removeItem } = useContext(CartContext);

  return (
    <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md">
      <img 
        src={item.thumbnail || item.images?.[0]} 
        alt={item.title}
        className="w-24 h-24 object-cover rounded"
      />
      
      <div className="flex-1">
        <h3 className="text-xl font-semibold">{item.title}</h3>
        <p className="text-gray-600 text-sm">{item.category}</p>
        <p className="text-gray-700 mt-1">Cantidad: {item.quantity}</p>
      </div>

      <div className="text-right">
        <p className="text-lg font-semibold text-gray-700">
          ${item.price} c/u
        </p>
        <p className="text-xl font-bold text-green-600">
          ${(item.price * item.quantity).toFixed(2)}
        </p>
      </div>

      <button
        onClick={() => removeItem(item.id)}
        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors"
      >
        Eliminar
      </button>
    </div>
  );
}

export default CartItem;
