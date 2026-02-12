import { ProjectCard } from './ProjectCard';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Projects() {
  const projects = [
    {
      title: 'Distributed Computing Framework',
      description: 'A scalable distributed computing framework built with Python and gRPC for processing large-scale data workloads across multiple nodes.',
      image: 'https://images.unsplash.com/photo-1703113690885-8caf0c77a7cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNobm9sb2d5JTIwbmV0d29ya3xlbnwxfHx8fDE3NzA3MjE1MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Python', 'gRPC', 'Distributed Systems', 'Docker'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
    },
    {
      title: 'Machine Learning Model Optimizer',
      description: 'An automated tool for optimizing neural network architectures using evolutionary algorithms and transfer learning techniques.',
      image: 'https://images.unsplash.com/photo-1702047048032-e734daa2473d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RlJTIwcHJvZ3JhbW1pbmclMjBsYXB0b3AlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzcwNzYzNDM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['TensorFlow', 'Python', 'Machine Learning', 'Neural Networks'],
      githubUrl: 'https://github.com',
    },
    {
      title: 'Real-time Collaboration Platform',
      description: 'A web-based collaboration platform with real-time editing capabilities, built using WebSockets and operational transformation.',
      image: 'https://images.unsplash.com/photo-1739298061740-5ed03045b280?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsYWJvcmF0aXZlJTIwd29ya3NwYWNlJTIwdGVhbXdvcmt8ZW58MXx8fHwxNzcwNzYzNDM4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['React', 'WebSocket', 'Node.js', 'MongoDB'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
    },
    {
      title: 'Blockchain-based Supply Chain',
      description: 'A transparent supply chain tracking system using blockchain technology to ensure authenticity and reduce counterfeiting.',
      image: 'https://images.unsplash.com/photo-1703113690885-8caf0c77a7cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNobm9sb2d5JTIwbmV0d29ya3xlbnwxfHx8fDE3NzA3MjE1MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Solidity', 'Ethereum', 'Web3.js', 'Smart Contracts'],
      githubUrl: 'https://github.com',
    },
    {
      title: 'Computer Vision Analytics',
      description: 'An advanced computer vision system for object detection and tracking in video streams using deep learning models.',
      image: 'https://images.unsplash.com/photo-1702047048032-e734daa2473d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RlJTIwcHJvZ3JhbW1pbmclMjBsYXB0b3AlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzcwNzYzNDM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['OpenCV', 'PyTorch', 'Python', 'YOLO'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
    },
    {
      title: 'Cloud Infrastructure Automation',
      description: 'Infrastructure as Code solution for automating cloud resource provisioning and management across multiple cloud providers.',
      image: 'https://images.unsplash.com/photo-1739298061740-5ed03045b280?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsYWJvcmF0aXZlJTIwd29ya3NwYWNlJTIwdGVhbXdvcmt8ZW58MXx8fHwxNzcwNzYzNDM4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Terraform', 'AWS', 'Azure', 'DevOps'],
      githubUrl: 'https://github.com',
    },
  ];

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl mb-4 text-gray-900">My Projects</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            A collection of my work spanning distributed systems, machine learning, web development, and more. 
            Each project demonstrates my commitment to writing clean, efficient code and solving complex problems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}
