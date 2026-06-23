import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import GstFiling from './pages/services/GstFiling';
import IncomeTax from './pages/services/IncomeTax';
import RocCompliance from './pages/services/RocCompliance';
import TdsFiling from './pages/services/TdsFiling';
import Accounting from './pages/services/Accounting';
import ITSupport from './pages/services/ITSupport';
import WebsiteDevelopment from './pages/services/WebsiteDevelopment';
import BusinessEmailSetup from './pages/services/BusinessEmailSetup';
import CloudServer from './pages/services/CloudServerSetup';
import AWSLinuxSupport from './pages/services/AWSLinuxSupport';
import TechnicalConsulting from './pages/services/TechnicalConsulting';
import Services from './pages/Services';
import Resources from './pages/Resources';
import About from './pages/About';
import Contact from './pages/Contact';
import GstFilingPoster from './pages/GstFilingPoster';
import IncomeTaxPoster from './pages/IncomeTaxPoster';
import CombinedTaxPoster from './pages/CombinedTaxPoster';
import MSMEPoster from './pages/MSMEPoster';
import CompanyRegistration from './pages/services/CompanyRegistration';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <main style={{ flex: '1' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/poster" element={<GstFilingPoster />} />
            <Route path="/tax-poster" element={<IncomeTaxPoster />} />
            <Route path="/combined-poster" element={<CombinedTaxPoster />} />
            <Route path="/msme-poster" element={<MSMEPoster />} />
            <Route path="/services/gst-filing" element={<GstFiling />} />
            <Route path="/services/income-tax" element={<IncomeTax />} />
            <Route path="/services/roc-compliance" element={<RocCompliance />} />
            <Route path="/services/tds-filing" element={<TdsFiling />} />
            <Route path="/services/accounting-bookkeeping" element={<Accounting />} />
            <Route path="/services/company-registration" element={<CompanyRegistration />} />
            <Route path="/services/it-support" element={<ITSupport />} />
            <Route path="/services/website-development" element={<WebsiteDevelopment />} />
            <Route path="/services/business-email-setup" element={<BusinessEmailSetup />} />
            <Route path="/services/cloud-server-setup" element={<CloudServer />} />
            <Route path="/services/aws-linux-support" element={<AWSLinuxSupport />} />
            <Route path="/services/technical-consulting" element={<TechnicalConsulting />} />
            <Route path="/services" element={<Services />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;
