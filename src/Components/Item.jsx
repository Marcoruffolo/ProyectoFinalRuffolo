import { Link } from 'react-router-dom';

function Item({ product }) {
  const imageUrl = product.url || product.imagen || product.thumbnail || 'https://via.placeholder.com/300x200?text=Sin+Imagen';
  const price = product.price || product.precio || 0;
  const name = product.name || 'Sin título';
  const description = product.description || '';
  const category = product.category || '';
  
  return (
    <div className="border border-gray-200 rounded overflow-hidden hover:border-black transition-colors duration-300 bg-white">
      <img 
        src={imageUrl}
        alt={name}
        className="w-full h-48 object-cover"
        onError={(e) => {
          e.target.src = 'https://via.placeholder.com/300x200?text=Sin+Imagen';
        }}
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2 truncate text-black">{name}</h3>
        <p className="text-gray-600 mb-2 line-clamp-2 text-sm">{description}</p>
        <div className="flex justify-between items-center mb-4">
          <span className="text-2xl font-bold text-black">${price}</span>
          <span className="text-xs text-gray-500 uppercase tracking-wide">{category}</span>
        </div>
        <Link 
          to={`/item/${product.id}`}
          className="block w-full bg-black hover:bg-gray-800 text-white text-center py-2 rounded transition-colors duration-300 uppercase tracking-wide text-sm font-semibold"
        >
          Ver Detalle
        </Link>
      </div>
    </div>
  );
}

export default Item;
