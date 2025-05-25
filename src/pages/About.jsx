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
  AccordionDetails
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


  return (
    <Box sx={{ py: 10, backgroundColor: 'background.default' }}>
      <Container maxWidth="xl">
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
              <Box mt={4}>
               
              </Box>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={8}>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}>
<img src={aboutBanner} alt="About Banner" style={{ width: '100%', borderRadius: '20px' }} />            </motion.div>
          </Grid>
        </Grid>

        <Divider sx={{ my: 6 }} />

        <Box mt={10} textAlign="center">
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Our Core Values
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {values.map((value, idx) => (
              <Grid item xs={6} md={3} key={idx}>
                <Card elevation={3} sx={{ p: 3 }}>
                  <Avatar sx={{ bgcolor: 'primary.main', mx: 'auto', mb: 2 }}>{value.icon}</Avatar>
                  <Typography variant="h6">{value.title}</Typography>
                </Card>
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
                <Stack spacing={2} alignItems="center">
                  <Avatar sx={{ bgcolor: 'primary.main', width: 60, height: 60 }}>{item.icon}</Avatar>
                  <Typography variant="h6">{item.label}</Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Divider sx={{ my: 6 }} />

        <Box mt={10} textAlign="center">
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Our Development Process
          </Typography>
          <Stack spacing={2} alignItems="center">
            {processSteps.map((step, index) => (
              <Typography key={index} variant="body1">
                ✅ {step}
              </Typography>
            ))}
          </Stack>
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
    rowGap={2} // ✅ Add vertical spacing
  >
    {technologies.map((tech, idx) => (
      <Chip
        key={idx}
        label={tech}
        color="secondary"
        sx={{ fontSize: '1rem' }}
      />
    ))}
  </Stack>
</Box>


        <Divider sx={{ my: 6 }} />

     
        <Box mt={10} textAlign="center">
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Meet Our Partners
          </Typography>
          <Stack direction="row" justifyContent="center" spacing={4} flexWrap="wrap">
            {partners.map((src, idx) => (
              <Box key={idx} sx={{ width: 220 }}>
                <img src={src} alt={`Partner ${idx + 1}`} width="220px" />
              </Box>
            ))}
          </Stack>
        </Box>

<Box mt={10} textAlign="center">
  <Typography variant="h4" fontWeight="bold" gutterBottom>
    Frequently Asked Questions
  </Typography>

  <Fade in timeout={800}>
    <Box mt={4}>
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
    },
    {
      q: "Do you offer UI/UX design services?",
      a: "Yes, we provide complete UI/UX design services using tools like Figma, Adobe XD, and Sketch."
    },
    {
      q: "What is your pricing model?",
      a: "We offer flexible pricing: hourly, fixed, or monthly retainers depending on project needs."
    },
    {
      q: "Do you sign NDAs?",
      a: "Yes, we’re happy to sign NDAs to ensure the confidentiality of your project and ideas."
    },
    {
      q: "Do you handle both frontend and backend development?",
      a: "Yes, we provide full-stack development services including APIs, databases, and frontend interfaces."
    },
    {
      q: "Can you build scalable apps for high traffic?",
      a: "Yes, we follow best practices for performance, load balancing, and horizontal scaling."
    },
    {
      q: "Do you provide documentation?",
      a: "Yes, we deliver well-structured technical and user documentation as part of every project."
    },
    {
      q: "What makes your team different?",
      a: "We’re agile, transparent, tech-savvy, and treat every project like our own product."
    },
    {
      q: "Can you help with app deployment?",
      a: "Yes, we handle cloud deployment on AWS, Azure, DigitalOcean, and others."
    },
    {
      q: "Do you support mobile development?",
      a: "Yes, we build both web and mobile apps using React Native or Flutter."
    },
    {
      q: "How can we get started?",
      a: "Just contact us through our website, and we’ll schedule a discovery call with you."
    },
    {
      q: "Do you provide SEO optimization?",
      a: "Yes, we offer technical SEO and on-page optimization for better visibility."
    },
    {
      q: "Can I request changes after delivery?",
      a: "Of course! We allow revision cycles and scope-based updates after delivery."
    },
    {
      q: "What tools do you use for project management?",
      a: "We use Jira, Trello, ClickUp, Slack, and GitHub for transparent project workflows."
    },
    {
      q: "Do you support API integration?",
      a: "Yes, we specialize in integrating third-party APIs like Stripe, PayPal, Google Maps, etc."
    },
    {
      q: "Can you upgrade our legacy systems?",
      a: "Yes, we modernize legacy apps with improved security, scalability, and performance."
    },
    {
      q: "Can I get ongoing support after launch?",
      a: "Yes, we offer ongoing maintenance and support plans tailored to your business."
    },
    {
      q: "Do you offer content management systems?",
      a: "Yes, we build CMS-powered sites using custom admin panels or platforms like WordPress and Strapi."
    },
    {
      q: "Do you offer analytics integration?",
      a: "Yes, we integrate Google Analytics, Mixpanel, and other platforms to track performance."
    },
    {
      q: "How do you ensure code quality?",
      a: "We use code reviews, automated testing, linting, and CI tools to maintain high code quality."
    },
    {
      q: "Can I monitor project progress?",
      a: "Yes, we provide regular updates, milestone demos, and access to the staging environment."
    },
    {
      q: "Do you work with startups?",
      a: "Yes, we love working with startups to bring their MVPs to life with speed and innovation."
    },
    {
      q: "Do you provide training for our team?",
      a: "Yes, we offer knowledge transfer and documentation to onboard your internal team."
    },
    {
      q: "Can you help with digital transformation?",
      a: "Absolutely. We help businesses digitize processes, automate workflows, and modernize tools."
    },
    {
      q: "Do you provide hosting services?",
      a: "Yes, we offer managed hosting or assist with setting up your preferred cloud provider."
    },
    {
      q: "How do you handle data security?",
      a: "We follow strict security practices, encryption, and GDPR/ISO compliance for all apps."
    },
    {
      q: "Can you build admin dashboards?",
      a: "Yes, we specialize in custom admin panels for data management and analytics."
    },
    {
      q: "What is your typical team structure?",
      a: "Our teams include a project manager, developers, QA, and UI/UX designers."
    },
    {
      q: "Do you support international clients?",
      a: "Yes, we work with clients across the globe and adapt to time zones and communication needs."
    },
    {
      q: "Do you provide custom CRM solutions?",
      a: "Yes, we build CRM platforms tailored to business processes and customer journeys."
    },
    {
      q: "Can you build e-commerce platforms?",
      a: "Yes, we develop e-commerce apps with features like cart, payment, and order tracking."
    },
    {
      q: "Do you provide backup and disaster recovery?",
      a: "Yes, we configure backups, failovers, and recovery plans to ensure data protection."
    },
    {
      q: "Do you offer AI or chatbot integration?",
      a: "Yes, we can integrate AI chatbots, recommendation engines, and NLP features."
    },
    {
      q: "What industries are your strongest expertise?",
      a: "We have strong experience in fintech, healthtech, e-commerce, and SaaS solutions."
    },
    {
      q: "What’s the first step in working together?",
      a: "Just reach out! We’ll arrange a discovery call to understand your vision and plan the next steps."
    }
    
  ].map(({ q, a }, idx) => (
    <Accordion key={idx}>
      <AccordionSummary expandIcon={<ExpandMore />}>
        <Typography>{q}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{a}</Typography>
      </AccordionDetails>
    </Accordion>
  ))}
    </Box>
  </Fade>
</Box>

        <Divider sx={{ my: 6 }} />

        <Box mt={10} textAlign="center">
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Ready to Build Something Awesome?
          </Typography>
          <Button variant="contained" size="large" sx={{ px: 5, py: 1.5 }}>
            Let’s Talk
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default About;