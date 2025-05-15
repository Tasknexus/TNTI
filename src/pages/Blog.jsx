import React, { useState } from 'react';
import {
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Avatar,
  Button,
  Chip,
  Modal,
  Divider
} from '@mui/material';
import { styled } from '@mui/material/styles';
import portfolio9 from '../assets/images/Project/portfolio9.jpg';


const StyledCard = styled(Card)(({ theme }) => ({
  borderRadius: 12,
  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  transition: '0.3s',
  height: '100%',
  maxWidth: 350,  // Width kam ki gayi
  display: 'flex',
  flexDirection: 'column',
  '&:hover': {
    transform: 'translateY(-5px)',
  }
}));

const allBlogs = [
  {
    image: portfolio9,
    mainTag: 'AI Solutions',
    subTag: 'NLP',
    title: 'Implementing NLP in Customer Support',
    excerpt: 'Natural Language Processing is transforming customer service. In this post, we’ll explore real-world case studies...',
    content: `We implemented NLP bots across three different eCommerce platforms. This reduced manual tickets by 65%. Technologies used included Python, spaCy, and FastAPI with Angular for the frontend. Our custom intent detection model was trained on over 10,000 queries...`,
    author: 'Avnish Kumar',
    date: 'May 12, 2025',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    image: 'https://source.unsplash.com/random/400x200?website',
    mainTag: 'Web Development',
    subTag: 'React + .NET',
    title: 'Task Management System with React & .NET Core',
    excerpt: 'We walk you through building a real-world task manager that supports login, real-time updates, and admin control...',
    content: `We built a secure task management system using .NET Core Web API and React. It includes JWT authentication, dynamic task boards, priority filters, and a robust admin dashboard. The backend connects to SQL Server and uses Entity Framework Core.`,
    author: 'Astha Yadav',
    date: 'May 10, 2025',
    avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
  },
  {
    image: 'https://source.unsplash.com/random/400x200?flutter',
    mainTag: 'Mobile Solutions',
    subTag: 'Cross-platform',
    title: 'From Code to Store: Flutter Apps at Scale',
    excerpt: 'This blog outlines how we design, develop, and deploy Flutter apps for both Android and iOS users efficiently...',
    content: `Using Flutter and Firebase, we created mobile apps that sync data in real-time. Our focus was rapid deployment and pixel-perfect design using Figma. We also integrated analytics and crash reporting to optimize the user experience.`,
    author: 'Kunal Sharma',
    date: 'May 8, 2025',
    avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
  },
  {
    image: 'https://source.unsplash.com/random/400x200?cloud',
    mainTag: 'Cloud Deployment',
    subTag: 'DevOps',
    title: 'CI/CD Pipeline Setup for .NET Apps',
    excerpt: 'Learn how we integrated GitHub Actions with Azure DevOps for automated testing, build, and deployment...',
    content: `We set up a full CI/CD pipeline using GitHub Actions for testing and building and Azure Pipelines for staging and production deployment. Secrets were managed through Azure Key Vault and alerts via Slack and email were configured for failures.`,
    author: 'Ritika Sinha',
    date: 'May 6, 2025',
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
  },
  {
    image: 'https://source.unsplash.com/random/400x200?api',
    mainTag: 'Web Development',
    subTag: 'REST APIs',
    title: 'Creating Scalable APIs with .NET Core',
    excerpt: 'This blog explains the full API design process using REST principles, including rate-limiting and caching...',
    content: `Our .NET Core APIs follow RESTful conventions. We used Swagger for documentation, Redis for caching, and implemented throttling using middleware. Security was handled using OAuth2 and role-based access control.`,
    author: 'Ravi Mehta',
    date: 'May 4, 2025',
    avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
  },
];

const uniqueMainTags = [...new Set(allBlogs.map(blog => blog.mainTag))];

export default function SoftwareBlogFilterSection() {
  const [selectedTag, setSelectedTag] = useState('All');
  const [selectedBlog, setSelectedBlog] = useState(null);

  const filteredBlogs =
    selectedTag === 'All'
      ? allBlogs
      : allBlogs.filter((blog) => blog.mainTag === selectedTag);

  const handleOpen = (blog) => setSelectedBlog(blog);
  const handleClose = () => setSelectedBlog(null);

  return (
    <Box sx={{ padding: 4, backgroundColor: '#f9fafc' }}>
      <Typography variant="h4" align="center" gutterBottom fontWeight="bold">
        Company Blog – Tech Behind the Tools
      </Typography>

      {/* Filter Chips */}
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 1, mb: 3 }}>
        <Chip
          label="All"
          color={selectedTag === 'All' ? 'primary' : 'default'}
          onClick={() => setSelectedTag('All')}
        />
        {uniqueMainTags.map((tag, index) => (
          <Chip
            key={index}
            label={tag}
            color={selectedTag === tag ? 'primary' : 'default'}
            onClick={() => setSelectedTag(tag)}
          />
        ))}
      </Box>

      {/* Blog Grid */}
      <Grid container spacing={3} justifyContent="center">
        {filteredBlogs.map((blog, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <StyledCard>
              <CardMedia
                component="img"
                height="160"
                image={blog.image}
                alt={blog.title}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Box display="flex" gap={1} mb={1}>
                  <Chip label={blog.mainTag} color="primary" size="small" />
                  <Chip label={blog.subTag} variant="outlined" size="small" />
                </Box>
                <Typography variant="h6" gutterBottom>{blog.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {blog.excerpt}
                </Typography>
                <Box display="flex" alignItems="center" mt={2}>
                  <Avatar src={blog.avatar} sx={{ width: 28, height: 28, mr: 1 }} />
                  <Box>
                    <Typography variant="body2" fontWeight="bold">{blog.author}</Typography>
                    <Typography variant="caption" color="text.secondary">{blog.date}</Typography>
                  </Box>
                </Box>
                <Box mt={2}>
                  <Button
                    size="small"
                    variant="outlined"
                    onClick={() => handleOpen(blog)}
                  >
                    Read this blog
                  </Button>
                </Box>
              </CardContent>
            </StyledCard>
          </Grid>
        ))}
      </Grid>

      {/* Blog Modal */}
      <Modal open={!!selectedBlog} onClose={handleClose}>
        <Box sx={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '95%', maxWidth: 800, bgcolor: 'background.paper',
          boxShadow: 24, p: 4, borderRadius: 2, maxHeight: '90vh', overflowY: 'auto'
        }}>
          {selectedBlog && (
            <>
              <Typography variant="h5" fontWeight="bold" mb={1}>
                {selectedBlog.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" mb={2}>
                {selectedBlog.mainTag} | {selectedBlog.subTag}
              </Typography>
              <img
                src={selectedBlog.image}
                alt={selectedBlog.title}
                width="100%"
                style={{ borderRadius: 8, marginBottom: 16 }}
              />
              <Typography variant="body1" paragraph>
                {selectedBlog.content}
              </Typography>
              <Divider sx={{ my: 2 }} />
              <Box display="flex" alignItems="center">
                <Avatar src={selectedBlog.avatar} sx={{ mr: 1 }} />
                <Box>
                  <Typography variant="subtitle2">{selectedBlog.author}</Typography>
                  <Typography variant="caption" color="text.secondary">{selectedBlog.date}</Typography>
                </Box>
              </Box>
            </>
          )}
        </Box>
      </Modal>
    </Box>
  );
}