import { 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  Box, 
  useTheme,
  Avatar 
} from '@mui/material';
import {
  Security,
  Bolt,
  Cloud,
  Assessment,
  Devices,
  SyncAlt,
  DataObject,
  SettingsInputComponent,
  Storage
} from '@mui/icons-material';

const Features = () => {
  const theme = useTheme();

  const features = [
    {
      icon: <Bolt fontSize="medium" />,
      title: "Lightning Fast",
      description: "Sub-second response times at any scale"
    },
    {
      icon: <Security fontSize="medium" />,
      title: "Enterprise Security",
      description: "SOC 2 Type II compliant with E2E encryption"
    },
    {
      icon: <Cloud fontSize="medium" />,
      title: "Cloud Agnostic",
      description: "Deploy on AWS, GCP, or Azure"
    },
    {
      icon: <Assessment fontSize="medium" />,
      title: "Real-Time Analytics",
      description: "Interactive dashboards with custom metrics"
    },
    {
      icon: <Devices fontSize="medium" />,
      title: "Omnichannel",
      description: "Web, mobile, and desktop support"
    },
    {
      icon: <SyncAlt fontSize="medium" />,
      title: "500+ Integrations",
      description: "Pre-built SaaS connectors"
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }} id="features">
      <Box textAlign="center" mb={6}>
        <Typography 
          variant="h3" 
          component="h2" 
          gutterBottom
          sx={{ 
            fontWeight: 700,
            color: theme.palette.text.primary,
            mb: 2
          }}
        >
          Enterprise-Grade Features
        </Typography>
        <Typography 
          variant="subtitle1"
          sx={{
            maxWidth: 700,
            mx: 'auto',
            color: theme.palette.text.secondary,
            fontSize: '1.1rem'
          }}
        >
          Built for startups scaling to enterprise
        </Typography>
      </Box>

      <Grid container spacing={4} justifyContent="center">
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex' }}>
            <Card 
              sx={{ 
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                p: 3,
                transition: 'all 0.3s ease',
                border: `1px solid ${theme.palette.divider}`,
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: theme.shadows[6]
                }
              }}
            >
              <Avatar 
                sx={{ 
                  bgcolor: theme.palette.primary.light,
                  color: theme.palette.primary.main,
                  width: 60, 
                  height: 60,
                  mb: 3
                }}
              >
                {feature.icon}
              </Avatar>
              
              <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <Typography 
                  variant="h6" 
                  component="h3" 
                  gutterBottom
                  sx={{ 
                    fontWeight: 600,
                    mb: 2
                  }}
                >
                  {feature.title}
                </Typography>
                <Typography 
                  variant="body2" 
                  color="text.secondary"
                  sx={{
                    lineHeight: 1.5,
                    mx: 'auto',
                    maxWidth: '80%'
                  }}
                >
                  {feature.description}
                </Typography>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Features;