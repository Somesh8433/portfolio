import {
  FiArrowRight,
  FiAward,
  FiBookOpen,
  FiBriefcase,
  FiCode,
  FiGithub,
  FiGlobe,
  FiLayers,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiPhone,
  FiTarget,
  FiZap,
} from 'react-icons/fi'
import profileImage from '../Photo.png'

const stats = [
  { value: '95%+', label: 'spam classification accuracy' },
  { value: '100+', label: 'LeetCode problems solved' },
  { value: '5,000+', label: 'messages cleaned and modeled' },
]

const skills = [
  'Python',
  'Java',
  'C',
  'scikit-learn',
  'NLP',
  'Logistic Regression',
  'Naive Bayes',
  'SVM',
  'HTML5',
  'CSS3',
  'Git',
  'Tkinter',
  'SQL',
  'Figma',
]

const timeline = [
  {
    title: 'Machine Learning Intern',
    org: 'Acmegrade',
    time: 'Mar 2025 - May 2025',
    icon: <FiBriefcase />,
    points: [
      'Built an end-to-end spam message detection pipeline in Python with over 95% accuracy.',
      'Compared Logistic Regression, Naive Bayes, and SVM using TF-IDF features and cross-validation.',
      'Processed 5,000+ SMS records with tokenization, cleaning, and label encoding to improve precision.',
    ],
  },
  {
    title: 'B.Tech in Computer Science & Engineering',
    org: 'Galgotias University',
    time: '2024 - 2028',
    icon: <FiBookOpen />,
    points: [
      'Focused on DSA, OOP, DBMS, operating systems, and computer networks.',
      'Developing practical project experience across ML, automation, and desktop applications.',
    ],
  },
]

const projects = [
  {
    title: 'Password Manager GUI App',
    stack: 'Python, Tkinter, JSON, Clipboard Automation',
    blurb:
      'A desktop utility for generating, storing, and instantly retrieving strong passwords through a clean GUI workflow.',
    highlights: [
      'Strong password generation with letters, numbers, and symbols',
      'JSON-based credential storage with instant search',
      'Clipboard copy and validation to reduce manual errors',
    ],
  },
  {
    title: 'Spam Message Detection',
    stack: 'Python, NLP, scikit-learn',
    blurb:
      'An NLP classification system trained on SMS data to separate spam from legitimate messages with production-style pipeline thinking.',
    highlights: [
      'TF-IDF vectorization and model comparison',
      'Cross-validation and metrics-driven evaluation',
      'Structured documentation and mentor-ready presentation',
    ],
  },
  {
    title: 'Mail Merge Automation Script',
    stack: 'Python, File I/O, String Processing',
    blurb:
      'A script that personalizes bulk letters from template files and recipient lists, cutting repetitive manual work dramatically.',
    highlights: [
      'Processes 100+ names from text input',
      'Generates organized output files automatically',
      'Reduced manual workflow time by about 95%',
    ],
  },
]

const achievements = [
  'Oracle Certified - SQL Fundamentals',
  'Smart India Hackathon participant selected at institute level',
  'AI Day attendee with exposure to generative AI and deployment trends',
  'English professional proficiency and Hindi native fluency',
]

