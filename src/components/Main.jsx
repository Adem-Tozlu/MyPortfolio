import React, { useEffect, useState } from 'react'
import { useTheme } from './Theme/ThemeContext';

function Main() {
  const [text, setText] = useState("Fullstack Developer"); // Initialer Zustand als String
  const { theme } = useTheme();

  useEffect(() => {
    const texts = ["Fullstack Developer", "React Developer", "Frontend Developer", "Backend Developer"];
    let index = 0;

    const intervalId = setInterval(() => {
      setText(texts[index]);
      index = (index + 1) % texts.length;
    }, 4000);

    return () => clearInterval(intervalId); 
  }, []); 

  return (
    <main className={`theme-${theme}`}>
      <div className='home'>
        <div className='home__name'>
          <span>Hello <span>👋🏾</span>, I'm <span className='home__name_text'>Adem</span></span>
          <span className='home__name_text--1'>I'm a <span className="home__name_text--2">{text}</span></span>
          <button>Contact</button><button>Project</button>
        </div>
      </div>
      
    </main>
  )
}

export default Main