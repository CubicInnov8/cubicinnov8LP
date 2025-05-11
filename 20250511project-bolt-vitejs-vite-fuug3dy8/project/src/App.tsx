import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import ProductsPage from './pages/solutions/products'
import SolutionsPage from './pages/solutions/solutions'
import MSITPage from './pages/business/msit'
import BCDRPage from './pages/business/bcdr'
import HelpdeskPage from './pages/business/helpdesk'
import CubicInnov8AIPage from './pages/business/cubicinnov8-ai'
import PenetrationPage from './pages/business/penetration'
import TrainingPage from './pages/business/training'
import BlogPage from './pages/knowledge/blog'
import GoalkeeperPage from './pages/knowledge/cybersecurity-goalkeeper'
import NewsPage from './pages/company/news'
import CareersPage from './pages/company/careers'
import AboutPage from './pages/company/about'
import PartnersPage from './pages/company/partners'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solutions/products" element={<ProductsPage />} />
        <Route path="/solutions/solutions" element={<SolutionsPage />} />
        <Route path="/business/msit" element={<MSITPage />} />
        <Route path="/business/bcdr" element={<BCDRPage />} />
        <Route path="/business/helpdesk" element={<HelpdeskPage />} />
        <Route path="/business/cloud" element={<CubicInnov8AIPage />} />
        <Route path="/business/penetration" element={<PenetrationPage />} />
        <Route path="/business/training" element={<TrainingPage />} />
        <Route path="/knowledge/blog" element={<BlogPage />} />
        <Route path="/knowledge/cybersecurity-goalkeeper" element={<GoalkeeperPage />} />
        <Route path="/company/news" element={<NewsPage />} />
        <Route path="/company/careers" element={<CareersPage />} />
        <Route path="/company/about" element={<AboutPage />} />
        <Route path="/company/partners" element={<PartnersPage />} />
      </Routes>
    </Router>
  )
}

export default App
