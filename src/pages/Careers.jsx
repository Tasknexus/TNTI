import React from 'react';
import { Container, Box, Typography, Button, List, ListItem, Divider } from '@mui/material';

const Careers = () => {
  const jobOpenings = [
    {
      id: 1,
      title: "Frontend Developer",
      department: "Engineering",
      location: "Remote / Bangalore, India",
      salaryRange: "₹12,00,000 - ₹18,00,000 per annum",
      description: [
        "As a Frontend Developer, you'll be responsible for developing scalable, modern web applications with React.js. You'll collaborate with cross-functional teams to deliver high-quality user interfaces.",
        "This position is an excellent opportunity to work on cutting-edge technologies in a fast-paced, innovative environment."
      ],
      responsibilities: [
        "Develop and maintain modern web applications using React.js",
        "Work with backend APIs to integrate services",
        "Optimize applications for maximum speed and scalability",
        "Collaborate with designers to translate UI/UX designs into functional applications"
      ],
      requirements: [
        "3+ years of professional experience with React.js",
        "Strong JavaScript fundamentals (ES6+)",
        "Experience with state management libraries (Redux, MobX)",
        "Familiarity with modern frontend tooling (Webpack, Babel, ESLint)",
        "Excellent communication skills and ability to work in a team"
      ],
      benefits: [
        "Competitive salary and equity options",
        "Flexible work arrangements and remote work policy",
        "Comprehensive health insurance",
        "Learning and development opportunities"
      ],
      applicationProcess: [
        "Submit your resume along with a cover letter detailing your experience",
        "Complete a coding challenge on our platform (link will be sent upon application)",
        "Interview with the hiring manager and team members"
      ],
      status: "open"
    },
    {
      id: 2,
      title: "UX Designer",
      department: "Design",
      location: "Hybrid (Bangalore, India)",
      salaryRange: "₹8,00,000 - ₹12,00,000 per annum",
      description: [
        "We are looking for a creative UX Designer to join our team. You'll work closely with developers and stakeholders to create seamless, user-centered designs for web and mobile applications."
      ],
      responsibilities: [
        "Design intuitive and engaging user experiences for web and mobile apps",
        "Work with the development team to ensure the technical feasibility of designs",
        "Conduct user research and usability testing",
        "Collaborate with cross-functional teams to ensure design consistency"
      ],
      requirements: [
        "2+ years of UX design experience with a strong portfolio",
        "Proficiency in design tools like Figma, Sketch, and Adobe XD",
        "Experience conducting user research and usability tests",
        "Understanding of HTML/CSS and basic front-end development principles"
      ],
      benefits: [
        "Health and wellness benefits",
        "Collaborative team environment",
        "Work from anywhere options",
        "Opportunities to mentor junior designers"
      ],
      applicationProcess: [
        "Submit your portfolio and resume",
        "Take part in a design challenge",
        "Interview with the design team"
      ],
      status: "open"
    },
    {
      id: 3,
      title: "Lead Generation Specialist & Client Acquisition",
      department: "Sales & Marketing",
      location: "Remote, India",
      salaryRange: "₹80,000 - ₹1,20,000 per annum",
      
      description: [
        "We are looking for a highly motivated Lead Generation Specialist who can source quality leads and convert them into successful clients. The ideal candidate will work closely with the sales team to identify new business opportunities and manage the client acquisition process. If you're someone who thrives on finding and nurturing potential clients and are driven by measurable success, we want to hear from you!"
      ],
      responsibilities: [
        "Lead Sourcing: Research and identify new business leads through multiple channels (social media, networking, email campaigns, cold calling, etc.).",
        "Lead Qualification: Analyze and qualify leads to ensure they meet the potential client profile and are ready for conversion.",
        "Client Outreach: Reach out to identified leads via email, phone calls, or social media to initiate conversations and pitch services.",
        "Client Acquisition: Convert qualified leads into paying clients by establishing relationships, understanding their needs, and offering tailored solutions.",
        "Collaboration: Work closely with the sales and marketing teams to refine outreach strategies, sales pitches, and client targeting methods.",
      ],
      requirements: [
        "Proven experience in lead generation and client acquisition.",
        "Strong knowledge of CRM software (e.g., HubSpot, Salesforce, Zoho).",
        "Excellent communication skills, both written and verbal.",
        "Ability to qualify leads and close deals effectively.",
        "Self-motivated with a strong drive for results.",
        "Experience with social media platforms, email marketing, and cold outreach.",
        "Ability to adapt strategies and messaging based on client needs and responses.",
        "Strong organizational skills and attention to detail.",
        "Experience in B2B sales and understanding of business solutions is a plus."
      ],
      benefits: [
        "Competitive salary with performance-based incentives.",
        "Collaborative team environment",
        "Flexible working hours and remote work.",
        "Opportunities for professional growth and development."
      ],
      applicationProcess: [
        "Submit your updated resume and a brief cover letter outlining your experience in lead generation and client acquisition.",
        "Complete a short screening call.",
        "Interview with the sales team."
      ],
      status: "open"
    }
  ];

  const activeJobs = jobOpenings.filter(job => job.status === "open");

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main' }}>
        Join Our Team
      </Typography>

      {/* Career Openings Section */}
      <Box 
        id="career-openings" 
        data-section="careers"
        component="section"
        sx={{ mb: 4 }}
      >
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
          Current Job Openings
        </Typography>

        {activeJobs.length > 0 ? (
          <List sx={{ width: '100%' }}>
            {activeJobs.map((job) => (
              <ListItem 
                key={job.id}
                className="job-listing"
                sx={{
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  bgcolor: 'background.paper',
                  mb: 4,
                  p: 4,
                  borderRadius: 2,
                  boxShadow: 2,
                  '&:hover': {
                    boxShadow: 5,
                  }
                }}
              >
                <Typography variant="h5" className="job-title" color="primary" sx={{ fontWeight: 'bold' }}>
                  {job.title}
                </Typography>
                <Typography className="job-department" color="text.secondary" sx={{ fontStyle: 'italic' }}>
                  {job.department}
                </Typography>
                {job.location && (
                  <Typography className="job-location" fontStyle="italic" sx={{ my: 2 }}>
                    {job.location}
                  </Typography>
                )}
                
                <Typography variant="body1" paragraph sx={{ my: 2 }}>
                  <strong>Salary:</strong> {job.salaryRange}
                </Typography>

                <Divider sx={{ my: 2 }} />

                <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 2 }}>Job Description</Typography>
                {job.description.map((para, i) => (
                  <Typography key={i} paragraph sx={{ color: 'text.secondary' }}>
                    {para}
                  </Typography>
                ))}

                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Responsibilities:</Typography>
                <List dense sx={{ pl: 2 }}>
                  {job.responsibilities.map((resp, i) => (
                    <ListItem key={i} sx={{ display: 'list-item' }}>
                      <Typography variant="body2">{resp}</Typography>
                    </ListItem>
                  ))}
                </List>

                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Requirements:</Typography>
                <List dense sx={{ pl: 2 }}>
                  {job.requirements.map((req, i) => (
                    <ListItem key={i} sx={{ display: 'list-item' }}>
                      <Typography variant="body2">{req}</Typography>
                    </ListItem>
                  ))}
                </List>

                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Benefits:</Typography>
                <List dense sx={{ pl: 2 }}>
                  {job.benefits.map((benefit, i) => (
                    <ListItem key={i} sx={{ display: 'list-item' }}>
                      <Typography variant="body2">{benefit}</Typography>
                    </ListItem>
                  ))}
                </List>

                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Application Process:</Typography>
                <List dense sx={{ pl: 2 }}>
                  {job.applicationProcess.map((process, i) => (
                    <ListItem key={i} sx={{ display: 'list-item' }}>
                      <Typography variant="body2">{process}</Typography>
                    </ListItem>
                  ))}
                </List>

                <Button 
                  variant="contained" 
                  className="apply-btn"
                  href="https://forms.gle/EXAMPLE_FORM" // Link to demo Google Form
                  target="_blank"
                  sx={{
                    mt: 3,
                    bgcolor: 'primary.main',
                    '&:hover': {
                      bgcolor: 'primary.dark'
                    }
                  }}
                >
                  Apply Now
                </Button>
              </ListItem>
            ))}
          </List>
        ) : (
          <Box className="no-openings" sx={{ textAlign: 'center', p: 4 }}>
            <Typography variant="h6" color="text.secondary">
              Currently no open positions. Please check back later!
            </Typography>
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default Careers;
