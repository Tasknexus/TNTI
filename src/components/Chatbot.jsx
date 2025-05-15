import { useState, useEffect, useRef } from 'react';
import { 
  Box, IconButton, Typography, TextField, Avatar, Button,
  Chip, CircularProgress, Paper, FormControl, InputLabel, 
  Select, MenuItem, Divider
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

import { Send, Close, SmartToy, Person } from '@mui/icons-material';
import { ModelTrainer } from './ModelTrainer';

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
  const modelTrainer = useRef(new ModelTrainer());

  const defaultQuickReplies = ['services', 'pricing', 'projects', 'career', 'contact', 'support'];

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      addBotMessage(modelTrainer.current.responses.greeting, defaultQuickReplies);
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
    
    // Add user message
    setMessages(prev => [...prev, { sender: 'user', text: input }]);
    setInput('');
    setLoading(true);
    
    try {
      const { answer, showSupportForm = false, quickReplies = [] } = 
        await modelTrainer.current.findResponse(input);
      
      addBotMessage(answer, quickReplies);
      
      if (showSupportForm) {
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
    
    if (reply === 'support' || reply === 'help') {
      setShowSupportForm(true);
      addBotMessage(modelTrainer.current.responses.support, []);
      return;
    }
    
    // Add quick reply as user message
    setMessages(prev => [...prev, { sender: 'user', text: reply }]);
    setLoading(true);
    
    try {
      const { answer, showSupportForm = false, quickReplies = [] } = 
        await modelTrainer.current.findResponse(reply);
      
      addBotMessage(answer, quickReplies);
      
      if (showSupportForm) {
        setShowSupportForm(true);
      }
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
      // Replace with your Formspree ID
      const response = await fetch("https://formspree.io/f/xanoqkzo", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: supportForm.name,
          email: supportForm.email,
          problemType: supportForm.problemType,
          description: supportForm.description,
          _subject: `Support Request - ${supportForm.problemType}`,
          _replyto: supportForm.email
        }),
      });

      if (response.ok) {
        addBotMessage("Thank you! Your support request has been submitted. We'll contact you soon.", defaultQuickReplies);
        setSupportForm({
          name: '',
          email: '',
          problemType: 'technical',
          description: ''
        });
        setShowSupportForm(false);
      }
    } catch (error) {
      addBotMessage("Failed to submit your request. Please try again later.", defaultQuickReplies);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ position: 'fixed', bottom: 20, right: 20, zIndex: 1000 }}>
      {isOpen && (
        <Box sx={{
          width: { xs: '90vw', sm: 380 },
          height: 560,
          bgcolor: 'background.paper',
          borderRadius: 4,
          boxShadow: '0px 10px 25px rgba(0, 0, 0, 0.2)',
          display: 'flex',
          flexDirection: 'column',
          border: '1px solid',
          borderColor: 'divider',
          overflow: 'hidden'
        }}>
          {/* Header with logo */}
          <Box sx={{
            bgcolor: 'primary.main',
            color: 'primary.contrastText',
            p: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTopLeftRadius: 12,
            borderTopRightRadius: 12
          }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <Avatar 
                src="/company-logo.png" 
                alt="Company Logo"
                sx={{ 
                  width: 32, 
                  height: 32,
                  bgcolor: 'secondary.main'
                }}
              >
                <BotIcon />
              </Avatar>
              <Typography variant="h6" fontWeight="medium" fontFamily="'INTER', sans-serif">
                Nexi AI Assistant
              </Typography>
            </Box>
            <IconButton 
              color="inherit" 
              onClick={() => setIsOpen(false)}
              sx={{
                '&:hover': {
                  bgcolor: 'rgba(255,255,255,0.1)'
                }
              }}
            >
              <CloseIcon />
            </IconButton>
          </Box>
          
          {/* Messages */}
          <Box sx={{ 
            flex: 1, 
            p: 2, 
            overflowY: 'auto', 
            bgcolor: 'background.default',
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            '&::-webkit-scrollbar': {
              width: 6,
            },
            '&::-webkit-scrollbar-track': {
              background: 'transparent',
            },
            '&::-webkit-scrollbar-thumb': {
              background: '#888',
              borderRadius: 3,
            },
          }}>
            {messages.map((msg, i) => (
              <Box key={i} sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: msg.sender === 'user' ? 'flex-end' : 'flex-start'
              }}>
                <Box sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  mb: 0.5
                }}>
                  <Avatar sx={{
                    width: 28,
                    height: 28,
                    bgcolor: msg.sender === 'user' ? 'primary.main' : 'secondary.main'
                  }}>
                    {msg.sender === 'user' ? <UserIcon fontSize="small" /> : <BotIcon fontSize="small" />}
                  </Avatar>
                  <Typography variant="caption" color="text.secondary" fontSize="0.7rem" fontFamily="'Inter', sans-serif">
                    {msg.sender === 'user' ? 'You' : 'Nexi'}
                  </Typography>
                </Box>
                
                <Box sx={{
                  p: 1.5,
                  borderRadius: 3,
                  bgcolor: msg.sender === 'user' ? 'primary.main' : 'background.paper',
                  color: msg.sender === 'user' ? 'primary.contrastText' : 'text.primary',
                  boxShadow: 1,
                  maxWidth: '85%',
                  borderTopLeftRadius: msg.sender === 'user' ? 12 : 2,
                  borderTopRightRadius: msg.sender === 'user' ? 2 : 12,
                  position: 'relative',
                  '&:after': {
                    content: '""',
                    position: 'absolute',
                    bottom: 0,
                    left: msg.sender === 'user' ? 'auto' : -8,
                    right: msg.sender === 'user' ? -8 : 'auto',
                    width: 0,
                    height: 0,
                    border: '10px solid transparent',
                    borderBottomColor: msg.sender === 'user' ? 'primary.main' : 'background.paper',
                    borderTop: 0,
                    marginLeft: '-10px',
                    marginBottom: '-10px',
                    transform: msg.sender === 'user' ? 'rotate(-20deg)' : 'rotate(20deg)'
                  }
                }}>
                  <Typography 
                    sx={{ 
                      whiteSpace: 'pre-line',
                      fontSize: '0.9rem',
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
                    gap: 1, 
                    mt: 1.5,
                    justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start'
                  }}>
                    {msg.quickReplies.map((reply, j) => {
                      const iconMap = {
                        'services': <ServicesIcon fontSize="small" />,
                        'pricing': <PricingIcon fontSize="small" />,
                        'projects': <ProjectsIcon fontSize="small" />,
                        'career': <WorkIcon fontSize="small" />,
                        'contact': <EmailIcon fontSize="small" />,
                        'support': <SupportIcon fontSize="small" />,
                        'menu': <MenuIcon fontSize="small" />
                      };
                      
                      return (
                        <Chip
                          key={j}
                          label={reply === 'menu' ? 'Main Menu' : reply.charAt(0).toUpperCase() + reply.slice(1)}
                          onClick={() => handleQuickReply(reply)}
                          size="small"
                          icon={iconMap[reply] || null}
                          sx={{ 
                            cursor: 'pointer',
                            bgcolor: 'background.paper',
                            color: 'text.primary',
                            fontSize: '0.75rem',
                            fontFamily: "'Inter', sans-serif",
                            '&:hover': { 
                              bgcolor: 'action.hover',
                              transform: 'translateY(-2px)'
                            },
                            transition: 'all 0.2s ease',
                            boxShadow: 1,
                            borderRadius: 2
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
                p: 1.5,
                bgcolor: 'background.paper',
                borderRadius: 3,
                boxShadow: 1,
                width: 'fit-content',
                alignSelf: 'center'
              }}>
                <Avatar sx={{ width: 28, height: 28, bgcolor: 'secondary.main' }}>
                  <BotIcon fontSize="small" />
                </Avatar>
                <CircularProgress size={20} thickness={4} />
                <Typography variant="caption" color="text.secondary" fontSize="0.75rem" fontFamily="'Inter', sans-serif">
                  Thinking...
                </Typography>
              </Box>
            )}
            
            {showSupportForm && (
  <Paper elevation={3} sx={{ 
    p: 2, 
    mt: 2, 
    bgcolor: 'background.paper',
    borderRadius: 3,
    border: '1px solid',
    borderColor: 'divider'
  }}>
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
      <SupportIcon color="primary" fontSize="small" />
      <Typography variant="subtitle2" fontFamily="'Inter', sans-serif" fontSize="0.95rem">
        Support Request
      </Typography>
    </Box>
    <Divider sx={{ mb: 2 }} />
    <Box component="form" onSubmit={handleSupportSubmit}>
      <TextField
        fullWidth
        margin="dense"
        label="Your Name"
        required
        value={supportForm.name}
        onChange={(e) => setSupportForm({...supportForm, name: e.target.value})}
        sx={{ mb: 1.5 }}
        size="small"
        InputProps={{
          style: {
            fontSize: '0.875rem',
            fontFamily: "'Inter', sans-serif"
          }
        }}
        InputLabelProps={{
          style: {
            fontSize: '0.875rem',
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
        sx={{ mb: 1.5 }}
        size="small"
        InputProps={{
          style: {
            fontSize: '0.875rem',
            fontFamily: "'Inter', sans-serif"
          }
        }}
        InputLabelProps={{
          style: {
            fontSize: '0.875rem',
            fontFamily: "'Inter', sans-serif"
          }
        }}
      />
      <FormControl fullWidth margin="dense" sx={{ mb: 1.5 }}>
        <InputLabel sx={{ 
          fontSize: '0.875rem',
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
            fontSize: '0.875rem',
            fontFamily: "'Inter', sans-serif"
          }}
        >
          <MenuItem value="technical" sx={{ fontSize: '0.875rem' }}>Technical Issue</MenuItem>
          <MenuItem value="billing" sx={{ fontSize: '0.875rem' }}>Billing/Invoice</MenuItem>
          <MenuItem value="general" sx={{ fontSize: '0.875rem' }}>General Inquiry</MenuItem>
          <MenuItem value="service" sx={{ fontSize: '0.875rem' }}>Service Request</MenuItem>
          <MenuItem value="privacy" sx={{ fontSize: '0.875rem' }}>Project Related</MenuItem>
          <MenuItem value="complaint" sx={{ fontSize: '0.875rem' }}>Complaint</MenuItem>
          <MenuItem value="bug" sx={{ fontSize: '0.875rem' }}>Bug Report</MenuItem>
          <MenuItem value="feature" sx={{ fontSize: '0.875rem' }}>Feature Request</MenuItem>
          <MenuItem value="account" sx={{ fontSize: '0.875rem' }}>Account Issue</MenuItem>
          <MenuItem value="access" sx={{ fontSize: '0.875rem' }}>Access Request</MenuItem>
          <MenuItem value="security" sx={{ fontSize: '0.875rem' }}>Security Concern</MenuItem>
          <MenuItem value="feedback" sx={{ fontSize: '0.875rem' }}>Feedback/Suggestion</MenuItem>
          <MenuItem value="other" sx={{ fontSize: '0.875rem' }}>Other</MenuItem>
        </Select>
      </FormControl>
      <TextField
        fullWidth
        margin="dense"
        label="Description"
        multiline
        rows={3}
        required
        value={supportForm.description}
        onChange={(e) => setSupportForm({...supportForm, description: e.target.value})}
        sx={{ mb: 2 }}
        size="small"
        InputProps={{
          style: {
            fontSize: '0.875rem',
            fontFamily: "'Inter', sans-serif"
          }
        }}
        InputLabelProps={{
          style: {
            fontSize: '0.875rem',
            fontFamily: "'Inter', sans-serif"
          }
        }}
      />
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
        <Button 
          onClick={() => setShowSupportForm(false)}
          variant="outlined"
          sx={{ 
            borderRadius: 2,
            fontSize: '0.875rem',
            fontFamily: "'Inter', sans-serif"
          }}
        >
          Cancel
        </Button>
        <Button 
          type="submit" 
          variant="contained"
          disabled={loading}
          startIcon={loading ? <CircularProgress size={16} /> : <SuccessIcon fontSize="small" />}
          sx={{ 
            borderRadius: 2,
            fontSize: '0.875rem',
            fontFamily: "'Inter', sans-serif"
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
            p: 2, 
            bgcolor: 'background.paper',
            borderTop: '1px solid',
            borderColor: 'divider'
          }}>
            <Box sx={{ 
              display: 'flex', 
              gap: 1.5,
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
                    py: 1.25,
                    fontSize: '0.875rem',
                    fontFamily: "'Inter', sans-serif"
                  },
                  '& .MuiInputLabel-root': {
                    fontSize: '0.875rem'
                  }
                }}
              />
              <Button
                variant="contained"
                onClick={handleSendMessage}
                disabled={!input.trim() || loading}
                sx={{
                  minWidth: 48,
                  height: 48,
                  borderRadius: '50%',
                  p: 0,
                  '&:hover': {
                    transform: 'scale(1.05)'
                  },
                  transition: 'all 0.2s ease'
                }}
              >
                <SendIcon fontSize="small" />
              </Button>
            </Box>
          </Box>
        </Box>
      )}
      
      {/* Floating Action Button */}
      <Button
        variant="contained"
        onClick={() => setIsOpen(!isOpen)}
        startIcon={<BotIcon fontSize="small" />}
        sx={{
          bgcolor: 'primary.main',
          '&:hover': { 
            bgcolor: 'primary.dark',
            transform: 'translateY(-3px)'
          },
          borderRadius: 3,
          boxShadow: 3,
          textTransform: 'none',
          px: 3,
          py: 1.5,
          mt: 2,
          transition: 'all 0.3s ease',
          display: 'flex',
          alignItems: 'center',
          gap: 1.5,
          fontSize: '0.875rem',
          fontFamily: "'Inter', sans-serif"
        }}
      >
        {isOpen ? 'Close Chat' : (
          <>
            <Box component="span">Nexi Support</Box>
          </>
        )}
      </Button>
    </Box>
  );
};

export default Chatbot;