import { Box, Typography, Container, Grid, Card, CardContent, Avatar, Link } from '@mui/material';
import { motion } from 'framer-motion';
import { LinkedIn, Twitter } from '@mui/icons-material';

// Import images directly
import AvnishNew from '../assets/images/team/team1.jpg';
import Saif from '../assets/images/team/Saif.jpg';

const teamMembers = [
  {
    name: "Avnish Yadav",
    role: "CEO & Founder",
    bio: "Software architect with 3+ years of experience in enterprise solutions",
    image: AvnishNew, // Using imported image
    social: {
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    name: "Saif Khan",
    role: "MD & Co-Founder",
    bio: "Business strategist with a passion for technology and innovation",
    image: Saif, // Using imported image
    social: {
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    name: "Sahil Khan",
    role: "Graphics Designer",
    bio: "Graphics Designer specializing in Adobe, Photoshop, Canva, Coral draw etc.",
    image: "", // Using imported image
    social: {
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    name: "Rimsha Khan",
    role: "UX Designer",
    bio: "Creative designer focused on user-centered design",
    image: "",// Using imported image
    social: {
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    name: "Jubair Khan",
    role: "Front-End Developer",
    bio: "Creative designer focused on user-centered design",
    image: "",// Using imported image
    social: {
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    name: "Shiva Pal",
    role: "Full Stack Developer",
    bio: "Creative designer focused on user-centered design",
    image: "",// Using imported image
    social: {
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    name: "Vimlesh Yadav",
    role: "Makreting Head",
    bio: "Marketing Head with expertise in driving brand growth and customer engagement through strategic marketing.Creative designer focused on user-centered design",
    image: "",// Using imported image
    social: {
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    name: "Akash Yadav",
    role: "Lead Marketing",
    bio: "Marketing Head with expertise in driving brand growth and customer engagement through strategic marketing.Creative designer focused on user-centered design",
    image: "",// Using imported image
    social: {
      linkedin: "#",
      twitter: "#"
    }
  },
];

const Team = () => {
  return (
    <Box sx={{ py: 10, backgroundColor: '#f9faff' }}>
      <Container maxWidth="xl">
        <Typography variant="h3" align="center" sx={{ fontWeight: 'bold', mb: 2 }}>
          Meet Our <Box component="span" sx={{ color: 'primary.main' }}>Team</Box>
        </Typography>
        <Typography variant="h6" align="center" sx={{ mb: 6, color: 'text.secondary', maxWidth: '700px', mx: 'auto' }}>
          The talented people behind our success
        </Typography>
        
        <Grid container spacing={4} justifyContent="center">
          {teamMembers.map((member, index) => (
            <Grid item xs={12} sm={6} md={3} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card sx={{ 
                  width: '100%',
                  maxWidth: 300,
                  height: '100%',
                  borderRadius: '16px',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
                  transition: 'transform 0.3s',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 15px 35px rgba(0, 0, 0, 0.1)'
                  }
                }}>
                  <Box sx={{ display: 'flex', justifyContent: 'center', pt: 4 }}>
                    <Avatar 
                      src={member.image} 
                      alt={member.name}
                      sx={{ 
                        width: 120, 
                        height: 120, 
                        fontSize: '3rem',
                        bgcolor: 'primary.main',
                        color: 'white',
                        border: '4px solid white',
                        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)'
                      }}
                    >
                      {/* Fallback to first letter if image fails to load */}
                      {member.name.charAt(0)}
                    </Avatar>
                  </Box>
                  <CardContent sx={{ p: 4, textAlign: 'center' }}>
                    <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
                      {member.name}
                    </Typography>
                    <Typography variant="body2" color="primary.main" sx={{ mb: 2, fontWeight: 'bold' }}>
                      {member.role}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                      {member.bio}
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
                      <Link href={member.social.linkedin} color="inherit">
                        <LinkedIn sx={{ '&:hover': { color: 'primary.main' } }} />
                      </Link>
                      <Link href={member.social.twitter} color="inherit">
                        <Twitter sx={{ '&:hover': { color: 'primary.main' } }} />
                      </Link>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Team;