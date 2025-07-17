import React, { useState } from 'react';
import { Target, Lightbulb, CheckCircle, XCircle } from 'lucide-react';

interface ChallengeProps {
  prompt: string;
  hint: string;
  answer: string;
  explanation?: string;
}

const Challenge: React.FC<ChallengeProps> = ({ prompt, hint, answer, explanation }) => {
  const [userAnswer, setUserAnswer] = useState('');
  const [showHint, setShowHint] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const checkAnswer = () => {
    const correct = userAnswer.toUpperCase().trim() === answer.toUpperCase().trim();
    setIsCorrect(correct);
    setSubmitted(true);
  };

  const reset = () => {
    setUserAnswer('');
    setSubmitted(false);
    setIsCorrect(false);
    setShowHint(false);
  };

  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 mb-8 border-2 border-blue-200">
      <div className="flex items-center mb-4">
        <Target className="h-6 w-6 text-blue-600 mr-2" />
        <h3 className="text-xl font-semibold text-blue-800">Mini Challenge</h3>
      </div>
      
      <div className="bg-white rounded-lg p-4 mb-4 border border-blue-200">
        <p className="text-blue-800 font-medium mb-3">{prompt}</p>
        
        <div className="space-y-3">
          <input
            type="text"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            className="w-full p-3 border border-blue-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter your answer..."
            disabled={submitted && isCorrect}
          />
          
          <div className="flex space-x-2">
            <button
              onClick={checkAnswer}
              disabled={!userAnswer.trim() || (submitted && isCorrect)}
              className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white px-4 py-2 rounded-md transition-colors"
            >
              Submit Answer
            </button>
            
            <button
              onClick={() => setShowHint(!showHint)}
              className="flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-md hover:bg-blue-200 transition-colors"
            >
              <Lightbulb className="h-4 w-4 mr-1" />
              {showHint ? 'Hide Hint' : 'Show Hint'}
            </button>
            
            {submitted && (
              <button
                onClick={reset}
                className="px-4 py-2 bg-gray-100 text-gray-800 rounded-md hover:bg-gray-200 transition-colors"
              >
                Try Again
              </button>
            )}
          </div>
        </div>
      </div>
      
      {showHint && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-4">
          <div className="flex items-start">
            <Lightbulb className="h-5 w-5 text-yellow-600 mr-2 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-yellow-800 mb-1">Hint:</p>
              <p className="text-sm text-yellow-700">{hint}</p>
            </div>
          </div>
        </div>
      )}
      
      {submitted && (
        <div className={`rounded-lg p-3 ${isCorrect ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
          <div className="flex items-start">
            {isCorrect ? (
              <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
            ) : (
              <XCircle className="h-5 w-5 text-red-600 mr-2 mt-0.5" />
            )}
            <div>
              <p className={`font-medium mb-1 ${isCorrect ? 'text-green-800' : 'text-red-800'}`}>
                {isCorrect ? 'Correct!' : 'Not quite right.'}
              </p>
              {isCorrect && explanation && (
                <p className="text-sm text-green-700">{explanation}</p>
              )}
              {!isCorrect && (
                <p className="text-sm text-red-700">
                  The correct answer is: <strong>{answer}</strong>
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Challenge;