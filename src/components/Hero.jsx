import { Box, Typography, Button, Container, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import heroImage from '../assets/images/hero-image.png'; // Convert to WebP format
import heroImagePlaceholder from '../assets/images/hero-image-placeholder.jpg';

const Hero = () => {
  return (
    <Box sx={{ 
      py: 8,
      background: 'linear-gradient(135deg, #f5f7ff 0%, #e8ecff 100%)',
      overflow: 'hidden'
    }}>
      <Container maxWidth="xl">
        <Grid container alignItems="center" spacing={6}>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography variant="h2" sx={{ 
                fontWeight: 'bold', 
                mb: 3,
                fontSize: { xs: '2.2rem', md: '3rem' },
                lineHeight: 1.2
              }}>
                Building Digital <Box component="span" sx={{ color: 'primary.main' }}>Solutions</Box> That Matter
              </Typography>
              <Typography variant="h6" sx={{ mb: 4, color: 'text.secondary', fontSize: '1.1rem' }}>
                We craft beautiful, functional software tailored to your business needs.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Button 
                  variant="contained" 
                  size="large"
                  sx={{
                    borderRadius: '50px',
                    px: 4,
                    py: 1.5,
                    fontSize: '1rem',
                    boxShadow: '0 4px 14px rgba(41, 98, 255, 0.3)',
                    minWidth: '160px'
                  }}
                >
                  Get Started
                </Button>
                <Button 
                  variant="outlined" 
                  size="large"
                  sx={{
                    borderRadius: '50px',
                    px: 4,
                    py: 1.5,
                    fontSize: '1rem',
                    minWidth: '160px'
                  }}
                >
                  Learn More
                </Button>
              </Box>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%'
            }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                style={{
                  maxWidth: '500px',
                  width: '100%',
                  margin: '0 auto'
                }}
              >
                <Box 
                  component="img" 
                  src={heroImagePlaceholder}
                  data-src={heroImage}
                  alt="Digital Solutions" 
                  sx={{ 
                    width: '100%',
                    height: 'auto',
                    maxHeight: '400px',
                    objectFit: 'contain',
                    borderRadius: '12px',
                    boxShadow: '0 15px 30px rgba(41, 98, 255, 0.2)',
                    transition: 'filter 0.5s ease-out',
                    display: 'block',
                    margin: '0 auto'
                  }}
                  onLoad={(e) => {
                    const img = new Image();
                    img.src = e.target.dataset.src;
                    img.onload = () => {
                      e.target.src = img.src;
                    };
                  }}
                />
              </motion.div>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;