/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Kshitij's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Kshitij chaudhary Portfolio",
    type: "website",
   url:"https://Kshitijchaudhary.vercel.app/",
  },
};

//Home Page
const greeting = {
  title: "Kshitij chaudhary",
  logo_name: "Kshitij chaudhary",
  nickname: "",
  subTitle:
    "I am an engineering student due to graduate in 2025,proficient in web development, neural networks and Python,I am Eager to continue pushing boundaries and making meaningful contributions in the tech industry.",
  resumeLink: 
    "https://drive.google.com/file/d/10DcFhPNmpjNoyXMF10Epi3edCChdrBOA/view",
  portfolio_repository: "https://github.com/thekshitij",
  githubProfile: "https://github.com/thekshitij",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/thekshitij",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/kshitij-chaudhary-91374b2b3/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:chaudharykshitij12@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "X-Twitter",
    link: "https://x.com/Kshitijcha12",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },
  {
    name: "Medium",
    link: "https://medium.com/@@chaudharykshitij12",
    fontAwesomeIcon: "fa-brands fa-medium", // Reference https://fontawesome.com/icons/medium?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡I’ve completed extensive coursework in machine learning and deep learning from DeepLearning.AI and IBM, covering topics like neural networks, hyperparameter tuning, and advanced algorithms.",
        "⚡I’m proficient in Python for implementing machine learning models and have a solid foundation in mathematics, enabling me to apply theoretical concepts practically.",
        "⚡My hands-on experience includes working with convolutional networks, sequence models, and reinforcement learning, equipping me to tackle complex data science challenges effectively.",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    

      ],
    }

// Education Page
const competitiveSites = {
  competitiveSites: [
    
  ],
};

