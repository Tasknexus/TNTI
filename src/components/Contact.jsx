import { Box, Typography, Container, Grid, Stack, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { Phone, Email, LocationOn } from '@mui/icons-material';

const Contact = () => {
  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="xl">
        <Typography variant="h2" sx={{ 
          fontWeight: 'bold', 
          mb: 2,
          textAlign: 'center'
        }}>
          Our <Box component="span" sx={{ color: 'primary.main' }}>Office</Box>
        </Typography>
        
        <Typography variant="h6" sx={{ 
          mb: 6, 
          color: 'text.secondary',
          textAlign: 'center',
          maxWidth: '700px',
          mx: 'auto'
        }}>
          Have questions or want to discuss a project? Reach out to our team.
        </Typography>

        <Grid container spacing={6} justifyContent="center">
          <Grid item xs={12} md={8} lg={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Box sx={{
                p: 4,
                borderRadius: '16px',
                backgroundColor: '#f9faff',
                height: '100%',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center' // This centers the content horizontally
              }}>
                <Typography variant="h5" sx={{ 
                  fontWeight: 'bold', 
                  mb: 3,
                  textAlign: 'center' // Center the heading
                }}>
                  Contact Information
                </Typography>
                
                <Stack spacing={3} sx={{ width: '700px', maxWidth: '400px' }}>
                  <Box sx={{ 
                    display: 'flex', 
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    flexDirection: 'column'
                  }}>
                    <Phone sx={{ 
                      color: 'primary.main', 
                      fontSize: '2rem',
                      mb: 1
                    }} />
                    <Box>
                      <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                        Phone
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        +91 9455030291
                      </Typography>
                      <Chip 
                        label="Available 9AM-6PM" 
                        size="small" 
                        sx={{ 
                          mt: 1,
                          backgroundColor: 'rgba(41, 98, 255, 0.1)',
                          color: 'primary.main'
                        }} 
                      />
                    </Box>
                  </Box>
                  
                  <Box sx={{ 
                    display: 'flex', 
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    flexDirection: 'column'
                  }}>
                    <Email sx={{ 
                      color: 'primary.main', 
                      fontSize: '2rem',
                      mb: 1
                    }} />
                    <Box>
                      <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                        Email
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        tasknexus2025@gmail.com
                      </Typography>
                      <Chip 
                        label="Response within 24 hours" 
                        size="small" 
                        sx={{ 
                          mt: 1,
                          backgroundColor: 'rgba(41, 98, 255, 0.1)',
                          color: 'primary.main'
                        }} 
                      />
                    </Box>
                  </Box>
                  
                  <Box sx={{ 
                    display: 'flex', 
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    flexDirection: 'column'
                  }}>
                    <LocationOn sx={{ 
                      color: 'primary.main', 
                      fontSize: '2rem',
                      mb: 1
                    }} />
                    <Box>
                      <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                        Headquarters
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        123 Tech Street<br />
                        San Francisco, CA 94107<br />
                        United States
                      </Typography>
                    </Box>
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

export default Contact;