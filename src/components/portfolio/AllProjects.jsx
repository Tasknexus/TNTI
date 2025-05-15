import { Container, Grid, Typography, Box, Button } from '@mui/material';
import { projects } from '../../data/projects';
import ProjectCard from './ProjectCard';

const AllProjects = () => {
  return (
    <Container 
      maxWidth="xl" 
      sx={{ 
        py: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center' // Centers all child elements horizontally
      }}
    >
      <Typography 
        variant="h3" 
        align="center" 
        sx={{ 
          mb: 2, 
          fontWeight: 'bold',
          width: '100%' // Ensures full width for proper centering
        }}
      >
        All Projects
      </Typography>
      <Typography 
        variant="h6" 
        align="center" 
        sx={{ 
          mb: 6, 
          color: 'text.secondary',
          maxWidth: '800px', // Limits width for better readability
          width: '100%'
        }}
      >
        Browse our complete portfolio of work
      </Typography>
      
      {/* Grid container with proper centering and edge-to-edge behavior */}
      <Grid 
        container 
        spacing={{ xs: 2, sm: 3, md: 4 }} // Responsive spacing
        justifyContent="center" // Centers grid items
        sx={{
          width: '100%',
          maxWidth: '1800px', // Maximum content width
          margin: '0 auto', // Centers the grid container
          px: { xs: 2, sm: 3, md: 4 } // Responsive padding
        }}
      >
        {projects.map((project) => (
          <Grid 
            item 
            xs={12}   // Full width on mobile
            sm={6}    // 2 columns on tablet
            md={4}     // 3 columns on laptop
            lg={3}     // 4 columns on desktop
            key={project.id}
            sx={{
              display: 'flex',
              justifyContent: 'center' // Centers each card
            }}
          >
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default AllProjects;