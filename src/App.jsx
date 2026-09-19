import NavbarPage from './component/layout/navbarpage'
import HomePage from './component/views/homepage'
import CardPage from './component/views/cardpage'
import ShopPage from './component/views/shoppage'
import FeaturePage from './component/views/fearturepage'
import FooterPage from './component/layout/footerpage'
import { CardProvider } from './component/context/cardContext'

function App() {
  return (
    <CardProvider>
      <div className="min-h-screen bg-slate-950 text-white">
        <div className="mx-auto max-w-[1440px]">
          <NavbarPage />
          <HomePage />
          <ShopPage />
          <FeaturePage />
          <CardPage />
          <FooterPage />
        </div>
      </div>
    </CardProvider>
  )
}

export default App
