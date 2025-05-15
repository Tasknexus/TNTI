// ModelTrainer.js
import trainingData from './trainingData.json';

export class ModelTrainer {
  constructor() {
    this.websiteData = {};
    this.lastScanTime = 0;
    this.scanInterval = 300000; // 5 minutes between scans
    this.trainingData = this.loadTrainingData();
    
    this.responses = {
      greeting: "Hello! Welcome to Task Nexus Technology . How can I assist you today?",
      ending: "Thank you for contacting TechSolutions. Have a great day!",
      loading: "Searching for information...",
      noJobs: "Currently we don't have any job openings. Please check back later.",
      support: "Please fill out the support form below:",
      noContact: "Contact information not found on website.",
      noServices: "Service information not found on website.",
      
      defaultResponses: {
        "services": this.getServices.bind(this),
        "pricing": "Our pricing starts at:\n- Websites: $2,000+\n- Mobile Apps: $5,000+\n- Custom Solutions: Contact for quote",
        "projects": "Recent Projects:\n- E-commerce Platform\n- Healthcare App\n- Banking Solution",
        "career": this.checkCareerOpenings.bind(this),
        "contact": this.getContactDetails.bind(this),
        "support": this.getSupportResponse.bind(this),
        "help": this.getSupportResponse.bind(this),
        "problem": this.getSupportResponse.bind(this),
        "menu": () => "Main Menu - What would you like to know about?"
      }
    };
  }

  // Load training data from JSON file with fallback
  loadTrainingData() {
    try {
      // Validate the loaded data
      if (!Array.isArray(trainingData)) {
        console.warn("Training data is not an array, using fallback");
        return this.getFallbackTrainingData();
      }
      return trainingData;
    } catch (error) {
      console.error("Error loading training data:", error);
      return this.getFallbackTrainingData();
    }
  }

  // Fallback training data if JSON fails to load
  getFallbackTrainingData() {
    return [
      {
        question: "how to apply",
        answer: "You can apply through our careers page at https://techsolutions.com/careers",
        keywords: ["apply", "application", "how to join"],
        category: "career"
      },
      {
        question: "what is your email",
        answer: "Our contact email is info@techsolutions.com",
        keywords: ["email", "contact email", "mail"],
        category: "contact"
      }
    ];
  }

  // Method to add new training data
  addTrainingData(question, answer, keywords = [], category = "general") {
    this.trainingData.push({
      question: question.toLowerCase(),
      answer,
      keywords: keywords.map(k => k.toLowerCase()),
      category
    });
  }

  // Service information getter
  getServices() {
    if (this.websiteData.services) {
      return "Our services include:\n" + 
        this.websiteData.services.join("\n- ");
    }
    return this.responses.noServices;
  }

  // Career openings check
  async checkCareerOpenings() {
    await this.scanWebsite();
    if (this.websiteData.jobOpenings && this.websiteData.jobOpenings.length > 0) {
      return "Current job openings:\n" + 
        this.websiteData.jobOpenings.join("\n- ");
    }
    return this.responses.noJobs;
  }

  // Contact details getter
  async getContactDetails() {
    await this.scanWebsite();
    if (this.websiteData.contactInfo) {
      return "You can reach us at:\n" +
        Object.entries(this.websiteData.contactInfo)
          .map(([key, value]) => `- ${key}: ${value}`)
          .join("\n");
    }
    return this.responses.noContact;
  }

  // Support response handler
  getSupportResponse() {
    return { 
      answer: this.responses.support,
      showSupportForm: true 
    };
  }

  // Enhanced findResponse method with training data support
  async findResponse(query) {
    const lowerQuery = query.toLowerCase();
    
    // 1. First check greetings
    if (/(hi|hello|hey)/i.test(lowerQuery)) {
      return { 
        answer: this.responses.greeting, 
        quickReplies: Object.keys(this.responses.defaultResponses)
      };
    }
    
    // 2. Check endings
    if (/(thanks|thank you|ok|okay|done)/i.test(lowerQuery)) {
      return { answer: this.responses.ending };
    }
    
    // 3. Check for main menu request
    if (/(menu|main)/i.test(lowerQuery)) {
      return { 
        answer: this.responses.defaultResponses.menu(), 
        quickReplies: Object.keys(this.responses.defaultResponses)
      };
    }
    
    // 4. Check training data (newly added questions)
    const trainingMatch = this.findInTrainingData(lowerQuery);
    if (trainingMatch) {
      return {
        answer: trainingMatch.answer,
        quickReplies: ['menu']
      };
    }
    
    // 5. Scan website for latest data if needed
    await this.scanWebsite();
    
    // 6. Check default responses
    for (const [keyword, response] of Object.entries(this.responses.defaultResponses)) {
      if (lowerQuery.includes(keyword)) {
        const answer = typeof response === 'function' ? await response() : response;
        
        if (["support", "help", "problem"].includes(keyword)) {
          return { 
            answer: answer.answer || answer,
            showSupportForm: true,
            quickReplies: ['menu']
          };
        }
        
        return { 
          answer,
          quickReplies: ['menu', ...Object.keys(this.responses.defaultResponses).filter(k => k !== keyword)]
        };
      }
    }
    
    // 7. Final fallback
    return { 
      answer: "I didn't understand. Type 'menu' to see options.", 
      quickReplies: ['menu'] 
    };
  }

  // Helper to find matches in training data
  findInTrainingData(query) {
    // First check exact question matches
    const exactMatch = this.trainingData.find(item => item.question === query);
    if (exactMatch) return exactMatch;
    
    // Then check keyword matches
    for (const item of this.trainingData) {
      if (item.keywords.some(keyword => query.includes(keyword))) {
        return item;
      }
    }
    
    // Finally check partial question matches
    for (const item of this.trainingData) {
      if (query.includes(item.question) || item.question.includes(query)) {
        return item;
      }
    }
    
    return null;
  }

  // Website scanning method
  async scanWebsite() {
    const now = Date.now();
    if (now - this.lastScanTime < this.scanInterval) {
      return; // Don't scan too frequently
    }
    
    try {
      this.lastScanTime = now;
      // Simulate website scanning
      this.websiteData = {
        services: [
          "Web Development",
          "Mobile App Development",
          "AI Solutions",
          "Cloud Services"
        ],
        jobOpenings: [
          "Frontend Developer",
          "Backend Engineer",
          "UX Designer"
        ],
        contactInfo: {
          "Email": "info@techsolutions.com",
          "Phone": "(555) 123-4567",
          "Address": "123 Tech Park, Silicon Valley"
        }
      };
    } catch (error) {
      console.error("Website scan failed:", error);
    }
  }
}