import { Box, Typography, Container, Grid, Stack, Chip } from '@mui/material';
import { Phone, Email, LocationOn, Schedule } from '@mui/icons-material';
import ServiceRequestForm from '../components/ServiceRequestForm';

const ContactPage = () => {
  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="xl">
        <Typography variant="h2" sx={{ 
          fontWeight: 'bold', 
          mb: 6,
          textAlign: 'center'
        }}>
        </Typography>

        {/* Service Request Form - Horizontal Layout */}
        <Box sx={{ mb: 6 }}>
          <ServiceRequestForm />
        </Box>

        {/* Map and Contact Info Section */}
        <Grid container spacing={4}>
          {/* Contact Info Box - Right Side */}
          <Grid item xs={12} md={6}>
            <Box sx={{ 
              p: 4, 
              borderRadius: '16px',
              bgcolor: '#f9faff',
              boxShadow: 1,
              height: '100%'
            }}>
              <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 3 }}>
                Our Lucknow Office
              </Typography>
              
              <Stack spacing={3}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <LocationOn sx={{ 
                    mr: 2, 
                    color: 'primary.main', 
                    fontSize: '2rem' 
                  }} />
                  <Box>
                    <Typography>Jankipuram Sector, H</Typography>
                    <Typography>Lucknow, Uttar Pradesh 226021</Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Phone sx={{ 
                    mr: 2, 
                    color: 'primary.main', 
                    fontSize: '2rem' 
                  }} />
                  <Box>
                    <Typography>+91 9455030291</Typography>
                    <Chip 
                      label="Available 9AM-6PM" 
                      size="small" 
                      sx={{ 
                        mt: 1,
                        bgcolor: 'rgba(41, 98, 255, 0.1)',
                        color: 'primary.main'
                      }} 
                    />
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Email sx={{ 
                    mr: 2, 
                    color: 'primary.main', 
                    fontSize: '2rem' 
                  }} />
                  <Typography>Tasknexus2025@gmail.com</Typography>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Schedule sx={{ 
                    mr: 2, 
                    color: 'primary.main', 
                    fontSize: '2rem' 
                  }} />
                  <Box>
                    <Typography>Monday-Friday: 9AM - 6PM</Typography>
                    <Typography>Saturday: 12AM - 4PM</Typography>
                  </Box>
                </Box>
              </Stack>
            </Box>
          </Grid>
          
          {/* Map Box - Left Side */}
          <Grid item xs={12} md={6}>
            <Box sx={{
              width: '500px',
              height: '100%',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: 3,
              position: 'relative'
            }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.588697136103!2d80.95091627609439!3d26.916545559924675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39995725a8db8c71%3A0x93e1a3e0a918d9d4!2sTask%20Nexus%20Technology%20Info!5e0!3m2!1sen!2sin!4v1745781373514!5m2!1sen!2sin"
                width="100%"
                height="400px"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 20,
                  left: 60,
                  backgroundColor: 'rgba(224, 201, 201, 0.9)',
                  px: .5,
                  py: .5,
                  borderRadius: '8px',
                  boxShadow: 1
                }} >
                <Typography variant="body2">
                  Our Location in Lucknow
                </Typography>
              </Box>
            </Box>
          </Grid>   
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactPage;