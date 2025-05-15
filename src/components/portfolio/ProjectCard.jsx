import { Card, CardMedia, CardContent, Typography, Button, Chip, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  const navigate = useNavigate();

  return (
    <Card sx={{ 
      width: '100%',     // Takes full width of Grid item
      maxWidth: 345,     // Maximum card width
      height: '100%',    // Equal height cards
      display: 'flex',
      flexDirection: 'column',
      transition: 'transform 0.3s',
      '&:hover': {
        transform: 'translateY(-5px)'
      }
    }}>
      <CardMedia
        component="img"
        height="200"
        image={project.image}
        alt={project.title}
        sx={{ objectFit: 'cover' }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="div">
          {project.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {project.description}
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
          {project.tags.slice(0, 3).map((tag, index) => (
            <Chip key={index} label={tag} size="small" />
          ))}
        </Box>
      </CardContent>
      <Box sx={{ p: 2 }}>
        <Button 
          variant="outlined" 
          fullWidth
          onClick={() => navigate(`/portfolio/${project.id}`)}
        >
          View Case Study
        </Button>
      </Box>
    </Card>
  );
};

export default ProjectCard;