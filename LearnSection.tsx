import React, { useState } from 'react';
import { ArrowLeft, BookOpen, Clock, Star, Users, Calendar } from 'lucide-react';

// Import lesson pages
import WhatIsACipher from '../pages/WhatIsACipher';
import CaesarCipher from '../pages/CaesarCipher';
import SubstitutionCiphers from '../pages/SubstitutionCiphers';
import EnigmaMachines from '../pages/EnigmaMachines';
import ModernCiphers from '../pages/ModernCiphers';
import BreakingCodes from '../pages/BreakingCodes';

const LearnSection: React.FC = () => {
  const [currentLesson, setCurrentLesson] = useState<string | null>(null);
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);

  const lessons = [
    {
      id: 'what-is-cipher',
      title: "What is a Cipher?",
      description: "Journey into the secret world of hidden messages",
      difficulty: "Beginner",
      duration: "5 min",
      historicalContext: "Ancient Greece, 500 BC",
      keyFigure: "Spartan Scytale",
      component: WhatIsACipher
    },
    {
      id: 'caesar-cipher',
      title: "Caesar Cipher",
      description: "Master the cipher that protected Roman legions",
      difficulty: "Beginner",
      duration: "10 min",
      historicalContext: "Roman Empire, 58-50 BC",
      keyFigure: "Julius Caesar",
      component: CaesarCipher
    },
    {
      id: 'substitution-ciphers',
      title: "Substitution Ciphers",
      description: "Unlock the secrets of letter frequency and pattern analysis",
      difficulty: "Intermediate",
      duration: "15 min",
      historicalContext: "Renaissance Italy, 1400s",
      keyFigure: "Leon Battista Alberti",
      component: SubstitutionCiphers
    },
    {
      id: 'enigma-machines',
      title: "Enigma & WWII Machines",
      description: "Enter Bletchley Park and the machines that changed history",
      difficulty: "Advanced",
      duration: "20 min",
      historicalContext: "World War II, 1939-1945",
      keyFigure: "Alan Turing & Bletchley Park",
      component: EnigmaMachines
    },
    {
      id: 'modern-ciphers',
      title: "Modern Ciphers",
      description: "From forum spoilers to digital security foundations",
      difficulty: "Intermediate",
      duration: "12 min",
      historicalContext: "Digital Age, 1970s-present",
      keyFigure: "Computer Scientists",
      component: ModernCiphers
    },
    {
      id: 'breaking-codes',
      title: "Breaking Codes",
      description: "Think like a codebreaker - patterns, frequencies, and intuition",
      difficulty: "Advanced",
      duration: "18 min",
      historicalContext: "Throughout History",
      keyFigure: "Cryptanalysts",
      component: BreakingCodes
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800 border-green-200';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Advanced': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const openLesson = (lessonId: string) => {
    setCurrentLesson(lessonId);
  };

  const closeLesson = () => {
    setCurrentLesson(null);
  };

  const markComplete = (lessonId: string) => {
    if (!completedLessons.includes(lessonId)) {
      setCompletedLessons([...completedLessons, lessonId]);
    }
  };

  const navigateToLesson = (lessonId: string) => {
    setCurrentLesson(lessonId);
  };

  // If a lesson is selected, render the lesson page
  if (currentLesson) {
    const lesson = lessons.find(l => l.id === currentLesson);
    if (lesson) {
      const LessonComponent = lesson.component;
      return (
        <LessonComponent
          onClose={closeLesson}
          onComplete={() => markComplete(currentLesson)}
          onNavigate={navigateToLesson}
          isCompleted={completedLessons.includes(currentLesson)}
          lessons={lessons}
          currentLessonId={currentLesson}
        />
      );
    }
  }

  // Otherwise, render the lesson selection grid
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-amber-800 mb-4">
          Learn Cryptography
        </h1>
        <p className="text-lg text-amber-700 mb-6">
          Master the art of secret communication through immersive historical lessons
        </p>
        <div className="bg-gradient-to-r from-amber-800 to-orange-900 text-white p-4 rounded-lg max-w-2xl mx-auto">
          <p className="italic">
            "We are not trying to break the codes, we are trying to break the machines that make the codes."
          </p>
          <p className="text-sm mt-2 text-amber-200">- Alan Turing</p>
        </div>
      </div>

      {/* Lesson Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {lessons.map((lesson, index) => (
          <div
            key={lesson.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-amber-200 hover:border-amber-300 transition-all duration-300 cursor-pointer"
            onClick={() => openLesson(lesson.id)}
          >
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  {completedLessons.includes(lesson.id) ? (
                    <Star className="h-8 w-8 text-yellow-500 fill-current mr-3" />
                  ) : (
                    <BookOpen className="h-8 w-8 text-amber-600 mr-3" />
                  )}
                  <div className="text-2xl font-bold text-amber-800">
                    {index + 1}
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getDifficultyColor(lesson.difficulty)}`}>
                    {lesson.difficulty}
                  </span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-amber-800 mb-2">
                {lesson.title}
              </h3>
              <p className="text-amber-600 mb-4">
                {lesson.description}
              </p>

              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-amber-700">
                  <Calendar className="h-4 w-4 mr-2" />
                  {lesson.historicalContext}
                </div>
                <div className="flex items-center text-sm text-amber-700">
                  <Users className="h-4 w-4 mr-2" />
                  {lesson.keyFigure}
                </div>
                <div className="flex items-center text-sm text-amber-700">
                  <Clock className="h-4 w-4 mr-2" />
                  {lesson.duration}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-sm text-amber-600">
                  Lesson {index + 1} of {lessons.length}
                </div>
                {completedLessons.includes(lesson.id) && (
                  <div className="text-sm text-green-600 font-medium">
                    ✓ Completed
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Progress Section */}
      <div className="bg-white rounded-lg shadow-lg p-8 border-2 border-amber-200">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-amber-800 mb-2">
            Your Learning Journey
          </h3>
          <p className="text-amber-700">
            Progress: {completedLessons.length} of {lessons.length} lessons completed
          </p>
        </div>
        
        <div className="w-full bg-amber-200 rounded-full h-4 mb-6">
          <div
            className="bg-gradient-to-r from-amber-600 to-orange-600 h-4 rounded-full transition-all duration-500 shadow-inner"
            style={{ width: `${(completedLessons.length / lessons.length) * 100}%` }}
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {lessons.map((lesson, index) => (
            <div
              key={lesson.id}
              className={`text-center p-3 rounded-lg border-2 transition-all cursor-pointer hover:shadow-md ${
                completedLessons.includes(lesson.id)
                  ? 'bg-green-50 border-green-300'
                  : 'bg-amber-50 border-amber-200'
              }`}
              onClick={() => openLesson(lesson.id)}
            >
              <div className="text-2xl mb-2">
                {completedLessons.includes(lesson.id) ? '⭐' : '📚'}
              </div>
              <div className="text-sm font-medium text-amber-800">
                Lesson {index + 1}
              </div>
              <div className="text-xs text-amber-600">
                {lesson.difficulty}
              </div>
            </div>
          ))}
        </div>

        {completedLessons.length === lessons.length && (
          <div className="mt-8 text-center">
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-6 rounded-lg">
              <h4 className="text-2xl font-bold mb-2">🎉 Congratulations, Cryptographer!</h4>
              <p className="text-lg">
                You've mastered the fundamentals of cryptography. Ready for some challenges?
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LearnSection;