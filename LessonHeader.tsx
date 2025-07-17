import React from 'react';
import { ArrowLeft, Clock, Star, Award } from 'lucide-react';

interface LessonHeaderProps {
  title: string;
  subtitle: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  onBack: () => void;
  isCompleted: boolean;
}

const LessonHeader: React.FC<LessonHeaderProps> = ({
  title,
  subtitle,
  difficulty,
  duration,
  onBack,
  isCompleted
}) => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800 border-green-200';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Advanced': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="mb-8">
      <button
        onClick={onBack}
        className="flex items-center text-amber-600 hover:text-amber-800 mb-4 transition-colors"
      >
        <ArrowLeft className="h-5 w-5 mr-2" />
        Back to Lessons
      </button>
      
      <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-amber-200">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center">
            {isCompleted ? (
              <div className="relative mr-4">
                <Star className="h-10 w-10 text-yellow-500 fill-current" />
                <Award className="h-5 w-5 text-yellow-600 absolute -top-1 -right-1" />
              </div>
            ) : (
              <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center mr-4">
                <span className="text-white font-bold text-lg">📚</span>
              </div>
            )}
            <div>
              <h1 className="text-3xl font-bold text-amber-800 mb-2">
                {title}
              </h1>
              <p className="text-lg text-amber-600">
                {subtitle}
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getDifficultyColor(difficulty)}`}>
              {difficulty}
            </span>
            <div className="flex items-center text-sm text-amber-600 bg-amber-100 px-3 py-1 rounded-full">
              <Clock className="h-4 w-4 mr-1" />
              {duration}
            </div>
          </div>
        </div>
        
        {isCompleted && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-3">
            <div className="flex items-center text-green-800">
              <Star className="h-5 w-5 mr-2 fill-current" />
              <span className="font-medium">Lesson Completed!</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LessonHeader;