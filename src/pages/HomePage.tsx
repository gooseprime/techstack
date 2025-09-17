import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Users, TrendingUp, ArrowRight, Code, Database, Globe } from 'lucide-react';
import { techStacks } from '../data/techStacks';
import SearchBar from '../components/SearchBar';
import TechStackCard from '../components/TechStackCard';
import LaserFlow from '../components/LaserFlow';

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [selectedType, setSelectedType] = useState('all');

  const filteredStacks = techStacks.filter(stack => {
    const matchesSearch = stack.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         stack.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         stack.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesDifficulty = selectedDifficulty === 'all' || stack.difficulty === selectedDifficulty;
    const matchesType = selectedType === 'all' || stack.type === selectedType;
    
    return matchesSearch && matchesDifficulty && matchesType;
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-black text-white py-20 overflow-hidden">
        {/* Laser Background */}
        <div className="absolute inset-0 z-0">
          <LaserFlow
            color="#FFFFFF"
            wispDensity={0.8}
            fogIntensity={0.15}
            flowSpeed={0.35}
            wispSpeed={12}
            mouseTiltStrength={0.005}
            mouseSmoothTime={0.25}
            adaptiveDpr={false}
            horizontalBeamOffset={0}
            verticalBeamOffset={0}
            flowStrength={0.15}
          />
        </div>
        
        {/* Content overlay */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Master Modern
              <span className="block text-white">
                Web Development
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
              Complete, step-by-step guides for every major web development tech stack. 
              From setup to deployment, master the technologies that power the modern web.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
              <Link
                to="#stacks"
                className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition-all duration-300 flex items-center space-x-2 border-2 border-white"
              >
                <span>Explore Tech Stacks</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/comparison"
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition-all duration-300"
              >
                Compare Stacks
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">{techStacks.length}+</div>
                <div className="text-gray-400">Tech Stacks Covered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">100+</div>
                <div className="text-gray-400">Step-by-Step Tutorials</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">50K+</div>
                <div className="text-gray-400">Developers Learning</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section id="stacks" className="py-12 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Find Your Perfect Tech Stack</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Filter by difficulty, type, or search for specific technologies to find the guide that matches your needs.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-4 mb-8">
            <div className="flex-1">
              <SearchBar
                value={searchQuery}
                onChange={setSearchQuery}
                placeholder="Search tech stacks, technologies, or frameworks..."
              />
            </div>
            <div className="flex gap-4">
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="px-4 py-2 bg-black border border-white/20 text-white rounded-lg focus:ring-2 focus:ring-white focus:border-white"
              >
                <option value="all">All Difficulties</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="px-4 py-2 bg-black border border-white/20 text-white rounded-lg focus:ring-2 focus:ring-white focus:border-white"
              >
                <option value="all">All Types</option>
                <option value="fullstack">Full Stack</option>
                <option value="frontend">Frontend</option>
                <option value="backend">Backend</option>
                <option value="jamstack">JAMstack</option>
              </select>
            </div>
          </div>

          {/* Results count */}
          <div className="mb-6">
            <p className="text-gray-400">
              Showing {filteredStacks.length} of {techStacks.length} tech stacks
            </p>
          </div>

          {/* Tech Stacks Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStacks.map((stack) => (
              <TechStackCard key={stack.id} stack={stack} />
            ))}
          </div>

          {filteredStacks.length === 0 && (
            <div className="text-center py-12">
              <Search className="h-12 w-12 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No tech stacks found</h3>
              <p className="text-gray-400">Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Everything You Need to Master Web Development</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our comprehensive guides include everything from basic setup to advanced deployment strategies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-black border border-white/10 rounded-xl p-8 hover:border-white/20 transition-all duration-300">
              <Code className="h-12 w-12 text-white mb-4" />
              <h3 className="text-xl font-semibold text-white mb-4">Step-by-Step Tutorials</h3>
              <p className="text-gray-400">
                Detailed, easy-to-follow guides that take you from zero to production-ready applications.
              </p>
            </div>

            <div className="bg-black border border-white/10 rounded-xl p-8 hover:border-white/20 transition-all duration-300">
              <Database className="h-12 w-12 text-white mb-4" />
              <h3 className="text-xl font-semibold text-white mb-4">Real-World Projects</h3>
              <p className="text-gray-400">
                Build actual applications that demonstrate best practices and industry standards.
              </p>
            </div>

            <div className="bg-black border border-white/10 rounded-xl p-8 hover:border-white/20 transition-all duration-300">
              <Globe className="h-12 w-12 text-white mb-4" />
              <h3 className="text-xl font-semibold text-white mb-4">Deployment Guides</h3>
              <p className="text-gray-400">
                Learn how to deploy your applications to modern platforms like Vercel, Netlify, and AWS.
              </p>
            </div>

            <div className="bg-black border border-white/10 rounded-xl p-8 hover:border-white/20 transition-all duration-300">
              <TrendingUp className="h-12 w-12 text-white mb-4" />
              <h3 className="text-xl font-semibold text-white mb-4">Performance Optimization</h3>
              <p className="text-gray-400">
                Advanced techniques to make your applications fast, scalable, and production-ready.
              </p>
            </div>


            <div className="bg-black border border-white/10 rounded-xl p-8 hover:border-white/20 transition-all duration-300">
              <Users className="h-12 w-12 text-white mb-4" />
              <h3 className="text-xl font-semibold text-white mb-4">Community Support</h3>
              <p className="text-gray-400">
                Join thousands of developers learning together and get help when you need it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Web Development Journey?
          </h2>
          <p className="text-xl mb-8 text-gray-400">
            Choose your first tech stack and begin building amazing web applications today.
          </p>
          <Link
            to="#stacks"
            className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-200 transition-all duration-300 inline-flex items-center space-x-2"
          >
            <span>Get Started Now</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;