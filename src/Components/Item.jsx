import { Link } from 'react-router-dom';

function Item({ product }) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <img 
        src={product.thumbnail} 
        alt={product.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2 truncate">{product.title}</h3>
        <p className="text-gray-600 mb-2 line-clamp-2">{product.description}</p>
        <div className="flex justify-between items-center mb-4">
          <span className="text-2xl font-bold text-green-600">${product.price}</span>
          <span className="text-sm text-gray-500">{product.category}</span>
        </div>
        <Link 
          to={`/item/${product.id}`}
          className="block w-full bg-blue-500 hover:bg-blue-600 text-white text-center py-2 rounded transition-colors duration-300"
        >
          Ver Detalle
        </Link>
      </div>
    </div>
  );
}

export default Item;
