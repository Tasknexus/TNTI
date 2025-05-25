import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  useMediaQuery,
  useTheme,
} from '@mui/material';

const PressReleasePage = () => {
  const [open, setOpen] = useState(false);
  const [selectedPressRelease, setSelectedPressRelease] = useState(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const pressReleases = [
    {
      id: 1,
    title: "Nexus Build: Revolutionizing Web App Creation with Drag-and-Drop",
    date: "June 15, 2025",
    shortDescription:
      "Nexus Build is set to launch next month — a cutting-edge drag-and-drop platform that empowers users to build, store, and host custom web apps without coding.",
    fullDescription: `
      We are excited to announce the upcoming launch of Nexus Build, a game-changing platform designed for entrepreneurs, small businesses, and creators who want to bring their digital ideas to life without technical barriers.

      **Key Features of Nexus Build:**

      1. **Intuitive Drag-and-Drop Builder:** Design your web app visually by dragging components like text, images, forms, buttons, and more — no programming skills needed.
      
      2. **Store Creation & Management:** Easily create and customize online stores with payment integrations, product catalogs, and inventory management tools.
      
      3. **One-Click Hosting & Deployment:** Host your web app on our scalable cloud infrastructure instantly with zero configuration hassles.
      
      4. **Pre-built Templates:** Access a variety of professionally designed templates to jumpstart your project.
      
      5. **Advanced Analytics:** Gain insights on visitor behavior, sales, and user engagement with built-in analytics.
      
      6. **Mobile Responsive:** All apps built with Nexus Build are automatically optimized for desktop, tablet, and mobile devices.

      **Upcoming Features (Launching Next Month):**
      
      - **Custom Domain Support:** Connect your own domain name effortlessly.
      - **Multi-language Support:** Build apps in multiple languages to reach global audiences.
      - **Collaboration Tools:** Work with your team in real-time.
      - **Third-Party Integrations:** Connect with popular services like Google Analytics, Mailchimp, and more.
      - **AI-Powered Design Suggestions:** Get automated design tips to enhance your app’s look and usability.

      Our mission with Nexus Build is to democratize web development by removing technical complexities, enabling anyone to launch their digital presence quickly and professionally.

      Stay tuned for the official launch next month! Join the waitlist and be among the first to experience the future of app creation.

      **For more details and early access, visit:** [www.nexusbuild.com](https://www.nexusbuild.com)
    `,
    imageUrl: "https://yourdomain.com/images/nexus-build-launch.png", // replace with your actual hosted image
  },
    {
      id: 2,
      title: "Annual Company Report",
      date: "April 10, 2025",
      shortDescription:
        "We are pleased to release our annual report, highlighting the achievements and growth of the company.",
      fullDescription:
        "In the past year, we have seen exponential growth in both revenue and customer satisfaction. Our commitment to innovation and quality has allowed us to expand our product offerings and increase market share. We look forward to even greater success in the coming year.",
    },
    {
      id: 3,
      title: "Corporate Social Responsibility Initiatives",
      date: "March 5, 2025",
      shortDescription:
        "This year we have made significant strides in our CSR initiatives, benefiting local communities.",
      fullDescription:
        "Our commitment to giving back to the community has never been stronger. We have partnered with several local NGOs to drive impactful programs that support education, health, and the environment. These efforts align with our long-term vision of sustainable growth and positive societal change.",
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
    <>
      {/* Navbar */}
      <AppBar position="static" sx={{ backgroundColor: '#1976d2' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Company Press Releases
          </Typography>
          {/* Add more navbar items here if needed */}
        </Toolbar>
      </AppBar>

      {/* Sticky Marquee Bar BELOW Navbar */}
      <Box
        sx={{
          position: 'sticky',
          top: 64, // height of AppBar approx
          backgroundColor: '#0096FF',
          py: 1,
          overflow: 'hidden',
          zIndex: 1300,
          boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
        }}
      >
        <Box
          sx={{
            display: 'inline-block',
            whiteSpace: 'nowrap',
            animation: 'marquee 30s linear infinite',
            fontWeight: 'bold',
            color: '#fff',
            px: 2,
            fontSize: isMobile ? '14px' : '18px',
          }}
        >
          {pressReleases.map((pr, index) => (
            <Button
              key={pr.id}
              onClick={() => handleOpen(pr)}
              sx={{
                color: '#fff',
                textTransform: 'none',
                fontWeight: '600',
                marginRight: 6,
                '&:hover': {
                  color: '#FFD700',
                  backgroundColor: 'transparent',
                  transform: 'scale(1.05)',
                  transition: 'all 0.3s ease',
                },
              }}
            >
              {pr.title}
            </Button>
          ))}
        </Box>
      </Box>

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ mt: 4, mb: 6 }}>
        <Typography variant="h4" gutterBottom fontWeight="bold">
          Latest Press Releases
        </Typography>
        <Typography variant="body1" mb={3} color="text.secondary">
          Click on any press release title or the "Read More" button to see full details.
        </Typography>

        {/* Table */}
        <TableContainer component={Paper} elevation={4} sx={{ borderRadius: 3 }}>
          <Table aria-label="press releases table" sx={{ minWidth: 650 }}>
            <TableHead sx={{ backgroundColor: '#1976d2' }}>
              <TableRow>
                <TableCell sx={{ color: '#fff', fontWeight: 'bold' }}>Title</TableCell>
                {!isMobile && (
                  <>
                    <TableCell sx={{ color: '#fff', fontWeight: 'bold' }}>Date</TableCell>
                    <TableCell sx={{ color: '#fff', fontWeight: 'bold' }}>Summary</TableCell>
                  </>
                )}
                <TableCell align="center" sx={{ color: '#fff', fontWeight: 'bold' }}>
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {pressReleases.map((pr) => (
                <TableRow
                  key={pr.id}
                  hover
                  sx={{ cursor: 'pointer' }}
                  onClick={() => handleOpen(pr)}
                >
                  <TableCell component="th" scope="row">
                    {pr.title}
                  </TableCell>
                  {!isMobile && (
                    <>
                      <TableCell>{pr.date}</TableCell>
                      <TableCell>{pr.shortDescription}</TableCell>
                    </>
                  )}
                  <TableCell align="center">
                    <Button
                      variant="outlined"
                      size="small"
                      onClick={(e) => {
                        e.stopPropagation(); // prevent row click triggering twice
                        handleOpen(pr);
                      }}
                    >
                      Read More
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>

      {/* Dialog */}
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <DialogTitle sx={{ fontWeight: 'bold' }}>{selectedPressRelease?.title}</DialogTitle>
        <DialogContent dividers>
          <Typography variant="subtitle2" color="text.secondary" gutterBottom>
            {selectedPressRelease?.date}
          </Typography>
          <Typography variant="body1" sx={{ whiteSpace: 'pre-line' }}>
            {selectedPressRelease?.fullDescription}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained" color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>

      {/* Marquee Animation CSS */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </>
  );
};

export default PressReleasePage;
