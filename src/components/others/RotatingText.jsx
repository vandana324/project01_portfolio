import React, { useEffect, useState } from 'react';

const phrases = [
  "Full-Stack Web Developer",
  "UI/UX Designer",
  "React Native Developer",
  "Mobile App Specialist",
  "Flutter Developer"
];

const TypingText = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];

    if (charIndex < currentPhrase.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + currentPhrase[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 100); 

      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setDisplayedText('');
        setCharIndex(0);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
      }, 2000); 

      return () => clearTimeout(timeout);
    }
  }, [charIndex, phraseIndex]);

  return (
    <div className="text-2xl text-blue-500 h-10 overflow-hidden w-fit font-mono">
      {displayedText}
      <span className="animate-pulse">|</span>
    </div>
  );
};

export default TypingText;
