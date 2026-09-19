import { useState } from 'react'
import NavbarPage from './component/layout/navbarpage'
import HomePage from './component/views/homepage'
import ShopPage from './component/shop/shopPage'
import FeaturePage from './component/views/fearturepage'
import AboutPage from './component/about/aboutPage'
import SupportPage from './component/support/supportPage'
import ContactPage from './component/contact/contactPage'
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
          : item === 'Support'
            ? 'support'
            : item === 'Contact'
              ? 'contact'
              : 'home',
    )
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-[1440px]">
        <NavbarPage onNavigate={handleNavigation} />
        {cartOpen ? (
          <CartPage onClose={() => setCartOpen(false)} />
        ) : selectedProduct ? (
          <ProductDetailPage
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
          />
        ) : activePage === 'about' ? (
          <AboutPage />
        ) : activePage === 'support' ? (
          <SupportPage />
        ) : activePage === 'contact' ? (
          <ContactPage />
        ) : activePage === 'shop' ? (
          <ShopPage onSelectProduct={setSelectedProduct} />
        ) : (
          <>
            <HomePage />
            <ShopPage onSelectProduct={setSelectedProduct} />
            <FeaturePage />
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
