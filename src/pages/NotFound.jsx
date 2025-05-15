import { Box, Typography, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const NotFound = () => {
  return (
    <Container maxWidth="md" sx={{ py: 10, textAlign: 'center' }}>
      <ErrorOutlineIcon sx={{ fontSize: 80, color: 'error.main', mb: 3 }} />
      <Typography variant="h3" gutterBottom>
        404 - Page Not Found
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        The page you're looking for doesn't exist or has been moved.
      </Typography>
      <Button 
        component={Link}
        to="/"
        variant="contained"
        size="large"
      >
        Return Home
      </Button>
    </Container>
  );
};

export default NotFound;