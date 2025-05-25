import { useState, useEffect, useRef } from 'react';
import { 
  Box, IconButton, Typography, TextField, Avatar, Button,
  Chip, CircularProgress, Paper, FormControl, InputLabel, 
  Select, MenuItem, Divider, useMediaQuery, useTheme
} from '@mui/material';
import { 
  Send as SendIcon, 
  Close as CloseIcon, 
  SmartToy as BotIcon, 
  Person as UserIcon,
  Support as SupportIcon,
  Work as WorkIcon,
  Email as EmailIcon,
  AttachMoney as PricingIcon,
  Code as ServicesIcon,
  Dashboard as ProjectsIcon,
  Menu as MenuIcon,
  CheckCircle as SuccessIcon
} from '@mui/icons-material';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [showSupportForm, setShowSupportForm] = useState(false);
  const [supportForm, setSupportForm] = useState({
    name: '',
    email: '',
    problemType: 'technical',
    description: ''
  });
  const messagesEndRef = useRef(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const defaultQuickReplies = ['services', 'pricing', 'projects', 'career', 'contact', 'support'];

  // Mock responses - replace with your actual ModelTrainer implementation
  const mockResponses = {
    greeting: "Hello! I'm Nexi, your AI assistant. How can I help you today?",
    support: "Please fill out the support form below and we'll get back to you soon.",
    services: "We offer a range of services including web development, mobile apps, and cloud solutions.",
    pricing: "Our pricing depends on project requirements. Contact us for a customized quote.",
    projects: "We've completed over 200 projects across various industries. Ask me about specific cases!",
    career: "We're always looking for talented people. Check our careers page for current openings.",
    contact: "You can reach us at contact@example.com or call +1 (555) 123-4567."
  };

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      addBotMessage(mockResponses.greeting, defaultQuickReplies);
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const addBotMessage = (text, quickReplies = []) => {
    setMessages(prev => [...prev, {
      sender: 'bot',
      text,
      quickReplies: quickReplies.length > 0 ? quickReplies : ['menu']
    }]);
  };

  const handleSendMessage = async () => {
    if (input.trim() === '') return;
    
    setMessages(prev => [...prev, { sender: 'user', text: input }]);
    setInput('');
    setLoading(true);
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const lowerInput = input.toLowerCase();
      let response = mockResponses[lowerInput] || 
        "I'm not sure I understand. Could you rephrase that?";
      
      let showForm = false;
      if (lowerInput.includes('support') || lowerInput.includes('help')) {
        showForm = true;
        response = mockResponses.support;
      }
      
      addBotMessage(response, showForm ? [] : defaultQuickReplies);
      
      if (showForm) {
        setShowSupportForm(true);
      }
    } catch (error) {
      console.error("Error generating response:", error);
      addBotMessage("Sorry, I encountered an error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleQuickReply = async (reply) => {
    if (reply === 'menu') {
      addBotMessage("What would you like to know about?", defaultQuickReplies);
      return;
    }
    
    if (reply === 'support') {
      setShowSupportForm(true);
      addBotMessage(mockResponses.support, []);
      return;
    }
    
    setMessages(prev => [...prev, { sender: 'user', text: reply }]);
    setLoading(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 800));
      addBotMessage(mockResponses[reply] || "Here's information about " + reply, defaultQuickReplies);
    } catch (error) {
      console.error("Error generating response:", error);
      addBotMessage("Sorry, I encountered an error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSupportSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      addBotMessage("Thank you! Your support request has been submitted. We'll contact you soon.", defaultQuickReplies);
      setSupportForm({
        name: '',
        email: '',
        problemType: 'technical',
        description: ''
      });
      setShowSupportForm(false);
    } catch (error) {
      addBotMessage("Failed to submit your request. Please try again later.", defaultQuickReplies);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ 
      position: 'fixed', 
      bottom: isMobile ? 16 : 20, 
      right: isMobile ? 16 : 20, 
      zIndex: 1300,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end'
    }}>
      {isOpen && (
        <Box sx={{
          width: isMobile ? 'calc(100vw - 32px)' : 380,
          height: isMobile ? 'calc(100vh - 100px)' : 560,
          maxHeight: isMobile ? '80vh' : 'none',
          bgcolor: 'background.paper',
          borderRadius: 4,
          boxShadow: 24,
          display: 'flex',
          flexDirection: 'column',
          border: '1px solid',
          borderColor: 'divider',
          overflow: 'hidden',
          mb: 2,
          zIndex: 1301
        }}>
          {/* Header */}
          <Box sx={{
            bgcolor: 'primary.main',
            color: 'primary.contrastText',
            p: isMobile ? 1.5 : 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTopLeftRadius: 12,
            borderTopRightRadius: 12
          }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Avatar sx={{ 
                width: isMobile ? 28 : 32, 
                height: isMobile ? 28 : 32,
                bgcolor: 'secondary.main'
              }}>
                <BotIcon fontSize={isMobile ? 'small' : 'medium'} />
              </Avatar>
              <Typography 
                variant="h6" 
                fontWeight="medium" 
                fontFamily="'Inter', sans-serif"
                fontSize={isMobile ? '1rem' : '1.25rem'}
              >
                Nexi AI Assistant
              </Typography>
            </Box>
            <IconButton 
              color="inherit" 
              onClick={() => setIsOpen(false)}
              size={isMobile ? 'small' : 'medium'}
            >
              <CloseIcon fontSize={isMobile ? 'small' : 'medium'} />
            </IconButton>
          </Box>
          
          {/* Messages */}
          <Box sx={{ 
            flex: 1, 
            p: isMobile ? 1 : 2, 
            overflowY: 'auto', 
            bgcolor: 'background.default',
            display: 'flex',
            flexDirection: 'column',
            gap: isMobile ? 1 : 2
          }}>
            {messages.map((msg, i) => (
              <Box key={i} sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: msg.sender === 'user' ? 'flex-end' : 'flex-start'
              }}>
                <Box
  sx={{
    display: 'flex',
    alignItems: 'center',
    gap: 0.5,
    mb: 0.5,
  }}
>
  <Avatar
    sx={{
      width: isMobile ? 24 : 28,
      height: isMobile ? 24 : 28,
      bgcolor: msg.sender === 'user' ? 'primary.main' : 'secondary.main',
      overflow: 'hidden',
    }}
  >
    {msg.sender === 'user' ? (
      <UserIcon fontSize={isMobile ? 'small' : 'medium'} />
    ) : (
      <img
        src="/favicon.ico"
        alt="favicon"
        style={{
          width: isMobile ? 16 : 20,
          height: isMobile ? 16 : 20,
          objectFit: 'contain',
        }}
      />
    )}
  </Avatar>
  <Typography
    variant="caption"
    color="text.secondary"
    fontSize={isMobile ? '0.6rem' : '0.7rem'}
    fontFamily="'Inter', sans-serif"
  >
    {msg.sender === 'user' ? 'You' : 'Nexi'}
  </Typography>
</Box>

                
                <Box sx={{
                  p: isMobile ? 1 : 1.5,
                  borderRadius: 3,
                  bgcolor: msg.sender === 'user' ? 'primary.main' : 'background.paper',
                  color: msg.sender === 'user' ? 'primary.contrastText' : 'text.primary',
                  boxShadow: 1,
                  maxWidth: isMobile ? '90%' : '85%',
                  borderTopLeftRadius: msg.sender === 'user' ? 12 : 2,
                  borderTopRightRadius: msg.sender === 'user' ? 2 : 12
                }}>
                  <Typography 
                    sx={{ 
                      whiteSpace: 'pre-line',
                      fontSize: isMobile ? '0.8rem' : '0.9rem',
                      lineHeight: 1.5,
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: msg.sender === 'user' ? 500 : 400
                    }}
                  >
                    {msg.text}
                  </Typography>
                </Box>
                
                {msg.quickReplies && i === messages.length - 1 && (
                  <Box sx={{ 
                    display: 'flex', 
                    flexWrap: 'wrap', 
                    gap: 0.5, 
                    mt: 1,
                    justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start'
                  }}>
                    {msg.quickReplies.map((reply, j) => {
                      const iconMap = {
                        'services': <ServicesIcon fontSize={isMobile ? 'small' : 'medium'} />,
                        'pricing': <PricingIcon fontSize={isMobile ? 'small' : 'medium'} />,
                        'projects': <ProjectsIcon fontSize={isMobile ? 'small' : 'medium'} />,
                        'career': <WorkIcon fontSize={isMobile ? 'small' : 'medium'} />,
                        'contact': <EmailIcon fontSize={isMobile ? 'small' : 'medium'} />,
                        'support': <SupportIcon fontSize={isMobile ? 'small' : 'medium'} />,
                        'menu': <MenuIcon fontSize={isMobile ? 'small' : 'medium'} />
                      };
                      
                      return (
                        <Chip
                          key={j}
                          label={reply === 'menu' ? 'Main Menu' : reply.charAt(0).toUpperCase() + reply.slice(1)}
                          onClick={() => handleQuickReply(reply)}
                          size={isMobile ? 'small' : 'medium'}
                          icon={iconMap[reply] || null}
                          sx={{ 
                            cursor: 'pointer',
                            bgcolor: 'background.paper',
                            color: 'text.primary',
                            fontSize: isMobile ? '0.65rem' : '0.75rem',
                            fontFamily: "'Inter', sans-serif",
                            '&:hover': { 
                              bgcolor: 'action.hover'
                            },
                            boxShadow: 1,
                            borderRadius: 2,
                            height: isMobile ? 24 : 32
                          }}
                        />
                      );
                    })}
                  </Box>
                )}
              </Box>
            ))}
            
            {loading && (
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: 1,
                p: 1,
                bgcolor: 'background.paper',
                borderRadius: 3,
                boxShadow: 1,
                width: 'fit-content',
                alignSelf: 'center'
              }}>
                <Avatar sx={{ 
                  width: isMobile ? 24 : 28, 
                  height: isMobile ? 24 : 28, 
                  bgcolor: 'secondary.main' 
                }}>
                  <BotIcon fontSize={isMobile ? 'small' : 'medium'} />
                </Avatar>
                <CircularProgress size={isMobile ? 16 : 20} thickness={4} />
                <Typography 
                  variant="caption" 
                  color="text.secondary" 
                  fontSize={isMobile ? '0.65rem' : '0.75rem'} 
                  fontFamily="'Inter', sans-serif"
                >
                  Thinking...
                </Typography>
              </Box>
            )}
            
            {showSupportForm && (
              <Paper elevation={3} sx={{ 
                p: isMobile ? 1.5 : 2, 
                mt: 1, 
                bgcolor: 'background.paper',
                borderRadius: 3,
                border: '1px solid',
                borderColor: 'divider'
              }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                  <SupportIcon color="primary" fontSize={isMobile ? 'small' : 'medium'} />
                  <Typography 
                    variant="subtitle2" 
                    fontFamily="'Inter', sans-serif" 
                    fontSize={isMobile ? '0.85rem' : '0.95rem'}
                  >
                    Support Request
                  </Typography>
                </Box>
                <Divider sx={{ mb: 1.5 }} />
                <Box component="form" onSubmit={handleSupportSubmit}>
                  <TextField
                    fullWidth
                    margin="dense"
                    label="Your Name"
                    required
                    value={supportForm.name}
                    onChange={(e) => setSupportForm({...supportForm, name: e.target.value})}
                    sx={{ mb: 1 }}
                    size="small"
                    InputProps={{
                      style: {
                        fontSize: isMobile ? '0.8rem' : '0.875rem',
                        fontFamily: "'Inter', sans-serif"
                      }
                    }}
                  />
                  <TextField
                    fullWidth
                    margin="dense"
                    label="Email"
                    type="email"
                    required
                    value={supportForm.email}
                    onChange={(e) => setSupportForm({...supportForm, email: e.target.value})}
                    sx={{ mb: 1 }}
                    size="small"
                    InputProps={{
                      style: {
                        fontSize: isMobile ? '0.8rem' : '0.875rem',
                        fontFamily: "'Inter', sans-serif"
                      }
                    }}
                  />
                  <FormControl fullWidth margin="dense" sx={{ mb: 1 }}>
                    <InputLabel sx={{ 
                      fontSize: isMobile ? '0.8rem' : '0.875rem',
                      fontFamily: "'Inter', sans-serif"
                    }}>
                      Problem Type
                    </InputLabel>
                    <Select
                      value={supportForm.problemType}
                      label="Problem Type"
                      onChange={(e) => setSupportForm({...supportForm, problemType: e.target.value})}
                      size="small"
                      sx={{
                        fontSize: isMobile ? '0.8rem' : '0.875rem',
                        fontFamily: "'Inter', sans-serif"
                      }}
                    >
                      <MenuItem value="technical">Technical Issue</MenuItem>
                      <MenuItem value="billing">Billing/Invoice</MenuItem>
                      <MenuItem value="general">General Inquiry</MenuItem>
                    </Select>
                  </FormControl>
                  <TextField
                    fullWidth
                    margin="dense"
                    label="Description"
                    multiline
                    rows={isMobile ? 2 : 3}
                    required
                    value={supportForm.description}
                    onChange={(e) => setSupportForm({...supportForm, description: e.target.value})}
                    sx={{ mb: 1.5 }}
                    size="small"
                    InputProps={{
                      style: {
                        fontSize: isMobile ? '0.8rem' : '0.875rem',
                        fontFamily: "'Inter', sans-serif"
                      }
                    }}
                  />
                  <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
                    <Button 
                      onClick={() => setShowSupportForm(false)}
                      variant="outlined"
                      size={isMobile ? 'small' : 'medium'}
                      sx={{ 
                        fontSize: isMobile ? '0.75rem' : '0.875rem',
                      }}
                    >
                      Cancel
                    </Button>
                    <Button 
                      type="submit" 
                      variant="contained"
                      disabled={loading}
                      size={isMobile ? 'small' : 'medium'}
                      startIcon={loading ? <CircularProgress size={isMobile ? 14 : 16} /> : <SuccessIcon fontSize={isMobile ? 'small' : 'medium'} />}
                      sx={{ 
                        fontSize: isMobile ? '0.75rem' : '0.875rem',
                      }}
                    >
                      {loading ? 'Submitting' : 'Submit'}
                    </Button>
                  </Box>
                </Box>
              </Paper>
            )}
            <div ref={messagesEndRef} />
          </Box>
          
          {/* Input Area */}
          <Box sx={{ 
            p: isMobile ? 1 : 2, 
            bgcolor: 'background.paper',
            borderTop: '1px solid',
            borderColor: 'divider'
          }}>
            <Box sx={{ 
              display: 'flex', 
              gap: 1,
              alignItems: 'center'
            }}>
              <TextField
                fullWidth
                size="small"
                placeholder="Type your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                sx={{
                  bgcolor: 'background.default',
                  borderRadius: 3,
                  '& fieldset': { 
                    border: 'none',
                    borderRadius: 3
                  },
                  '& .MuiInputBase-input': {
                    py: isMobile ? 1 : 1.25,
                    fontSize: isMobile ? '0.8rem' : '0.875rem',
                    fontFamily: "'Inter', sans-serif"
                  },
                }}
              />
              <Button
                variant="contained"
                onClick={handleSendMessage}
                disabled={!input.trim() || loading}
                sx={{
                  minWidth: isMobile ? 40 : 48,
                  height: isMobile ? 40 : 48,
                  borderRadius: '50%',
                  p: 0
                }}
              >
                <SendIcon fontSize={isMobile ? 'small' : 'medium'} />
              </Button>
            </Box>
          </Box>
        </Box>
      )}
      
      {/* Floating Action Button */}
      <Button
        variant="contained"
        onClick={() => setIsOpen(!isOpen)}
        startIcon={
          <Box
            component="img"
            src="/favicon.ico"
            alt="Bot Icon"
            sx={{ width: 24, height: 24 }}
          />
        }
        sx={{
          bgcolor: 'secondary.main',
          '&:hover': {
            bgcolor: 'secondary.dark'
          },
          borderRadius: 3,
          boxShadow: 3,
          textTransform: 'none',
          px: 2,
          py: 1,
          display: 'flex',
          alignItems: 'center',
          gap: 0.5,
          fontSize: isMobile ? '0.75rem' : '0.875rem',
          fontFamily: "'Inter', sans-serif",
          zIndex: 1300
        }}
      >
        {isOpen ? 'Close Chat' : 'Nexi Support'}
      </Button>
    </Box>
  );
};

export default Chatbot;