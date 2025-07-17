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

const CaesarCipher: React.FC<LessonProps> = ({ 
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
        title="Caesar Cipher"
        subtitle="Master the cipher that protected Roman legions"
        difficulty="Beginner"
        duration="10 min"
        onBack={onClose}
        isCompleted={isCompleted}
      />

      <HistoryBox
        location="Roman Empire, 58-50 BC"
        person="Julius Caesar"
        quote="Julius Caesar trusted his life to a simple shift. 2,000 years later, we're still using his technique."
        context="Caesar used a shift of 3 for his military dispatches to protect them from enemy interception"
      />

      <section className="bg-white rounded-lg shadow-md p-6 mb-8 border border-amber-200">
        <h2 className="text-2xl font-semibold text-amber-800 mb-4">How It Works</h2>
        <p className="text-amber-700 text-lg leading-relaxed mb-6">
          Named after Julius Caesar who used it for military communications, this cipher shifts each letter 
          by a fixed number of positions in the alphabet. It's beautifully simple yet was unbreakable for centuries.
        </p>
        
        <div className="bg-amber-50 p-4 rounded-lg border border-amber-200 mb-4">
          <h3 className="font-semibold text-amber-800 mb-2">The Algorithm</h3>
          <ol className="list-decimal list-inside space-y-1 text-amber-700">
            <li>Choose a shift value (Caesar used 3)</li>
            <li>For each letter, move it forward by the shift amount</li>
            <li>Wrap around: after Z comes A, B, C...</li>
            <li>Keep non-letters unchanged</li>
          </ol>
        </div>

        <div className="bg-amber-900 text-amber-100 p-4 rounded-lg">
          <div className="text-center space-y-2">
            <div>Alphabet: <span className="font-mono">ABCDEFGHIJKLMNOPQRSTUVWXYZ</span></div>
            <div>Shift +3:  <span className="font-mono">DEFGHIJKLMNOPQRSTUVWXYZABC</span></div>
            <div className="text-amber-300 mt-4">Example: DEFEND → GHIHQG</div>
          </div>
        </div>
      </section>

      <section className="bg-white rounded-lg shadow-md p-6 mb-8 border border-amber-200">
        <h2 className="text-2xl font-semibold text-amber-800 mb-4">Historical Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-amber-800 mb-2">Military Success</h3>
            <p className="text-amber-700 text-sm mb-4">
              Caesar's generals received messages like 'DWWDFN DW GDZQ' meaning 'ATTACK AT DAWN'. 
              The cipher protected Roman military communications for decades.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-amber-800 mb-2">Long-lasting Security</h3>
            <p className="text-amber-700 text-sm mb-4">
              Caesar's cipher remained unbroken for over 800 years until frequency analysis 
              was discovered in the 9th century by Arab mathematician Al-Kindi.
            </p>
          </div>
        </div>
      </section>

      <InteractiveCipher 
        type="caesar"
        title="Caesar Cipher Wheel"
        description="Experiment with different shift values to see how the Caesar cipher transforms your messages"
      />

      <section className="bg-white rounded-lg shadow-md p-6 mb-8 border border-amber-200">
        <h2 className="text-2xl font-semibold text-amber-800 mb-4">Weakness Discovered</h2>
        <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
          <h3 className="font-semibold text-red-800 mb-2">⚠️ The Fatal Flaw</h3>
          <p className="text-red-700 text-sm">
            Only 25 possible shifts make it vulnerable to brute force - a determined enemy could try them all! 
            This weakness wasn't exploited for centuries because systematic codebreaking hadn't been invented yet.
          </p>
        </div>
      </section>

      <Challenge
        prompt="Caesar's spies sent this message: 'PHHW DW PLGQLJKW'. What does it say? (Hint: Caesar's favorite shift)"
        hint="Caesar typically used a shift of 3. Try shifting each letter back by 3 positions."
        answer="MEET AT MIDNIGHT"
        explanation="Using Caesar's standard shift of 3: P→M, H→E, H→E, W→T, etc."
      />

      <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mb-8">
        <h3 className="text-lg font-bold text-blue-800 mb-2 flex items-center">
          💡 Did You Know?
        </h3>
        <p className="text-blue-700">
          Caesar's cipher was so effective that it remained unbroken for over 800 years until frequency 
          analysis was discovered. Even today, ROT13 (a Caesar cipher with shift 13) is used on the 
          internet to hide spoilers and potentially offensive content!
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
        onPrevious={() => onNavigate('what-is-cipher')}
        onNext={() => onNavigate('substitution-ciphers')}
        onHome={onClose}
        previousTitle={previousLesson?.title}
        nextTitle={nextLesson?.title}
      />
    </div>
  );
};

export default CaesarCipher;