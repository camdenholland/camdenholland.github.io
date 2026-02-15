import { Github, Linkedin, Mail, ExternalLink, Calendar, Award, Target, ArrowDown } from 'lucide-react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { Project } from './components/Project';
import { useState } from 'react';
import HeadShot from '../images/HeadShot.jpg';

const NAME = "Camden Holland";
const EMAIL = "camden@mecch.com";
const DESCRIPTION = "I am a senior Computer Science and Mathematics student that is passionate about software engineering, machine learning, and creative coding. Graduating in May of 2026.";
const UNIVERSITY = "University of Northern Iowa";

const LANGUAGES = ['Python', 'Java', 'JavaScript', 'C', 'Racket'];
const TECHNOLOGIES = ['Git', 'React', 'Node.js', 'Electron'];
const CONCEPTS = ['Algorithms', 'Data Structures', 'OOP', 'Calculus', 'Linear Algebra', 'Combinatorics'];

const getAbout = () => (
  <>
    <p className="text-lg text-gray-700 leading-relaxed mb-6">
      I'm a senior Computer Science and Mathematics student at the{' '}
      <span className="text-blue-600 font-semibold">{UNIVERSITY}</span>
      , expected to graduate in May 2026. After I finish my undergraduate degrees, I am expecting to go to graduate school and get a Master's or PhD in Computer Science. I have applied to multiple universities including MIT, University of Illinois, University of Minnesota, and University of Iowa.
    </p>
    <p className="text-lg text-gray-700 leading-relaxed">
      Through coursework, personal projects, and internships, I've developed skills in full-stack 
      development, algorithms, and software design. I'm always eager to learn new technologies and take 
      on challenging problems.
    </p>
  </>
);

