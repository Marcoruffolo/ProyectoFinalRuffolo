import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import CartItem from './CartItem';

function Cart() {
  const { cart, clear, getTotal } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Tu carrito está vacío</h2>
          <p className="text-gray-600 mb-8">¡Agrega productos para comenzar tu compra!</p>
          <Link 
            to="/" 
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg transition-colors inline-block"
          >
            Ver Productos
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-4xl font-bold mb-8">Carrito de Compras</h2>
      
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {cart.map(item => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>

        <div className="lg:col-span-1">
          <div className="bg-gray-100 rounded-lg p-6 sticky top-4">
            <h3 className="text-2xl font-bold mb-4">Resumen de Compra</h3>
            
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span>Productos:</span>
                <span>{cart.reduce((acc, item) => acc + item.quantity, 0)} unidades</span>
              </div>
              <div className="flex justify-between text-2xl font-bold mt-4">
                <span>Total:</span>
                <span className="text-green-600">${getTotal().toFixed(2)}</span>
              </div>
            </div>

            <Link
              to="/checkout"
              className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-colors block text-center mb-3"
            >
              Finalizar Compra
            </Link>

            <button
              onClick={clear}
              className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              Vaciar Carrito
            </button>

            <Link
              to="/"
              className="w-full bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition-colors block text-center mt-3"
            >
              Seguir Comprando
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
