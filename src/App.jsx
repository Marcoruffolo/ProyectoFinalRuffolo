import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar.jsx';
import ItemListContainer from './Components/ItemListContainer.jsx';
import ItemDetailContainer from './Components/ItemDetailContainer.jsx';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/category/:categoryId' element={<ItemListContainer />} />
        <Route path='/item/:itemId' element={<ItemDetailContainer />} />
        <Route path='*' element={
          <div className="flex flex-col justify-center items-center min-h-screen">
            <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
            <p className="text-2xl text-gray-600">Página no encontrada</p>
          </div>
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
