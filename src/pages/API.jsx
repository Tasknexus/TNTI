import { Container, Typography, Box } from '@mui/material';
import { Construction } from '@mui/icons-material';  // Import Construction icon for a visual cue

const API = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography 
        variant="h3" 
        gutterBottom 
        sx={{ color: 'primary.main', fontWeight: 'bold' }}  // Apply color and font weight
      >
        API <Box component="span" sx={{ color: 'secondary.main' }}>Documentation</Box>  {/* Highlight 'Documentation' part */}
      </Typography>
      <Typography paragraph>
        The API documentation page is currently under construction. We are working hard to provide you with the best resources and information. Please check back later.
      </Typography>
      
      {/* Display a construction icon with a message */}
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', mt: 4 }}>
        <Construction sx={{ fontSize: '4rem', color: 'text.secondary', mb: 2 }} />
        <Typography variant="h5" color="text.secondary">
          This page is under construction
        </Typography>
      </Box>
    </Container>
  );
};

export default API;
