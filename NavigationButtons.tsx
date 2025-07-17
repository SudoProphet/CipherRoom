import React from 'react';
import { ChevronLeft, ChevronRight, Home } from 'lucide-react';

interface NavigationButtonsProps {
  onPrevious?: () => void;
  onNext?: () => void;
  onHome: () => void;
  previousTitle?: string;
  nextTitle?: string;
  showPrevious?: boolean;
  showNext?: boolean;
}

const NavigationButtons: React.FC<NavigationButtonsProps> = ({
  onPrevious,
  onNext,
  onHome,
  previousTitle,
  nextTitle,
  showPrevious = true,
  showNext = true
}) => {
  return (
    <div className="flex items-center justify-between pt-8 border-t border-amber-200">
      <div className="flex-1">
        {showPrevious && onPrevious ? (
          <button
            onClick={onPrevious}
            className="flex items-center text-amber-600 hover:text-amber-800 transition-colors group"
          >
            <ChevronLeft className="h-5 w-5 mr-1 group-hover:-translate-x-1 transition-transform" />
            <div className="text-left">
              <div className="text-sm text-amber-500">Previous</div>
              <div className="font-medium">{previousTitle || 'Previous Lesson'}</div>
            </div>
          </button>
        ) : (
          <div></div>
        )}
      </div>
      
      <div className="flex-shrink-0 mx-4">
        <button
          onClick={onHome}
          className="flex items-center px-4 py-2 bg-amber-100 text-amber-800 rounded-md hover:bg-amber-200 transition-colors"
        >
          <Home className="h-4 w-4 mr-2" />
          All Lessons
        </button>
      </div>
      
      <div className="flex-1 flex justify-end">
        {showNext && onNext ? (
          <button
            onClick={onNext}
            className="flex items-center text-amber-600 hover:text-amber-800 transition-colors group"
          >
            <div className="text-right">
              <div className="text-sm text-amber-500">Next</div>
              <div className="font-medium">{nextTitle || 'Next Lesson'}</div>
            </div>
            <ChevronRight className="h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform" />
          </button>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default NavigationButtons;