import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Users, Star, ArrowRight, TrendingUp } from 'lucide-react';
import { TechStack } from '../types';
import { useProgress } from '../contexts/ProgressContext';

interface TechStackCardProps {
  stack: TechStack;
}

const TechStackCard: React.FC<TechStackCardProps> = ({ stack }) => {
  const { getStackProgress } = useProgress();
  const progress = getStackProgress(stack.id);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-green-100 text-green-800';
      case 'intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'fullstack': return '🔗';
      case 'frontend': return '🎨';
      case 'backend': return '⚙️';
      case 'jamstack': return '⚡';
      default: return '💻';
    }
  };

  return (
    <div className="bg-black border border-white/10 rounded-xl hover:border-white/20 transition-all duration-300 overflow-hidden group">
      {/* Card Header */}
      <div className="p-6 pb-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-2xl">{getTypeIcon(stack.type)}</span>
            <h3 className="text-xl font-bold text-white">{stack.name}</h3>
          </div>
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(stack.difficulty)}`}>
            {stack.difficulty}
          </span>
        </div>

        <p className="text-gray-400 mb-4 line-clamp-3">{stack.description}</p>

        {/* Progress Bar */}
        {progress > 0 && (
          <div className="mb-4">
            <div className="flex justify-between text-sm text-gray-400 mb-1">
              <span>Progress</span>
              <span>{progress}%</span>
            </div>
            <div className="w-full bg-white/10 rounded-full h-2">
              <div 
                className="bg-white h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        )}

        {/* Tech Stack Technologies */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {stack.technologies.slice(0, 4).map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-black text-white rounded-md text-sm font-medium border border-white/10"
              >
                {tech}
              </span>
            ))}
            {stack.technologies.length > 4 && (
              <span className="px-2 py-1 bg-black text-gray-400 rounded-md text-sm border border-white/10">
                +{stack.technologies.length - 4} more
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Card Stats */}
      <div className="px-6 py-4 bg-black border-t border-white/10">
        <div className="flex items-center justify-between text-sm text-gray-400">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>{stack.estimatedTime}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Users className="h-4 w-4" />
              <span>{stack.popularity}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Star className="h-4 w-4 fill-white text-white" />
              <span>{stack.rating}/5</span>
            </div>
          </div>
          
          {stack.trending && (
            <div className="flex items-center space-x-1 text-white">
              <TrendingUp className="h-4 w-4" />
              <span className="text-xs font-medium">Trending</span>
            </div>
          )}
        </div>
      </div>

      {/* Card Footer */}
      <div className="p-6 pt-4">
        <Link
          to={`/stack/${stack.id}`}
          className="w-full bg-white text-black py-3 px-4 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300 flex items-center justify-center space-x-2 group"
        >
          <span>Start Learning</span>
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

export default TechStackCard;