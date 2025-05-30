import { Box } from '@mui/material';
import { lazy, Suspense } from 'react';
import LoadingSpinner from '../components/LoadingSpinner'; // Create this component

// Lazy load components
const Hero = lazy(() => import('../components/Hero'));
const Services = lazy(() => import('../components/Services'));
const Portfolio = lazy(() => import('../components/portfolio/Portfolio'));
const Testimonials = lazy(() => import('../components/Testimonials'));
const Team = lazy(() => import('../components/Team'));

const Home = () => {
  return (
    <Box>
      {/* Hero section loads immediately */}
      <Suspense fallback={null}>
        <Hero />
      </Suspense>

      {/* Other sections lazy load with smooth transitions */}
      <Suspense fallback={<LoadingSpinner />}>
        <Services />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <Portfolio />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <Testimonials />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <Team />
      </Suspense>

     
     
    </Box>
  );
};

export default Home;