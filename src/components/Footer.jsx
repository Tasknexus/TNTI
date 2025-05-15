import { Box, Container, Grid, Typography, Button, TextField } from '@mui/material';
import { Facebook, Twitter, LinkedIn, Instagram, Send } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Footer = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription logic here
    alert('Thank you for subscribing!');
  };

  return (
    <Box sx={{ 
      py: 8,
      backgroundColor: 'primary.main',
      color: 'white',
      position: 'relative',
      overflow: 'hidden',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '4px',
        background: 'linear-gradient(90deg, #2962ff, #ff6d00)'
      }
    }}>
      <Container maxWidth="xl">
        <Grid container spacing={6}>
          {/* Company Info */}
          <Grid item xs={12} md={4}>
            <Typography variant="h5" sx={{ 
              fontWeight: 'bold', 
              mb: 2,
              fontFamily: "'Poppins', sans-serif"
            }}>
              Task Nexus Technology Info
            </Typography>
            <Typography sx={{ mb: 3, lineHeight: 1.6 }}>
              Building innovative software solutions to transform businesses and empower people.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              {[
                { icon: <Facebook />, url: "https://facebook.com" },
                { icon: <Twitter />, url: "https://twitter.com" },
                { icon: <LinkedIn />, url: "https://linkedin.com" },
                { icon: <Instagram />, url: "https://instagram.com" }
              ].map((social, index) => (
                <Button
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    minWidth: 'auto',
                    p: 1,
                    color: 'white',
                    '&:hover': {
                      transform: 'translateY(-3px)',
                      transition: 'transform 0.3s ease'
                    }
                  }}
                >
                  {social.icon}
                </Button>
              ))}
            </Box>
          </Grid>
          
          {/* Quick Links - Company */}
          <Grid item xs={6} md={2}>
            <Typography variant="h6" sx={{ 
              fontWeight: 'bold', 
              mb: 3,
              fontFamily: "'Poppins', sans-serif"
            }}>
              Company
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              {[
                { text: "About", path: "/about" },
                { text: "Careers", path: "/careers" },
                { text: "Blog", path: "/blog" },
                { text: "Press", path: "/press" }
              ].map((link, index) => (
                <Typography 
                  key={index}
                  component={Link}
                  to={link.path}
                  sx={{
                    color: 'white',
                    textDecoration: 'none',
                    '&:hover': {
                      textDecoration: 'underline',
                      color: 'secondary.main'
                    }
                  }}
                >
                  {link.text}
                </Typography>
              ))}
            </Box>
          </Grid>
          
          {/* Quick Links - Products */}
          <Grid item xs={6} md={2}>
            <Typography variant="h6" sx={{ 
              fontWeight: 'bold', 
              mb: 3,
              fontFamily: "'Poppins', sans-serif"
            }}>
              Products
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              {[
                { text: "Features", path: "/features" },
                { text: "Services", path: "/Services" },
                { text: "API", path: "/api" },
                { text: "Integrations", path: "/integrations" }
              ].map((link, index) => (
                <Typography 
                  key={index}
                  component={Link}
                  to={link.path}
                  sx={{
                    color: 'white',
                    textDecoration: 'none',
                    '&:hover': {
                      textDecoration: 'underline',
                      color: 'secondary.main'
                    }
                  }}
                >
                  {link.text}
                </Typography>
              ))}
            </Box>
          </Grid>
          
          {/* Newsletter */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ 
              fontWeight: 'bold', 
              mb: 3,
              fontFamily: "'Poppins', sans-serif"
            }}>
              Subscribe to our newsletter
            </Typography>
            <Typography sx={{ mb: 2, lineHeight: 1.6 }}>
              The latest news, articles, and resources, sent to your inbox weekly.
            </Typography>
            <Box 
              component="form" 
              onSubmit={handleSubmit}
              sx={{ 
                display: 'flex',
                maxWidth: '500px'
              }}
            >
              <TextField
                type="email"
                placeholder="Your email address"
                required
                size="small"
                sx={{
                  flexGrow: 1,
                  backgroundColor: 'white',
                  borderRadius: '50px 0 0 50px',
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      border: 'none'
                    },
                    '&.Mui-focused fieldset': {
                      border: 'none'
                    }
                  }
                }}
                InputProps={{
                  style: {
                    paddingLeft: '16px',
                    height: '48px'
                  }
                }}
              />
              <Button
                type="submit"
                variant="contained"
                color="secondary"
                sx={{
                  borderRadius: '0 50px 50px 0',
                  px: 3,
                  height: '48px',
                  minWidth: '120px',
                  '&:hover': {
                    transform: 'none',
                    boxShadow: '0 4px 12px rgba(255, 109, 0, 0.3)'
                  }
                }}
                endIcon={<Send />}
              >
                Subscribe
              </Button>
            </Box>
          </Grid>
        </Grid>
        
        {/* Copyright */}
        <Box sx={{ 
          mt: 8,
          pt: 4,
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          textAlign: 'center'
        }}>
          <Typography variant="body2">
            © {new Date().getFullYear()} TNT Info. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;