function App() {
  return (
    <div className="portfolio-shell">
      <div className="page-glow page-glow-one" />
      <div className="page-glow page-glow-two" />

      <header className="topbar">
        <a className="brand" href="#home">
          <span className="brand-mark">SC</span>
          <span className="brand-text">Somesh Chaudhary</span>
        </a>

        <nav className="nav">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="nav-cta" href="mailto:Someshchaudhary843347@gmail.com">
          Let&apos;s talk
        </a>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <div className="eyebrow">
              <FiZap />
              Open to software engineering and data science internships
            </div>

            <h1>
              Building sharp, useful products with
              <span> machine learning, automation, and code.</span>
            </h1>

            <p className="hero-text">
              I&apos;m Somesh, a Computer Science undergraduate from Galgotias University.
              I build practical ML pipelines, desktop tools, and workflow automation with
              a strong focus on clean execution and measurable results.
            </p>

            <div className="hero-actions">
              <a className="primary-btn" href="#projects">
                View projects
                <FiArrowRight />
              </a>
              <a className="secondary-btn" href="https://github.com/Somesh8433" target="_blank" rel="noreferrer">
                <FiGithub />
                GitHub
              </a>
            </div>

            <div className="hero-meta">
              <span>
                <FiMapPin />
                Delhi, India
              </span>
              <a href="mailto:Someshchaudhary843347@gmail.com">
                <FiMail />
                Email
              </a>
              <a href="tel:+918433479827">
                <FiPhone />
                +91 8433479827
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="portrait-card">
              <div className="portrait-ring" />
              <img src={profileImage} alt="Somesh Chaudhary" />
              <div className="portrait-badge">
                <FiTarget />
                ML + Software
              </div>
            </div>

            <div className="floating-card card-top">
              <span>Internship focus</span>
              <strong>Software Engineering</strong>
            </div>

            <div className="floating-card card-bottom">
              <span>Core stack</span>
              <strong>Python, Java, NLP</strong>
            </div>
          </div>
        </section>

        <section className="stats-strip">
          {stats.map((stat) => (
            <article className="stat-card" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </article>
          ))}
        </section>

        <section className="about-grid" id="about">
          <article className="panel intro-panel">
            <div className="section-chip">
              <FiCode />
              Profile
            </div>
            <h2>Technical range with a builder&apos;s mindset.</h2>
            <p>
              My work sits at the intersection of machine learning, NLP, and software
              development. I enjoy turning ideas into working systems, whether that means
              a classification pipeline, a GUI application, or an automation script that
              removes repetitive effort.
            </p>
            <p>
              I care about implementation details: preprocessing quality, model comparison,
              interface clarity, and making software feel reliable for real users.
            </p>
          </article>

          <article className="panel skills-panel">
            <div className="section-chip">
              <FiLayers />
              Stack
            </div>
            <h2>Tools I use to ship.</h2>
            <div className="skill-cloud">
              {skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </article>
        </section>

        <section className="timeline-section" id="work">
          <div className="section-heading">
            <div className="section-chip">
              <FiBriefcase />
              Experience
            </div>
            <h2>Learning fast, shipping real work, and building depth.</h2>
          </div>

          <div className="timeline">
            {timeline.map((item) => (
              <article className="timeline-card" key={`${item.title}-${item.time}`}>
                <div className="timeline-icon">{item.icon}</div>
                <div>
                  <p className="timeline-time">{item.time}</p>
                  <h3>{item.title}</h3>
                  <p className="timeline-org">{item.org}</p>
                  <ul>
                    {item.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="projects-section" id="projects">
          <div className="section-heading">
            <div className="section-chip">
              <FiGlobe />
              Projects
            </div>
            <h2>Selected work from ML, automation, and desktop software.</h2>
          </div>

          <div className="project-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.title}>
                <div className="project-index">0{index + 1}</div>
                <h3>{project.title}</h3>
                <p className="project-stack">{project.stack}</p>
                <p className="project-blurb">{project.blurb}</p>
                <ul>
                  {project.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="bottom-grid">
          <article className="panel achievement-panel">
            <div className="section-chip">
              <FiAward />
              Achievements
            </div>
            <h2>Signals of consistency and curiosity.</h2>
            <ul className="achievement-list">
              {achievements.map((achievement) => (
                <li key={achievement}>{achievement}</li>
              ))}
            </ul>
          </article>

          <article className="panel contact-panel" id="contact">
            <div className="section-chip">
              <FiMail />
              Contact
            </div>
            <h2>Let&apos;s build something useful.</h2>
            <p>
              I&apos;m looking for internship opportunities where I can contribute across
              software engineering, machine learning, or data-focused product work.
            </p>
            <div className="contact-links">
              <a href="mailto:Someshchaudhary843347@gmail.com">
                <FiMail />
                Someshchaudhary843347@gmail.com
              </a>
              <a href="https://www.linkedin.com/in/somesh-317654307" target="_blank" rel="noreferrer">
                <FiLinkedin />
                LinkedIn
              </a>
              <a href="https://github.com/Somesh8433" target="_blank" rel="noreferrer">
                <FiGithub />
                GitHub
              </a>
            </div>
          </article>
        </section>
      </main>
    </div>
  )
}

export default App
