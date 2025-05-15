import { Box, Typography, Container, Avatar, Stack, Grid } from '@mui/material';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { FormatQuote } from '@mui/icons-material';

// Client statistics data
const clientStats = [
  { number: 50, label: "Happy Clients" },
  { number: 80, label: "Projects Completed" },
  { number: 5, label: "Ongoing Projects" },
  { number: 10, label: "Countries Served" }
];

// Testimonials data (10 testimonials)
const testimonials = [
  {
    name: "Sarah Johnson",
    position: "CEO, TechStart Inc.",
    content: "DevCraft transformed our digital presence with their custom software solution. Their team was professional, responsive, and delivered beyond our expectations.",
    avatar: "/images/avatar1.jpg",
    rating: 5
  },
  {
    name: "Michael Chen",
    position: "CTO, Finova Corp",
    content: "The mobile app they developed for us has received rave reviews from our customers. Their attention to detail and user experience design is exceptional.",
    avatar: "", // No avatar provided
    rating: 5
  },
  {
    name: "Priya Patel",
    position: "Director, HealthPlus",
    content: "Working with DevCraft was a game-changer for our healthcare platform. They understood our complex requirements and delivered a robust, scalable solution.",
    avatar: "/images/avatar3.jpg",
    rating: 5
  },
  {
    name: "David Wilson",
    position: "Product Manager, NexTech",
    content: "The development team delivered our project ahead of schedule with excellent quality. Their communication was outstanding throughout the process.",
    avatar: "",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    position: "Marketing Director, BrandUp",
    content: "Our new website has increased conversions by 40%. The user experience is seamless and the design perfectly captures our brand identity.",
    avatar: "/images/avatar5.jpg",
    rating: 5
  },
  {
    name: "James Kim",
    position: "Founder, StartUp Labs",
    content: "DevCraft built our MVP exactly how we envisioned it. Their technical expertise and startup mindset made them the perfect partner.",
    avatar: "",
    rating: 5
  },
  {
    name: "Lisa Wong",
    position: "COO, RetailChain",
    content: "The e-commerce platform they developed handles our peak traffic effortlessly. The scalability and performance are impressive.",
    avatar: "/images/avatar7.jpg",
    rating: 5
  },
  {
    name: "Robert Taylor",
    position: "CIO, Enterprise Solutions",
    content: "We've worked with many development firms, but DevCraft stands out for their professionalism and technical depth.",
    avatar: "",
    rating: 5
  },
  {
    name: "Sophia Martinez",
    position: "Head of Product, FinTech Inc",
    content: "The security features implemented in our banking app exceeded regulatory requirements. We couldn't be happier with the results.",
    avatar: "/images/avatar9.jpg",
    rating: 5
  },
  {
    name: "Thomas Brown",
    position: "CTO, HealthTech",
    content: "Their team integrated complex healthcare APIs seamlessly. The system has been running flawlessly since launch.",
    avatar: "",
    rating: 5
  }
];

