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

const ModernCiphers: React.FC<LessonProps> = ({ 
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
        title="Modern Ciphers"
        subtitle="From forum spoilers to digital security foundations"
        difficulty="Intermediate"
        duration="12 min"
        onBack={onClose}
        isCompleted={isCompleted}
      />

      <HistoryBox
        location="Digital Age, 1970s-present"
        person="Computer Scientists"
        quote="These aren't just toys. ROT13 hides spoilers, Base64 powers your photos, and XOR protects your passwords."
        context="The computer age brought new cipher types that form the foundation of digital security"
      />

      <section className="bg-white rounded-lg shadow-md p-6 mb-8 border border-amber-200">
        <h2 className="text-2xl font-semibold text-amber-800 mb-4">Digital Age Cryptography</h2>
        <p className="text-amber-700 text-lg leading-relaxed mb-6">
          Modern computing enabled new cipher types that form the foundation of digital security. While 
          simpler than ancient methods, they demonstrate principles used in today's advanced cryptography.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <h3 className="font-semibold text-green-800 mb-2">ROT13</h3>
            <p className="text-green-700 text-sm">
              Caesar cipher with fixed shift of 13. Self-inverse: applying twice returns original.
            </p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <h3 className="font-semibold text-blue-800 mb-2">Base64</h3>
            <p className="text-blue-700 text-sm">
              Encoding method for binary data in text format. Powers web images and file transfers.
            </p>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
            <h3 className="font-semibold text-purple-800 mb-2">XOR</h3>
            <p className="text-purple-700 text-sm">
              Bitwise exclusive OR operation. Foundation of stream ciphers and one-time pads.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white rounded-lg shadow-md p-6 mb-8 border border-amber-200">
        <h2 className="text-2xl font-semibold text-amber-800 mb-4">ROT13: The Internet's Cipher</h2>
        <div className="space-y-4">
          <p className="text-amber-700">
            ROT13 is simply a Caesar cipher with a shift of 13. What makes it special is that it's 
            self-inverse: applying ROT13 twice returns the original text.
          </p>
          
          <div className="bg-amber-900 text-amber-100 p-4 rounded-lg">
            <div className="text-center space-y-2">
              <div>'HELLO' → ROT13 → 'URYYB'</div>
              <div>'URYYB' → ROT13 → 'HELLO'</div>
              <div className="text-amber-300 text-sm mt-2">Same operation for encoding and decoding!</div>
            </div>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <h3 className="font-semibold text-green-800 mb-2">Real-World Uses</h3>
            <ul className="list-disc list-inside space-y-1 text-green-700 text-sm">
              <li>Hiding spoilers in online forums and discussions</li>
              <li>Obscuring potentially offensive content in emails</li>
              <li>Simple obfuscation in software development</li>
              <li>Puzzle games and geocaching clues</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white rounded-lg shadow-md p-6 mb-8 border border-amber-200">
        <h2 className="text-2xl font-semibold text-amber-800 mb-4">Base64: The Web's Encoding</h2>
        <div className="space-y-4">
          <p className="text-amber-700">
            Base64 isn't encryption—it's encoding. It converts binary data into text using 64 printable 
            characters, making it safe for text-based systems.
          </p>
          
          <div className="bg-amber-900 text-amber-100 p-4 rounded-lg">
            <div className="text-center space-y-2">
              <div>'Hello' → Base64 → 'SGVsbG8='</div>
              <div className="text-amber-300 text-sm mt-2">Binary data becomes text-safe</div>
            </div>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <h3 className="font-semibold text-blue-800 mb-2">Everywhere You Look</h3>
            <ul className="list-disc list-inside space-y-1 text-blue-700 text-sm">
              <li>Email attachments (MIME encoding)</li>
              <li>Embedded images in web pages (data URLs)</li>
              <li>API authentication tokens</li>
              <li>Configuration files and data storage</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white rounded-lg shadow-md p-6 mb-8 border border-amber-200">
        <h2 className="text-2xl font-semibold text-amber-800 mb-4">XOR: The Building Block</h2>
        <div className="space-y-4">
          <p className="text-amber-700">
            XOR (exclusive OR) is a bitwise operation that forms the foundation of many modern encryption 
            algorithms. It's simple but powerful when used correctly.
          </p>
          
          <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
            <h3 className="font-semibold text-amber-800 mb-2">XOR Truth Table</h3>
            <div className="font-mono text-sm text-amber-700">
              0 XOR 0 = 0<br/>
              0 XOR 1 = 1<br/>
              1 XOR 0 = 1<br/>
              1 XOR 1 = 0
            </div>
          </div>
          
          <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
            <h3 className="font-semibold text-purple-800 mb-2">Modern Applications</h3>
            <ul className="list-disc list-inside space-y-1 text-purple-700 text-sm">
              <li>Stream ciphers (RC4, ChaCha20)</li>
              <li>One-time pad implementation</li>
              <li>AES encryption algorithm components</li>
              <li>Error detection and correction</li>
            </ul>
          </div>
        </div>
      </section>

      <InteractiveCipher 
        type="modern"
        title="Modern Cipher Tools"
        description="Experiment with ROT13, Base64, and XOR encoding to see how they work"
      />

      <Challenge
        prompt="What does 'URYYB JBEYQ' become when you apply ROT13?"
        hint="ROT13 shifts each letter by 13 positions. Remember, it's self-inverse!"
        answer="HELLO WORLD"
        explanation="ROT13 shifts: U→H, R→E, Y→L, Y→L, B→O, etc. Since ROT13 is self-inverse, the same operation decodes it."
      />

      <div className="bg-green-50 border border-green-200 p-6 rounded-lg mb-8">
        <h3 className="text-lg font-bold text-green-800 mb-2 flex items-center">
          🔒 Security Note
        </h3>
        <p className="text-green-700">
          These modern ciphers are NOT secure for protecting sensitive data! ROT13 and Base64 are 
          easily reversible, and simple XOR can be broken. They're building blocks and tools, 
          not complete security solutions.
        </p>
      </div>

      <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mb-8">
        <h3 className="text-lg font-bold text-blue-800 mb-2 flex items-center">
          💡 Did You Know?
        </h3>
        <p className="text-blue-700">
          XOR operations are used in AES encryption, the current standard for secure communications. 
          When combined with proper key management and complex algorithms, this simple operation 
          helps protect everything from your online banking to government secrets!
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
        onPrevious={() => onNavigate('enigma-machines')}
        onNext={() => onNavigate('breaking-codes')}
        onHome={onClose}
        previousTitle={previousLesson?.title}
        nextTitle={nextLesson?.title}
      />
    </div>
  );
};

export default ModernCiphers;