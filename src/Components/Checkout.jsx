import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { createOrder } from '../Firebase/db';

function Checkout() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });
  const [orderId, setOrderId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const { cart, clear, getTotal } = useContext(CartContext);
  const navigate = useNavigate();

  if (cart.length === 0 && !orderId) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4 text-black">No hay productos en el carrito</h2>
          <p className="text-gray-600 mb-8">Agrega productos antes de finalizar la compra</p>
          <button 
            onClick={() => navigate('/')}
            className="bg-black hover:bg-gray-800 text-white font-bold py-3 px-8 rounded transition-colors uppercase tracking-wide text-sm"
          >
            Ver Productos
          </button>
        </div>
      </div>
    );
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const order = {
        buyer: formData,
        items: cart.map(item => ({
          id: item.id,
          name: item.name,
          price: item.price || item.precio,
          quantity: item.quantity
        })),
        total: getTotal(),
        date: new Date().toISOString()
      };

      const id = await createOrder(order);
      setOrderId(id);
      clear();
    } catch (err) {
      setError('Hubo un error al procesar tu compra. Por favor intenta nuevamente.');
    } finally {
      setLoading(false);
    }
  };

  if (orderId) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto bg-white border-2 border-black rounded p-8 text-center">
          <div className="text-6xl mb-4">✓</div>
          <h2 className="text-4xl font-bold text-black mb-4">
            ¡Compra realizada con éxito!
          </h2>
          <p className="text-xl text-gray-700 mb-4">
            Tu orden ha sido procesada correctamente
          </p>
          <div className="bg-gray-50 rounded p-6 mb-6 border border-gray-200">
            <p className="text-gray-600 mb-2 uppercase tracking-wide text-sm">ID de tu orden:</p>
            <p className="text-2xl font-bold text-black break-all">{orderId}</p>
          </div>
          <p className="text-gray-600 mb-8">
            Guarda este ID para el seguimiento de tu compra
          </p>
          <button 
            onClick={() => navigate('/')}
            className="bg-black hover:bg-gray-800 text-white font-bold py-3 px-8 rounded transition-colors uppercase tracking-wide text-sm"
          >
            Volver al Inicio
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-4xl font-bold mb-8">Finalizar Compra</h2>
      
      <div className="grid lg:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-bold mb-4">Datos de Contacto</h3>
          
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Nombre Completo *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Juan Pérez"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="juan@ejemplo.com"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Teléfono *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="+54 11 1234-5678"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Dirección *
              </label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                rows="3"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Calle, Número, Ciudad, Provincia"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-black hover:bg-gray-800 disabled:bg-gray-400 text-white font-bold py-3 px-6 rounded transition-colors uppercase tracking-wide text-sm"
            >
              {loading ? 'Procesando...' : 'Confirmar Compra'}
            </button>
          </form>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-4">Resumen de tu Pedido</h3>
          <div className="bg-gray-100 rounded-lg p-6">
            <div className="space-y-4 mb-6">
              {cart.map(item => (
                <div key={item.id} className="flex justify-between items-center">
                  <div className="flex-1">
                    <p className="font-semibold">{item.title}</p>
                    <p className="text-sm text-gray-600">
                      {item.quantity} x ${item.price}
                    </p>
                  </div>
                  <p className="font-bold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="border-t pt-4">
              <div className="flex justify-between items-center text-2xl font-bold">
                <span>Total:</span>
                <span className="text-green-600">${getTotal().toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
