import Image from "next/image";
import Resume from "../components/Resume";
import Project from "../components/Project";

const jobExperience = [
  {
    title: "Data Analyst",
    company: "Boilerexams",
    duration: "November 2024 - Present",
    description: "Analyzed over 5.64 million user submissions to derive conclusions for 21+ courses at Purdue University. Developed models and visualized key findings to understand exam question biases to better effectively prepare students for exams using data from 192 exams.",
  },
  {
    title: "Account Director, Workshop Organizer",
    company: "Purdue IEEE ",
    duration: "September 2024 - Present",
    description: "Collaborate on the development on workshops on engineering topics to foster innovative environments. Present to 50+ people at workshops teaching the intersection of machine learning and finance.",
  },
  {
    title: "Volunteer Developer",
    company: "Jubilee Club, A Bengali Cultural Club",
    duration: "Janurary 2022 - August 2024",
    description: "Developed and published a portal to other resources for the local ethnic community. Renovated website to attract 6,000+ unique visitors. Received “Youth Leadership” award for contribution to local community.",
  },
  {
    title: "Internship",
    company: "SAP (Systems, Applications and Products in Data Processing)",
    duration: "September 2024 - Present",
    description: "Developed a mobile application for industry to effectively upload software issue tickets and obtain resolutions. Engaged with professionals during workshops to grow soft skills like written and oral communication.",
  },
];

const ProjectExperience = [
  {
    title: "Indian Tech Startup Success Prediction",
    duration: "July 2023 - Present",
    description: "Developed Random Forest and XGBoost models ML to predict Indian tech startup success with 82 percent accuracy. Authored paper and presented findings at the Purdue 2024 Undergraduate Research Expo.",
  },
  {
    title: "FunCha: A Website for Ethnic Food",
    duration: "June 2023 - August 2024",
    description: "Developed a roadmap and led group of three to curate and compile Bengali recipes, addressing a lack of Southeast Asian ethnic food resources online. 2,000+ unique page views within the first six months.",
  },
  {
    title: "Wharton High School Data Science Competition",
    duration: "January 2024 - May 2024",
    description: "Competed and placed 2nd against 300+ teams from 37 countries with the highest accuracy model and presentation. Developed machine learning models to predict league and tournament results of a simulated soccer league.",
  },
];


export default function Home() {
  return (
    <div className="h-screen overflow-hidden p-4 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="grid grid-cols-2 gap-8 row-start-2 items-start justify-between w-full h-[calc(100vh-200px)]">
        
        <div className="grid grid-cols-1 gap-2 max-w-xl pl-48 sticky top-20">
          <div className="grid items-center gap-2">
            <a href="?"><h1 className="text-4xl font-bold mb-4">Dishan Bhattacharya</h1></a>
            <h2 className="text-2xl text-cyan-200 mb-2">Undergraduate Student at Purdue University</h2>
            <p className="text-cyan-400">
              I strive to directly tackle issues through data and technology.
            </p>
          </div>

          
          <p className="italic pt-16">Scroll on the Right →</p>


        </div>

        <div className="flex-1 max-w-xl overflow-y-auto max-h-[calc(100vh-200px)] sticky top-16 pt-20">
          <div className="space-y-16">
            <div id="about-me">
              <h2 className="text-3xl font-bold mb-4">About Me</h2>
              I am currently pursuing a degree in Computer Science and a minor in Economics at Purdue University. I'm passionate about using technology to solve real-world problems in the finance sector and have directly worked on projects in this field. With experience in data analysis, machine learning, and software development, I am always looking for new opportunities to learn and grow. I am currently seeking internships for the summer of 2025. Feel free to reach out to me at <a href="mailto:bhatt123@purdue.edu" className ="hover:underline">bhatt123@purdue.edu</a>.
            </div>
          

            <div id="experience">
              <h2 className="text-3xl font-bold mb-4">Experience</h2>
              {jobExperience.map((job, index) => (
                <div key={index} className="mb-8">
                  <h3 className="text-xl font-bold">{job.title}</h3>
                  <p className="text-gray-600 mb-2">{job.company}</p>
                  <p className="text-gray-600 mb-2">{job.duration}</p>
                  <p>{job.description}</p>
                </div>
              ))}
          </div>

            <div id="projects">
            <h2 className="text-3xl font-bold mb-4">Projects</h2>
              {ProjectExperience.map((ProjectItem, index) => (
                <div key={index} className="mb-8">
                  <h3 className="text-xl font-bold">{ProjectItem.title}</h3>
                  <p className="text-gray-600 mb-2">{ProjectItem.duration}</p>
                  <p>{ProjectItem.description}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center py-8 mt-8">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/disbh/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/github.svg"
            alt="GitHub Icon"
            width={24}
            height={24}
          />
          GitHub
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.linkedin.com/in/dishanb/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/linkedin.png"
            alt="LinkedIn Icon"
            width={24}
            height={24}
          />
          LinkedIn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={20}
            height={20}
          />
          Full Resume
        </a>
      </footer>
    </div>
  );
}


