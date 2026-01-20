import React, { useEffect, useState } from 'react';

function SwitchText({ text1, span1, text2, span2, interval = 3000 }) {
  const [isFirst, setIsFirst] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsFirst(prev => !prev);
    }, interval);
    return () => clearInterval(timer);
  }, [interval]);

  // On détermine le contenu actuel
  const content = isFirst 
    ? { text: text1, span: span1 } 
    : { text: text2, span: span2 };

  return (
    <div className='my-3'>
      {/* La clé change à chaque bascule, ce qui relance l'animation CSS */}
      <h1 key={isFirst ? "t1" : "t2"} className="slide-in-left title"> 
        {content.text} <span className="text-colored">{content.span}</span> 
      </h1>
    </div>
  );
}

export default SwitchText;