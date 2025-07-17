import React from 'react';
import LessonHeader from '../components/LessonHeader';
import HistoryBox from '../components/HistoryBox';
import InteractiveCipher from '../components/InteractiveCipher';
import Challenge from '../components/Challenge';
import NavigationButtons from '../components/NavigationButtons';

interface LessonProps {
  onClose: () => void;
  onComplete: () => void;
  onNavigate: (lessonId: string) => void;
  isCompleted: boolean;
  lessons: any[];
  currentLessonId: string;
}

const WhatIsACipher: React.FC<LessonProps> = ({ 
  onClose, 
  onComplete, 
  onNavigate, 
  isCompleted, 
  lessons,
  currentLessonId 
}) => {
  const currentIndex = lessons.findIndex(l => l.id === currentLessonId);
  const nextLesson = lessons[currentIndex + 1];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <LessonHeader
        title="What is a Cipher?"
        subtitle="Journey into the secret world of hidden messages"
        difficulty="Beginner"
        duration="5 min"
        onBack={onClose}
        isCompleted={isCompleted}
      />

      <HistoryBox
        location="Ancient Greece, 500 BC"
        person="Spartan Scytale"
        quote="The Romans used ciphers to protect military secrets. Today, you use one every time you visit a website."
        context="The earliest known cipher device was the Spartan Scytale, used around 500 BC"
      />

      <section className="bg-white rounded-lg shadow-md p-6 mb-8 border border-amber-200">
        <h2 className="text-2xl font-semibold text-amber-800 mb-4">What You'll Learn</h2>
        <p className="text-amber-700 text-lg leading-relaxed mb-6">
          A cipher is an algorithm for transforming readable text into unreadable text to conceal its meaning. 
          Unlike codes that replace entire words or phrases, ciphers work systematically at the character level 
          using mathematical rules.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
            <h3 className="font-semibold text-amber-800 mb-2">🔐 Cipher</h3>
            <p className="text-amber-700 text-sm">
              Rules-based character transformation<br/>
              Example: A→D, B→E, C→F (Caesar cipher)
            </p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <h3 className="font-semibold text-blue-800 mb-2">📝 Code</h3>
            <p className="text-blue-700 text-sm">
              Meaning-based word replacement<br/>
              Example: "bluebird" = "attack at dawn"
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white rounded-lg shadow-md p-6 mb-8 border border-amber-200">
        <h2 className="text-2xl font-semibold text-amber-800 mb-4">Key Concepts</h2>
        <div className="space-y-4">
          <div className="flex items-start">
            <span className="bg-amber-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">1</span>
            <div>
              <h3 className="font-semibold text-amber-800">Systematic Transformation</h3>
              <p className="text-amber-700">Ciphers transform individual letters using consistent, mathematical rules</p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="bg-amber-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">2</span>
            <div>
              <h3 className="font-semibold text-amber-800">Reversible Process</h3>
              <p className="text-amber-700">The same algorithm can encrypt and decrypt with the proper key</p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="bg-amber-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">3</span>
            <div>
              <h3 className="font-semibold text-amber-800">Universal Application</h3>
              <p className="text-amber-700">Every secure communication system relies on cipher principles</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white rounded-lg shadow-md p-6 mb-8 border border-amber-200">
        <h2 className="text-2xl font-semibold text-amber-800 mb-4">Example in Action</h2>
        <div className="bg-amber-900 text-amber-100 p-6 rounded-lg">
          <div className="text-center space-y-2">
            <div className="text-lg">Plain Text: <span className="font-mono bg-amber-800 px-2 py-1 rounded">HELLO</span></div>
            <div className="text-amber-300">↓ Caesar Cipher (shift +3) ↓</div>
            <div className="text-lg">Cipher Text: <span className="font-mono bg-amber-800 px-2 py-1 rounded">KHOOR</span></div>
          </div>
        </div>
      </section>

      <InteractiveCipher 
        type="caesar"
        title="Try It Yourself"
        description="Experiment with a simple Caesar cipher to see how systematic transformation works"
      />

      <Challenge
        prompt="Using a Caesar cipher with shift 3, what does 'FLSKHU' decode to?"
        hint="Remember: to decode, shift backwards by 3 positions"
        answer="CIPHER"
        explanation="Each letter shifts back 3 positions: F→C, L→I, S→P, K→H, H→E, U→R"
      />

      <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mb-8">
        <h3 className="text-lg font-bold text-blue-800 mb-2 flex items-center">
          💡 Did You Know?
        </h3>
        <p className="text-blue-700">
          The word 'cipher' comes from Arabic 'sifr' meaning 'zero' - the same root as our word 'zero'! 
          This reflects the concept of making something "nothing" or invisible to unauthorized readers.
        </p>
      </div>

      <div className="flex justify-center mb-8">
        <button
          onClick={onComplete}
          className={`px-8 py-3 rounded-lg font-medium transition-all duration-300 ${
            isCompleted
              ? 'bg-green-600 text-white shadow-lg'
              : 'bg-amber-600 hover:bg-amber-700 text-white hover:shadow-lg'
          }`}
        >
          {isCompleted ? '✓ Completed!' : 'Mark Complete'}
        </button>
      </div>

      <NavigationButtons
        onNext={() => onNavigate('caesar-cipher')}
        onHome={onClose}
        nextTitle={nextLesson?.title}
        showPrevious={false}
      />
    </div>
  );
};

export default WhatIsACipher;