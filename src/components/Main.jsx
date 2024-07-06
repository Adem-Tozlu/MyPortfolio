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

      {/* -------------------Project------------------- */}


      <div className="project">
        <h2>Project</h2>

        <div className={`project__container theme-${theme}`}>
          <section className="project__container-1">
            <a href="https://hotel-resort-project.vercel.app/" target="_blank" rel="noopener noreferrer">
              <img
                className="project__image"
                src="/public/images/hotel1.png"
                alt=""
              />
            </a>
            <h3 className="project__title">Hotel Resort</h3>
            <div className="project__text-container">          
               <article className="project__text">This web application is designed to provide users with detailed information about hotel rooms and services. Users can explore different room types, features, and prices, as well as learn about the amenities offered by the hotel.</article>
            </div>
            <div className="project__button-container">  
               <a href="https://github.com/Adem-Tozlu/Hotel-Resort-Project" target="_blank" rel="noopener noreferrer">
              <FaGithub className="project__button-icon" /></a>
              <a href="https://hotel-resort-project.vercel.app/" target="_blank" rel="noopener noreferrer" ><TbWorld className="project__button-icon" /></a>
            </div>
          </section>
          <section className="project__container-2 ">
            <a href="https://project-shop-xi.vercel.app/" target="_blank" rel="noopener noreferrer">
              <img
                className="project__image"
                src="/public/images/shop.png"
                alt=""
              />
            </a>
            <h3 className="project__title">Phone Shop</h3>
            <div className="project__text-container">
              <article className="project__text">
              This is a shop that is implemented as a Single-Page Application (SPA) using React and various hooks such as useState, useEffect, useNavigate, and useContext.</article>
            </div>
            <div className="project__button-container">
              <a href="https://github.com/Adem-Tozlu/Project-Shop" target="_blank" rel="noopener noreferrer">
                <FaGithub className="project__button-icon" /></a>
              <a href="https://project-shop-xi.vercel.app/" target="_blank" rel="noopener noreferrer"><TbWorld className="project__button-icon" /></a>
            </div>
          </section>
          <section className="project__container-3">
            <a href="https://pokemon-cards-delta.vercel.app/" target="_blank" rel="noopener noreferrer">
              <img
                className="project__image"
                src="/public/images/pokemon.png"
                alt=""
              />
            </a>
            <h3 className="project__title">Pokemon Card</h3>
            <div className="project__text-container">
              <article className="project__text">As part of the "Pokemon Cards" project, a Pokemon card was successfully displayed using data from the Pokemon API. In addition to displaying the card data, the sound of the respective Pokemon was also integrated to make the experience even more interactive and immersive.</article>
            </div>
            <div className="project__button-container">
            <a href="https://github.com/Adem-Tozlu/Pokemon-Cards" target="_blank" rel="noopener noreferrer">
              <FaGithub className="project__button-icon" /></a>
              <a href="https://pokemon-cards-delta.vercel.app/" target="_blank" rel="noopener noreferrer"><TbWorld className="project__button-icon" /></a>
            </div>
          </section>
          <section className="project__container-4">
            <a href="https://project-crypto-currencyconverter.vercel.app/" target="_blank" rel="noopener noreferrer">
              <img
                className="project__image"
                src="/public/images/crypto.png"
                alt=""
              />
            </a>

            <h3 className="project__title">Crypto</h3>
            <div className="project__text-container">          
               <article className="project__text">This task was about creating a currency calculator. The API from Coinbase was used. You can calculate the following currencies with this app: BTC, EOS, LTC, ETH, AUD, EUR, USD, TRY.

</article>
            </div>         <div className="project__button-container">   <a href="https://github.com/Adem-Tozlu/Project-Crypto-Currencyconverter" target="_blank" rel="noopener noreferrer">
              <FaGithub className="project__button-icon" /></a>
              <a href="https://project-crypto-currencyconverter.vercel.app/" target="_blank" rel="noopener noreferrer"><TbWorld className="project__button-icon" /></a>
            </div>
          </section>
          
        </div>
      </div>

      {/* -------------------Contact------------------- */}

      <div className="contact">
        <h2>Contact</h2>
        <form className="contact">
  <div id="contact"></div>
  <div>
    <div className="contact1"><h2>Contact</h2></div>
    <label htmlFor="uname"></label>
    <input type="text" name="name" id="uname" placeholder="Name" />
  </div>

  <div>
    <label htmlFor="email"></label>
    <input type="email" name="email" id="email" placeholder="Email" />
  </div>
  <div>
    <label htmlFor="comment"></label>
    <textarea
      name="comment"
      id="comment"
      placeholder="Ihre Nachricht"
    ></textarea>
  </div>
  <div className="button1">
    <input className="button" type="submit" value="Senden" />
  </div>
</form>
      </div>
    </main>
  );
}

export default Main;
