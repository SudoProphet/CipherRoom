import React from 'react';
import { MapPin, User, Quote } from 'lucide-react';

interface HistoryBoxProps {
  location: string;
  person: string;
  quote: string;
  context?: string;
}

const HistoryBox: React.FC<HistoryBoxProps> = ({ location, person, quote, context }) => {
  return (
    <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-lg p-6 mb-8 border-l-4 border-amber-600">
      <div className="flex items-center mb-4 space-x-6">
        <div className="flex items-center text-amber-800">
          <MapPin className="h-5 w-5 mr-2" />
          <span className="font-medium">{location}</span>
        </div>
        <div className="flex items-center text-amber-800">
          <User className="h-5 w-5 mr-2" />
          <span className="font-medium">{person}</span>
        </div>
      </div>
      
      <div className="bg-white rounded-lg p-4 shadow-sm">
        <div className="flex items-start">
          <Quote className="h-6 w-6 text-amber-600 mr-3 mt-1 flex-shrink-0" />
          <div>
            <p className="text-amber-800 italic text-lg leading-relaxed">
              {quote}
            </p>
            {context && (
              <p className="text-amber-600 text-sm mt-2">
                {context}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryBox;