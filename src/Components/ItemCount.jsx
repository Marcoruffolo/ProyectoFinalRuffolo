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
      <div className="flex items-center space-x-4 border border-gray-300 rounded">
        <button
          onClick={handleDecrement}
          disabled={count <= 1}
          className="bg-white hover:bg-gray-100 disabled:bg-gray-50 disabled:cursor-not-allowed text-black font-bold py-2 px-4 transition-colors"
        >
          -
        </button>
        <span className="text-2xl font-semibold w-16 text-center">{count}</span>
        <button
          onClick={handleIncrement}
          disabled={count >= stock}
          className="bg-white hover:bg-gray-100 disabled:bg-gray-50 disabled:cursor-not-allowed text-black font-bold py-2 px-4 transition-colors"
        >
          +
        </button>
      </div>
      <button
        onClick={handleAdd}
        disabled={stock === 0}
        className="bg-black hover:bg-gray-800 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-bold py-3 px-8 rounded transition-colors w-full uppercase tracking-wide text-sm"
      >
        {stock === 0 ? 'Sin Stock' : 'Agregar al Carrito'}
      </button>
    </div>
  );
}

export default ItemCount;
