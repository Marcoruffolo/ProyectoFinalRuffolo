import { Link, NavLink } from 'react-router-dom';
import CartWidget from './CartWidget';

function Navbar() { 
    const categories = [
        { id: 'smartphones', name: 'Smartphones' },
        { id: 'laptops', name: 'Laptops' },
        { id: 'fragrances', name: 'Fragancias' },
        { id: 'skin-care', name: 'Cuidado de Piel' },
        { id: 'groceries', name: 'Comestibles' },
        { id: 'home-decoration', name: 'Decoración' }
    ];

    return (
        <header className='bg-gray-800 text-white shadow-lg'>
            <div className='container mx-auto px-4'>
                <div className='flex justify-between items-center py-4'>
                    <Link to="/" className='text-3xl font-bold hover:text-blue-400 transition-colors'>
                        🛒 E-Commerce
                    </Link>
                    
                    <nav className='flex gap-6 items-center'>
                        <NavLink 
                            to="/"
                            className={({ isActive }) => 
                                isActive ? 'text-blue-400 font-semibold' : 'hover:text-blue-300 transition-colors'
                            }
                        >
                            Todos
                        </NavLink>
                        {categories.map(category => (
                            <NavLink 
                                key={category.id}
                                to={`/category/${category.id}`}
                                className={({ isActive }) => 
                                    isActive ? 'text-blue-400 font-semibold' : 'hover:text-blue-300 transition-colors'
                                }
                            >
                                {category.name}
                            </NavLink>
                        ))}
                    </nav>
                    
                    <CartWidget />
                </div>
            </div>
        </header>
    );
}                   

export default Navbar;