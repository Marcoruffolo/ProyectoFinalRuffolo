import { Link, NavLink } from 'react-router-dom';
import CartWidget from './CartWidget';

function Navbar() { 
    const categories = [
        { id: 'consolas', name: 'Consolas' },
        { id: 'celulares', name: 'Celulares' },
        { id: 'televisores', name: 'Televisores' },
        { id: 'computadoras', name: 'Computadoras' }
    ];

    return (
        <header className='bg-black text-white border-b border-gray-800'>
            <div className='container mx-auto px-4'>
                <div className='flex justify-between items-center py-6'>
                    <Link to="/" className='text-3xl font-bold tracking-tight hover:text-gray-300 transition-colors'>
                        Blancnoir
                    </Link>
                    
                    <nav className='flex gap-8 items-center'>
                        <NavLink 
                            to="/"
                            className={({ isActive }) => 
                                isActive ? 'text-white font-semibold border-b-2 border-white pb-1' : 'text-gray-400 hover:text-white transition-colors'
                            }
                        >
                            Todos
                        </NavLink>
                        {categories.map(category => (
                            <NavLink 
                                key={category.id}
                                to={`/category/${category.id}`}
                                className={({ isActive }) => 
                                    isActive ? 'text-white font-semibold border-b-2 border-white pb-1' : 'text-gray-400 hover:text-white transition-colors'
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