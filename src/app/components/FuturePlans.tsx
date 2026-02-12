import { Target, TrendingUp, Lightbulb, Briefcase } from 'lucide-react';

export function FuturePlans() {
  const shortTermGoals = [
    {
      title: 'Complete Ph.D. Research',
      description: 'Finalize dissertation on distributed machine learning systems and defend by summer 2026.',
      timeline: '2026',
    },
    {
      title: 'Publish in Top-Tier Venues',
      description: 'Submit research papers to ICML, NeurIPS, and IEEE TPDS.',
      timeline: '2025-2026',
    },
    {
      title: 'Industry Collaboration',
      description: 'Partner with tech companies on applied ML research projects.',
      timeline: '2025',
    },
  ];

  const longTermGoals = [
    {
      title: 'Research Scientist Position',
      description: 'Join a leading tech company or research lab to work on cutting-edge AI and distributed systems.',
      timeline: '2026-2027',
    },
    {
      title: 'Open Source Contributions',
      description: 'Contribute to major open-source projects in ML frameworks and distributed computing.',
      timeline: 'Ongoing',
    },
    {
      title: 'Teaching & Mentorship',
      description: 'Mentor junior developers and potentially teach as an adjunct professor.',
      timeline: '2027+',
    },
  ];

  const researchInterests = [
    {
      icon: '🤖',
      title: 'Machine Learning Systems',
      description: 'Building scalable and efficient ML infrastructure for real-world applications.',
    },
    {
      icon: '🌐',
      title: 'Distributed Computing',
      description: 'Designing fault-tolerant distributed systems that can handle massive scale.',
    },
    {
      icon: '🔒',
      title: 'Privacy & Security',
      description: 'Developing privacy-preserving techniques for machine learning and data processing.',
    },
    {
      icon: '⚡',
      title: 'Edge Computing',
      description: 'Optimizing computation for resource-constrained edge devices and IoT systems.',
    },
  ];

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl mb-4 text-gray-900">Future Plans</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            My vision for the future, outlining career aspirations, research goals, and areas where I want to make an impact.
          </p>
        </div>

        {/* Vision Statement */}
        <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-lg p-8 md:p-12 mb-16 text-white">
          <div className="flex items-start space-x-4 mb-6">
            <div className="bg-white/20 p-3 rounded-lg">
              <Lightbulb className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-3xl mb-4">Vision Statement</h2>
              <p className="text-lg leading-relaxed text-blue-50">
                My goal is to bridge the gap between theoretical research and practical applications in computer science. 
                I aspire to develop technologies that democratize access to advanced computing capabilities and contribute 
                to solving real-world problems through innovative distributed systems and machine learning solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Short-term Goals */}
        <div className="mb-16">
          <div className="flex items-center space-x-3 mb-8">
            <Target className="w-8 h-8 text-blue-600" />
            <h2 className="text-3xl text-gray-900">Short-term Goals (1-2 years)</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {shortTermGoals.map((goal, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg text-gray-900">{goal.title}</h3>
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
                    {goal.timeline}
                  </span>
                </div>
                <p className="text-gray-600 leading-relaxed">{goal.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Long-term Goals */}
        <div className="mb-16">
          <div className="flex items-center space-x-3 mb-8">
            <TrendingUp className="w-8 h-8 text-purple-600" />
            <h2 className="text-3xl text-gray-900">Long-term Goals (3+ years)</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {longTermGoals.map((goal, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg text-gray-900">{goal.title}</h3>
                  <span className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm">
                    {goal.timeline}
                  </span>
                </div>
                <p className="text-gray-600 leading-relaxed">{goal.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Research Interests */}
        <div className="mb-16">
          <div className="flex items-center space-x-3 mb-8">
            <Briefcase className="w-8 h-8 text-green-600" />
            <h2 className="text-3xl text-gray-900">Research Interests</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {researchInterests.map((interest, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">{interest.icon}</div>
                  <div>
                    <h3 className="text-xl text-gray-900 mb-2">{interest.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{interest.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Career Path */}
        <div className="bg-white rounded-2xl shadow-sm p-8">
          <h2 className="text-3xl mb-8 text-gray-900">Career Path</h2>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                1
              </div>
              <div>
                <h3 className="text-xl text-gray-900 mb-2">Research & Development</h3>
                <p className="text-gray-600 leading-relaxed">
                  Begin career as a Research Scientist at a leading tech company or research lab, focusing on 
                  distributed ML systems and contributing to cutting-edge projects.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center">
                2
              </div>
              <div>
                <h3 className="text-xl text-gray-900 mb-2">Technical Leadership</h3>
                <p className="text-gray-600 leading-relaxed">
                  Progress to a senior technical role, leading research teams and making strategic decisions 
                  about technology direction and architecture.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                3
              </div>
              <div>
                <h3 className="text-xl text-gray-900 mb-2">Impact & Innovation</h3>
                <p className="text-gray-600 leading-relaxed">
                  Drive innovation through research publications, open-source contributions, and mentoring the 
                  next generation of computer scientists.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
