import React, { useState } from 'react';
import { Container, Typography, Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, AppBar, Toolbar, IconButton } from '@mui/material';
import { ArrowForward as ArrowForwardIcon } from '@mui/icons-material';

const PressReleasePage = () => {
  const [open, setOpen] = useState(false);
  const [selectedPressRelease, setSelectedPressRelease] = useState(null);

  // Sample press releases
  const pressReleases = [
    {
      id: 1,
      title: "Exciting New Product Launch",
      date: "May 12, 2025",
      shortDescription: "We are thrilled to announce the launch of our latest product that is set to transform the industry.",
      fullDescription: "Our team has been working tirelessly over the past year to bring this innovation to life. This release includes a range of features that will not only improve user experience but also enhance the scalability of businesses. Our goal is to redefine the way companies operate and to provide them with a tool that is as intuitive as it is powerful.",
    },
    {
      id: 2,
      title: "Annual Company Report",
      date: "April 10, 2025",
      shortDescription: "We are pleased to release our annual report, highlighting the achievements and growth of the company.",
      fullDescription: "In the past year, we have seen exponential growth in both revenue and customer satisfaction. Our commitment to innovation and quality has allowed us to expand our product offerings and increase market share. We look forward to even greater success in the coming year.",
    },
    {
      id: 3,
      title: "Corporate Social Responsibility Initiatives",
      date: "March 5, 2025",
      shortDescription: "This year we have made significant strides in our CSR initiatives, benefiting local communities.",
      fullDescription: "Our commitment to giving back to the community has never been stronger. We have partnered with several local NGOs to drive impactful programs that support education, health, and the environment. These efforts align with our long-term vision of sustainable growth and positive societal change.",
    },
  ];

  const handleOpen = (pressRelease) => {
    setSelectedPressRelease(pressRelease);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedPressRelease(null);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      {/* Scrollable Marquee of Press Release Titles */}
      <AppBar position="sticky" sx={{ background: '#0096FF', boxShadow: 3, marginBottom: 4 , borderRadius: '120px'}}>
        <Toolbar>
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
            <Box
              sx={{
                display: 'inline-block',
                whiteSpace: 'nowrap',
                animation: 'marquee 30s linear infinite',
                fontSize: '18px',
                fontWeight: 'bold',
                background: '#0096FF',
                color: '#fff',
                borderRadius: '50px',
                padding: '8px 20px',
                boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
              }}
            >
              {pressReleases.map((pressRelease) => (
                <Button
                  key={pressRelease.id}
                  sx={{
                    marginRight: 4,
                    textTransform: 'none',
                    color: '#fff',
                    fontSize: '16px',
                    '&:hover': { backgroundColor: 'transparent', color: '#FFD700' },
                    padding: '0px',
                    transition: 'color 0.3s ease, transform 0.3s ease',
                    '&:active': { transform: 'scale(1.1)' },
                  }}
                  onClick={() => handleOpen(pressRelease)}
                >
                  {pressRelease.title}
                </Button>
              ))}
            </Box>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Main Content Area for Press Releases */}
      <Typography variant="h3" gutterBottom>
        Press Releases
      </Typography>
      <Typography paragraph>
        Below are the latest press releases. Click on any headline to read more about the press release.
      </Typography>

      {/* List of Press Releases */}
      {pressReleases.map((pressRelease) => (
        <Box key={pressRelease.id} mb={4}>
          <Typography variant="h5">{pressRelease.title}</Typography>
          <Typography variant="body1" color="text.secondary" mb={2}>
            {pressRelease.date}
          </Typography>
          <Typography paragraph>{pressRelease.shortDescription}</Typography>
          <Button variant="contained" color="primary" onClick={() => handleOpen(pressRelease)}>
            Learn More
          </Button>
        </Box>
      ))}

      {/* Dialog for Full Press Release */}
      <Dialog open={open} onClose={handleClose} fullWidth>
        <DialogTitle>{selectedPressRelease?.title}</DialogTitle>
        <DialogContent>
          <Typography variant="body2" color="text.secondary" mb={2}>
            {selectedPressRelease?.date}
          </Typography>
          <Typography paragraph>{selectedPressRelease?.fullDescription}</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>

      {/* Marquee Animation Style */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
        `}
      </style>
    </Container>
  );
};

export default PressReleasePage;
