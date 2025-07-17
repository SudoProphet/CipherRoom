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

const SubstitutionCiphers: React.FC<LessonProps> = ({ 
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
        title="Substitution Ciphers"
        subtitle="Unlock the secrets of letter frequency and pattern analysis"
        difficulty="Intermediate"
        duration="15 min"
        onBack={onClose}
        isCompleted={isCompleted}
      />

      <HistoryBox
        location="Renaissance Italy, 1400s"
        person="Leon Battista Alberti"
        quote="For 400 years, substitution ciphers seemed unbreakable... until mathematicians discovered that letters have personalities."
        context="Alberti created the first polyalphabetic cipher, but simple substitution remained popular for centuries"
      />

      <section className="bg-white rounded-lg shadow-md p-6 mb-8 border border-amber-200">
        <h2 className="text-2xl font-semibold text-amber-800 mb-4">How It Works</h2>
        <p className="text-amber-700 text-lg leading-relaxed mb-6">
          Each letter is replaced by another letter according to a scrambled alphabet key. With 26! possible 
          arrangements, it seemed mathematically unbreakable until frequency analysis revealed the patterns 
          hidden in language itself.
        </p>
        
        <div className="bg-amber-50 p-4 rounded-lg border border-amber-200 mb-4">
          <h3 className="font-semibold text-amber-800 mb-2">The Mathematics</h3>
          <p className="text-amber-700 text-sm mb-2">
            Number of possible keys: 26! = 403,291,461,126,605,635,584,000,000
          </p>
          <p className="text-amber-700 text-sm">
            That's more than 400 septillion possibilities - seemingly impossible to break by brute force!
          </p>
        </div>

        <div className="bg-amber-900 text-amber-100 p-4 rounded-lg">
          <div className="text-center space-y-2">
            <div>Standard: <span className="font-mono text-sm">ABCDEFGHIJKLMNOPQRSTUVWXYZ</span></div>
            <div>Key:      <span className="font-mono text-sm">QWERTYUIOPASDFGHJKLZXCVBNM</span></div>
            <div className="text-amber-300 mt-4">Example: HELLO → ITSSG</div>
          </div>
        </div>
      </section>

      <section className="bg-white rounded-lg shadow-md p-6 mb-8 border border-amber-200">
        <h2 className="text-2xl font-semibold text-amber-800 mb-4">The Breakthrough: Frequency Analysis</h2>
        <p className="text-amber-700 mb-4">
          In the 9th century, Arab mathematician Al-Kindi discovered that letters appear with predictable 
          frequencies in any language. This revelation made substitution ciphers vulnerable.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <h3 className="font-semibold text-green-800 mb-2">Most Common Letters</h3>
            <div className="font-mono text-sm text-green-700">
              E (12.7%), T (9.1%), A (8.2%)<br/>
              O (7.5%), I (7.0%), N (6.7%)
            </div>
          </div>
          <div className="bg-red-50 p-4 rounded-lg border border-red-200">
            <h3 className="font-semibold text-red-800 mb-2">Least Common Letters</h3>
            <div className="font-mono text-sm text-red-700">
              Z (0.07%), Q (0.10%), X (0.15%)<br/>
              J (0.15%), K (0.77%)
            </div>
          </div>
        </div>
      </section>

      <InteractiveCipher 
        type="substitution"
        title="Substitution Cipher Tool"
        description="Create your own substitution key and see how it transforms messages"
      />

      <section className="bg-white rounded-lg shadow-md p-6 mb-8 border border-amber-200">
        <h2 className="text-2xl font-semibold text-amber-800 mb-4">Breaking the Code</h2>
        <div className="space-y-4">
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <h3 className="font-semibold text-blue-800 mb-2">Step 1: Count Letters</h3>
            <p className="text-blue-700 text-sm">
              Count how often each letter appears in the ciphertext. The most frequent letter is likely 'E'.
            </p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <h3 className="font-semibold text-blue-800 mb-2">Step 2: Look for Patterns</h3>
            <p className="text-blue-700 text-sm">
              Find common short words like 'THE', 'AND', 'FOR'. Single letters are usually 'A' or 'I'.
            </p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <h3 className="font-semibold text-blue-800 mb-2">Step 3: Make Educated Guesses</h3>
            <p className="text-blue-700 text-sm">
              Use context clues and common letter combinations to fill in the remaining letters.
            </p>
          </div>
        </div>
      </section>

      <Challenge
        prompt="Break this substitution cipher: 'QEB NRFZH YOLTK CLU GRJMBA LSBO QEB IXWV ALD'"
        hint="The most common letter in this message appears 8 times. In English, what's the most common letter?"
        answer="THE QUICK BROWN FOX JUMPED OVER THE LAZY DOG"
        explanation="The letter 'B' appears most frequently and represents 'E'. 'QEB' is 'THE', helping crack the rest."
      />

      <div className="bg-red-50 border border-red-200 p-6 rounded-lg mb-8">
        <h3 className="text-lg font-bold text-red-800 mb-2 flex items-center">
          ⚔️ Historical Consequence
        </h3>
        <p className="text-red-700">
          Mary Queen of Scots was executed in 1587 partly because her substitution cipher was broken using 
          frequency analysis. Her secret communications plotting against Queen Elizabeth I were intercepted 
          and decoded, providing evidence of treason.
        </p>
      </div>

      <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mb-8">
        <h3 className="text-lg font-bold text-blue-800 mb-2 flex items-center">
          💡 Did You Know?
        </h3>
        <p className="text-blue-700">
          The most common letter pair in English is 'TH', followed by 'HE', 'IN', 'ER', and 'AN'. 
          Codebreakers use these patterns along with single-letter frequencies to crack substitution ciphers!
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
        onPrevious={() => onNavigate('caesar-cipher')}
        onNext={() => onNavigate('enigma-machines')}
        onHome={onClose}
        previousTitle={previousLesson?.title}
        nextTitle={nextLesson?.title}
      />
    </div>
  );
};

export default SubstitutionCiphers;