import { 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  Box, 
  Chip,
  Button,
  useTheme,
  Divider,
  List,
  ListItem,
  ListItemIcon
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import { useNavigate } from 'react-router-dom';

const Pricing = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const allPackages = [
    {
      id: 'premium',
      name: "Premium Dynamic Website",
      originalPrice: 21999,
      price: 18040,
      features: [
        "6–8 Pages with Admin Panel",
        "Content Update System",
        "Contact Form (DB + Email)",
        "Lifetime Free Access",
        "Full Hosting Status View",
        "Custom Branding (Logo + Colors)",
        "SSL Certificate",
        "Advanced SEO Tools",
        "User Roles & Permissions",
        "Multi-language Support",
        "Blog Section",
        "Payment Gateway Integration",
        "Newsletter System",
        "Backup and Security System",
        "Client Admin Pannel Activation Cost: ₹199 [One Time]",
      ],
      maintenance: 199,
      tag: "Premium",
      discount: 18
    },
    {
      id: 'pro',
      name: "Pro Website Package",
      originalPrice: 11999,
      price: 9840,
      features: [
        "4–5 Pages",
        "Inquiry Form",
        "Basic SEO Tags",
        "Responsive Design",
        "Client Panel Access",
        "Lifetime Free Access",
        "Activation Cost: ₹149",
        "AI-Powered Content Creation",
        "Real-Time Analytics Dashboard",
        "Unlimited Customizable Themes",
        "Virtual Assistant Integration",
        "Advanced Security with Blockchain",
        "Customizable 3D Animations"
      ],
      maintenance: 149,
      popular: true,
      tag: "Popular",
      discount: 18
    },
    {
      id: 'starter',
      name: "Smart Starter Package",
      originalPrice: 4999,
      price: 4400,
      features: [
        "1–2 Static Pages",
        "Mobile Responsive",
        "WhatsApp Chat Button",
        "Delivery in 5–7 Days",
        "Client Panel Access",
        "Hosting Status (6 Months)",
        "Advanced Performance Optimization",
        "Virtual Reality Integration",
        "24/7 Human-like Customer Support",
        "Live Social Media Feeds on Website",
        "Client Pannel Activation Cost: ₹199",
      ],
      maintenance: 399,
      tag: "Basic",
      discount: 12
    },
    {
      id: 'webapp',
      name: "Basic Web Application",
      originalPrice: 24999,
      price: 19999,
      features: [
        "Responsive Design",
        "Admin Dashboard",
        "API Integration",
        "User Authentication",
        "Custom Forms",
        "SEO Optimization",
        "Google Analytics Integration",
        "SSL Encryption",
        "Content Management System (CMS)",
        "Social Media Integration",
        "Backup and Restore",
        "Performance Optimization",
        "🌟 Free Domain & Hosting for 1 Year (if billed annually)",
        "6 Months Support"
      ],
      maintenance: 199,
      tag: "Custom",
      discount: 20
    },
    {
      id: 'desktop',
      name: "Small Desktop Application",
      originalPrice:25000,
      price: 20000,
      features: [
        "Windows/Mac/Linux",
        "Offline Functionality",
        "Database Integration",
        "Auto-update System",
        "1 Year Support",
        "Customizable User Interface",
        "Security Enhancements",
        "Backup and Restore",
        "Error Logging and Reporting",
        "Multi-Language Support"
      ],
      maintenance: 199,
      tag: "Custom",
      discount: 20
    },
    {
      id: 'seo',
      name: "SEO Package",
      originalPrice: 7999,
      price: 5999,
      features: [
        "Keyword Research",
        "On-Page Optimization",
        "Technical SEO Audit",
        "Monthly Reporting",
        "3 Months Maintenance",
        "Backlink Building",
        "Content Optimization",
        "Local SEO Optimization",
        "Google My Business Setup",
        "Competitor Analysis",
      ],
      maintenance: 49,
      tag: "SEO",
      discount: 20
    },
     {id: 'logo-design',
    name: "Logo Design Package",
    originalPrice: 3000,
    price: 1500,
    features: [
      "Custom Logo Design",
      "Unlimited Revisions",
      "High-Quality Files (AI, EPS, PNG, JPG, SVG, PDF)",
      "Brand Color Palette",
      "Business Card Design",
      "Unique Concept",
      "Social Media Kit",
    ],
    maintenance: 0,
    tag: "Logo Design",
    discount: 50
  },
  ];

  const handleContactClick = (pkg) => {
    // Format package details for requirements field
    const requirements = `
      Selected Package: ${pkg.name}
      Price: ₹${pkg.price.toLocaleString()}/- (Original: ₹${pkg.originalPrice.toLocaleString()}/-)
      Discount: ${pkg.discount}% Off
      Monthly Maintenance: ₹${pkg.maintenance.toLocaleString()}
      
      Features Included:
      ${pkg.features.map(f => `• ${f}`).join('\n')}
      
      Additional Requirements:
    `;

    navigate('/contact', {
      state: {
        package: pkg,
        prefilledRequirements: requirements.trim()
      }
    });
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }} id="pricing">
      <Box textAlign="center" mb={6}>
        <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 700, color: theme.palette.text.primary }}>
          Complete Pricing Solutions
        </Typography>
        <Typography variant="subtitle1" sx={{ maxWidth: 700, mx: 'auto', color: theme.palette.text.secondary }}>
          Choose from our wide range of professional packages
        </Typography>
      </Box>

      <Grid container spacing={4} justifyContent="center" alignItems="center">
        {allPackages.map((pkg) => (
          <Grid item xs={12} sm={6} md={4} key={pkg.id}>
            <Card sx={{ 
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              border: pkg.popular ? `2px solid ${theme.palette.primary.main}` : `1px solid ${theme.palette.divider}`,
              boxShadow: pkg.popular ? theme.shadows[4] : 'none',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: theme.shadows[8]
              },
              margin: '0 auto'  // Center the card within grid item
            }}>
              {/* Discount Badge - Perfectly positioned */}
              <Box sx={{
                position: 'absolute',
                top: 4,
                left: 5,
                bgcolor: 'secondary.main',
                color: 'secondary.contrastText',
                borderRadius: '50%',
                width: 45,
                height: 45,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 1
              }}>
                <LocalOfferIcon fontSize="small" />
                <Typography variant="caption" sx={{ fontWeight: 'bold' }}>
                  {pkg.discount}%
                </Typography>
              </Box>

              {pkg.popular && (
                <Chip
                  label={pkg.tag}
                  color="primary"
                  size="small"
                  sx={{
                    position: 'absolute',
                    top: 8,
                    right: 8,
                    fontWeight: 'bold'
                  }}
                />
              )}

              <CardContent sx={{ flexGrow: 1, pt: 6 }}>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, textAlign: 'center' }}>
                  {pkg.name}
                </Typography>

                <Box sx={{ textAlign: 'center', mb: 2 }}>
                  <Typography variant="h4" sx={{ fontWeight: 700, color: 'primary.main' }}>
                    ₹{pkg.price.toLocaleString()}/-
                  </Typography>
                  <Typography variant="body2" sx={{ textDecoration: 'line-through', color: 'text.disabled' }}>
                    ₹{pkg.originalPrice.toLocaleString()}/-
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>
                    + ₹{pkg.maintenance.toLocaleString()}/month
                  </Typography>
                </Box>

                <Divider sx={{ my: 2 }} />

                <List dense>
                  {pkg.features.map((feature, idx) => (
                    <ListItem key={idx} sx={{ px: 0, py: 0.5 }}>
                      <ListItemIcon sx={{ minWidth: 32 }}>
                        <CheckCircleIcon color="primary" fontSize="small" />
                      </ListItemIcon>
                      <Typography variant="body2">{feature}</Typography>
                    </ListItem>
                  ))}
                </List>
              </CardContent>

              <Box sx={{ p: 2 }}>
                <Button
                  fullWidth
                  variant={pkg.popular ? 'contained' : 'outlined'}
                  onClick={() => handleContactClick(pkg)}
                  sx={{ fontWeight: 600 }}
                >
                  Get Started
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Pricing;
