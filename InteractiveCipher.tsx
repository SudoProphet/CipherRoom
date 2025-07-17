import React, { useState } from 'react';
import { Play, RotateCcw, Copy, Check } from 'lucide-react';

interface InteractiveCipherProps {
  type: 'caesar' | 'substitution' | 'scytale' | 'enigma' | 'modern' | 'frequency';
  title?: string;
  description?: string;
}

const InteractiveCipher: React.FC<InteractiveCipherProps> = ({ type, title, description }) => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const renderCaesarCipher = () => {
    const [shift, setShift] = useState(3);
    const [mode, setMode] = useState<'encode' | 'decode'>('encode');

    const caesarTransform = (text: string, shift: number, decode: boolean = false) => {
      const actualShift = decode ? -shift : shift;
      return text.toUpperCase().replace(/[A-Z]/g, (char) => {
        const charCode = char.charCodeAt(0) - 65;
        const shiftedCode = (charCode + actualShift + 26) % 26;
        return String.fromCharCode(shiftedCode + 65);
      });
    };

    const result = caesarTransform(input, shift, mode === 'decode');

    return (
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-amber-800 mb-2">Mode</label>
            <div className="flex space-x-2">
              <button
                onClick={() => setMode('encode')}
                className={`px-4 py-2 rounded-md transition-colors ${
                  mode === 'encode' ? 'bg-amber-600 text-white' : 'bg-amber-100 text-amber-800'
                }`}
              >
                Encode
              </button>
              <button
                onClick={() => setMode('decode')}
                className={`px-4 py-2 rounded-md transition-colors ${
                  mode === 'decode' ? 'bg-amber-600 text-white' : 'bg-amber-100 text-amber-800'
                }`}
              >
                Decode
              </button>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-amber-800 mb-2">
              Shift: {shift}
            </label>
            <input
              type="range"
              min="1"
              max="25"
              value={shift}
              onChange={(e) => setShift(parseInt(e.target.value))}
              className="w-full"
            />
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-amber-800 mb-2">Input</label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full h-20 p-3 border border-amber-300 rounded-md focus:ring-2 focus:ring-amber-500"
            placeholder="Enter your message..."
          />
        </div>
        
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="block text-sm font-medium text-amber-800">Result</label>
            <button
              onClick={() => copyToClipboard(result)}
              className="flex items-center text-sm text-amber-600 hover:text-amber-800"
            >
              {copied ? <Check className="h-4 w-4 mr-1" /> : <Copy className="h-4 w-4 mr-1" />}
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>
          <div className="w-full h-20 p-3 bg-amber-50 border border-amber-300 rounded-md font-mono">
            {result}
          </div>
        </div>
      </div>
    );
  };

  const renderSubstitutionCipher = () => {
    const [key, setKey] = useState('QWERTYUIOPASDFGHJKLZXCVBNM');
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    const substitutionTransform = (text: string, key: string) => {
      return text.toUpperCase().replace(/[A-Z]/g, (char) => {
        const index = alphabet.indexOf(char);
        return index !== -1 ? key[index] : char;
      });
    };

    const result = substitutionTransform(input, key);

    return (
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-amber-800 mb-2">
            Substitution Key
          </label>
          <input
            type="text"
            value={key}
            onChange={(e) => setKey(e.target.value.toUpperCase())}
            className="w-full p-3 border border-amber-300 rounded-md focus:ring-2 focus:ring-amber-500 font-mono"
            maxLength={26}
          />
          <p className="text-sm text-amber-600 mt-1">Standard: {alphabet}</p>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-amber-800 mb-2">Input</label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full h-20 p-3 border border-amber-300 rounded-md focus:ring-2 focus:ring-amber-500"
            placeholder="Enter your message..."
          />
        </div>
        
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="block text-sm font-medium text-amber-800">Result</label>
            <button
              onClick={() => copyToClipboard(result)}
              className="flex items-center text-sm text-amber-600 hover:text-amber-800"
            >
              {copied ? <Check className="h-4 w-4 mr-1" /> : <Copy className="h-4 w-4 mr-1" />}
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>
          <div className="w-full h-20 p-3 bg-amber-50 border border-amber-300 rounded-md font-mono">
            {result}
          </div>
        </div>
      </div>
    );
  };

  const renderPlaceholder = (typeName: string) => (
    <div className="bg-amber-900 text-amber-100 p-6 rounded-lg text-center">
      <Play className="h-12 w-12 mx-auto mb-4 text-amber-300" />
      <h3 className="text-xl font-semibold mb-2">Interactive {typeName} Tool</h3>
      <p className="text-amber-200">Coming soon! This will include hands-on {typeName.toLowerCase()} tools.</p>
    </div>
  );

  const renderTool = () => {
    switch (type) {
      case 'caesar':
        return renderCaesarCipher();
      case 'substitution':
        return renderSubstitutionCipher();
      case 'scytale':
        return renderPlaceholder('Scytale');
      case 'enigma':
        return renderPlaceholder('Enigma Machine');
      case 'modern':
        return renderPlaceholder('Modern Cipher');
      case 'frequency':
        return renderPlaceholder('Frequency Analysis');
      default:
        return renderPlaceholder('Cipher');
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8 border border-amber-200">
      <div className="flex items-center mb-4">
        <Play className="h-6 w-6 text-amber-600 mr-2" />
        <h3 className="text-xl font-semibold text-amber-800">
          {title || 'Interactive Tool'}
        </h3>
      </div>
      {description && (
        <p className="text-amber-700 mb-4">{description}</p>
      )}
      {renderTool()}
    </div>
  );
};

export default InteractiveCipher;