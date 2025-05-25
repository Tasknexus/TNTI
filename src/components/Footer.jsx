import { Box, Container, Grid, Typography, Button, TextField, IconButton, useMediaQuery, useTheme } from '@mui/material';
import { Facebook, Twitter, LinkedIn, Instagram, Send } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for subscribing!');
  };

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'primary.main',
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
        mt: 10,
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'linear-gradient(90deg, #2962ff, #ff6d00)',
        },
      }}
    >
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
        <Grid container spacing={{ xs: 3, md: 6 }}>
          {/* Brand Info */}
          <Grid item xs={12} md={4}>
            <Typography 
              variant={isMobile ? 'h6' : 'h5'} 
              fontWeight="bold" 
              gutterBottom 
              sx={{ 
                fontFamily: "'Poppins', sans-serif",
                letterSpacing: '0.5px'
              }}
            >
              Task Nexus Technology Info
            </Typography>
            <Typography variant="body2" sx={{ 
              mb: 2, 
              lineHeight: 1.8,
              opacity: 0.9,
              fontSize: '0.9rem'
            }}>
              Building innovative software solutions to transform businesses and empower people.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1.5 }}>
              {[
                { icon: <Facebook fontSize={isMobile ? 'small' : 'medium'} />, url: 'https://facebook.com' },
                { icon: <Twitter fontSize={isMobile ? 'small' : 'medium'} />, url: 'https://twitter.com' },
                { icon: <LinkedIn fontSize={isMobile ? 'small' : 'medium'} />, url: 'https://linkedin.com' },
                { icon: <Instagram fontSize={isMobile ? 'small' : 'medium'} />, url: 'https://instagram.com' },
              ].map((item, idx) => (
                <IconButton
                  key={idx}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: 'white',
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    '&:hover': {
                      color: 'secondary.main',
                      backgroundColor: 'rgba(255,255,255,0.2)',
                      transform: 'translateY(-2px)',
                      transition: 'all 0.3s ease',
                    },
                  }}
                >
                  {item.icon}
                </IconButton>
              ))}
            </Box>
          </Grid>

          {/* Company Links */}
          <Grid item xs={6} sm={4} md={2}>
            <Typography 
              variant={isMobile ? 'subtitle1' : 'h6'} 
              fontWeight="bold" 
              gutterBottom 
              sx={{ 
                fontFamily: "'Poppins', sans-serif",
                letterSpacing: '0.5px',
                mb: 2
              }}
            >
              Company
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              {[
                { text: 'About', path: '/about' },
                { text: 'Careers', path: '/careers' },
                { text: 'Blog', path: '/blog' },
                { text: 'Press', path: '/press' },
              ].map((link, idx) => (
                <Typography
                  key={idx}
                  component={Link}
                  to={link.path}
                  variant="body2"
                  sx={{
                    color: 'rgba(255,255,255,0.8)',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      color: 'secondary.main',
                      transform: 'translateX(4px)',
                    },
                  }}
                >
                  {link.text}
                </Typography>
              ))}
            </Box>
          </Grid>

          {/* Product Links */}
          <Grid item xs={6} sm={4} md={2}>
            <Typography 
              variant={isMobile ? 'subtitle1' : 'h6'} 
              fontWeight="bold" 
              gutterBottom 
              sx={{ 
                fontFamily: "'Poppins', sans-serif",
                letterSpacing: '0.5px',
                mb: 2
              }}
            >
              Products
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              {[
                { text: 'Features', path: '/features' },
                { text: 'Services', path: '/services' },
                { text: 'API', path: '/api' },
                { text: 'Integrations', path: '/integrations' },
              ].map((link, idx) => (
                <Typography
                  key={idx}
                  component={Link}
                  to={link.path}
                  variant="body2"
                  sx={{
                    color: 'rgba(255,255,255,0.8)',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      color: 'secondary.main',
                      transform: 'translateX(4px)',
                    },
                  }}
                >
                  {link.text}
                </Typography>
              ))}
            </Box>
          </Grid>

          {/* Newsletter - Enhanced Section */}
          <Grid item xs={12} sm={8} md={4}>
            <Typography 
              variant={isMobile ? 'subtitle1' : 'h6'} 
              fontWeight="bold" 
              gutterBottom 
              sx={{ 
                fontFamily: "'Poppins', sans-serif",
                letterSpacing: '0.5px',
                mb: 2
              }}
            >
              Subscribe to our newsletter
            </Typography>
            <Typography variant="body2" sx={{ 
              mb: 3, 
              lineHeight: 1.6,
              opacity: 0.9,
              fontSize: '0.9rem'
            }}>
              Get the latest updates and articles directly in your inbox.
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                display: 'flex',
                flexDirection: isMobile ? 'column' : 'row',
                alignItems: 'center',
                gap: isMobile ? 1.5 : 0,
                width: '100%',
                maxWidth: 500,
              }}
            >
              <TextField
                type="email"
                placeholder="Your email address"
                required
                size="small"
                fullWidth
                sx={{
                  backgroundColor: 'white',
                  borderRadius: isMobile ? '8px' : '8px 0 0 8px',
                  '& fieldset': { border: 'none' },
                  '& .MuiInputBase-root': {
                    height: '46px',
                  },
                  '& .MuiInputBase-input': {
                    px: 2.5,
                    py: 1,
                    fontSize: '0.9rem',
                  },
                }}
              />
              <Button
                type="submit"
                variant="contained"
                color="secondary"
                startIcon={!isMobile && <Send />}
                endIcon={isMobile && <Send />}
                fullWidth={isMobile}
                sx={{
                  borderRadius: isMobile ? '8px' : '0 8px 8px 0',
                  px: 3,
                  height: '46px',
                  minWidth: isMobile ? '100%' : 'auto',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  textTransform: 'capitalize',
                  letterSpacing: '0.5px',
                  '&:hover': {
                    boxShadow: '0 4px 12px rgba(255, 109, 0, 0.3)',
                    transform: 'translateY(-1px)',
                  },
                }}
              >
                Subscribe
              </Button>
            </Box>
          </Grid>
        </Grid>

        {/* Copyright */}
        <Box
          sx={{
            mt: 8,
            pt: 4,
            textAlign: 'center',
            borderTop: '1px solid rgba(255, 255, 255, 0.15)',
          }}
        >
          <Typography variant="body2" sx={{ 
            opacity: 0.8,
            fontSize: '0.85rem'
          }}>
            © {new Date().getFullYear()} Task Nexus Technology Info. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;