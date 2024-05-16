import { Toaster } from 'sonner'
import { Route, Routes } from "react-router-dom"
import { ProductsProvider } from './context/ProductsContext'

import Home from './pages/Home'
import Navbar from './components/Navbar'
import ProductsPage from './pages/ProductsPage'
import './App.css'

function App() {

  return (
    <>
      <Toaster />
      <Navbar />
      <ProductsProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<ProductsPage />} />
        </Routes>
      </ProductsProvider>
    </>
  )
}

export default App
