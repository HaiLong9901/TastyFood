import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Provider, useSelector } from 'react-redux'
import { selectCurrentUser } from './features/auth/authSlice'
import store from './store'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home'
import ProductsList from './pages/ProductsList'
import ProductDetail from './pages/ProductDetail'
import Layout from './components/Layout'
import Login from './pages/Login'
import Register from './pages/Register'
import Cart from './pages/Cart'
import Admin from './pages/admin/Admin'
import AdminSidebar from './components/admin/AdminSidebar'
import ProtectedRoute from './components/ProtectedRoute'
import AdminRoute from './components/admin/AdminRoute'
import UserProfile from './pages/user/UserProfile'
import UserAccount from './pages/user/UserAccount'
import UserAdress from './pages/user/UserAdress'
import UserPassword from './pages/user/UserPassword'
import Checkout from './pages/Checkout'
import NotFound from './pages/NotFound'
import UserPurchase from './pages/user/UserPurchase'
import UserPurchaseList from './pages/user/UserPurchaseList'
function App() {
  const user = useSelector(selectCurrentUser)

  return (
    <Router>
      {user.isAdmin ? (
        <div className="flex h-screen relative">
          <AdminSidebar />
          <div className="w-[80%]">
            <Routes>
              <Route path="/admin" element={<Admin />} />
            </Routes>
          </div>
        </div>
      ) : (
        <div className="App overflow-hidden">
          <Routes>
            <Route element={<Layout loginHeaderPath={['/login', '/register', '/checkout']} />}>
              <Route path="/" element={<Home />} />
              <Route path="/product" element={<ProductsList />} />
              <Route path="/product/:productId" element={<ProductDetail />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route element={<ProtectedRoute />}>
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/user" element={<UserAccount />}>
                  <Route path="/user/account/profile" element={<UserProfile />} />
                  <Route path="/user/account/address" element={<UserAdress />} />
                  <Route path="/user/account/password" element={<UserPassword />} />
                  <Route path="/user/purchase" element={<UserPurchase />}>
                    <Route path="/user/purchase/all" element={<UserPurchaseList status="all" />} />
                    <Route path="/user/purchase/pending" element={<UserPurchaseList status="pending" />} />
                    <Route path="/user/purchase/shipping" element={<UserPurchaseList status="shipping" />} />
                    <Route path="/user/purchase/success" element={<UserPurchaseList status="success" />} />
                    <Route path="/user/purchase/rejected" element={<UserPurchaseList status="rejected" />} />
                  </Route>
                </Route>
              </Route>
              <Route path="/*" element={<NotFound />} />
              {/* <Route element={<AdminRoute />}>
              <Route path="/admin" element={<Admin />} />
            </Route> */}
            </Route>
          </Routes>
          <Footer />
        </div>
      )}
    </Router>
  )
}

export default App
