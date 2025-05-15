import { Box, Typography, Container, Grid, Avatar, Button, Stack, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { CheckCircle, Groups, Engineering, Code, BusinessCenter, Support, RocketLaunch, Security, Cloud, DesignServices } from '@mui/icons-material';

const About = () => {
  const stats = [
    { value: '50+', label: 'Happy Clients', icon: <Groups fontSize="large" /> },
    { value: '100+', label: 'Projects Delivered', icon: <Code fontSize="large" /> },
    { value: '15+', label: 'Industry Awards', icon: <RocketLaunch fontSize="large" /> },
    { value: '10+', label: 'Years Experience', icon: <Engineering fontSize="large" /> }
  ];

  const services = [
    { name: 'Web Development', icon: <Code color="primary" sx={{ fontSize: 40 }} /> },
    { name: 'Mobile Apps', icon: <DesignServices color="primary" sx={{ fontSize: 40 }} /> },
    { name: 'Cloud Solutions', icon: <Cloud color="primary" sx={{ fontSize: 40 }} /> },
    { name: 'AI/ML Services', icon: <Security color="primary" sx={{ fontSize: 40 }} /> }
  ];

  return (
    <Box sx={{ py: 10, backgroundColor: 'background.default' }}>
      <Container maxWidth="xl">
        <Grid container spacing={6} alignItems="center">
          {/* Left Side: Text Content */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Chip 
                label="WHO WE ARE" 
                color="primary" 
                sx={{ 
                  mb: 2, 
                  px: 2, 
                  py: 1, 
                  fontWeight: 'bold',
                  fontSize: '0.8rem'
                }} 
              />

              <Typography 
                variant="h2" 
                sx={{ 
                  fontWeight: 'bold', 
                  mb: 3,
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  lineHeight: 1.2
                }}
              >
                Transforming <Box component="span" sx={{ color: 'primary.main' }}>Businesses</Box> Through Digital Innovation
              </Typography>

              <Typography variant="body1" sx={{ mb: 3, fontSize: '1.1rem', lineHeight: 1.8, color: 'text.secondary' }}>
                Founded in 2015, TNT Info has established itself as a premier digital solutions provider, helping businesses of all sizes navigate the complex digital landscape. Our team of certified professionals combines technical expertise with business acumen to deliver solutions that drive real results.
              </Typography>

              <Typography variant="body1" sx={{ mb: 4, fontSize: '1.1rem', lineHeight: 1.8, color: 'text.secondary' }}>
                We specialize in creating custom digital experiences that are not just visually stunning but also highly functional and scalable. Our client-centric approach ensures that every solution we deliver is tailored to meet your specific business objectives.
              </Typography>

              {/* Services Highlights */}
              <Box sx={{ mb: 4 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                  Our Core Services:
                </Typography>
                <Grid container spacing={2}>
                  {services.map((service, index) => (
                    <Grid item xs={6} key={index}>
                      <Stack direction="row" spacing={2} alignItems="center">
                        {service.icon}
                        <Typography variant="body1" sx={{ fontWeight: 500 }}>{service.name}</Typography>
                      </Stack>
                    </Grid>
                  ))}
                </Grid>
              </Box>

              {/* Mission Statement */}
              <Box sx={{ 
                p: 3, 
                mb: 4,
                backgroundColor: 'primary.light', 
                borderRadius: '12px',
                borderLeft: '4px solid',
                borderColor: 'primary.main'
              }}>
                <Typography variant="body1" sx={{ fontStyle: 'italic', fontWeight: 500 }}>
                  "Our mission is to empower businesses through innovative technology solutions that drive growth, efficiency, and competitive advantage in an increasingly digital world."
                </Typography>
              </Box>

              {/* Company Stats */}
              <Box sx={{ 
                display: 'grid',
                gridTemplateColumns: { xs: '1fr 1fr', md: '1fr 1fr 1fr 1fr' },
                gap: 3,
                mb: 4
              }}>
                {stats.map((stat, index) => (
                  <Box key={index} textAlign="center" sx={{ p: 2 }}>
                    <Avatar sx={{ 
                      bgcolor: 'primary.main', 
                      color: 'white',
                      width: 60,
                      height: 60,
                      mb: 2,
                      mx: 'auto'
                    }}>
                      {stat.icon}
                    </Avatar>
                    <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                      {stat.value}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {stat.label}
                    </Typography>
                  </Box>
                ))}
              </Box>

              {/* Call to Action Buttons */}
              <Stack direction="row" spacing={2}>
                <Button 
                  variant="contained" 
                  size="large" 
                  sx={{ 
                    borderRadius: '8px',
                    px: 4,
                    py: 1.5,
                    fontWeight: 'bold',
                    textTransform: 'none',
                    fontSize: '1rem'
                  }}
                >
                  Explore Services
                </Button>
                <Button 
                  variant="outlined" 
                  size="large" 
                  sx={{ 
                    borderRadius: '8px',
                    px: 4,
                    py: 1.5,
                    fontWeight: 'bold',
                    textTransform: 'none',
                    fontSize: '1rem'
                  }}
                >
                  Meet Our Team
                </Button>
              </Stack>
            </motion.div>
          </Grid>

          {/* Right Side: Image and Expertise */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Box
                sx={{
                  position: 'relative',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
                  mb: 4
                }}
              >
                <Box
                  component="img"
                  src="/images/about-team.jpg"
                  alt="Our Team at Work"
                  sx={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    transition: 'transform 0.5s ease',
                    '&:hover': {
                      transform: 'scale(1.03)'
                    }
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    p: 3,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)',
                    color: 'white'
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    Our Dedicated Team
                  </Typography>
                  <Typography variant="body2">
                    Certified professionals committed to your success
                  </Typography>
                </Box>
              </Box>

              {/* Expertise Section */}
              <Box sx={{ 
                p: 4, 
                backgroundColor: 'background.paper',
                borderRadius: '16px',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
                mb: 3
              }}>
                <Stack direction="row" spacing={3} alignItems="center">
                  <Avatar sx={{ 
                    bgcolor: 'primary.main', 
                    color: 'white',
                    width: 60,
                    height: 60
                  }}>
                    <Engineering fontSize="large" />
                  </Avatar>
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                      Technical Excellence
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      Our team stays ahead of technology trends through continuous learning and certifications in the latest frameworks and platforms.
                    </Typography>
                  </Box>
                </Stack>
              </Box>

              {/* Process Section */}
              <Box sx={{ 
                p: 4, 
                backgroundColor: 'background.paper',
                borderRadius: '16px',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)'
              }}>
                <Stack direction="row" spacing={3} alignItems="center">
                  <Avatar sx={{ 
                    bgcolor: 'primary.main', 
                    color: 'white',
                    width: 60,
                    height: 60
                  }}>
                    <BusinessCenter fontSize="large" />
                  </Avatar>
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                      Proven Methodology
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      We follow an agile development process that ensures transparency, flexibility, and timely delivery of high-quality solutions.
                    </Typography>
                  </Box>
                </Stack>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;