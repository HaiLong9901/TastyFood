import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home'
import ProductsList from './pages/ProductsList'
import ProductDetail from './pages/ProductDetail'
function App() {
  return (
    <Router>
      <div className="App overflow-hidden">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<ProductsList />} />
          <Route path="/product/123" element={<ProductDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
