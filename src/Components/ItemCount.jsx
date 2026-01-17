import { useState } from 'react';

function ItemCount({ stock, initial = 1, onAdd }) {
  const [count, setCount] = useState(initial);

  const handleIncrement = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleAdd = () => {
    if (count <= stock) {
      onAdd(count);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="flex items-center space-x-4">
        <button
          onClick={handleDecrement}
          disabled={count <= 1}
          className="bg-gray-300 hover:bg-gray-400 disabled:bg-gray-200 disabled:cursor-not-allowed text-gray-800 font-bold py-2 px-4 rounded-l transition-colors"
        >
          -
        </button>
        <span className="text-2xl font-semibold w-16 text-center">{count}</span>
        <button
          onClick={handleIncrement}
          disabled={count >= stock}
          className="bg-gray-300 hover:bg-gray-400 disabled:bg-gray-200 disabled:cursor-not-allowed text-gray-800 font-bold py-2 px-4 rounded-r transition-colors"
        >
          +
        </button>
      </div>
      <button
        onClick={handleAdd}
        disabled={stock === 0}
        className="bg-green-500 hover:bg-green-600 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-bold py-3 px-8 rounded-lg transition-colors w-full"
      >
        {stock === 0 ? 'Sin Stock' : 'Agregar al Carrito'}
      </button>
    </div>
  );
}

export default ItemCount;
