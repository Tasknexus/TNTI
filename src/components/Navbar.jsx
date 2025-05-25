import { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Container, 
  Box, 
  IconButton,
  Menu,
  MenuItem,
  Divider,
  useMediaQuery,
  useTheme,
  Fade,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import { 
  Menu as MenuIcon,
  Close as CloseIcon,
  Home as HomeIcon,
  Info as AboutIcon,
  DesignServices as ServicesIcon,
  ContactMail as ContactIcon,
  RocketLaunch as GetStartedIcon,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // Modern menu items with icons
  const menuItems = [
    { text: "Home", path: "/", icon: <HomeIcon fontSize="small" /> },
    { text: "About", path: "/about", icon: <AboutIcon fontSize="small" /> },
    { text: "Pricing", path: "/Pricing", icon: <ServicesIcon fontSize="small" /> },
    { text: "Contact", path: "/contact", icon: <ContactIcon fontSize="small" /> }
  ];

  return (
    <AppBar 
      position="sticky" 
      elevation={0} 
      sx={{ 
        backgroundColor: 'rgba(174, 224, 243, 0.8)',
        backdropFilter: 'blur(10px)',
        color: 'primary.main',
        borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
        py: 1
      }}
    >
      <Container maxWidth="xxl">
        <Toolbar sx={{ px: { xs: 0, sm: 2 } }}>
          {/* Logo/Brand */}
          <Box 
            component={Link} 
            to="/" 
            sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              flexGrow: 1,
              textDecoration: 'none',
              color: 'inherit'
            }}
          >
            <Box
    component="img"
    src="./favicon.ico"
    alt="Logo"
    sx={{
      width: 60,
      height: 50,
      mr: 2
    }}
  />
            <Typography 
              variant="h6" 
              component="div" 
              sx={{ 
                fontWeight: 800,
                fontFamily: "'Poppins', sans-serif",
                letterSpacing: '-0.5px'
              }}
            >
              Task Nexus Technology Info
            </Typography>
          </Box>
          
          {/* Desktop Navigation */}
          {!isMobile && (
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center',
              gap: 1
            }}>
              {menuItems.map((item) => (
                <Button
                  key={item.text}
                  component={Link}
                  to={item.path}
                  color="inherit"
                  sx={{ 
                    fontWeight: 600,
                    borderRadius: '12px',
                    px: 2,
                    py: 1,
                    '&:hover': {
                      backgroundColor: 'rgba(41, 98, 255, 0.05)',
                      transform: 'translateY(-2px)',
                      transition: 'all 0.3s ease'
                    }
                  }}
                  startIcon={item.icon}
                >
                  {item.text}
                </Button>
              ))}
              
              <Button 
                component={Link}
                to="/service-request" 
                variant="contained" 
                color="primary" 
                sx={{ 
                  borderRadius: '12px',
                  px: 3,
                  ml: 1,
                  fontWeight: 'bold',
                  boxShadow: '0 4px 14px rgba(41, 98, 255, 0.2)',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 6px 20px rgba(41, 98, 255, 0.3)',
                    transition: 'all 0.3s ease'
                  }
                }}
                startIcon={<GetStartedIcon />}
              >
                Get Started
              </Button>
            </Box>
          )}
          
          {/* Mobile Menu Button */}
          {isMobile && (
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={handleMenuOpen}
              sx={{ 
                color: 'primary.main',
                backgroundColor: open ? 'rgba(41, 98, 255, 0.1)' : 'transparent',
                borderRadius: '12px',
                p: 1.5
              }}
            >
              {open ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          )}
          
          {/* Mobile Menu */}
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleMenuClose}
            TransitionComponent={Fade}
            PaperProps={{
              sx: {
                width: '280px',
                maxWidth: '100%',
                mt: 2,
                borderRadius: '16px',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                border: '1px solid rgba(0, 0, 0, 0.05)',
                overflow: 'hidden'
              }
            }}
            MenuListProps={{
              sx: {
                py: 0
              }
            }}
          >
            <Box sx={{ p: 2, backgroundColor: 'primary.main', color: 'white' }}>
              <Typography variant="h6" fontWeight="bold">Menu</Typography>
            </Box>
            
            {menuItems.map((item) => (
              <MenuItem 
                key={item.text}
                component={Link} 
                to={item.path} 
                onClick={handleMenuClose}
                sx={{ 
                  py: 1.5,
                  px: 2,
                  '&:hover': {
                    backgroundColor: 'rgba(41, 98, 255, 0.05)'
                  }
                }}
              >
                <ListItemIcon sx={{ color: 'inherit' }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText 
                  primary={item.text} 
                  primaryTypographyProps={{ fontWeight: 500 }}
                />
              </MenuItem>
            ))}
            
            <Divider sx={{ my: 0.5 }} />
            
            <Box sx={{ p: 2 }}>
              <Button 
                component={Link}
                to="/service-request"
                fullWidth
                variant="contained" 
                color="primary" 
                onClick={handleMenuClose}
                sx={{ 
                  borderRadius: '12px',
                  py: 1.5,
                  fontWeight: 'bold',
                  boxShadow: '0 4px 14px rgba(41, 98, 255, 0.2)',
                  '&:hover': {
                    boxShadow: '0 6px 20px rgba(41, 98, 255, 0.3)'
                  }
                }}
                startIcon={<GetStartedIcon />}
              >
                Get Started
              </Button>
            </Box>
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;