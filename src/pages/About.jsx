import React from 'react';
import { styled } from '@mui/system';
import Fade from '@mui/material/Fade';
import {
  Box,
  Typography,
  Container,
  Grid,
  Avatar,
  Button,
  Stack,
  Chip,
  Card,
  Divider,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Tooltip
} from '@mui/material';
import aboutBanner from '../assets/images/about-banner.jpg';
import Partner1 from '../assets/images/Partner/Partner1.svg';
import Partner2 from '../assets/images/Partner/Partner2.svg';
import Partner3 from '../assets/images/Partner/Partner3.svg';
import Partner4 from '../assets/images/Partner/Partner4.svg';
import {
  EmojiObjects,
  WorkspacePremium,
  Security,
  RocketLaunch,
  Verified,
  QueryBuilder,
  ExpandMore,
  ThumbUp,
  Public,
  TrendingUp,
  SupportAgent,
  Star,
  CardMembership,
  VerifiedUser,
  MilitaryTech,
  Diamond
} from '@mui/icons-material';

import { motion } from 'framer-motion';

const About = () => {
  const values = [
    { title: 'Innovation', icon: <EmojiObjects /> },
    { title: 'Integrity', icon: <Verified /> },
    { title: 'Timely Delivery', icon: <QueryBuilder /> },
    { title: 'Client Satisfaction', icon: <ThumbUp /> }
  ];

  const technologies = [
    'React.js',
    'Node.js',
    'ASP.NET Core',
    'Python/Django',
    'Flutter',
    'AWS',
    'Azure',
    'MongoDB',
    'MySQL',
    'Figma',
    'GitHub',
    'Docker',
    'PostgreSQL',
    'Firebase',
    'TypeScript'
  ];

  const processSteps = [
    'Requirement Gathering',
    'UI/UX Planning',
    'Development',
    'Testing & QA',
    'Deployment',
    'Ongoing Support'
  ];

  const achievements = [
    { icon: <WorkspacePremium />, label: 'ISO Certified Company' },
    { icon: <RocketLaunch />, label: '100+ Projects Delivered' },
    { icon: <Security />, label: 'GDPR Compliant Systems' },
    { icon: <Public />, label: 'Global Reach' },
    { icon: <TrendingUp />, label: 'Consistent Growth' },
    { icon: <SupportAgent />, label: '24/7 Support' }
  ];

  const StyledAccordion = styled(Accordion)(({ theme }) => ({
    transition: 'all 0.3s ease',
    '&:hover': {
      boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
      backgroundColor: '#f9f9f9',
    },
    '&.Mui-expanded': {
      backgroundColor: '#f5f5f5',
    },
  }));

  const testimonials = [
    {
      name: 'Rahul Mehta',
      company: 'TechNova',
      feedback: 'Working with TNT Info was a game-changer. They delivered our web app ahead of time and exceeded expectations.',
      image: '/images/client1.jpg'
    },
    {
      name: 'Anjali Sharma',
      company: 'FinEdge',
      feedback: 'The team is responsive, skilled, and truly cares about your success. Highly recommended!',
      image: '/images/client2.jpg'
    }
  ];

  const partners = [Partner1, Partner2, Partner3, Partner4];

  const certificates = [
    {
      title: 'ISO 9001 Certified',
      description: 'Quality Management System Certification',
      icon: <VerifiedUser color="primary" sx={{ fontSize: 50 }} />,
      year: '2023'
    },
    {
      title: 'Microsoft Gold Partner',
      description: 'Recognized for expertise in Microsoft technologies',
      icon: <MilitaryTech color="primary" sx={{ fontSize: 50 }} />,
      year: '2022'
    },
    {
      title: 'AWS Select Partner',
      description: 'Certified for cloud solutions on AWS platform',
      icon: <WorkspacePremium color="primary" sx={{ fontSize: 50 }} />,
      year: '2023'
    },
    {
      title: 'Google Developers Partner',
      description: 'Recognized for excellence in mobile and web development',
      icon: <CardMembership color="primary" sx={{ fontSize: 50 }} />,
      year: '2024'
    }
  ];

  return (
    <Box sx={{ py: 10, backgroundColor: 'background.default' }}>
      <Container maxWidth="xl">
        {/* Premium Badge Section */}
        <Box textAlign="center" mb={6}>
          <Tooltip title="Premium Verified Partner" arrow>
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              style={{ display: 'inline-block' }}
            >
              <Chip
                icon={<Diamond sx={{ color: '#FFD700' }} />}
                label="771619075 | Premium Partner"
                color="primary"
                variant="outlined"
                sx={{
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                  p: 2,
                  border: '2px solid',
                  borderColor: 'primary.main',
                  background: 'linear-gradient(45deg, #ffffff 30%, #f3f3f3 90%)'
                }}
              />
            </motion.div>
          </Tooltip>
        </Box>

        <Grid container spacing={6} justifyContent="center" textAlign="center">
          <Grid item xs={12} md={10}>
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <Chip label="About Our Company" color="primary" sx={{ mb: 2 }} />
              <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 2 }}>
                We Drive Digital Transformation
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                TNT Info is a cutting-edge IT company delivering secure and scalable digital solutions to global clients. Our mission is to turn ideas into innovation.
              </Typography>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={8}>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}>
              <img src={aboutBanner} alt="About Banner" style={{ width: '100%', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} />
            </motion.div>
          </Grid>
        </Grid>

        <Divider sx={{ my: 6 }} />

        {/* Certifications & Achievements Section */}
        <Box mt={10}>
          <Typography variant="h3" textAlign="center" fontWeight="bold" gutterBottom>
            Our Certifications & Achievements
          </Typography>
          <Typography variant="subtitle1" textAlign="center" color="text.secondary" mb={6}>
            Recognized excellence in technology and service delivery
          </Typography>

          <Grid container spacing={4} justifyContent="center">
            {certificates.map((cert, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card sx={{
                    p: 4,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
                    borderTop: '4px solid',
                    borderColor: 'primary.main',
                    position: 'relative',
                    overflow: 'hidden'
                  }}>
                    <Box sx={{
                      position: 'absolute',
                      top: 0,
                      right: 0,
                      bgcolor: 'primary.main',
                      color: 'white',
                      px: 1.5,
                      py: 0.5,
                      fontSize: '0.75rem',
                      borderBottomLeftRadius: '8px'
                    }}>
                      {cert.year}
                    </Box>
                    <Box sx={{
                      width: 80,
                      height: 80,
                      borderRadius: '50%',
                      bgcolor: 'primary.light',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 3
                    }}>
                      {cert.icon}
                    </Box>
                    <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                      {cert.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {cert.description}
                    </Typography>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          {/* Achievement Badges */}
          <Box mt={8} textAlign="center">
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Industry Recognition
            </Typography>
            <Stack direction="row" justifyContent="center" spacing={2} flexWrap="wrap" mt={3}>
              {[
                { label: 'Top IT Company 2023', icon: <Star color="warning" /> },
                { label: 'Fastest Growing Startup 2022', icon: <TrendingUp color="success" /> },
                { label: 'Best Workplace 2023', icon: <ThumbUp color="info" /> },
                { label: 'Innovation Award 2024', icon: <EmojiObjects color="secondary" /> }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Chip
                    icon={item.icon}
                    label={item.label}
                    variant="outlined"
                    sx={{
                      p: 2,
                      m: 1,
                      fontSize: '0.9rem',
                      borderColor: 'primary.main'
                    }}
                  />
                </motion.div>
              ))}
            </Stack>
          </Box>
        </Box>

        <Divider sx={{ my: 6 }} />

        <Box mt={10} textAlign="center">
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Our Core Values
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {values.map((value, idx) => (
              <Grid item xs={6} md={3} key={idx}>
                <motion.div whileHover={{ scale: 1.03 }}>
                  <Card elevation={3} sx={{ p: 3, height: '100%' }}>
                    <Avatar sx={{ bgcolor: 'primary.main', mx: 'auto', mb: 2, width: 60, height: 60 }}>{value.icon}</Avatar>
                    <Typography variant="h6">{value.title}</Typography>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Divider sx={{ my: 6 }} />

        <Box mt={10} textAlign="center">
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Why Choose Us?
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {achievements.map((item, index) => (
              <Grid item xs={12} sm={4} md={3} key={index}>
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Stack spacing={2} alignItems="center" sx={{ p: 3, bgcolor: 'background.paper', borderRadius: 2 }}>
                    <Avatar sx={{ bgcolor: 'primary.main', width: 60, height: 60 }}>{item.icon}</Avatar>
                    <Typography variant="h6">{item.label}</Typography>
                  </Stack>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Divider sx={{ my: 6 }} />

        <Box mt={10} textAlign="center">
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Our Development Process
          </Typography>
          <Box sx={{ maxWidth: 800, mx: 'auto', mt: 4 }}>
            <Grid container spacing={2}>
              {processSteps.map((step, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <motion.div whileHover={{ scale: 1.02 }}>
                    <Card sx={{ p: 2, height: '100%' }}>
                      <Stack direction="row" spacing={2} alignItems="center">
                        <Avatar sx={{ bgcolor: 'primary.main', color: 'white' }}>{index + 1}</Avatar>
                        <Typography variant="body1" fontWeight="medium">
                          {step}
                        </Typography>
                      </Stack>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>

        <Divider sx={{ my: 6 }} />

        <Box mt={10} textAlign="center">
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Technologies We Use
          </Typography>
          <Stack
            direction="row"
            justifyContent="center"
            flexWrap="wrap"
            spacing={2}
            rowGap={2}
            mt={4}
          >
            {technologies.map((tech, idx) => (
              <motion.div key={idx} whileHover={{ scale: 1.1 }}>
                <Chip
                  label={tech}
                  color="secondary"
                  sx={{ fontSize: '1rem' }}
                />
              </motion.div>
            ))}
          </Stack>
        </Box>

        <Divider sx={{ my: 6 }} />

        <Box mt={10} textAlign="center">
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Meet Our Partners
          </Typography>
          <Stack direction="row" justifyContent="center" spacing={4} flexWrap="wrap" mt={4}>
            {partners.map((src, idx) => (
              <motion.div key={idx} whileHover={{ scale: 1.1 }}>
                <Box sx={{ width: 220, p: 2 }}>
                  <img src={src} alt={`Partner ${idx + 1}`} style={{ width: '100%', height: 'auto', filter: 'grayscale(100%)', opacity: 0.7, transition: 'all 0.3s ease' }} />
                </Box>
              </motion.div>
            ))}
          </Stack>
        </Box>

        <Box mt={10} textAlign="center">
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Frequently Asked Questions
          </Typography>

          <Fade in timeout={800}>
            <Box mt={4} sx={{ maxWidth: 900, mx: 'auto' }}>
              {[
                {
                  q: "What industries do you serve?",
                  a: "We serve fintech, e-commerce, healthtech, education, logistics, travel, real estate, and more."
                },
                {
                  q: "Do you provide post-deployment support?",
                  a: "Yes, we provide full maintenance, upgrades, performance monitoring, and support after deployment."
                },
                {
                  q: "What technologies do you use?",
                  a: "We work with React, .NET Core, Node.js, Python, SQL, NoSQL, Docker, and more modern tech stacks."
                },
                {
                  q: "How long does it take to complete a typical project?",
                  a: "Project duration varies, but typical web apps take 4-12 weeks depending on complexity."
                },
                {
                  q: "Can you work with our in-house team?",
                  a: "Absolutely! We collaborate with internal teams for seamless integration and productivity."
                }
              ].map(({ q, a }, idx) => (
                <StyledAccordion key={idx}>
                  <AccordionSummary expandIcon={<ExpandMore />}>
                    <Typography variant="subtitle1" fontWeight="medium">{q}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>{a}</Typography>
                  </AccordionDetails>
                </StyledAccordion>
              ))}
            </Box>
          </Fade>
        </Box>

        <Divider sx={{ my: 6 }} />

        <Box mt={10} textAlign="center">
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Ready to Build Something Awesome?
          </Typography>
          <motion.div whileHover={{ scale: 1.05 }}>
            <Button variant="contained" size="large" sx={{ px: 5, py: 1.5, mt: 3 }}>
              Let's Talk
            </Button>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default About;