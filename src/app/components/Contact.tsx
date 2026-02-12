import { Mail, MapPin, Linkedin, Github, Twitter, Send } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the form data to a backend
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl mb-4 text-gray-900">Get In Touch</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            I'm always open to discussing new projects, research collaborations, or opportunities. 
            Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl mb-6 text-gray-900">Contact Information</h2>
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-gray-900 mb-1">Email</h3>
                  <a href="mailto:your.email@example.com" className="text-blue-600 hover:text-blue-700">
                    your.email@example.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-gray-900 mb-1">Location</h3>
                  <p className="text-gray-600">City, State, Country</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl mb-6 text-gray-900">Social Media</h2>
            <div className="space-y-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
              >
                <Github className="w-6 h-6 text-gray-700" />
                <div>
                  <p className="text-gray-900">GitHub</p>
                  <p className="text-sm text-gray-600">@yourusername</p>
                </div>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
              >
                <Linkedin className="w-6 h-6 text-blue-600" />
                <div>
                  <p className="text-gray-900">LinkedIn</p>
                  <p className="text-sm text-gray-600">@yourname</p>
                </div>
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
              >
                <Twitter className="w-6 h-6 text-blue-400" />
                <div>
                  <p className="text-gray-900">Twitter</p>
                  <p className="text-sm text-gray-600">@yourusername</p>
                </div>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-2xl mb-6 text-gray-900">Send a Message</h2>
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
                <label htmlFor="subject" className="block text-sm text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="What's this about?"
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
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>

        {/* Availability */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl p-8 text-center">
          <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full mb-4">
            🟢 Available for Opportunities
          </div>
          <h2 className="text-2xl text-gray-900 mb-3">Currently Open To</h2>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            <span className="px-4 py-2 bg-white text-gray-700 rounded-lg shadow-sm">Research Collaborations</span>
            <span className="px-4 py-2 bg-white text-gray-700 rounded-lg shadow-sm">Speaking Engagements</span>
            <span className="px-4 py-2 bg-white text-gray-700 rounded-lg shadow-sm">Consulting Projects</span>
            <span className="px-4 py-2 bg-white text-gray-700 rounded-lg shadow-sm">Full-time Positions</span>
            <span className="px-4 py-2 bg-white text-gray-700 rounded-lg shadow-sm">Mentorship</span>
          </div>
        </div>
      </div>
    </div>
  );
}
