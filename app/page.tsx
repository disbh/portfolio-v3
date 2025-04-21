import Image from "next/image";
import Resume from "../components/Resume";
import Project from "../components/Project";

const jobExperience = [
  {
    title: "Data Analyst Lead",
    company: "Boilerexams",
    duration: "November 2024 – Present",
    description: "Led team of 8 to analyze and understand over 7.5 million user submissions for 25 Purdue courses, with 1.2k+ daily users. Created standardized difficulty categorizations using metrics like accuracy, time spent, and tool usage. Developed scalable models to identify biases in 188 exams for improved student exam preparation.",
  },
  {
    title: "Vice President of Technical Committees",
    company: "Purdue IEEE",
    duration: "December 2024 – Present",
    description: "Led 7 technical committees with 800+ members and $40,000+ in funds. Spearheaded workshop on machine learning and finance with 50+ attendees. Supported execution of networking banquet with 100+ attendees including sponsors, industry reps, and professors.",
  },
  {
    title: "Frontend Developer",
    company: "Jubilee Club, Bengali Cultural Club",
    duration: "January 2022 – August 2024",
    description: "Published a resource portal for the local Bengali community with 1.5k monthly views. Collaborated on website renovation, attracting 6,000+ unique visitors. Honored with the “Youth Leadership” award for community contributions.",
  },
  {
    title: "Junior Developer Intern",
    company: "SAP (Systems, Applications and Products in Data Processing)",
    duration: "July 2023 – August 2023",
    description: "Built a mobile ticketing application integrated with S/4 HANA for industrial issue tracking. Engaged with testing, sales, and technical support teams to understand the product lifecycle and improve user-facing features.",
  },
];

const ProjectExperience = [
  {
    title: "Indian Tech Startup Success Prediction",
    duration: "July 2023 – August 2024",
    description: "Created machine learning models (Random Forest, XGBoost, LightGBM) to predict success of Indian tech startups, achieving 82% accuracy. Visualized key insights and outliers; most important predictors included seed lag, social media presence, and seed funding raised. Findings presented at Purdue 2024 Fall Undergraduate Research Expo.",
  },
  {
    title: "FunCha: Website for Ethnic Food",
    duration: "June 2023 – August 2024",
    description: "Led a team of three to develop a Bengali recipe site using Astro, React, and Tailwind CSS. Addressed lack of Southeast Asian food content online and achieved 2,000+ unique page views in six months. Designed user-centric roadmap for interface development.",
  },
  {
    title: "Wharton High School Data Science Competition",
    duration: "January 2024 – May 2024",
    description: "Collaborated in a team of five to develop models predicting outcomes of a simulated soccer league using PyCaret and Seaborn. Placed 2nd out of 300+ teams from 37 countries, recognized for the most accurate model and presentation (via Keynote).",
  },
];


export default function Home() {
  return (
    <div className="h-screen overflow-hidden p-4 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="grid grid-cols-2 gap-8 row-start-2 items-start justify-between w-full h-[calc(100vh-200px)]">
        
        <div className="grid grid-cols-1 gap-2 max-w-xl pl-48 sticky top-20">
          <div className="grid items-center gap-2">
            <a href="?"><h1 className="text-4xl font-bold mb-4 text-gray-100">Dishan Bhattacharya</h1></a>
            <h2 className="text-2xl text-gray-200 mb-2">Undergraduate Student at Purdue University</h2>
            <p className="text-gray-400">
              I strive to directly tackle issues through data and technology.
            </p>
          </div>

          
          <p className="italic pt-16">Scroll on the Right →</p>
          <p className="italic">Currently only optimized for Desktop.</p>


        </div>

        <div className="flex-1 max-w-xl overflow-y-auto max-h-[calc(100vh-200px)] sticky top-16 pt-20">
          <div className="space-y-16">
            <div id="about-me">
              <h2 className="text-3xl font-bold mb-4">About Me</h2>
              <p className="">I am currently pursuing a degree in Computer Science and a minor in Economics at Purdue University. I'm passionate about using technology to solve real-world problems in the finance sector and have directly worked on projects in this field. With experience in data analysis, machine learning, and software development, I am always looking for new opportunities to learn and grow. I am currently seeking internships for the summer of 2025. Feel free to reach out to me at <a href="mailto:bhatt123@purdue.edu" className ="hover:underline">bhatt123@purdue.edu</a>.</p>
            </div>
          

            <div id="experience">
              <h2 className="text-3xl font-bold mb-4">Experience</h2>
              {jobExperience.map((job, index) => (
                <div key={index} className="mb-8">
                  <h3 className="text-xl font-bold text-cyan-200 mb-1">{job.title}</h3>
                  <p className="text-cyan-400">{job.company}</p>
                  <p className="text-cyan-500 mb-2 italic">{job.duration}</p>
                  <p className="">{job.description}</p>
                </div>
              ))}
          </div>

            <div id="projects">
            <h2 className="text-3xl font-bold mb-4">Projects</h2>
              {ProjectExperience.map((ProjectItem, index) => (
                <div key={index} className="mb-8">
                  <h3 className="text-xl font-bold text-emerald-200">{ProjectItem.title}</h3>
                  <p className="text-emerald-400 mb-2">{ProjectItem.duration}</p>
                  <p className="">{ProjectItem.description}</p>
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


