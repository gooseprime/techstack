import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, CheckCircle, Clock, Trophy, Target } from 'lucide-react';
import { useProgress } from '../contexts/ProgressContext';
import { techStacks } from '../data/techStacks';

const ProgressPage = () => {
  const { progressData } = useProgress();

  const getStackData = (stackId: string) => {
    return techStacks.find(stack => stack.id === stackId);
  };

  const progressEntries = Object.entries(progressData).map(([stackId, progress]) => ({
    stackId,
    stack: getStackData(stackId),
    ...progress
  })).filter(entry => entry.stack);

  const totalStacks = progressEntries.length;
  const completedStacks = progressEntries.filter(entry => {
    const stack = entry.stack!;
    const totalSteps = stack.sections.reduce((acc, section) => acc + section.steps.length, 0);
    return entry.completedSteps.length === totalSteps;
  }).length;

  const totalTimeSpent = progressEntries.reduce((acc, entry) => {
    // Estimate time based on completed steps (simplified calculation)
    return acc + entry.completedSteps.length * 30; // 30 minutes per step
  }, 0);

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <Link
          to="/"
          className="inline-flex items-center space-x-2 text-white hover:text-gray-300 mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Home</span>
        </Link>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Your Learning Progress</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Track your journey through modern web development technologies and celebrate your achievements.
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-400">Stacks Started</p>
                <p className="text-2xl font-bold text-white">{totalStacks}</p>
              </div>
              <BookOpen className="h-8 w-8 text-white" />
            </div>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-400">Stacks Completed</p>
                <p className="text-2xl font-bold text-white">{completedStacks}</p>
              </div>
              <Trophy className="h-8 w-8 text-white" />
            </div>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-400">Total Steps</p>
                <p className="text-2xl font-bold text-white">
                  {progressEntries.reduce((acc, entry) => acc + entry.completedSteps.length, 0)}
                </p>
              </div>
              <CheckCircle className="h-8 w-8 text-white" />
            </div>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-400">Time Invested</p>
                <p className="text-2xl font-bold text-white">{Math.round(totalTimeSpent / 60)}h</p>
              </div>
              <Clock className="h-8 w-8 text-white" />
            </div>
          </div>
        </div>

        {/* Progress List */}
        {totalStacks === 0 ? (
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-12 text-center">
            <Target className="h-16 w-16 text-gray-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Start Your Learning Journey</h3>
            <p className="text-gray-400 mb-6">
              You haven't started any tech stack tutorials yet. Choose one from our comprehensive collection to begin.
            </p>
            <Link
              to="/"
              className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300"
            >
              Explore Tech Stacks
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">Your Tech Stacks</h2>
            
            {progressEntries.map((entry) => {
              const stack = entry.stack!;
              const totalSteps = stack.sections.reduce((acc, section) => acc + section.steps.length, 0);
              const completedSteps = entry.completedSteps.length;
              const progressPercentage = Math.round((completedSteps / totalSteps) * 100);

              return (
                <div key={entry.stackId} className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white">{stack.name}</h3>
                      <p className="text-gray-400">{stack.description}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-white">{progressPercentage}%</div>
                      <div className="text-sm text-gray-400">Complete</div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-gray-400 mb-2">
                      <span>Progress</span>
                      <span>{completedSteps} of {totalSteps} steps</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-white h-2 rounded-full transition-all duration-300"
                        style={{ width: `${progressPercentage}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-400">
                      Last updated: {new Date(entry.lastUpdated).toLocaleDateString()}
                    </div>
                    <Link
                      to={`/stack/${entry.stackId}`}
                      className="bg-white text-black px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition-all duration-300"
                    >
                      Continue Learning
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Achievements Section */}
        {completedStacks > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-white mb-6">Achievements</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-900 border border-white/20 text-white rounded-xl p-6">
                <Trophy className="h-8 w-8 mb-3" />
                <h3 className="font-semibold mb-2">First Stack Complete</h3>
                <p className="text-sm text-gray-400">Completed your first tech stack tutorial</p>
              </div>
              
              {completedStacks >= 3 && (
                <div className="bg-gray-900 border border-white/20 text-white rounded-xl p-6">
                  <Target className="h-8 w-8 mb-3" />
                  <h3 className="font-semibold mb-2">Multi-Stack Master</h3>
                  <p className="text-sm text-gray-400">Completed 3 or more tech stacks</p>
                </div>
              )}
              
              {totalTimeSpent >= 1200 && (
                <div className="bg-gray-900 border border-white/20 text-white rounded-xl p-6">
                  <Clock className="h-8 w-8 mb-3" />
                  <h3 className="font-semibold mb-2">Dedicated Learner</h3>
                  <p className="text-sm text-gray-400">Invested over 20 hours in learning</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProgressPage;