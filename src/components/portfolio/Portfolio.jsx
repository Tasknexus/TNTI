import { Container, Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import ProjectGrid from './ProjectGrid';
import { projects } from '../../data/projects';

const Portfolio = () => {
  const featuredProjects = projects.slice(0, 8); // Show first 8 as featured

  return (
    <Container maxWidth="xl" sx={{ 
      py: 8,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center' // This centers all child elements
    }}>
      <Typography variant="h3" align="center" sx={{ 
        mb: 2, 
        fontWeight: 'bold',
        maxWidth: '100%'
      }}>
        Our Portfolio
      </Typography>
      <Typography variant="h6" align="center" sx={{ 
        mb: 6, 
        color: 'text.secondary',
        maxWidth: '800px',
        mx: 'auto'
      }}>
        Featured projects showcasing our expertise
      </Typography>
      
      {/* Container for the grid with proper max width */}
      <Box sx={{ 
        width: '100%',
        maxWidth: '1800px', // Adjust as needed
        px: { xs: 2, sm: 3, md: 4 } // Responsive padding
      }}>
        <ProjectGrid projects={featuredProjects} />
      </Box>
      
      <Box sx={{ 
        textAlign: 'center', 
        mt: 6,
        width: '100%'
      }}>
        <Button 
          component={Link}
          to="/portfolio/all"
          variant="contained"
          size="large"
          sx={{
            px: 6,
            py: 1.5,
            borderRadius: '50px',
            fontWeight: 'bold'
          }}
        >
          View All Projects
        </Button>
      </Box>
    </Container>
  );
};

export default Portfolio;