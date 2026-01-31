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
          <h2 className="text-4xl font-bold mb-4 text-black">Tu carrito está vacío</h2>
          <p className="text-gray-600 mb-8">¡Agrega productos para comenzar tu compra!</p>
          <Link 
            to="/" 
            className="bg-black hover:bg-gray-800 text-white font-bold py-3 px-8 rounded transition-colors inline-block uppercase tracking-wide text-sm"
          >
            Ver Productos
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-4xl font-bold mb-8 text-black">Carrito de Compras</h2>
      
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {cart.map(item => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white border border-gray-200 rounded p-6 sticky top-4">
            <h3 className="text-2xl font-bold mb-4 text-black">Resumen de Compra</h3>
            
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-gray-700">
                <span>Productos:</span>
                <span>{cart.reduce((acc, item) => acc + item.quantity, 0)} unidades</span>
              </div>
              <div className="flex justify-between text-2xl font-bold mt-4 text-black">
                <span>Total:</span>
                <span>${getTotal().toFixed(2)}</span>
              </div>
            </div>

            <Link
              to="/checkout"
              className="w-full bg-black hover:bg-gray-800 text-white font-bold py-3 px-6 rounded transition-colors block text-center mb-3 uppercase tracking-wide text-sm"
            >
              Finalizar Compra
            </Link>

            <button
              onClick={clear}
              className="w-full bg-white hover:bg-gray-100 text-black border border-gray-300 font-bold py-3 px-6 rounded transition-colors uppercase tracking-wide text-sm"
            >
              Vaciar Carrito
            </button>

            <Link
              to="/"
              className="w-full bg-white hover:bg-gray-100 text-black border border-gray-300 font-bold py-3 px-6 rounded transition-colors block text-center mt-3 uppercase tracking-wide text-sm"
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
