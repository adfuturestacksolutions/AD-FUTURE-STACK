import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import CapabilitiesPage from './pages/CapabilitiesPage.jsx'
import SolutionsPage from './pages/SolutionsPage.jsx'
import IndustriesPage from './pages/IndustriesPage.jsx'
import CaseStudiesPage from './pages/CaseStudiesPage.jsx'
import InsightsPage from './pages/InsightsPage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-ink font-sans">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/capabilities" element={<CapabilitiesPage />} />
          <Route path="/services" element={<CapabilitiesPage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/projects" element={<CaseStudiesPage />} />
          <Route path="/insights" element={<InsightsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