export default function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-xl font-semibold text-gray-900 hover:text-blue-600 transition-colors"
            >
              {NAME}
            </button>
            <div className="hidden md:flex space-x-8">
              {['About', 'Projects', 'Experience', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
            <a
              href={`mailto:${EMAIL}`}
              className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
            >
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline">Get in Touch</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-20 px-4 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm mb-6 mr-2">
                Computer Science Student
              </div>
              <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm mb-6 ml-2">
                Mathematics Student
              </div>
              <h1 className="text-5xl md:text-5xl mb-6 text-gray-900">
                Hi, I'm <span className="text-6xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{NAME}</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {DESCRIPTION}
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <span>View My Work</span>
                </button>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  className="flex items-center space-x-2 border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-colors"
                >
                  <span>Resume</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
                <a
                  href="/CV.pdf"
                  target="_blank"
                  className="flex items-center space-x-2 border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-colors"
                >
                  <span>Cirriculum Vitae</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/camdenholland"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  <Github className="w-5 h-5 text-gray-700" />
                </a>
                <a
                  href="https://www.linkedin.com/in/camden-holland-88b020306/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  <Linkedin className="w-5 h-5 text-gray-700" />
                </a>
                <a
                  href={`mailto:${EMAIL}`}
                  className="p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  <Mail className="w-5 h-5 text-gray-700" />
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src={HeadShot}
                  alt={`Head Shot - ${NAME}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-gradient-to-br from-blue-400 to-purple-400 rounded-2xl opacity-20 blur-3xl -z-10"></div>
            </div>
          </div>
          <div className="text-center mt-16">
            <button
              onClick={() => scrollToSection('about')}
              className="inline-flex flex-col items-center text-gray-500 hover:text-gray-700 transition-colors"
            >
              <span className="text-sm mb-2">Learn More</span>
              <ArrowDown className="w-5 h-5 animate-bounce" />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl mb-12 text-center text-gray-900">About Me</h2>
          <div className="max-w-3xl mx-auto mb-12">
            {getAbout()}
          </div>

          {/* Skills */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
              <h3 className="text-lg mb-3 text-gray-900 font-semibold">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {LANGUAGES.map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-white text-gray-700 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl">
              <h3 className="text-lg mb-3 text-gray-900 font-semibold">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {TECHNOLOGIES.map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-white text-gray-700 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-xl">
              <h3 className="text-lg mb-3 text-gray-900 font-semibold">Concepts</h3>
              <div className="flex flex-wrap gap-2">
                {CONCEPTS.map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-white text-gray-700 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl mb-4 text-center text-gray-900">Featured Projects and Publications</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            A selection of projects that showcase my technical skills and problem-solving abilities.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <Project title="Project 1" description='Project 1 description' image='' tags={['tag1', 'tag2', 'tag3']} githubUrl='https://github.com/camdenholland/' liveUrl='example.com' />

            {/* Project 2 */}
            <Project title="Project 2" description='Project 2 description' image='' tags={['tag1', 'tag2', 'tag3']} githubUrl='https://github.com/camdenholland/' liveUrl='example.com' />

            {/* Project 3 */}
            <Project title="Project 3" description='Project 3 description' image='' tags={['tag1', 'tag2', 'tag3']} githubUrl='https://github.com/camdenholland/' liveUrl='example.com' />

          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl mb-12 text-center text-gray-900">Experience & Education</h2>

          <div className="max-w-3xl mx-auto space-y-8">
            {/* Education */}
                {/* Computer Science */}
            <div className="border-l-4 border-blue-600 pl-6 py-2">
              <div className="flex items-center space-x-2 text-blue-600 mb-2">
                <Award className="w-5 h-5" />
                <span className="font-semibold">Education</span>
              </div>
              <h3 className="text-2xl text-gray-900 mb-2">Bachelor of Science in Computer Science</h3>
              <p className="text-lg text-gray-700 mb-1">{UNIVERSITY}</p>
              <div className="flex items-center space-x-2 text-gray-600 mb-3">
                <Calendar className="w-4 h-4" />
                <span>Expected May 2026 • GPA: FILL THIS IN/4.0</span>
              </div>
              <p className="text-gray-700 mb-3">
                <span className="font-semibold">Relevant Coursework:</span> Data Structures, Operating Systems, 
                Software Verification and Validation, Algorithms, Programming Languages, Embedded Systems, 
                Software Engineering, Compilers, UI Design
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">Dean's List</span>
                <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">Completed Undergraduate Research</span>
              </div>
            </div>
                
                {/* Mathematics */}
            <div className="border-l-4 border-blue-600 pl-6 py-2">
              <div className="flex items-center space-x-2 text-blue-600 mb-2">
                <Award className="w-5 h-5" />
                <span className="font-semibold">Education</span>
              </div>
              <h3 className="text-2xl text-gray-900 mb-2">Bachelor of Arts in Mathematics</h3>
              <p className="text-lg text-gray-700 mb-1">{UNIVERSITY}</p>
              <div className="flex items-center space-x-2 text-gray-600 mb-3">
                <Calendar className="w-4 h-4" />
                <span>Expected May 2026 • GPA: FILL THIS IN/4.0</span>
              </div>
              <p className="text-gray-700 mb-3">
                <span className="font-semibold">Relevant Coursework:</span> Calculus I, II, & III, Combinatorics, 
                Linear Algebra, Probability & Statistics, Modern Algebra I & II, Discrete and Argumentative Mathematics, 
                Dynamical Systems
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">Dean's List</span>
                <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">Completed Undergraduate Research</span>
              </div>
            </div>

            {/* Internships */}
            <div className="border-l-4 border-purple-600 pl-6 py-2">
              <div className="flex items-center space-x-2 text-purple-600 mb-2">
                <Target className="w-5 h-5" />
                <span className="font-semibold">Experience</span>
              </div>
              <h3 className="text-2xl text-gray-900 mb-2">Software Development Intern</h3>
              <p className="text-lg text-gray-700 mb-1">Musco Sports Lighting</p>
              <div className="flex items-center space-x-2 text-gray-600 mb-3">
                <Calendar className="w-4 h-4" />
                <span>Summer 2025</span>
              </div>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Contributed to full-stack development of an internal application using JavaScript, Python, 
                  HTML, and CSS. Worked with Electron, React.js, and Node.js to expand and modernize
                  existing code. </li>
                <li>Collaborated through Figma, FigJam, Git, and Microsoft Azure</li>
                <li>Gaining experience in UI design principles, including layout and color palette selection.</li>
              </ul>
            </div>

            <div className="border-l-4 border-purple-600 pl-6 py-2">
              <div className="flex items-center space-x-2 text-purple-600 mb-2">
                <Target className="w-5 h-5" />
                <span className="font-semibold">Experience</span>
              </div>
              <h3 className="text-2xl text-gray-900 mb-2">Summer Dependent/Intern</h3>
              <p className="text-lg text-gray-700 mb-1">Musco Sports Lighting</p>
              <div className="flex items-center space-x-2 text-gray-600 mb-3">
                <Calendar className="w-4 h-4" />
                <span>Summer 2023 - Winter 2025</span>
              </div>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Programmed customized light shows for clients ranging from high schools to major venues 
                  like NFL and MLB stadiums.</li>
                <li>Collaborated with engineers to design and synchronize lighting effects to music, create 
                  event-driven light sequences, and configure standard lighting functions. </li>
                <li>Gained hands-on experience with hardware, networking, and cross-departmental collaboration
                  with teams such as Sales and Engineering.</li>
              </ul>
            </div>

            {/* TA Experience */}
            <div className="border-l-4 border-green-600 pl-6 py-2">
              <div className="flex items-center space-x-2 text-green-600 mb-2">
                <Award className="w-5 h-5" />
                <span className="font-semibold">Leadership</span>
              </div>
              <h3 className="text-2xl text-gray-900 mb-2">Teaching Assistant</h3>
              <p className="text-lg text-gray-700 mb-1">Data Structures - University of Northern Iowa</p>
              <div className="flex items-center space-x-2 text-gray-600 mb-3">
                <Calendar className="w-4 h-4" />
                <span>Spring 2025</span>
              </div>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Assist students with programming assignments and course concepts</li>
                <li>Work closely with the professor to fully understand the topics</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl mb-4 text-center text-gray-900">Let's Connect</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            I'm currently looking for internship opportunities for Summer 2026. Feel free to reach out!
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-xl mb-4 text-gray-900">Get In Touch</h3>
                <div className="space-y-4">
                  <a
                    href={`mailto:${EMAIL}`}
                    className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    <span>{EMAIL}</span>
                  </a>
                  <a
                    href="https://github.com/camdenholland"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    <span>github.com/camdenholland</span>
                  </a>
                  <a
                    href="https://linkedin.com/in/camden-holland-88b020306"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                    <span>linkedin.com/in/camden-holland-88b020306</span>
                  </a>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200 rounded-xl p-6">
                <div className="flex items-start space-x-3">
                  <div className="text-2xl">🎯</div>
                  <div>
                    <h3 className="text-lg text-gray-900 mb-2">Looking For</h3>
                    <div className="space-y-1 text-gray-700">
                      <p>• Internship opportunities</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-xl mb-4 text-gray-900">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center text-gray-600">
          <p className="mb-2">© 2026 Camden Holland. Built with React & Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}
