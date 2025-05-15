import { Container, Typography, Box, Button, Card, CardMedia, Chip, Divider, Stack } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import { projects } from '../../data/projects';

const PortfolioDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === parseInt(id));

  if (!project) {
    return (
      <Container>
        <Typography>Project not found</Typography>
        <Button onClick={() => navigate('/portfolio')}>Back to Portfolio</Button>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Button 
        variant="outlined" 
        onClick={() => navigate('/portfolio')}
        sx={{ mb: 4 }}
      >
        ← Back to Portfolio
      </Button>

      <Typography variant="h3" sx={{ mb: 2, fontWeight: 'bold' }}>
        {project.title}
      </Typography>
      
      <Stack direction="row" spacing={2} sx={{ mb: 4 }}>
        <Chip label={project.client} color="primary" />
        <Chip label={project.year} variant="outlined" />
      </Stack>
      
      <Card sx={{ mb: 4 }}>
        <CardMedia
          component="img"
          height="400"
          image={project.image}
          alt={project.title}
          sx={{ objectFit: 'cover' }}
        />
      </Card>
      
      <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>
        Project Overview
      </Typography>
      <Typography variant="body1" paragraph sx={{ mb: 4 }}>
        {project.details}
      </Typography>
      
      <Divider sx={{ my: 4 }} />
      
      <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>
        Technologies Used
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 4 }}>
        {project.tags.map((tag, index) => (
          <Chip key={index} label={tag} color="primary" variant="outlined" />
        ))}
      </Box>
    </Container>
  );
};

export default PortfolioDetail;