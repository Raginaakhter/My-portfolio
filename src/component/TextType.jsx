import React, { useState, useEffect } from "react";

const TextType = ({
  text = [],
  typingSpeed = 100,
  pauseDuration = 1000,
  showCursor = true,
  cursorCharacter = "|"
}) => {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentText = text[textIndex];
    let timeout;

    if (!deleting) {
      if (charIndex < currentText.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentText.slice(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => setDeleting(true), pauseDuration);
      }
    } else {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setDisplayText(currentText.slice(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        }, typingSpeed / 2);
      } else {
        setDeleting(false);
        setTextIndex((textIndex + 1) % text.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, text, textIndex, typingSpeed, pauseDuration]);

  return (
    <span className="text-xl md:text-2xl font-semibold">
      {displayText}
      {showCursor && <span className="animate-pulse">{cursorCharacter}</span>}
    </span>
  );
};

export default TextType;