const degrees = {
  degrees: [
    {
      title: "SRM INSTITUTE OF SCIENCE AND TECHNOLOGY",
      subtitle: "B.Tech. in Computer(Big Data Analytics)",
      logo_path: "mozilla_logo.png",
      alt_name: "IIITDM Kurnool",
      duration: "2021 - 2025",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, , AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science,AI, Data analytics and Web Development.",
      
      ],
      website_link: "https://srmrmp.edu.in/",
    },
    {
      title: "MAHARISHI DAYANAND INTER COLLEGE PATTI MOURHA KANTH",
      subtitle: "Uttar Pradesh Madhyamik Shiksha Parishad",
      logo_path: "iu_logo.png",
      alt_name: "Indiana University Bloomington",
      duration: "2006 - 2021",
      descriptions: [
        "Class XII: 75%, with Physics, Chemistry and Mathematics.",
        "Class X: 82%"
      ],
      website_link: "https://schools.org.in/moradabad/9042005213/maharishi-dayanand-inter-college-patti-mourha-kanth.html",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "OCI Generative AI Professional",
      subtitle: "- Oracle",
      logo_path: "TVS.png",
      certificate_link:
        "https://catalog-education.oracle.com/pls/certview/sharebadge?id=2D82F62B68796E11C737C120539D84C10AC4D4DC2896698E9D8257A2821AF9B5",
      alt_name: "NPTEL",
      color_code: "#FFFFFF",
    },
    {
      title: "Machine Learning ",
      subtitle: "Stanford University & DeepLearning.AI ",
      logo_path: "dl.png",
      certificate_link:
        "https://coursera.org/share/6a9c4f66aa9e18ea398ec20e7b432faf",
      alt_name: "Stanford University",
      color_code: "#FFFFFF",
    },
    {
      title: "Neural Networks and Deep Learning",
      subtitle: "Deep Learning.AI",
      logo_path: "dl.png",
      certificate_link:
        "https://coursera.org/share/87b854f14a71c47d7735ce989e4a7f77",
      alt_name: "deeplearning.ai",
      color_code: "#FFFFFF",
    },
    {
      title: "Improving Deep Neural Networks: Hyperparameter Tuning, Regularization and Optimization",
      subtitle: "- Deep Learning.AI",
      logo_path: "dl.png",
      certificate_link:
        "https://coursera.org/share/7a73eeb8dd96758f078477152c208f2c",
      alt_name: "Google",
      color_code: "#FFFFFF",
    },
    {
      title: "Python Project for Data Science",
      subtitle: "- Jospeh santarcangelo",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://coursera.org/share/75b46cbb22cb0ca1125e141464fa797b",
      alt_name: "IBM",
      color_code: "#FFFFFF",
    },
    {
      title: "Machine Learning with Python",
      subtitle: "- Saishruti Swaminathan",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://coursera.org/share/99a1e8afae934f7e168ae01de66df031",
      alt_name: "Microsoft",
      color_code: "#FFFFFF",
    },
    {
      title: " Python for AI, Data Science and Development",
      subtitle: "- Jospeh santarcangelo",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://coursera.org/share/3173e6ff7ce15a461f1b80b5f49e0335",
      alt_name: "Google",
      color_code: "#FFFFFF",
    },
    {
      title: "Data Science methodology",
      subtitle: "- Jogesh Muppala",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://coursera.org/share/722da5cbb8e93a8e479f10166de4e631",
      alt_name: "Coursera",
      color_code: "#FFFFFF",
    },
    {
      title: "Coders Cave internship program",
      subtitle: "- Coders Cave",
      logo_path: "coderscave.png",
      certificate_link:
        " ",
      alt_name: "GCP",
      color_code: "#FFFFFF",
    },
    
    
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Internship, Projects and position of responsibility",
  description:
    "I have made more than 25 projects on machine learning, AI and web development which can be found on my github account.I have also completed a data science internship program where I was asked to make 4 projects using data science and AI, apart from this I was also appointed as the lead of tech and webdev team of SlugNPlug, which is a technical student community of my college .",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Internships",
      experiences: [
        
          {
          title: "Machine Learning Intern",
          company: "CodSoft",
          company_url: "https://drive.google.com/file/d/1lJhq0EH3KAIDt7FvXhPAH85HSp4T7kFO/view",
          logo_path: "codsoft.png",
          duration: "Aug 2024 - Sep 2024",
          location: "Chennai, India",
          description:
            "Phase01: The objective of this project create a machine learning model that can predict the genre of a movie based on its plot summary or other textual information.",
          color: "#ee3c26",
        },
      
           {
          title: "Data Science Intern",
          company: "Coder's Cave",
          company_url: "https://www.linkedin.com/posts/kshitij-chaudhary-91374b2b3_coderscave-thank-you-activity-7228309716907474944-mlvw?utm_source=share&utm_medium=member_desktop",
          logo_path: "coderscave.png",
          duration: "July 2023 - Aug 2023",
          location: "Chennai, India",
          description:
            "Phase01: performed exploratory data analysis on of global terrorism dataset and breast cancer classification using regression techniques.Phase02: Used random forest classification for email spam classification model and neural networks for speech emotion recognition model.",
          color: "#ee3c26",
        },
      
      ],
    },
    {
      title: "Position of Responsibility",
      experiences: [
        {
          title: "Technical Team Member",
          company: "SlugNPlug",
          company_url: "https://www.linkedin.com/company/slug-n-plug/mycompany",
          logo_path: "SNP.jpg",
          duration: "April 2023 - April 2024",
          location: "Chennai,India",
          description:
            "SlugNPlug is a technical club of SRMIST responsible for conducting events, workshops and competitions around new trends in tech, I was responsible for leading it's technical team",
          color: "#4285F4",
        },
        {
          title: "Web development team Member",
          company: "SlugNPlug",
          company_url: "https://www.linkedin.com/company/slug-n-plug/mycompany",
          logo_path: "SNP.jpg",
          duration: "April 2023 - April 2024",
          location: "Chennai,India",
          description:
            "SlugNPlug is a technical club of SRMIST responsible for conducting events, workshops and competitions around new trends in tech, I was responsible for leading it's web development team responsible for creating it's website.",
          color: "#D83B01",
        },
        {
          title: "Member",
          company: "NSS-SRM",
          company_url: "https://www.srmist.edu.in/nss/",
          logo_path: "mozilla_logo.png",
          duration: "march 2024",
          location: "Chennai,India",
          description:
            "My responsibility for this program was to organise an event in which participants were asked to present their research and tech projects and the most innovative and practical projects were awarded, more than 100 people participated."
        },
        
      ],
    },
    {
      title: "Projects",
      work: true,
      experiences: [
        {
          title: "SALES PREDICTION MODEL",
          company: "project link",
          description: "Made a Data science project using Walmart's sales dataset using random forest classifier, ridge regression and RNN with highest accuracy of97.6%. Visualized results through diverse graphs using various different frameworks and libraries and deployed it using streamlit.",
          company_url: "https://github.com/samvardhan03/Sales_prediction.bigmart",
          logo_path: "sales.jpeg",
        
        },
        {
          title: "STOCK PREDICTION NEURAL NETWORK MODEL",
          company: "project link",
          description: "Created a model utilizing a basic neural network to analyze stock data from ten companies, predicting future values through web scraping with the yfinance library. Later created an LSTM network with an accuracy of 98.76% and deployed it on streamlit.",
          company_url: "https://github.com/samvardhan03/Stock_Prediction.Neural_Network/",
          logo_path: "stock.jpeg",
        
        },
        {
          title: "Email classification using RNN",
          company: "project link",
          description: "Made an email classification model using recurrent neural network for classifying emails into 17 different categories.",
          company_url: "https://github.com/samvardhan03/Email.RNN",
          logo_path: "rnn.jpg",
        
        },
        {
          title: "S.A.I.L (Student Assistance and Information Liaison)",
          company: "project link",
          description: " Made a AI powered chatbot for college‘s student portal using NLP and neural networks, deployed the app using streamlit. • Currently working on improving the app by using huggingface api‘s BERT model and deployment using django or flask.",
          company_url: "https://github.com/samvardhan03/sail/",
          logo_path: "chatbot.jpg",
        
        },
        {
          title: "EMOTION PREDICTION USING EEG ANALYSIS",
          company: "project link",
          description: " Researched AI applications for emotional forecasting from EEG scans using fourier transforms, developed an prototype ML model with neural networks with 93.7% accuracy; submitted research paper for publication in a renowned scientific journal",
          company_url: "https://github.com/samvardhan03/EEG_Emotion_prediction",
          logo_path: "eeg.jpg",
        
        },
        
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Research Work",
  description: "Some of my research work.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "mdp-diffusion",
      name: "Neurobehavioral Analysis Using EEG Readings and Graph Neural Networks",
      createdAt: "",
      description: "Explored AI for predicting emotional fluctuations from EEG scans, built a prototype ML model using neural networks, and submitted the paper for publication. Currently researching about how to use graph neural networks for efficient EEG analysis.",
      
    },
    {
      id: "consistency-models",
      name: "ITDECC-2023",
      createdAt: "",
      description: "Wrote and Presented paper on machine learning and data science in an international conference on Innovations and Technological development in electronics, computers and communication.",
    
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I am actively looking for an opportunity to work in the field of engineering and technology, if you wish to work together on a project, please feel free to reach out!",
  },
  blogSection: {
    title: "Articles",
    subtitle:
      "I like to talk about the mathematical aspects on neural networks and other deep learning models.",
    link: "https://medium.com/@@chaudharykshitij12",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
