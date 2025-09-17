import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Users, Star, CheckCircle, Circle, Play, Download, ExternalLink } from 'lucide-react';
import { techStacks } from '../data/techStacks';
import { useProgress } from '../contexts/ProgressContext';
import CodeBlock from '../components/CodeBlock';

const TechStackPage = () => {
  const { stackId } = useParams<{ stackId: string }>();
  const { getStackProgress, completeStep, isStepCompleted } = useProgress();
  const [activeSection, setActiveSection] = useState<string>('');

  const stack = techStacks.find(s => s.id === stackId);
  
  if (!stack) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Tech Stack Not Found</h1>
          <Link to="/" className="text-blue-600 hover:text-blue-800">
            ← Return to Home
          </Link>
        </div>
      </div>
    );
  }

  const progress = getStackProgress(stack.id);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-green-100 text-green-800';
      case 'intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <Link
          to="/"
          className="inline-flex items-center space-x-2 text-white hover:text-gray-300 mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Tech Stacks</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-black border border-white/10 rounded-xl p-6 sticky top-24">
              <h3 className="font-semibold text-white mb-4">Table of Contents</h3>
              <nav className="space-y-2">
                <a
                  href="#overview"
                  className="block text-sm text-gray-400 hover:text-white py-1"
                >
                  Overview
                </a>
                <a
                  href="#prerequisites"
                  className="block text-sm text-gray-400 hover:text-white py-1"
                >
                  Prerequisites
                </a>
                {stack.sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="block text-sm text-gray-400 hover:text-white py-1"
                  >
                    {section.title}
                  </a>
                ))}
              </nav>

              {/* Progress */}
              
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Header */}
            <div className="bg-black border border-white/10 rounded-xl p-8 mb-8">
              <div className="flex items-center justify-between mb-6">
                <h1 className="text-4xl font-bold text-white">{stack.name}</h1>
                <span className={`px-4 py-2 rounded-full text-sm font-medium ${getDifficultyColor(stack.difficulty)}`}>
                  {stack.difficulty}
                </span>
              </div>
              
              <p className="text-xl text-gray-400 mb-6">{stack.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="flex items-center space-x-2 text-gray-400">
                  <Clock className="h-5 w-5" />
                  <span>{stack.estimatedTime}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <Users className="h-5 w-5" />
                  <span>{stack.popularity}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <Star className="h-5 w-5 fill-white text-white" />
                  <span>{stack.rating}/5 Rating</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {stack.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-black text-white rounded-full text-sm font-medium border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Overview */}
            <section id="overview" className="bg-black border border-white/10 rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Overview</h2>
              <p className="text-gray-400 mb-6">{stack.overview}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Use Cases</h3>
                  <ul className="space-y-2">
                    {stack.useCases.map((useCase, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-white mt-0.5 flex-shrink-0" />
                        <span className="text-gray-400">{useCase}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Pros & Cons</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-white mb-2">Pros:</h4>
                      <ul className="space-y-1">
                        {stack.pros.slice(0, 3).map((pro, index) => (
                          <li key={index} className="text-sm text-gray-400">• {pro}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-300 mb-2">Cons:</h4>
                      <ul className="space-y-1">
                        {stack.cons.slice(0, 3).map((con, index) => (
                          <li key={index} className="text-sm text-gray-400">• {con}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Prerequisites */}
            <section id="prerequisites" className="bg-black border border-white/10 rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Prerequisites</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {stack.prerequisites.map((prerequisite, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4 bg-black rounded-lg border border-white/10">
                    <CheckCircle className="h-5 w-5 text-white mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{prerequisite}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Tutorial Sections */}
            {stack.sections.map((section, sectionIndex) => (
              <section key={section.id} id={section.id} className="bg-black border border-white/10 rounded-xl p-8 mb-8">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-white">{section.title}</h2>
                    <p className="text-gray-400 mt-2">{section.description}</p>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-400">
                    <Clock className="h-4 w-4" />
                    <span>{section.estimatedTime}</span>
                  </div>
                </div>

                <div className="space-y-6">
                  {section.steps.map((step, stepIndex) => {
                    const stepCompleted = isStepCompleted(stack.id, step.id);
                    
                    return (
                      <div key={step.id} className="border border-white/10 rounded-lg p-6 bg-black">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-start space-x-3">
                            <button
                              onClick={() => completeStep(stack.id, section.id, step.id)}
                              className={`mt-1 ${stepCompleted ? 'text-white' : 'text-gray-600 hover:text-white'}`}
                            >
                              {stepCompleted ? (
                                <CheckCircle className="h-6 w-6" />
                              ) : (
                                <Circle className="h-6 w-6" />
                              )}
                            </button>
                            <div>
                              <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                              <p className="text-gray-400 mt-1">{step.content}</p>
                            </div>
                          </div>
                        </div>

                        {step.codeExample && (
                          <div className="mt-4">
                            <CodeBlock
                              code={step.codeExample}
                              language={step.language || 'javascript'}
                            />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </section>
            ))}

            {/* Next Steps */}
            <div className="bg-black border border-white/20 text-white rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-4">Congratulations! 🎉</h2>
              <p className="text-gray-400 mb-6">
                You've completed the {stack.name} tutorial. Ready to take your skills to the next level?
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/comparison"
                  className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300 text-center"
                >
                  Compare Other Stacks
                </Link>
                <Link
                  to="/"
                  className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition-all duration-300 text-center"
                >
                  Explore More Tutorials
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStackPage;