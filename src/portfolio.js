/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Shahjalal Shohag",
  title: "Hi, I'm Shahjalal Shohag a.k.a. YouKn0wWho",
  subTitle: emoji(
    "Software Engineer at Alpine DeFi | ICPC World Finalist | Problem Setter at International Math Olympiad, Codeforces, CodeChef, Hackerrank | 7* (Red) at CodeChef | International Master at Codeforces"
  ),
  resumeLink:
    "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/ShahjalalShohag",
  linkedin: "https://www.linkedin.com/in/shahjalalshohag/",
  gmail: "shahjalalshohag2014@gmail.com",
  facebook: "https://www.facebook.com/you.know.who.this.guy.is",
  instagram: "https://www.instagram.com/shahjalalshohag/",
  discord: "https://discord.com/users/481065996170428416",
  twitter: "https://twitter.com/shahjalalsohag",
  spotify: "https://open.spotify.com/user/s1rkr12perappspc1m9divj8y?si=LwtS33eBTyCl08TU34HT8A&utm_source=copy-link&dl_branch=1",
  blog: "https://blog.shahjalalshohag.com/home",
  linktree: "https://linktr.ee/youkn0wwho",
  page: "https://www.facebook.com/youkn0wwho.official",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Skills",
  subTitle: "Worked with",
  skills: [
    "Proficient in:",
    emoji("⚡ C/C++"),
    emoji("⚡ Algorithmic Problem Solving (solved 4300++ problems on various online platforms)"),
    emoji("⚡ Data Structures and Algorithms"),
    emoji("⚡ Competitive Programming"),
    emoji("⚡ Backend Engineering"),
    emoji("⚡ Web 3"),
    emoji("⚡ Blockchain Technology"),
    emoji("⚡ Cryptocurrency"),
    emoji("⚡ Smart Contracts"),
    emoji("⚡ Decentralized Finance"),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "c/c++",
      fontAwesomeClassname: "fab fa-cuttlefish"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "javascript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "html",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "latex",
      fontAwesomeClassname: "fas fa-lightbulb"
    },
    {
      skillName: "postgresql",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "fastapi",
      fontAwesomeClassname: "fas fa-server"
    },
    {
      skillName: "pandas",
      fontAwesomeClassname: "fas fa-p"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Shahjalal University of Science and Technology",
      logo: require("./assets/images/sust logo.png"),
      subHeader: "Bachelor of Science in Computer Science and Engineering",
      duration: "February 2017 - February 2022",
      desc: "Sylhet, Bangladesh",
    },
    {
      schoolName: "Dhaka Residential Model College",
      logo: require("./assets/images/Logo_of_DRMC.png"),
      subHeader: "Higher Secondary",
      duration: "July 2014 - July 2016",
      desc: "Dhaka, Bangladesh",
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "C++", //Insert stack or technology you have experience in
      progressPercentage: "97%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Problem Solving",
      progressPercentage: "95%"
    },
    {
      Stack: "Data Structures and Algorithms",
      progressPercentage: "100%"
    },
    {
      Stack: "Competitive Programming",
      progressPercentage: "98%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer | Remote",
      company: "Alpine DeFi | Florida, United States",
      companylogo: require("./assets/images/alpine.png"),
      date: "Feb 2022 – Present",
      desc: "Developed API endpoints in the Backend using FastAPI and PostgreSQL, Worked on Web 3 using Blockchain and Smart Contracts to build a Decentralized Finance Dapps, Helped developing Python and Javascript SDK.",
    },
    {
      role: "Problem Setter",
      company: "International Mathematics Olympiad",
      companylogo: require("./assets/images/imo.png"),
      date: "June 2021 – July 2021",
      desc: "Created the first and only shortlisted problem from Bangladesh in IMO 2021",
    },
    {
      role: "Problem Setter",
      company: "CodeForces",
      companylogo: require("./assets/images/codeforces_logo.png"),
      date: "June 2021 – Present",
      desc: "I worked as an author of some online international programming competitions at CodeForces",
    },
    {
      role: "Founder",
      company: "Bangladesh CP Server",
      companylogo: require("./assets/images/bcslogo.png"),
      date: "Dec 2020 - Present",
      desc: "Bangladesh CP Server is the biggest discord community server of Competitive Programming enthusiasts from Bangladesh",
    },
    {
      role: "Founder and Trainer",
      company: "YouKn0wWho Academy",
      companylogo: require("./assets/images/academy_logo.png"),
      date: "Nov 2021 - Present",
      desc: "YouKn0wWho Academy is the place to go if you want to learn to code and want to become a better Competitive Programmer. I have already taught 500+ students in this Academy and it is growing day by day.",
    },
    {
      role: "National Scientific Committee Member",
      company: "Bangladesh Olympiad in Informatics(BdOI)",
      companylogo: require("./assets/images/bdoi.jfif"),
      date: "Feb 2020 – Present",
      desc: "I worked as an author of a problem in BdOI 2020 and 2022",
    },
    {
      role: "Problem Setter",
      company: "CodeChef",
      companylogo: require("./assets/images/codechef.png"),
      date: "Mar 2020 – Present",
      desc: "I worked as an author of some online international programming competitions at CodeChef",
    },
    {
      role: "Problem Setter",
      company: "HackerRank",
      companylogo: require("./assets/images/HackerRank_logo.png"),
      date: "Feb 2019 – Dec 2021",
      desc: "I worked as an author of some online international programming competitions at HackerRank",
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

const problemSolving = {
  title: "Problem Solving Activities",
  subtitle: "My Competitive Programming Journey",
  projects: [
    {
      image: require("./assets/images/codeforces_logo.png"),
      projectName: "International Master",
      projectDesc: "Highest Rating: 2325,  Top 0.23 percent among 600,000+ users",
      footerLink: [
        {
          name: "YouKn0wWho",
          url: "https://codeforces.com/profile/YouKn0wWho"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/codechef logo red.jfif"),
      projectName: "Red Coder/7*",
      projectDesc: "Highest Rating: 2526, Top 0.1 percent among 1,000,000+ users",
      footerLink: [
        {
          name: "sjshohag",
          url: "https://www.codechef.com/users/sjshohag",
        }
      ]
    },
    {
      image: require("./assets/images/cp-logo.jfif"),
      projectName: "4300+ Problems Solved",
      projectDesc: "Competitive Programming Problems(Algorithmic, Data Structure Based and Others)",
      footerLink: [
        {
          name: "link",
          url: "https://github.com/ShahjalalShohag/ProblemSolvingStats",
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements 🏆 "),

  achievementsCards: [
    {
      title: "Number 1 Contributor in the World on Codeforces",
      subtitle:
        "Oct 2021 - May 2022, indicates how much I helped the Competitive Programming community.",
      image: require("./assets/images/top_1_logo.png"),
      footerLink: [
      ]
    },
    {
      title: "ICPC World Finalist",
      subtitle:
        "Managed to qualify for ICPC World Finals 2021 which will take place in November 2022",
      image: require("./assets/images/icpc logo.png"),
      footerLink: [
        {
          name: "ICPC ID",
          url: "https://icpc.global/ICPCID/CDZWDIBEYHP4"
        }
      ]
    },
    {
      title: "Problem Setter of the First and Only Shortlisted Problem from Bangladesh in IMO 2021",
      subtitle:
        "My problem got shortlisted in IMO 2021. The problem is A3. I have added the link here.",
      image: require("./assets/images/imo.png"),
      footerLink: [
        {
          name: "My Problem(A3)",
          url: "https://www.imo-official.org/problems/IMO2021SL.pdf"
        }
      ]
    },
    {
      title: "Top 0.4 percent in Google Kick Start",
      subtitle: "International Rank of 36th in Google Kick Start Round F, 2021",
      image: require("./assets/images/kickstart.jpg"),
      footerLink: [
        {
          name: "Certificate",
          url: "https://drive.google.com/file/d/1Y-6c4zobKFBpTbYKrOopVD6NAz0fnESq/view?usp=sharing"
        }
      ]
    },
    {
      title: "Top 0.8 percent in Google Code Jam",
      subtitle: "International Rank of 759th in Google Code Jam, 2021 among 93,000+ registrants",
      image: require("./assets/images/codejam.jpg"),
      footerLink: [
        {
          name: "Certificate",
          url: "https://drive.google.com/file/d/1m-qEH_6yOdcrYXwdl7ieNRWcD4ivYHy4/view?usp=sharing"
        }
      ]
    },
    {
      title: "Top 2 percent in Facebook Hacker Cup",
      subtitle: "International Rank of 732nd in Facebook Hacker Cup, 2021 among 35,000+ registrants",
      image: require("./assets/images/hackercup.jfif"),
      footerLink: [
        {
          name: "Certificate",
          url: "https://www.facebook.com/codingcompetitions/hacker-cup/2021/certificate/290640838983582"
        }
      ]
    },
    {
      title: "Top 0.1 percent in CodeChef Snackdown",
      subtitle: "International Rank of 106 in CodeChef SnackDown 2021 among 75,000+ registrants",
      image: require("./assets/images/snackdown.svg"),
      footerLink: [
        {
          name: "sjshohag",
          url: "https://www.codechef.com/rankings/SNCKPE21"
        }
      ]
    },
    {
      title: "Most Upvoted Codeforces Blog of All Time",
      subtitle:
        "My monstrous 'The Ultimate Topic List for Competitive Programming' blog is now officially the most upvoted Codeforces blog of all time.",
      image: require("./assets/images/top.png"),
      footerLink: [
        {
          name: "Blog Link",
          url: "https://codeforces.com/blog/entry/95106"
        }
      ]
    },

    {
      title: "One and a Half Thousand Stars",
      subtitle: "My GitHub Repository 'Code Library' has 1500+ stars. This library contains codes for all Data Structures, Algorithms and CP related topics.",
      image: require("./assets/images/star.png"),
      footerLink: [
        {
          name: "Code Library",
          url: "https://github.com/ShahjalalShohag/code-library"
        }
      ]
    },
    {
      title: "23rd in Whole Asia West Continent",
      subtitle: "ICPC Asia-West Continent Final Contest, 2019",
      image: require("./assets/images/icpc logo.png"),
      footerLink: [
        {
          name: "SUST_Whiplash",
          url: "https://algo.codemarshal.org/contests/awf-19/standings"
        },
        {
          name: "ICPC ID",
          url: "https://icpc.global/ICPCID/CDZWDIBEYHP4"
        }
      ]
    },
    {
      title: "4th and 5th in ICPC Dhaka Regional",
      subtitle: "National Rank of 4th in ACM ICPC Dhaka Regional, 2020 and 5th in ACM ICPC Dhaka Regional, 2019",
      image: require("./assets/images/icpc logo.png"),
      footerLink: [
        {
          name: "BerlekampMassey",
          url: "https://algo.codemarshal.org/contests/icpc-dhaka-20/standings"
        },
        {
          name: "SUST_Whiplash",
          url: "https://algo.codemarshal.org/contests/icpc-dhaka-19-onsite-main/standings"
        },
        {
          name: "ICPC ID",
          url: "https://icpc.global/ICPCID/CDZWDIBEYHP4"
        }
      ]
    },
    {
      title: "1st and 2nd Runner-up in ICPC Dhaka Regional Preliminary",
      subtitle: "National Rank of 2nd in ACM ICPC Dhaka Regional Preliminary, 2020 and 3rd in ACM ICPC Dhaka Regional Preliminary, 2019 among 1500+ teams",
      image: require("./assets/images/icpc logo.png"),
      footerLink: [
        {
          name: "BerlekampMassey",
          url: "https://algo.codemarshal.org/contests/icpc-dhaka-20-preli/standings"
        },
        {
          name: "SUST_Whiplash",
          url: "https://algo.codemarshal.org/contests/icpc-dhaka-19-preli/standings"
        },
        {
          name: "ICPC ID",
          url: "https://icpc.global/ICPCID/CDZWDIBEYHP4"
        }
      ]
    },
    {
      title: "Top 10 in 8+ National Programming Contests",
      subtitle: "Ranked within top 10 among all the teams from Bangladesh in 8+ national level programming contests",
      image: require("./assets/images/top_10_logo_2.png"),
      footerLink: [
      ]
    },
    {
      title: "Top 100 in 10+ International Programming Contests",
      subtitle: "Ranked within top 100 in 10+ international programming contests among 20000+ participants(on average)",
      image: require("./assets/images/cp-logo-2.png"),
      footerLink: [
        {
          name: "Link",
          url: "https://codeforces.com/contests/with/YouKn0wWho"
        }
      ]
    },
    {
      title: "Champion in National ICT Day Contest",
      subtitle: "Champion in National ICT Day Contest, 2018",
      image: require("./assets/images/top_1_logo_2.png"),
      footerLink: [
        {
          name: "YouKnowWho",
          url: "https://toph.co/c/national-ict-day-2018/standings"
        }
      ]
    },
    {
      title: "2nd Runner-up in Regional Math Olympiad",
      subtitle: "2nd runner-up in Dhaka Regional Math Olympiad, 2015",
      image: require("./assets/images/math.png"),
      footerLink: [
      ]
    },
  ],

  display: true // Set false to hide this section, defaults to true
};

const problemSetting = {
  title: "Problem Setting Activities",
  subtitle: "Algorthimic Problems that I have set at times",
  projects: [
    {
      image: require("./assets/images/problem.png"),
      projectName: "Author of 60+ Problems",
      projectDesc: "A total of 60+ problems on various online judges",
      footerLink: [
        {
          name: "All Problems",
          url: "https://github.com/ShahjalalShohag/Problem-Setting"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/imo.png"),
      projectName: "International Mathematics Olympiad(IMO)",
      projectDesc: "Created the first and only shortlisted problem from Bangladesh in IMO 2021",
      footerLink: [
      ]
    },
    {
      image: require("./assets/images/codeforces_logo.png"),
      projectName: "Author of one Div. 1 and two Div. 2 Contests and 13 Problems at Codeforces",
      projectDesc: "Organized one Div.1 and two Div. 2 contests by myself and created a total of 13 problems there",
      footerLink: [
        {
          name: "Codeforces Round #752(Div. 1)",
          url: "https://codeforces.com/contest/1603",
        },
        {
          name: "Codeforces Round #752(Div. 2)",
          url: "https://codeforces.com/contest/1604",
        },
        {
          name: "Codeforces Round #735(Div. 2)",
          url: "https://codeforces.com/contest/1554",
        }
      ]
    },
    {
      image: require("./assets/images/codechef.png"),
      projectName: "Author of two CookOffs and 20 Problems at CodeChef",
      projectDesc: "Organized two cookoffs by myself and created a total of 20 problems at CodeChef including some long challenges and lunchtimes",
      footerLink: [
        {
          name: "July Cook-Off 2020",
          url: "https://www.codechef.com/COOK120A",
        },
        {
          name: "October Cook-Off 2020",
          url: "https://www.codechef.com/COOK123",
        },
        {
          name: "Long Challenges and LunchTimes",
          url: "https://github.com/ShahjalalShohag/Problem-Setting/tree/main/CodeChef/README.md",
        }
      ]
    },
    {
      image: require("./assets/images/bdoi.jfif"),
      projectName: "Bangladesh Olympiad in Informatics(BdOI)",
      projectDesc: "Created one problem in BdOI 2020",
      footerLink: [
      ]
    },
    {
      image: require("./assets/images/judge.png"),
      projectName: "Problem Setter and Judge at Regional Programming Contest",
      projectDesc: "I was a problem setter, tester, alternate solution writer and judge of Virtual Techfest 2020 Regional Programming Contest organized by Department of CSE, Varendra University.",
      footerLink: [
        {
          name: "Virtual Techfest 2020",
          url: "https://toph.co/c/virtual-techfest-2020-regional"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/judge.png"),
      projectName: "Problem Setter and Judge at National Programming Contest",
      projectDesc: "I was a problem setter, tester, alternate solution writer and judge of 	National Girls' Programming Contest 2021 and National High School Programming Contest 2021",
      footerLink: [
        {
          name: "NGPC 2021",
          url: "https://toph.co/c/ngpc-2021"
        },
        {
          name: "NHSPC 2021",
          url: "https://toph.co/c/national-high-school-2021-senior"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/hackerrank.jpg"),
      projectName: "Author of 20+ Problems at HackerRank",
      projectDesc: "I have set 20+ problems on HackerRank. Unfortunately they are private, so can't share the link here",
      footerLink: [
      ]
    },
    {
      image: require("./assets/images/judge.png"),
      projectName: "Problem Setter and Judge at Intra University Programming Contest",
      projectDesc: "I was a problem setter, tester, alternate solution writer and judge of the Intra University Programming Contest, 2019 at Shahjalal University of Science & Technology.",
      footerLink: [
        {
          name: "SUST IUPC 2019",
          url: "https://toph.co/c/sust-intra-2019-r"
        }
        //  you can add extra buttons here.
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};
// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "I create blogs just to share the little things that I know",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.shahjalalshohag.com/topic-list/",
      title: "The Ultimate Topic List(with Tutorials, Problems, and Templates)",
      description:
        "This post took 4 years to make. And this is the most significant thing that I have ever shared in my whole life."
    },
    {
      url: "https://blog.shahjalalshohag.com/code-library/",
      title: "Code Library",
      description:
        "My personal code library where I compiled almost all the important templates that you will need in CP (saying almost just for courtesy)"
    },
    {
      url: "https://blog.shahjalalshohag.com/death/",
      title: "A Letter to You as I have Just Died",
      description:
        "Don’t cry, human. I know it may have hurt you a little (or a lot) that you have just found out about my death out of nowhere. But understand that this is how it is..."
    },
    {
      url: "https://blog.shahjalalshohag.com/life-is-weird/",
      title: "Life is Weird",
      description:
        "There are hundreds of people dying everyday because of corona, hundreds of new fatherless sons, childless fathers, friendless friends, loveless lovers. They are crying. You are crying. "
    },
    {
      url: "https://blog.shahjalalshohag.com/life-is-unfair/",
      title: "Life is Unfair",
      description:
        "It seems unlikely that everyone will be treated fairly. Life is a weird b*tch, but you can’t escape it. Accept it, embrace it and most importantly, live, my friend."
    },
    {
      url: "https://blog.shahjalalshohag.com/cp-day/",
      title: "Happy Personal Competitive Programming Day",
      description:
        "It was October 18, 2017. Shohag, a melancholic soul, made a strong determination that he will pursue Competitive Programming seriously, by heart, because he found it fascinating."
    },
    {
      url: "https://blog.shahjalalshohag.com/dream/",
      title: "A Dream I had Last Night",
      description:
        "Do you know what I have dreamt of last night? I saw a dazzling star. I saw it coming towards me. It was so shiny, I bet it could have taken away the whole darkness from my blatant mind."
    },
    {
      url: "https://blog.shahjalalshohag.com/nirvana/",
      title: "Nirvana",
      description:
        "It was like we realized the evanescence of life. It was like we found our nirvana."
    },
    {
      url: "https://blog.shahjalalshohag.com/",
      title: "And Many More...",
      description:
        "My Personal Blog Site."
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

const bigProjects = {
  title: "Research",
  subtitle: "The little research that I have done",
  projects: [
    {
      image: require("./assets/images/research.jpg"),
      projectName: "Undergrad Thesis",
      projectDesc: "A Novel Algorithm to Maximize Core Resilience of Networks under Random Edge and Node Deletions.",
      footerLink: [
        {
          name: "Thesis",
          url: "https://github.com/ShahjalalShohag/Undergrad-Thesis"
        }
        //  you can add extra buttons here.
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};
const realBigProjects = {
  title: "Big Projects",
  subtitle: "Some of the monstrous projects that I have done",
  projects: [
    {
      image: require("./assets/images/code_library.png"),
      projectName: "The Ultimate Topic List for Competitive Programming",
      projectDesc: "It took me 4 years to make. And this is the most significant thing that I have ever done in my whole life. It is  a comprehensive Competitive Programming topic list which contains all sorts of topics(450+ topics!) from easy to advanced with corresponding tutorials, problem lists and templates. It managed to get 200,000+ attentions on LinkedIn and many more on different sites.",
      footerLink: [
        {
          name: "Topic List",
          url: "https://codeforces.com/blog/entry/95106"
        },
        {
          name: "Featured on Errichto's YouTube Channel",
          url: "https://www.youtube.com/watch?v=EnAKYuWR2nQ"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/code_library.png"),
      projectName: "The Ultimate Code Library",
      projectDesc: "It also took me 4 years to complete. Here I compiled almost all the important templates that anyone will need in Competitive Programming (saying almost just for courtesy). It now has 1500+ stars and gets 200+ views per day on average. I am so happy that I could help so many people.",
      footerLink: [
        {
          name: "GitHub Link",
          url: "https://github.com/ShahjalalShohag/code-library"
        },
        {
          name: "1200+ stars",
          url: "https://github.com/ShahjalalShohag/code-library"
        }
        //  you can add extra buttons here.
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};


// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "The interviews and seminars that I have attended"
  ),

  talks: [
    {
      title: "Interview with CodeChef",
      subtitle: "CodeChef was kind enough to arrange an interview with me as a Problem Setter at CodeChef",
      slides_url: "https://www.codechef.com/aboutus", // host name
      event_url: "https://blog.codechef.com/2020/08/29/in-conversation-with-codechef-problem-setter-shahjalal-shohag/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me"),
  subtitle:
    "If you want to hire me or have other queries, then knock me anytime. I try to reply within 24 hours.",
  // number: "+92-3243454077",
  email_address: "shahjalalshohag2014@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "shahjalalsohag", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const gitHubProfileData = {
  "data": {
    "user": {
      "name": "Shahjalal Shohag",
      "bio": "",
      "isHireable": false,
      "avatarUrl": "https://avatars.githubusercontent.com/u/33003206?u=ef6b111c32c9150b540ab5fe3af2202a003a89b1&v=4",
      "location": "Sylhet, Bangladesh",
      "pinnedItems": {
        "totalCount": 6,
        "edges": [
          {
            "node": {
              "name": "code-library",
              "description": "Templates, algorithms and data structures implemented and collected for programming contests.",
              "forkCount": 518,
              "stargazers": { "totalCount": 1810 },
              "url": "https://github.com/ShahjalalShohag/code-library",
              "id": "MDEwOlJlcG9zaXRvcnkxNTgwNjUxOTM=",
              "diskUsage": 3695,
              "primaryLanguage": { "name": "C++", "color": "#f34b7d" }
            }
          },
          {
            "node": {
              "name": "Competitive-Programming-A-Complete-Guideline",
              "description": null,
              "forkCount": 105,
              "stargazers": { "totalCount": 432 },
              "url": "https://github.com/ShahjalalShohag/Competitive-Programming-A-Complete-Guideline",
              "id": "MDEwOlJlcG9zaXRvcnkyODg5NTM0MTQ=",
              "diskUsage": 302,
              "primaryLanguage": null
            }
          },
          {
            "node": {
              "name": "ProblemSolving",
              "description": null,
              "forkCount": 3,
              "stargazers": { "totalCount": 17 },
              "url": "https://github.com/ShahjalalShohag/ProblemSolving",
              "id": "MDEwOlJlcG9zaXRvcnkzMjMxNjgyNzA=",
              "diskUsage": 16921,
              "primaryLanguage": { "name": "C++", "color": "#f34b7d" }
            }
          },
          {
            "node": {
              "name": "The-Bookaholic",
              "description": null,
              "forkCount": 0,
              "stargazers": { "totalCount": 0 },
              "url": "https://github.com/ShahjalalShohag/The-Bookaholic",
              "id": "MDEwOlJlcG9zaXRvcnkzMzU1NTI4OTI=",
              "diskUsage": 5360,
              "primaryLanguage": { "name": "JavaScript", "color": "#F1E05A" }
            }
          },
          {
            "node": {
              "name": "Manimations",
              "description": null,
              "forkCount": 0,
              "stargazers": { "totalCount": 2 },
              "url": "https://github.com/ShahjalalShohag/Manimations",
              "id": "MDEwOlJlcG9zaXRvcnkzMzU1NDMzMDU=",
              "diskUsage": 5855,
              "primaryLanguage": { "name": "Python", "color": "#3572A5" }
            }
          },
          {
            "node": {
              "name": "Tally Note",
              "description": null,
              "forkCount": 0,
              "stargazers": { "totalCount": 1 },
              "url": "https://github.com/ShahjalalShohag/WebProject",
              "id": "MDEwOlJlcG9zaXRvcnkzMzkwMTM0NzY=",
              "diskUsage": 2151,
              "primaryLanguage": { "name": "JavaScript", "color": "#F1E05A" }
            }
          }
        ]
      }
    }
  }
}

const socialMediaConnections = {
  title: "Social Media Connections",
  subtitle: "I love to connect with people with similar interests. Let's connect if you want.",
  projects: [
    {
      image: require("./assets/images/linkedin.png"),
      projectName: "12,000+ Connections on LinkedIn",
      footerLink: [
        {
          name: "Let's Connect",
          url: "https://www.linkedin.com/in/shahjalalshohag/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/face3.jpg"),
      projectName: "9,000+ Connections on Facebook",
      footerLink: [
        {
          name: "Let's Connect",
          url: "https://www.facebook.com/you.know.who.this.guy.is"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/blog.png"),
      projectName: "100,000+ Views on my Personal Blog Site",
      footerLink: [
        {
          name: "Blog Link",
          url: "https://blog.shahjalalshohag.com/"
        },
        {
          name: "Subscribe",
          url: "https://gmail.us5.list-manage.com/subscribe?u=32bba2b1a50fd39cfc8306b97&id=4ceea0737d"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/github-logo.png"),
      projectName: "1000+ Followers on GitHub",
      footerLink: [
        {
          name: "Follow Me",
          url: "https://github.com/ShahjalalShohag"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/codeforces_logo.png"),
      projectName: "5500+ Followers on CodeForces",
      footerLink: [
        {
          name: "Follow Me",
          url: "https://codeforces.com/profile/YouKn0wWho"
        }
        //  you can add extra buttons here.
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
}


export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  problemSolving,
  achievementSection,
  blogSection,
  podcastSection,
  talkSection,
  twitterDetails,
  contactInfo,
  problemSetting,
  bigProjects,
  gitHubProfileData,
  socialMediaConnections,
  realBigProjects
};
