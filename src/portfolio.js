/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Julu Nwaezeapu",
  title: "🧠 Neuroscience Researcher | Future Physician",
  subTitle: emoji(
    "Exploring the neural basis of sleep & stroke, blending computational modeling with compassionate care."
  ),
  resumeLink: "", // To be added later
  displayGreeting: true
};

// Social Media Links

const socialMediaLinks = {
  linkedin: "https://www.linkedin.com/in/julu-nwaezeapu-725291363/",
  gmail: "julunwae@sas.upenn.edu",
  display: true
};

// Skills Section

const skillsSection = {
  title: "toolbox",
  subTitle: "TECH & ANALYSIS",
  skills: [
    emoji("⚡ Computational modeling of circadian and sleep processes"),
    emoji("⚡ RNA-seq & flow-cytometry data pipelines (Nextflow, R-studio)"),
    emoji("⚡ Clinical image analysis: CT, CTA, MRI"),
    emoji("⚡ Science communication & data-driven advocacy")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "R",
      fontAwesomeClassname: "fab fa-r-project"
    },
    {
      skillName: "MATLAB",
      fontAwesomeClassname: "fas fa-wave-square"
    },
    {
      skillName: "Julia",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Ruby",
      fontAwesomeClassname: "fas fa-gem"
    }
  ],
  display: true
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "University of Pennsylvania",
      logo: require("./assets/images/UniversityofPennsylvania_Shield_RGB-2.png"),
      subHeader: "B.A. Neuroscience (Dean's List)",
      duration: "2022 – May 2025",
      desc: "GPA 3.8 | SAT 1520",
      descBullets: [
        "Honors thesis: Two-Process Sleep Model & Non-24-SWD simulation",
        "Student Harm-Reduction Coalition volunteer"
      ],
      extraLogos: [require("./assets/images/Student_Harm_Coalition.png")]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "🧬 Data Analysis & Scientific Computing",
      progressPercentage: "90%",
      details: [
        "RNA-Seq data processing (Nextflow, Z Shell, R)",
        "Flow cytometry data analysis",
        "Gene expression clustering & heatmap visualization",
        "Statistical modeling with R, Python (Pandas, NumPy)",
        "Computational sleep and circadian rhythm simulations (MatLab, Julia)"
      ]
    },
    {
      Stack: "💻 Programming & Tools",
      progressPercentage: "85%",
      details: [
        "Languages: Python, R, Julia, Java, Ruby, MatLab",
        "Tools: Git, Nextflow, Z Shell, MS Office Suite",
        "Platforms: Jupyter, RStudio, MATLAB, VS Code"
      ]
    },
    {
      Stack: "🧑‍⚕️ Clinical & Imaging Techniques",
      progressPercentage: "87%",
      details: [
        "CT, CTA, and MRI scan interpretation",
        "Shadowed stroke interventions and ICU rounds",
        "Public health outreach (harm reduction, overdose reversal)"
      ]
    },
    {
      Stack: "✍️ Communication & Writing",
      progressPercentage: "95%",
      details: [
        "Research publication (Nature Portfolio 2024)",
        "Opinion columnist at The Daily Pennsylvanian",
        "Science communication and journal club presentations"
      ]
    }
  ],
  displayCodersrank: false
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Physician Shadow – Division of Vascular Neurology",
      company: "Perelman School of Medicine, University of Pennsylvania",
      companylogo: require("./assets/images/PerelmanSchoolofMedicineLogoVertical.svg.png"),
      date: "Feb 2025–Present",
      descBullets: [
        "Observed stroke interventions and neurological exams under Dr. Reyes-Estevez.",
        "Reviewed CT, CTA, and MRI scans to detect cerebrovascular pathologies.",
        "Strengthened diagnostic reasoning and exposure to post-stroke care therapies."
      ]
    },
    {
      role: "Volunteer – Harm Reduction Initiatives",
      company:
        "Student Harm Reduction Coalition (SHRC), University of Pennsylvania",
      companylogo: require("./assets/images/Student_Harm_Coalition.png"),
      date: "Aug 2024–Present",
      descBullets: [
        "Distributed harm reduction kits and overdose reversal medications to 1,000+ individuals.",
        "Engaged in wound care and substance-use response training.",
        "Strengthened public health engagement with vulnerable communities."
      ]
    },
    {
      role: "Student Researcher – Chronobiology & Sleep Institute",
      company: "Perelman School of Medicine, University of Pennsylvania",
      companylogo: require("./assets/images/UniversityofPennsylvania_Shield_RGB-2.png"),
      date: "Aug 2023–Present",
      descBullets: [
        "Developed a computational simulation of the Two-Process Sleep Model.",
        "Modeled Non-24-Hour Sleep-Wake Disorder using environmental/genetic inputs.",
        "Participated in AI-based journal club discussions and public science communication."
      ]
    },
    {
      role: "Clinical Researcher – Kimberly Querrey Summer Research Program",
      company: "Feinberg School of Medicine, Northwestern University",
      companylogo: require("./assets/images/Northwestern_Wildcats_logo.svg.png"),
      date: "May 2023–Aug 2023",
      descBullets: [
        "Co-authored a Nature Portfolio paper on SARS-CoV-2 pneumonia immune response.",
        "Processed flow cytometry and RNA-Seq data using R, Z Shell, and Nextflow.",
        "Built a hierarchical heatmap for gene clustering across 975 DEGs.",
        "Shadowed MICU/ICU rounds for high-stakes clinical decision-making."
      ]
    },
    {
      role: "Columnist – Opinion Section",
      company: "The Daily Pennsylvanian",
      companylogo: require("./assets/images/The_DP.png"),
      date: "Aug 2022–Present",
      descBullets: [
        "Published opinion essays on equity, education, carceral reform, and policy analysis.",
        "Notable topics: Fetterman's Senate win, African history in curricula, SAC funding inequities."
      ]
    },
    {
      role: "Student Researcher – Computational Neuroscience",
      company: "Zuckerman Institute, Columbia University",
      companylogo: require("./assets/images/Columbia_University.jpg"),
      date: "May 2022–May 2023",
      descBullets: [
        "Built a neural model of the SCN (circadian clock) using MatLab and differential equations.",
        "Simulated light-induced circadian rhythm 'splitting' in hamsters.",
        "Presented at the Science Pathways Scholars poster session and selected for SRBR 2024."
      ]
    },
    {
      role: "Senior Tech Intern",
      company: "OneKin, New York, NY",
      companylogo: require("./assets/images/OneKin.png"),
      date: "May 2021–Aug 2021",
      descBullets: [
        "Developed backend logic for OneKin Live — a multi-platform inventory aggregator.",
        "Collaborated weekly on code reviews and feature planning for startup client support."
      ]
    },
    {
      role: "STEAMbassador",
      company: "School of Education & Policy, Northwestern University",
      companylogo: require("./assets/images/Northwestern_Ed.jpeg"),
      date: "May 2021–Aug 2021",
      descBullets: [
        "Mentored low-income middle school students in hands-on STEM education.",
        "Led workshops on coding, chain-reaction machines, and Black & Brown innovators."
      ]
    },
    {
      role: "Board Member – Conservation Ambassadors",
      company: "Lincoln Park Zoo, Chicago, IL",
      companylogo: require("./assets/images/Lincoln_park_zoo.jpg"),
      date: "Aug 2019–Aug 2020",
      descBullets: [
        "Led advocacy against coltan mining practices in the DRC.",
        "Raised awareness for human and animal rights among 10,000+ Chicago students."
      ]
    },
    {
      role: "Research Intern – Cognition & Enrichment",
      company: "Malott Family Zoo Internship, Lincoln Park Zoo",
      companylogo: require("./assets/images/Lincoln_park_zoo.jpg"),
      date: "May 2019–Aug 2019",
      descBullets: [
        "Created a digital touchscreen app for gorilla cognitive enrichment.",
        "Conducted ethogram studies and presented findings on zoo animal welfare."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Research & Development",
  subtitle: "SCIENTIFIC PROJECTS & PUBLICATIONS",
  projects: [
    {
      image: require("./assets/images/sleep_model_preview.png"),
      projectName: "Two-Process Sleep Model (Honors Thesis)",
      projectDesc:
        "Simulated circadian (Process C) and homeostatic (Process S) regulation in sleep. Studied disrupted cycles in Non-24 SWD; presented results with visual plots.",
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/julunwae/sleep-model"
        }
      ]
    },
    {
      image: require("./assets/images/covid_heatmap.png"),
      projectName: "COVID-19 T-Cell Immune Response",
      projectDesc:
        "Part of Nature Portfolio–accepted research using flow cytometry and RNA-Seq data. Created DEGs heatmap visualized via hierarchical clustering.",
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/julunwae/covid-tcell"
        }
      ]
    },
    {
      image: require("./assets/images/gorilla_app_ui.png"),
      projectName: "Gorilla Cognitive Enrichment App",
      projectDesc:
        "Developed interactive digital puzzles to enhance gorilla mental stimulation. Tested behavior through ethogram logging and informal education techniques.",
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/julunwae/gorilla-app"
        }
      ]
    }
  ],
  display: true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Opinion Columns by Julu Nwaezeapu",
  subtitle: "Columns for The Daily Pennsylvanian",
  displayMediumBlogs: "false",
  blogs: [
    {
      url: "https://www.thedp.com/article/2024/09/principled-neutrality-institutional-penn-political-speech",
      title: "We need principled neutrality",
      date: "September 30, 2024",
      description:
        "Advocates for universities to remain politically neutral while emphasizing their responsibility to protect vulnerable and marginalized student communities."
    },
    {
      url: "https://www.thedp.com/article/2023/02/african-history-education-penn-liberal-arts-importance",
      title: "Africa to the world: Why universities need African histories",
      date: "February 5, 2023",
      description:
        "Calls for universities to include African and non-Western histories in core curricula to develop globally literate students."
    }
  ],
  display: true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("SCIENTIFIC PRESENTATIONS & PUBLIC ENGAGEMENT"),
  talks: [],
  display: false
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: "Contact Me ✉️",
  subtitle:
    "Let's connect on opportunities in neuroscience, clinical research, or pre-medical roles advancing brain and behavioral health.",
  number: "+1 (773) 491-4225",
  email_address: "julunwae@sas.upenn.edu"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

// Publications Section
const publications = {
  title: "Publications",
  display: true,
  publications: [
    {
      title: "Immune Cell Responses in SARS-CoV-2 Pneumonia",
      journal: "Nature Portfolio (in press, 2024)",
      authors: "Morales-Nebreda L., Nwaezeapu J. et al.",
      link: "https://doi.org/xxxxxx"
    }
  ]
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection,
  publications
};
