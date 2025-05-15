import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Portfolio from './components/portfolio/Portfolio';
import AllProjects from './components/portfolio/AllProjects';
import ProjectDetails from './components/portfolio/PortfolioDetail'; // Updated import
import ServiceRequestForm from './components/ServiceRequestForm';
import Careers from './pages/Careers';
import Blog from './pages/Blog';
import Press from './pages/Press';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import API from './pages/API';
import Integrations from './pages/Integrations';
import ScrollToTop from './components/ScrollToTop';
import NotFound from './pages/NotFound';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2962ff',
      light: '#768fff',
      dark: '#0039cb',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#ff6d00',
      light: '#ff9e40',
      dark: '#c43c00',
      contrastText: '#000000',
    },
    background: {
      default: '#f5f7ff',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: '"Poppins", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '2.5rem',
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 12,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/press" element={<Press />} />
          
          {/* Product Pages */}
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/api" element={<API />} />
          <Route path="/integrations" element={<Integrations />} />
          
          {/* Portfolio Routes - Fixed Structure */}
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/all" element={<AllProjects />} />
          <Route path="/portfolio/:id" element={<ProjectDetails />} />
          
          {/* Service Route */}
          <Route path="/service-request" element={<ServiceRequestForm />} />
           <Route path="/team" element={<Team />} />
           <Route path="/testimonials" element={<Testimonials />} />
          {/* 404 Page */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;