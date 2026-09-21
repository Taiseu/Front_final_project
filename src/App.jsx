import { useState } from 'react'
import NavbarPage from './component/layout/navbarpage'
import HomePage from './component/views/homepage'
import ShopPage from './component/shop/shopPage'
import FeaturePage from './component/views/fearturepage'
import ContactHomepage from './component/views/ContactHomepage'
import AboutPage from './component/about/aboutPage'
import AccessoriesPage from './component/Accesories/Accesories'
import ContactPage from './component/contact/contactPage'
import LoginPage from './component/login/loginPage'
import RegisterPage from './component/register/registerPage'
import ProductDetailPage from './component/views/productdetailppage'
import CartPage from './component/views/cartPage'
import FooterPage from './component/layout/footerpage'
import { CardProvider } from './component/context/cardContext'
import { useCard } from './component/context/useCard'

function AppContent() {
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [activePage, setActivePage] = useState('home')
  const { cartOpen, setCartOpen } = useCard()
  function handleNavigation(item) {
    setSelectedProduct(null)
    setCartOpen(false)
    setActivePage(
      item === 'About'
        ? 'about'
        : item === 'Shop'
          ? 'shop'
            : item === 'Accessories'
              ? 'accessories'
          : item === 'Support'
            ? 'support'
            : item === 'Contact'
              ? 'contact'
              : item === 'Login'
                ? 'login'
                : item === 'Register'
                  ? 'register'
              : 'home',
    )
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-360">
        <NavbarPage onNavigate={handleNavigation} />
        {cartOpen ? (
          <CartPage onClose={() => setCartOpen(false)} />
        ) : selectedProduct ? (
          <ProductDetailPage
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
            onSelectProduct={setSelectedProduct}
          />
        ) : activePage === 'about' ? (
          <AboutPage />
        ) : activePage === 'support' ? (
          <SupportPage />
        ) : activePage === 'accessories' ? (
          <AccessoriesPage />
        ) : activePage === 'contact' ? (
          <ContactHomepage />
        ) : activePage === 'login' ? (
          <LoginPage onBack={() => setActivePage('home')} onRegister={() => setActivePage('register')} />
        ) : activePage === 'register' ? (
          <RegisterPage onBack={() => setActivePage('home')} onLogin={() => setActivePage('login')} />
        ) : activePage === 'shop' ? (
          <ShopPage onSelectProduct={setSelectedProduct} />
        ) : (
          <>
            <HomePage onNavigate={handleNavigation} />
            <ShopPage onSelectProduct={setSelectedProduct} onShowMore={() => handleNavigation('Shop')} productLimit={6} />
            <FeaturePage />
            <ContactHomepage />
          </>
        )}
        <FooterPage />
      </div>
    </div>
  )
}

function App() {
  return (
    <CardProvider>
      <AppContent />
    </CardProvider>
  )
}

export default App
