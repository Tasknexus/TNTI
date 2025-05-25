import { Box, Typography, Container, Grid, Card, CardContent } from '@mui/material';
import { Code, DesignServices, Cloud, Analytics, Palette, Search } from '@mui/icons-material';

const services = [
  {
    icon: <Code sx={{ fontSize: '3rem', color: 'primary.main' }} />,
    title: 'Custom Software',
    description: 'Tailored solutions designed specifically for your business requirements.'
  },
  {
    icon: <DesignServices sx={{ fontSize: '3rem', color: 'primary.main' }} />,
    title: 'UI/UX Design',
    description: 'Beautiful interfaces with intuitive user experiences that delight customers.'
  },
  {
    icon: <Cloud sx={{ fontSize: '3rem', color: 'primary.main' }} />,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure to power your digital transformation.'
  },
  {
    icon: <Analytics sx={{ fontSize: '3rem', color: 'primary.main' }} />,
    title: 'Data Analytics',
    description: 'Actionable insights from your data to drive business decisions.'
  },
  {
    icon: <Palette sx={{ fontSize: '3rem', color: 'primary.main' }} />,
    title: 'Logo Design',
    description: 'Memorable brand identities that make lasting impressions.'
  },
  {
    icon: <Search sx={{ fontSize: '3rem', color: 'primary.main' }} />,
    title: 'SEO Service',
    description: 'Boost your online visibility and drive organic traffic to your website.'
  }
];

const Services = () => {
  return (
    <Box sx={{ py: 10, backgroundColor: 'background.paper' }}>
      
      <Container maxWidth="xl">
        <Typography variant="h3" align="center" sx={{ fontWeight: 'bold', mb: 2 }}>
          Our <Box component="span" sx={{ color: 'primary.main' }}>Services</Box>
        </Typography>
        <Typography variant="h6" align="center" sx={{ 
          mb: 6, 
          color: 'text.secondary', 
          maxWidth: '700px', 
          mx: 'auto' 
        }}>
          We offer comprehensive software development services to help your business thrive in the digital world.
        </Typography>
        
        <Grid container spacing={4} justifyContent="center">
          {services.map((service, index) => (
            <Grid 
              item 
              xs={12}    // 1 card per row on mobile
              sm={6}     // 2 cards per row on tablet
              md={4}     // 3 cards per row on laptop/desktop
              lg={4}     // 3 cards per row on large desktop
              key={index}
              sx={{
                display: 'flex',
                justifyContent: 'center'
              }}
            >
              <Card sx={{ 
                width: '100%',
                maxWidth: 350,  // Fixed maximum width
                height: '100%', // Equal height cards
                borderRadius: '16px',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 15px 35px rgba(0, 0, 0, 0.1)'
                }
              }}>
                <CardContent sx={{ 
                  p: 4, 
                  textAlign: 'center',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center'
                }}>
                  <Box sx={{ mb: 3 }}>
                    {service.icon}
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
                    {service.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;