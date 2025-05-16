import { Box, Container, Grid, Typography, Button, TextField, IconButton } from '@mui/material';
import { Facebook, Twitter, LinkedIn, Instagram, Send } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Footer = () => {
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
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <Grid container spacing={5}>
          {/* Brand Info */}
          <Grid item xs={12} md={4}>
            <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ fontFamily: "'Poppins', sans-serif" }}>
              Task Nexus Technology Info
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, lineHeight: 1.8 }}>
              Building innovative software solutions to transform businesses and empower people.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              {[
                { icon: <Facebook />, url: 'https://facebook.com' },
                { icon: <Twitter />, url: 'https://twitter.com' },
                { icon: <LinkedIn />, url: 'https://linkedin.com' },
                { icon: <Instagram />, url: 'https://instagram.com' },
              ].map((item, idx) => (
                <IconButton
                  key={idx}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: 'white',
                    '&:hover': {
                      color: 'secondary.main',
                      transform: 'scale(1.1)',
                      transition: '0.3s',
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
            <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ fontFamily: "'Poppins', sans-serif" }}>
              Company
            </Typography>
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
                sx={{
                  display: 'block',
                  color: 'white',
                  textDecoration: 'none',
                  mb: 1,
                  '&:hover': {
                    color: 'secondary.main',
                    textDecoration: 'underline',
                  },
                }}
              >
                {link.text}
              </Typography>
            ))}
          </Grid>

          {/* Product Links */}
          <Grid item xs={6} sm={4} md={2}>
            <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ fontFamily: "'Poppins', sans-serif" }}>
              Products
            </Typography>
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
                sx={{
                  display: 'block',
                  color: 'white',
                  textDecoration: 'none',
                  mb: 1,
                  '&:hover': {
                    color: 'secondary.main',
                    textDecoration: 'underline',
                  },
                }}
              >
                {link.text}
              </Typography>
            ))}
          </Grid>

          {/* Newsletter */}
          <Grid item xs={12} sm={8} md={4}>
            <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ fontFamily: "'Poppins', sans-serif" }}>
              Subscribe to our newsletter
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, lineHeight: 1.6 }}>
              Get the latest updates and articles directly in your inbox.
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                display: 'flex',
                alignItems: 'center',
                width: '100%',
                maxWidth: 500,
                mt: 2,
              }}
            >
              <TextField
                type="email"
                placeholder="Enter your email"
                required
                size="small"
                fullWidth
                sx={{
                  backgroundColor: 'white',
                  borderRadius: '50px 0 0 50px',
                  '& fieldset': { border: 'none' },
                  input: {
                    px: 2,
                    py: 1.5,
                  },
                }}
              />
              <Button
                type="submit"
                variant="contained"
                color="secondary"
                endIcon={<Send />}
                sx={{
                  borderRadius: '0 50px 50px 0',
                  px: 3,
                  height: '100%',
                  '&:hover': {
                    boxShadow: '0 4px 10px rgba(255, 109, 0, 0.4)',
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
            pt: 3,
            textAlign: 'center',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          <Typography variant="body2">
            © {new Date().getFullYear()} Task Nexus Technology Info. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
