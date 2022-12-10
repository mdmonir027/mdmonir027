// Navigation Bar SECTION
const navBar = {
  show: false,
};

// Main Body SECTION
const mainBody = {
  gradientColors: '#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1',
  firstName: 'Md Monirul',
  middleName: '',
  lastName: 'Islam',
  message: 'Passionate in technology',
  icons: [
    {
      image: 'fa-github',
      url: 'https://github.com/mdmonir027',
    },
    {
      image: 'fa-facebook',
      url: 'https://www.facebook.com/mdmonir027',
    },
    {
      image: 'fa-instagram',
      url: 'https://www.instagram.com/mdmonir027/',
    },
    {
      image: 'fa-linkedin',
      url: 'https://www.linkedin.com/in/mdmonir027/',
    },
  ],
};

const about = {
  show: true,
  heading: 'About Me',
  imageLink: require('../editable-stuff/mdmonir.jpeg'),
  imageSize: 375,
  message:
    'Hi,This is Monirul Islam. A highly motivated and hardworking individual web developer. I am looking for an opportunity where I can make the best of my potential and contribute and grow rapidly with increasing responsibilities. Currently I am doing my diploma in Computer Science',
  resume: require('../editable-stuff/resume.pdf'),
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: 'Recent Projects',
  gitHubUsername: 'mdmonir027', //i.e."johnDoe12Gh"
  reposLength: 3,
  specificRepos: ['react-event-creator', 'cam-manager', 'philadelphia'],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: 'Leadership',
  message:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.',
  images: [
    {
      img: require('../editable-stuff/mdmonir.jpeg'),
      label: 'First slide label',
      paragraph: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
    },
    {
      img: require('../editable-stuff/mdmonir.jpeg'),
      label: 'Second slide label',
      paragraph: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
    },
  ],
  imageSize: {
    width: '615',
    height: '450',
  },
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: 'Skills',
  hardSkills: [
    { name: 'HTML/CSS', value: 100 },
    { name: 'JavaScript', value: 100 },
    { name: 'React JS', value: 100 },
    { name: 'Node JS', value: 100 },
    { name: 'ExpressJs', value: 100 },
    { name: 'Data Structures', value: 100 },
  ],
  softSkills: [
    { name: 'Goal-Oriented', value: 100 },
    { name: 'Collaboration', value: 100 },
    { name: 'Positivity', value: 100 },
    { name: 'Adaptability', value: 100 },
    { name: 'Problem Solving', value: 100 },
    { name: 'Organization', value: 100 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: 'Get In Touch',
  message:
    "I'm currently looking for full-time Software Engineering opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: 'mmislam027@gmail.com',
};

const experiences = {
  show: false,
  heading: 'Experiences',
  data: [
    {
      role: 'FullStack Developer (Freelance)', // Here Add Company Name
      companylogo: require('../assets/img/frelanercom.jpg'),
      date: 'June 2018 – Present',
    },
  ],
};

// Blog SECTION
// const blog = {
//   show: false,
// };

export {
  navBar,
  mainBody,
  about,
  repos,
  skills,
  leadership,
  getInTouch,
  experiences,
};
