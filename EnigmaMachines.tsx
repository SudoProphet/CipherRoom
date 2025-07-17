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

const EnigmaMachines: React.FC<LessonProps> = ({ 
  onClose, 
  onComplete, 
  onNavigate, 
  isCompleted, 
  lessons,
  currentLessonId 
}) => {
  const currentIndex = lessons.findIndex(l => l.id === currentLessonId);
  const previousLesson = lessons[currentIndex - 1];
  const nextLesson = lessons[currentIndex + 1];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <LessonHeader
        title="Enigma & WWII Machines"
        subtitle="Enter Bletchley Park and the machines that changed history"
        difficulty="Advanced"
        duration="20 min"
        onBack={onClose}
        isCompleted={isCompleted}
      />

      <HistoryBox
        location="World War II, 1939-1945"
        person="Alan Turing & Bletchley Park"
        quote="One machine. Billions of combinations. The fate of the free world hung in the balance at Bletchley Park."
        context="The Enigma machine was used by German forces throughout WWII for secure communications"
      />

      <section className="bg-white rounded-lg shadow-md p-6 mb-8 border border-amber-200">
        <h2 className="text-2xl font-semibold text-amber-800 mb-4">The Enigma Machine</h2>
        <p className="text-amber-700 text-lg leading-relaxed mb-6">
          The Enigma machine was an electro-mechanical rotor cipher machine that created polyalphabetic 
          substitution ciphers. With its rotating rotors and plugboard, it generated over 150 trillion 
          possible settings, making it seem mathematically unbreakable.
        </p>
        
        <div className="bg-amber-50 p-4 rounded-lg border border-amber-200 mb-4">
          <h3 className="font-semibold text-amber-800 mb-2">The Staggering Numbers</h3>
          <ul className="list-disc list-inside space-y-1 text-amber-700 text-sm">
            <li>Over 150 million million million possible settings</li>
            <li>3 rotors chosen from 5 available = 60 arrangements</li>
            <li>Each rotor has 26 starting positions = 17,576 combinations</li>
            <li>Plugboard with 10 cables = 150,738,274,937,250 possibilities</li>
          </ul>
        </div>
      </section>

      <section className="bg-white rounded-lg shadow-md p-6 mb-8 border border-amber-200">
        <h2 className="text-2xl font-semibold text-amber-800 mb-4">How Enigma Worked</h2>
        <div className="space-y-4">
          <div className="flex items-start">
            <span className="bg-amber-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">1</span>
            <div>
              <h3 className="font-semibold text-amber-800">Operator presses key</h3>
              <p className="text-amber-700 text-sm">Electrical signal starts its journey through the machine</p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="bg-amber-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">2</span>
            <div>
              <h3 className="font-semibold text-amber-800">Plugboard substitution</h3>
              <p className="text-amber-700 text-sm">Signal may be swapped with another letter (A↔B if plugged)</p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="bg-amber-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">3</span>
            <div>
              <h3 className="font-semibold text-amber-800">Three rotating rotors</h3>
              <p className="text-amber-700 text-sm">Each rotor substitutes the letter differently based on position</p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="bg-amber-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">4</span>
            <div>
              <h3 className="font-semibold text-amber-800">Reflector</h3>
              <p className="text-amber-700 text-sm">Signal bounces back through rotors (ensures no letter encrypts to itself)</p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="bg-amber-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">5</span>
            <div>
              <h3 className="font-semibold text-amber-800">Return journey</h3>
              <p className="text-amber-700 text-sm">Different path back through rotors and plugboard</p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="bg-amber-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">6</span>
            <div>
              <h3 className="font-semibold text-amber-800">Output lights up</h3>
              <p className="text-amber-700 text-sm">Final encrypted letter illuminates, rotors advance for next letter</p>
            </div>
          </div>
        </div>
      </section>

      <InteractiveCipher 
        type="enigma"
        title="Simplified Enigma Simulator"
        description="Experience how the Enigma machine's rotating rotors created different encryptions for each letter"
      />

      <section className="bg-white rounded-lg shadow-md p-6 mb-8 border border-amber-200">
        <h2 className="text-2xl font-semibold text-amber-800 mb-4">Bletchley Park: The Codebreakers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-amber-800 mb-2">The Team</h3>
            <ul className="list-disc list-inside space-y-1 text-amber-700 text-sm">
              <li>Over 9,000 people worked on codebreaking</li>
              <li>75% of staff were women</li>
              <li>Mathematicians, linguists, chess champions</li>
              <li>Sworn to secrecy for 30 years after the war</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-amber-800 mb-2">The Impact</h3>
            <ul className="list-disc list-inside space-y-1 text-amber-700 text-sm">
              <li>Shortened WWII by an estimated 2-4 years</li>
              <li>Saved over 1 million lives</li>
              <li>Led to the development of modern computers</li>
              <li>Remained classified until the 1970s</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white rounded-lg shadow-md p-6 mb-8 border border-amber-200">
        <h2 className="text-2xl font-semibold text-amber-800 mb-4">The Polish Breakthrough</h2>
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
          <p className="text-blue-700 text-sm">
            <strong>Marian Rejewski</strong> and his team at the Polish Cipher Bureau first broke the Enigma 
            code in 1932, seven years before WWII began. They shared their methods with Britain and France 
            just before the war, giving the Allies a crucial head start. Turing's Bombe machine automated 
            and improved upon their techniques.
          </p>
        </div>
      </section>

      <Challenge
        prompt="If an Enigma machine never allows a letter to encrypt to itself, and you intercept 'AAAAA', what can you conclude?"
        hint="Think about what this tells you about the original message and the machine's limitation"
        answer="THE ORIGINAL MESSAGE CANNOT CONTAIN ANY A"
        explanation="Since Enigma never encrypts a letter to itself, if the output is all A's, the input contained no A's at all."
      />

      <div className="bg-red-50 border border-red-200 p-6 rounded-lg mb-8">
        <h3 className="text-lg font-bold text-red-800 mb-2 flex items-center">
          ⚠️ Fatal Flaw
        </h3>
        <p className="text-red-700">
          Enigma operators were forbidden to send 'HEIL HITLER' because it provided codebreakers with 
          known plaintext! This restriction, along with the machine's inability to encrypt a letter 
          to itself, gave Allied cryptanalysts crucial patterns to exploit.
        </p>
      </div>

      <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mb-8">
        <h3 className="text-lg font-bold text-blue-800 mb-2 flex items-center">
          💡 Did You Know?
        </h3>
        <p className="text-blue-700">
          The Bombe machine built by Turing's team could test 17,576 rotor positions in about 20 minutes. 
          It didn't decrypt messages directly but found the daily Enigma settings, which were then used 
          to decode all German communications for that day!
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
        onPrevious={() => onNavigate('substitution-ciphers')}
        onNext={() => onNavigate('modern-ciphers')}
        onHome={onClose}
        previousTitle={previousLesson?.title}
        nextTitle={nextLesson?.title}
      />
    </div>
  );
};

export default EnigmaMachines;