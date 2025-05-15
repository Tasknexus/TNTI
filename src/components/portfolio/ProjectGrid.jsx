import { Grid } from '@mui/material';
import ProjectCard from './ProjectCard';

const ProjectGrid = ({ projects }) => {
  return (
    <Grid 
      container 
      spacing={{ xs: 2, sm: 3, md: 4 }} // Responsive spacing
      justifyContent="center" // This centers the grid items
    >
      {projects.map((project) => (
        <Grid 
          item 
          xs={12}   // Full width on mobile
          sm={6}    // 2 columns on tablet
          md={4}     // 3 columns on laptop
          lg={3}     // 4 columns on desktop
          xl={3}     // 4 columns on large desktop
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
  );
};

export default ProjectGrid;