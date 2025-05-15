import { Container, Typography, Box, TextField, Button, FormControl, InputLabel, Select, MenuItem, Checkbox, FormControlLabel, Grid, Alert } from '@mui/material';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const ServiceRequestForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    services: [],
    package: '',
    requirements: location.state?.prefilledRequirements || '',
    budget: '',
    timeline: ''
  });
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const serviceOptions = [
    'Web Development',
    'Mobile App Development',
    'UI/UX Design',
    'Cloud Solutions',
    'DevOps Services',
    'Digital Marketing',
    'SEO Services',
    'Custom Software'
  ];

  const packageOptions = ['Basic', 'Standard', 'Premium', 'Enterprise', 'Custom'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleServiceChange = (e) => {
    const { value } = e.target;
    setFormData(prev => ({ ...prev, services: typeof value === 'string' ? value.split(',') : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmissionStatus('submitting');

    try {
      const response = await fetch('https://formspree.io/f/xanoqkzo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          _subject: `New Service Request from ${formData.name}`,
          _replyto: formData.email,
          _to: 'tasknexus2025@gmail.com',
          services: formData.services.join(', ')
        }),
      });

      if (response.ok) {
        setSubmissionStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          services: [],
          package: '',
          requirements: '',
          budget: '',
          timeline: ''
        });
        setTimeout(() => navigate('/'), 3000);
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      setSubmissionStatus('error');
      console.error('Error:', error);
    }
  };

  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Typography variant="h3" sx={{ mb: 4, fontWeight: 'bold', textAlign: 'center' }}>
        Service<span style={{ color: '#2962ff' }}> Request</span>

      </Typography>
      
      <Box component="form" onSubmit={handleSubmit} sx={{ 
        p: 4, 
        borderRadius: '16px',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
        backgroundColor: 'white'
      }}>
        {submissionStatus === 'success' && (
          <Alert severity="success" sx={{ mb: 4 }}>
            Thank you! Your request has been submitted. We'll contact you soon.
          </Alert>
        )}
        {submissionStatus === 'error' && (
          <Alert severity="error" sx={{ mb: 4 }}>
            Failed to submit request. Please try again later.
          </Alert>
        )}

        <Grid container spacing={4}>
          {/* Form fields remain the same as previous example */}
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Full Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              sx={{ mb: 3 }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              sx={{ mb: 3 }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Phone Number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              sx={{ mb: 3 }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Company Name"
              name="company"
              value={formData.company}
              onChange={handleChange}
              sx={{ mb: 3 }}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel>Services Needed *</InputLabel>
              <Select
                multiple
                name="services"
                value={formData.services}
                onChange={handleServiceChange}
                required
                renderValue={(selected) => selected.join(', ')}
              >
                {serviceOptions.map((service) => (
                  <MenuItem key={service} value={service}>
                    <Checkbox checked={formData.services.indexOf(service) > -1} />
                    {service}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel>Package *</InputLabel>
              <Select
                name="package"
                value={formData.package}
                onChange={handleChange}
                required
              >
                {packageOptions.map((pkg) => (
                  <MenuItem key={pkg} value={pkg}>{pkg}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Estimated Budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              sx={{ mb: 3 }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Project Timeline"
              name="timeline"
              value={formData.timeline}
              onChange={handleChange}
              sx={{ mb: 3 }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              multiline
              rows={2}
              label="Project Requirements"
              name="requirements"
              value={formData.requirements}
              onChange={handleChange}
              required
              sx={{ mb: 3 }}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              size="large"
              fullWidth
              disabled={submissionStatus === 'submitting'}
              sx={{
                py: 2,
                borderRadius: '50px',
                fontSize: '1rem',
                fontWeight: 'bold'
              }}
            >
              {submissionStatus === 'submitting' ? 'Submitting...' : 'Submit Request'}
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default ServiceRequestForm;