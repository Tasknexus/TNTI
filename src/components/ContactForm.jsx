import { Box, TextField, Button, Grid, Typography } from '@mui/material';
import { Send } from '@mui/icons-material';
import { motion } from 'framer-motion';

const ContactForm = () => {
  return (
    <Box
      component="form"
      sx={{
        p: 4,
        borderRadius: '16px',
        backgroundColor: 'white',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)'
      }}
    >
      <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 3 }}>
        Send Us a Message
      </Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <TextField
              fullWidth
              label="Your Name"
              variant="outlined"
              required
              InputProps={{
                sx: { borderRadius: '12px' }
              }}
            />
          </motion.div>
        </Grid>
        
        <Grid item xs={12} sm={6}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <TextField
              fullWidth
              label="Email Address"
              variant="outlined"
              type="email"
              required
              InputProps={{
                sx: { borderRadius: '12px' }
              }}
            />
          </motion.div>
        </Grid>
        
        <Grid item xs={12}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <TextField
              fullWidth
              label="Subject"
              variant="outlined"
              InputProps={{
                sx: { borderRadius: '12px' }
              }}
            />
          </motion.div>
        </Grid>
        
        <Grid item xs={12}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <TextField
              fullWidth
              label="Your Message"
              variant="outlined"
              multiline
              rows={4}
              required
              InputProps={{
                sx: { borderRadius: '12px' }
              }}
            />
          </motion.div>
        </Grid>
        
        <Grid item xs={12}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            <Button
              fullWidth
              variant="contained"
              size="large"
              endIcon={<Send />}
              sx={{
                borderRadius: '12px',
                py: 1.5,
                fontSize: '1rem',
                fontWeight: 'bold',
                boxShadow: '0 4px 14px rgba(41, 98, 255, 0.3)'
              }}
            >
              Send Message
            </Button>
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactForm;