import React, { useEffect, useState } from "react";
import { useTheme } from "./Theme/ThemeContext";
import { TbWorld } from "react-icons/tb";
import { FaGithub } from "react-icons/fa6";



function Main() {
  const [text, setText] = useState("Fullstack Developer"); // Initialer Zustand als String
  const { theme } = useTheme();

  useEffect(() => {
    const texts = [
      "Fullstack Developer",
      "React Developer",
      "Frontend Developer",
      "Backend Developer",
    ];
    let index = 0;

    const intervalId = setInterval(() => {
      setText(texts[index]);
      index = (index + 1) % texts.length;
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <main className={`theme-${theme}`}>
      <div className="home">
        <div className="home__name">
          <span>
            Hello <span>👋🏾</span>, I'm{" "}
            <span className="home__name_text">Adem</span>
          </span>
          <span className="home__name_text--1">
            I'm a <span className="home__name_text--2">{text}</span>
          </span>

          <div className="home__skills">
            <img src="/public/svg-images/html5.svg" alt="" />
            <img src="/public/svg-images/css.svg" alt="" />

            <img src="/public/svg-images/scss.svg" alt="" />
            <img src="/public/svg-images/bootstrap.svg" alt="" />
            <img src="/public/svg-images/react.svg" alt="" />
            <img src="/public/svg-images/javascript.svg" alt="" />
            <img src="/public/svg-images/nodejs.svg" alt="" />
            <img src="/public/svg-images/mongodb.svg" alt="" />

            <img
              src="/public/svg-images/express-js.png"
              className="express"
              alt=""
            />
          </div>
          <div className="home__button-container">
            <button className="home__button">Download CV</button>
            <button className="home__button">Project</button>
          </div>
        </div>
      </div>
      {/* -------------------About------------------- */}

      <div className="about">
        <div className="about__container">
          <div>
            <h1 className="about__whatido">What I do</h1>
            <article className="about__text">
              I am a motivated career changer into full-stack development,
              currently undergoing further education to develop my skills.
              Despite lacking formal background, I possess a strong curiosity
              and passion for technology. My portfolio showcases not only my
              past projects but also my ability to quickly grasp new concepts
              and find innovative solutions. You can explore my projects in more
              detail in the "Projects" section. I am eager to further develop my
              potential and collaborate with you to realize great projects.
            </article>
            <div className="about__fullstack-container">
              <h3 className="about__fullstack-container-text">
                Full Stack Development
              </h3>
              <p>
                ⚡ Building responsive designs: Proficient in CSS and SCSS for
                creating responsive user interfaces.
              </p>

              <p>
                ⚡ Building data-driven applications: Fetching and processing
                APIs effectively within React applications.
              </p>
              <p>
                ⚡ Building efficient React projects: Utilizing Vite as a
                framework to streamline React project development.
              </p>
              <p>
                ⚡ Building user-centric experiences: Crafting responsive
                Single-Page Applications (SPAs) using React.js.
              </p>
            </div>
          </div>

          <img
            className="about__image"
            src="/public/images/AdemTozlu.png"
            alt=""
          />
        </div>
      </div>
      <div className="project">
        <h2>Project</h2>

        <div className="project__container">
          <section className="project__container-1">
          <img
            className="project__image"
            src="/public/images/hotel1.png"
            alt=""
          />
         <h3 className="project__title">Hotel Resort</h3>
         <div className="project__text-container">           <article className="project__text">This web application is designed to provide users with detailed information about hotel rooms and services. Users can explore different room types, features, and prices, as well as learn about the amenities offered by the hotel.</article>
         </div>
         <div className="project__button-container"><FaGithub /><TbWorld />
         </div> 
          </section>
          <section className="project__container-2">
          <img
            className="project__image"
            src="/public/images/shop.png"
            alt=""
          />
           <h3 className="project__title">Hotel Resort</h3>
           <div className="project__text-container">           <article className="project__text">This web application is designed to provide users with detailed information about hotel rooms and services. Users can explore different room types, features, and prices, as well as learn about the amenities offered by the hotel.</article>
           </div>         <div className="project__button-container"><FaGithub /><TbWorld />
           </div> 
          </section>
          <section className="project__container-3">
          <img
            className="project__image"
            src="/public/images/pokemon.png"
            alt=""
          />
           <h3  className="project__title">Hotel Resort</h3>
           <div className="project__text-container">           <article className="project__text">This web application is designed to provide users with detailed information about hotel rooms and services. Users can explore different room types, features, and prices, as well as learn about the amenities offered by the hotel.</article>
           </div>          <div className="project__button-container"><FaGithub /><TbWorld />
           </div> 
          </section>
          <section className="project__container-4">
          <img
            className="project__image"
            src="/public/images/crypto.png"
            alt=""
          />
           <h3  className="project__title">Hotel Resort</h3>
           <div className="project__text-container">           <article className="project__text">This web application is designed to provide users with detailed information about hotel rooms and services. Users can explore different room types, features, and prices, as well as learn about the amenities offered by the hotel.</article>
           </div>         <div className="project__button-container"><FaGithub /><TbWorld />
           </div> 
          </section>
        </div>
      </div>
    </main>
  );
}

export default Main;