// Improved AnimatedCounter with slower counting
const AnimatedCounter = ({ value }) => {
  const [count, setCount] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const duration = 20; // Animation duration in seconds
    const startTime = Date.now();
    
    const animateCount = () => {
      const elapsed = (Date.now() - startTime) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      setCount(Math.floor(progress * value));
      
      if (progress < 1) {
        requestAnimationFrame(animateCount);
      }
    };
    
    animateCount();

    controls.start({
      opacity: [0, 1],
      transition: { duration: 1 }
    });

    return () => {};
  }, [value, controls]);

  return (
    <motion.div animate={controls} initial={{ opacity: 0 }}>
      <Typography variant="h2" sx={{ 
        fontWeight: 'bold', 
        color: 'primary.main',
        mb: 1
      }}>
        {count}+
      </Typography>
    </motion.div>
  );
};

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const controls = useAnimation();
  const sliderRef = useRef(null);


  // Auto-rotate testimonials
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % testimonials.length);
    }, 1500); // Faster auto-rotation (3 seconds)

    return () => clearInterval(interval);
  }, [isPaused]);

  // Animate the scroll position
  useEffect(() => {
    const cardWidth = 320; // 300px card + 20px margin
    const centerOffset = (sliderRef.current?.offsetWidth / 2) - (cardWidth / 2);
    const targetX = -(activeIndex * cardWidth) + centerOffset;
    
    controls.start({
      x: targetX,
      transition: { 
        type: 'spring', 
        stiffness: 300, 
        damping: 30,
        velocity: 2 // Faster movement
      }
    });
  }, [activeIndex, controls]);

  // Handle manual navigation
  const goToIndex = (index) => {
    setActiveIndex(index);
  };

  return (
    <Box sx={{ 
      py: 10,
      backgroundColor: '#f9faff',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <Container maxWidth="xl">
        {/* Testimonials Title */}
        <Typography variant="h3" sx={{ 
          fontWeight: 'bold', 
          mb: 2,
          textAlign: 'center'
        }}>
          What Our <Box component="span" sx={{ color: 'primary.main' }}>Clients Say</Box>
        </Typography>
        
        <Typography variant="h6" sx={{ 
          mb: 6, 
          color: 'text.secondary',
          textAlign: 'center',
          maxWidth: '700px',
          mx: 'auto'
        }}>
          Don't just take our word for it. Here's what our clients say about working with us.
        </Typography>

        {/* Client Statistics Section */}
        <Grid container spacing={4} sx={{ 
          mb: 8,
          justifyContent: 'center',
          maxWidth: '1000px',
          mx: 'auto'
        }}>
          {clientStats.map((stat, index) => (
            <Grid item xs={6} sm={3} key={index}>
              <Box sx={{ 
                textAlign: 'center',
                p: 3,
                borderRadius: '12px',
                backgroundColor: 'white',
                boxShadow: '0 5px 15px rgba(0, 0, 0, 0.03)',
                height: '100%'
              }}>
                <AnimatedCounter value={stat.number} />
                <Typography variant="h6" sx={{ fontWeight: 'medium' }}>
                  {stat.label}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Auto-scrolling Testimonials */}
        <Box 
          ref={sliderRef}
          sx={{
            position: 'relative',
            width: '100%',
            overflow: 'hidden',
            px: { xs: 2, md: 4 },
            py: 4,
            '&:hover .testimonial-card': {
              opacity: 0.8,
              transform: 'scale(0.95)'
            }
          }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <motion.div
            animate={controls}
            style={{
              display: 'flex',
              width: `${testimonials.length * 320}px`,
              paddingBottom: '20px',
              cursor: 'grab'
            }}
            drag="x"
            dragConstraints={{ left: -(testimonials.length * 320), right: 0 }}
            onDragEnd={(e, info) => {
              const cardWidth = 320;
              const offset = info.offset.x;
              const velocity = info.velocity.x * 0.2; // Reduced sensitivity
              
              let newIndex = activeIndex;
              if (velocity < -500 || offset < -cardWidth / 2) {
                newIndex = Math.min(activeIndex + 1, testimonials.length - 1);
              } else if (velocity > 500 || offset > cardWidth / 2) {
                newIndex = Math.max(activeIndex - 1, 0);
              }
              
              setActiveIndex(newIndex);
            }}
          >
            {testimonials.map((testimonial, index) => {
              const isCenter = index === activeIndex;
              return (
                <Box
                  key={index}
                  className="testimonial-card"
                  sx={{
                    width: '300px',
                    flexShrink: 0,
                    mx: '10px',
                    borderRadius: '16px',
                    backgroundColor: 'white',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
                    p: 3,
                    position: 'relative',
                    opacity: isCenter ? 1 : 0.7,
                    transform: isCenter ? 'scale(1.05)' : 'scale(0.95)',
                    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                    zIndex: isCenter ? 2 : 1,
                    '&:hover': {
                      opacity: isCenter ? 1 : 0.9,
                      transform: isCenter ? 'scale(1.08)' : 'scale(1)'
                    }
                  }}
                  onClick={() => goToIndex(index)}
                >
                  <FormatQuote sx={{ 
                    fontSize: '3rem', 
                    color: 'rgba(41, 98, 255, 0.1)',
                    position: 'absolute',
                    top: 20,
                    right: 20
                  }} />
                  
                  <Box sx={{ display: 'flex', mb: 2 }}>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Box key={i} component="span" sx={{ color: '#ffb400', fontSize: '1.2rem', mr: 0.5 }}>
                        ★
                      </Box>
                    ))}
                  </Box>
                  
                  <Typography variant="body1" sx={{ mb: 3, fontStyle: 'italic' }}>
                    "{testimonial.content}"
                  </Typography>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', mt: 4 }}>
                    <Avatar 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      sx={{ 
                        width: 48, 
                        height: 48, 
                        mr: 2,
                        bgcolor: 'primary.main',
                        color: 'white',
                        fontSize: '1.2rem',
                        border: '2px solid #f0f4ff'
                      }}
                    >
                      {!testimonial.avatar && testimonial.name.charAt(0)}
                    </Avatar>
                    <Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                        {testimonial.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {testimonial.position}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              );
            })}
          </motion.div>
        </Box>

        {/* Navigation Dots */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4, gap: 1 }}>
          {testimonials.map((_, index) => (
            <Box
              key={index}
              onClick={() => goToIndex(index)}
              sx={{
                width: 10,
                height: 10,
                borderRadius: '50%',
                bgcolor: activeIndex === index ? 'primary.main' : 'action.disabled',
                cursor: 'pointer',
                transition: 'all 0.3s',
                '&:hover': {
                  transform: 'scale(1.2)',
                  bgcolor: 'primary.main'
                }
              }}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Testimonials;