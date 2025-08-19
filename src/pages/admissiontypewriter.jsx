import { useEffect, useState } from 'react';

const phrases = [
    "2025/2026 Admission \n In Progress. ",
    "Admission! Admission!!. ",
    "We Illuminate, Educate \n And Inspire.",
  "Enroll Your Ward.",
  'Transforming Lives \n through Faith and Learning '
];

export default function AdmissionTypewriterText() {
  const [text, setText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    let timeout;

    if (isDeleting) {
      timeout = setTimeout(() => {
        setText(currentPhrase.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      }, 50);
    } else {
      timeout = setTimeout(() => {
        setText(currentPhrase.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, 100);
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
      setTimeout(() => setIsDeleting(true), 1500); // pause before deleting
    }

    if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, phraseIndex]);

  return (
    
    <h2 className="text-xl font-semibold text-center p-4" style={{ whiteSpace:'pre-line'  }}  > 
      {text}
      <span className="border-r-2 border-black animate-pulse ml-1"></span>
    </h2>
  );
}
