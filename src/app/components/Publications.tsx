import { FileText, ExternalLink, Calendar, Users } from 'lucide-react';

export function Publications() {
  const publications = [
    {
      title: 'Optimizing Distributed Machine Learning Workloads Using Adaptive Resource Allocation',
      authors: ['Your Name', 'Co-Author 1', 'Co-Author 2'],
      venue: 'IEEE Transactions on Parallel and Distributed Systems',
      year: '2024',
      type: 'Journal Article',
      abstract: 'This paper presents a novel approach to optimizing resource allocation in distributed machine learning systems, achieving up to 40% improvement in training efficiency.',
      doi: '10.1109/TPDS.2024.xxxxx',
      pdf: 'https://example.com/paper1.pdf',
    },
    {
      title: 'A Survey of Modern Techniques in Neural Network Compression',
      authors: ['Your Name', 'Co-Author 1'],
      venue: 'ACM Computing Surveys',
      year: '2023',
      type: 'Survey Paper',
      abstract: 'A comprehensive survey examining state-of-the-art techniques for neural network compression, including pruning, quantization, and knowledge distillation.',
      doi: '10.1145/xxxxx',
      pdf: 'https://example.com/paper2.pdf',
    },
    {
      title: 'Real-time Anomaly Detection in IoT Networks Using Federated Learning',
      authors: ['Your Name', 'Co-Author 1', 'Co-Author 2', 'Co-Author 3'],
      venue: 'International Conference on Machine Learning (ICML)',
      year: '2023',
      type: 'Conference Paper',
      abstract: 'We propose a federated learning framework for detecting anomalies in IoT networks while preserving privacy and reducing bandwidth requirements.',
      doi: '10.48550/arXiv.2023.xxxxx',
      pdf: 'https://example.com/paper3.pdf',
    },
    {
      title: 'Blockchain-Based Authentication for Distributed Systems',
      authors: ['Your Name', 'Co-Author 1'],
      venue: 'ACM Symposium on Operating Systems Principles (SOSP)',
      year: '2022',
      type: 'Conference Paper',
      abstract: 'A novel authentication mechanism leveraging blockchain technology to provide secure and decentralized identity management in distributed systems.',
      doi: '10.1145/xxxxx.xxxxx',
      pdf: 'https://example.com/paper4.pdf',
    },
    {
      title: 'Energy-Efficient Deep Learning on Edge Devices',
      authors: ['Your Name', 'Co-Author 1', 'Co-Author 2'],
      venue: 'IEEE Internet of Things Journal',
      year: '2022',
      type: 'Journal Article',
      abstract: 'This work introduces energy-efficient deep learning techniques optimized for resource-constrained edge devices, reducing power consumption by 60%.',
      doi: '10.1109/JIOT.2022.xxxxx',
      pdf: 'https://example.com/paper5.pdf',
    },
  ];

  const presentations = [
    {
      title: 'Future of Distributed Computing: Challenges and Opportunities',
      event: 'Tech Conference 2024',
      location: 'San Francisco, CA',
      date: 'March 2024',
    },
    {
      title: 'Machine Learning at Scale: Best Practices',
      event: 'AI Summit 2023',
      location: 'New York, NY',
      date: 'November 2023',
    },
    {
      title: 'Privacy-Preserving Machine Learning',
      event: 'Security Symposium 2023',
      location: 'Boston, MA',
      date: 'June 2023',
    },
  ];

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl mb-4 text-gray-900">Publications</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            My research contributions to the field of computer science, published in top-tier journals and conferences.
          </p>
        </div>

        {/* Publications List */}
        <div className="mb-16">
          <h2 className="text-3xl mb-8 text-gray-900">Research Papers</h2>
          <div className="space-y-6">
            {publications.map((pub, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-sm p-8 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-start space-x-3 mb-3">
                      <FileText className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-xl text-gray-900 mb-2">{pub.title}</h3>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-2">
                          <div className="flex items-center space-x-2">
                            <Users className="w-4 h-4" />
                            <span>{pub.authors.join(', ')}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Calendar className="w-4 h-4" />
                            <span>{pub.year}</span>
                          </div>
                        </div>
                        <p className="text-blue-600 mb-3">{pub.venue}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-4">{pub.abstract}</p>
                    <div className="flex flex-wrap gap-3">
                      <span className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm">
                        {pub.type}
                      </span>
                      <a
                        href={pub.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm hover:bg-blue-100 transition-colors"
                      >
                        <ExternalLink className="w-3 h-3" />
                        <span>PDF</span>
                      </a>
                      <span className="px-3 py-1 bg-gray-50 text-gray-600 rounded-full text-sm font-mono">
                        DOI: {pub.doi}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Presentations */}
        <div className="mb-16">
          <h2 className="text-3xl mb-8 text-gray-900">Conference Presentations</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {presentations.map((pres, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-lg text-gray-900 mb-3">{pres.title}</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p className="font-semibold text-blue-600">{pres.event}</p>
                  <p>{pres.location}</p>
                  <p className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{pres.date}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-sm p-6 text-white">
            <div className="text-4xl mb-2">5</div>
            <div className="text-blue-100">Publications</div>
          </div>
          <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl shadow-sm p-6 text-white">
            <div className="text-4xl mb-2">3</div>
            <div className="text-purple-100">Presentations</div>
          </div>
          <div className="bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl shadow-sm p-6 text-white">
            <div className="text-4xl mb-2">127</div>
            <div className="text-pink-100">Citations</div>
          </div>
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl shadow-sm p-6 text-white">
            <div className="text-4xl mb-2">12</div>
            <div className="text-orange-100">h-index</div>
          </div>
        </div>
      </div>
    </div>
  );
}
