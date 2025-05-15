import { Box, keyframes } from '@mui/material';
import { styled } from '@mui/system';

// Futuristic gradient animation
const rotate = keyframes`
  0% { transform: rotate(0deg); opacity: 1; }
  50% { transform: rotate(180deg); opacity: 0.7; }
  100% { transform: rotate(360deg); opacity: 1; }
`;

// Modern dot pulse animation
const pulse = keyframes`
  0%, 100% { transform: scale(0.9); opacity: 0.6; }
  50% { transform: scale(1.1); opacity: 1; }
`;

const FuturisticSpinner = styled('div')(({ theme }) => ({
  position: 'relative',
  width: '48px',
  height: '48px',
  
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: '50%',
    border: `3px solid ${theme.palette.primary.light}`,
    borderTopColor: theme.palette.primary.main,
    animation: `${rotate} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite`,
  }
}));

const LoadingText = styled('div')(({ theme }) => ({
  display: 'flex',
  gap: '4px',
  marginTop: '16px',
  color: theme.palette.text.secondary,
  fontSize: '0.875rem',
  fontWeight: 500,
  
  '& span': {
    animation: `${pulse} 1.4s ease-in-out infinite`,
    animationDelay: 'calc(var(--i) * 0.1s)',
    display: 'inline-block'
  }
}));

const LoadingSpinner = () => (
  <Box sx={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    py: 4,
    minHeight: '120px'
  }}>
    <FuturisticSpinner />
    
    <LoadingText>
      {'Loading'.split('').map((letter, i) => (
        <span key={i} style={{ '--i': i }}>{letter}</span>
      ))}
      <span style={{ '--i': 7 }}>.</span>
      <span style={{ '--i': 8 }}>.</span>
      <span style={{ '--i': 9 }}>.</span>
    </LoadingText>
  </Box>
);

export default LoadingSpinner;