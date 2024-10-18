import React from 'react';
import { 
  FileCode2, 
  FileCode, 
  Coffee, 
  Database,
  Cloud,
  Globe,
  Package,
  Server,
  Paintbrush,
  Send
} from 'lucide-react';

const TechStack = () => {
  const technologies = [
    { name: 'CSS3', color: '#1572B6', logoColor: 'white' },
    { name: 'HTML5', color: '#E34F26', logoColor: 'white' },
    { name: 'JavaScript', color: '#323330', logoColor: '#F7DF1E' },
    { name: 'Python', color: '#3670A0', logoColor: '#ffdd54' },
    { name: 'Google Cloud', color: '#4285F4', logoColor: 'white' },
    { name: 'Bootstrap', color: '#8511FA', logoColor: 'white' },
    { name: 'Flask', color: '#000000', logoColor: 'white' },
    { name: 'NodeJS', color: '#6DA55F', logoColor: 'white' },
    { name: 'NPM', color: '#CB3837', logoColor: 'white' },
    { name: 'React', color: '#20232a', logoColor: '#61DAFB' },
    { name: 'WordPress', color: '#117AC9', logoColor: 'white' },
    { name: 'MySQL', color: '#4479A1', logoColor: 'white' },
    { name: 'PostgreSQL', color: '#316192', logoColor: 'white' },
    { name: 'Canva', color: '#00C4CC', logoColor: 'white' },
    { name: 'Postman', color: '#FF6C37', logoColor: 'white' },
    { name: 'Prezi', color: '#000000', logoColor: 'white' }
  ];

  const getIcon = (name) => {
    switch (name) {
      case 'CSS3':
        return <FileCode2 size={16} />;
      case 'HTML5':
        return <FileCode size={16} />;
      case 'JavaScript':
        return <FileCode size={16} />;
      case 'Python':
        return <FileCode2 size={16} />;
      case 'Google Cloud':
        return <Cloud size={16} />;
      case 'Bootstrap':
        return <Globe size={16} />;
      case 'Flask':
        return <Package size={16} />;
      case 'NodeJS':
        return <Server size={16} />;
      case 'NPM':
        return <Package size={16} />;
      case 'React':
        return <Package size={16} />;
      case 'WordPress':
        return <Globe size={16} />;
      case 'MySQL':
        return <Database size={16} />;
      case 'PostgreSQL':
        return <Database size={16} />;
      case 'Canva':
        return <Paintbrush size={16} />;
      case 'Postman':
        return <Send size={16} />;
      case 'Prezi':
        return <Paintbrush size={16} />;
      default:
        return <FileCode size={16} />;
    }
  };

  return (
    <div className="flex flex-wrap gap-2 p-4 justify-start">
      {technologies.map((tech, index) => (
        <div
          key={index}
          className="inline-flex items-center justify-center h-8 gap-2 px-3 rounded"
          style={{ backgroundColor: tech.color }}
        >
          <div className="flex items-center justify-center" style={{ color: tech.logoColor }}>
            {getIcon(tech.name)}
          </div>
          <span 
            className="text-sm font-bold flex items-center"
            style={{ color: tech.logoColor }}
          >
            {tech.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default TechStack;