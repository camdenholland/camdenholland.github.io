import { Calendar, Award, BookOpen } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Education() {
  const education = [
    {
      degree: 'Ph.D. in Computer Science',
      institution: 'University Name',
      location: 'City, State',
      period: '2024 - Present',
      description: 'Focusing on distributed systems and machine learning algorithms. Research includes optimization of large-scale data processing frameworks.',
      gpa: '4.0/4.0',
      honors: ['Presidential Fellowship', 'Outstanding Research Award'],
    },
    {
      degree: 'M.S. in Computer Science',
      institution: 'University Name',
      location: 'City, State',
      period: '2022 - 2024',
      description: 'Specialized in artificial intelligence and machine learning. Thesis on neural network optimization techniques.',
      gpa: '3.9/4.0',
      honors: ['Summa Cum Laude', 'Best Thesis Award', 'Dean\'s List'],
    },
    {
      degree: 'B.S. in Computer Science',
      institution: 'University Name',
      location: 'City, State',
      period: '2018 - 2022',
      description: 'Strong foundation in algorithms, data structures, and software engineering. Minor in Mathematics.',
      gpa: '3.8/4.0',
      honors: ['Magna Cum Laude', 'Dean\'s List (All Semesters)'],
    },
  ];

  const certifications = [
    {
      name: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: 'January 2024',
    },
    {
      name: 'TensorFlow Developer Certificate',
      issuer: 'Google',
      date: 'August 2023',
    },
    {
      name: 'Certified Kubernetes Administrator',
      issuer: 'Cloud Native Computing Foundation',
      date: 'March 2023',
    },
  ];

  const courses = [
    'Advanced Machine Learning',
    'Distributed Systems',
    'Algorithm Design & Analysis',
    'Computer Architecture',
    'Database Systems',
    'Operating Systems',
    'Software Engineering',
    'Computer Networks',
    'Artificial Intelligence',
    'Data Structures',
    'Cloud Computing',
    'Cybersecurity',
  ];

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl mb-4 text-gray-900">Education</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            My academic journey in computer science, showcasing the theoretical foundations and practical skills 
            I've developed throughout my studies.
          </p>
        </div>

        {/* Degrees */}
        <div className="mb-16">
          <h2 className="text-3xl mb-8 text-gray-900">Academic Degrees</h2>
          <div className="space-y-6">
            {education.map((edu, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-sm p-8 hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl text-gray-900 mb-2">{edu.degree}</h3>
                    <p className="text-lg text-gray-700">{edu.institution}</p>
                    <p className="text-gray-600">{edu.location}</p>
                  </div>
                  <div className="mt-4 md:mt-0 flex items-center space-x-2 text-gray-600">
                    <Calendar className="w-5 h-5" />
                    <span>{edu.period}</span>
                  </div>
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">{edu.description}</p>
                <div className="flex flex-wrap gap-4 mb-4">
                  <div className="flex items-center space-x-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-lg">
                    <BookOpen className="w-4 h-4" />
                    <span className="text-sm">GPA: {edu.gpa}</span>
                  </div>
                </div>
                {edu.honors.length > 0 && (
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <Award className="w-5 h-5 text-yellow-600" />
                      <span className="font-semibold text-gray-900">Honors & Awards:</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {edu.honors.map((honor, honorIdx) => (
                        <span
                          key={honorIdx}
                          className="px-3 py-1 bg-yellow-50 text-yellow-700 rounded-full text-sm"
                        >
                          {honor}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h2 className="text-3xl mb-8 text-gray-900">Certifications</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg text-gray-900 mb-2">{cert.name}</h3>
                <p className="text-gray-600 mb-1">{cert.issuer}</p>
                <p className="text-sm text-gray-500">{cert.date}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Relevant Coursework */}
        <div className="mb-16">
          <h2 className="text-3xl mb-8 text-gray-900">Relevant Coursework</h2>
          <div className="bg-white rounded-xl shadow-sm p-8">
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
              {courses.map((course, idx) => (
                <div
                  key={idx}
                  className="px-4 py-3 bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  {course}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1642130935796-1409d7e075dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzcwNzMwMzcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="University Campus"
            className="w-full h-96 object-cover"
          />
        </div>
      </div>
    </div>
  );
}
