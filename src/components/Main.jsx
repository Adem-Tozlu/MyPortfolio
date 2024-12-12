import React, { useEffect, useState } from "react";
import { useTheme } from "./Theme/ThemeContext";
import { TbWorld } from "react-icons/tb";
import { FaGithub } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa6";

import { MdOutlineMail } from "react-icons/md";
import { IoLogoLinkedin } from "react-icons/io5";
import { Link } from "react-scroll";
import Resume from "/public/CV/Adem-Tozlu-CV.pdf";

function Main() {
  const [text, setText] = useState("Fullstack Developer");
  const { theme } = useTheme();
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
  }, []);

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
    <main className={`theme-${theme} `}>
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
            <img src="/svg-images/html5.svg" alt="htlm" />
            <img src="svg-images/css.svg" alt="css" />

            <img src="/svg-images/scss.svg" alt="scss" />
            <img src="/svg-images/bootstrap.svg" alt="bootstrap" />
            <img src="/svg-images/react.svg" alt="react" />
            <img src="/svg-images/angular.png" alt="angular" />
            <img src="/svg-images/javascript.svg" alt="javascript" />
            <img src="/svg-images/typescript.png" alt="typescript" />
            <img src="/svg-images/nodejs.svg" alt="nodejs" />
            <img src="/svg-images/mongodb.svg" alt="mongodb" />


            <img
              src="/svg-images/express-js.png"
              className="express"
              alt="express-js"
            />
          </div>
          <div className="home__button-container">
            <a
              href={Resume}
              target="_blank"
              rel="noopener noreferrer"
              className="home__button"
            >
              Resume/CV
            </a>
            <Link
              to="project"
              smooth={true}
              duration={500}
              className="home__button"
            >
              Project
            </Link>
          </div>
        </div>
      </div>

      {scroll && (
        <Link
          to="homepage"
          smooth={true}
          duration={500}
          className="home__arrow"
        >
          <FaArrowUp className="arrow" />
        </Link>
      )}

      {/* -------------------About------------------- */}
      <div id="about">
        <div className="about">
          <div className="about__container">
            <div>
              <h1 className="about__whatido">What I do</h1>
              <article className="about__text">
                I am a results-oriented full-stack developer with in-depth knowledge of theory and practice.
                I am currently gaining valuable practical experience through a practical internship at Learnfiction.
                I have demonstrated my ability to solve complex problems and develop innovative solutions in my personal projects.
                Read more about this in the “Projects” section. I look forward to contributing my skills and knowledge to your team.
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
              src="/images/AdemTozlu.png"
              alt="Portfolio Picture"
            />
          </div>
        </div>
      </div>
      {/* -------------------Skills------------------- */}
      <div id="skills">
        <h2>Skills</h2>
        <div className="skills">
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/HTML"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/svg-images/html5.svg" alt="html" />
            <p className="skills__text">HTML</p>
          </a>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/CSS"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/svg-images/css.svg" alt="css" />
            <p className="skills__text">CSS</p>
          </a>

          <a
            href="https://sass-lang.com/documentation/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/svg-images/scss.svg" alt="scss" />
            <p className="skills__text">SASS/SCSS</p>
          </a>
          <a
            href="https://getbootstrap.com/docs/4.1/getting-started/introduction/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/svg-images/bootstrap.svg" alt="bootstrap" />
            <p className="skills__text">Bootstrap</p>
          </a>
          <a
            href="https://legacy.reactjs.org/docs/getting-started.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/svg-images/react.svg" alt="react" />
            <p className="skills__text">React</p>
          </a>
          <a
            href="https://angular.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/svg-images/angular.png" alt="angular" />
            <p className="skills__text">Angular</p>
          </a>

          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/svg-images/javascript.svg" alt="javascript" />
            <p className="skills__text">JavaScript</p>
          </a>

          <a
            href="https://www.typescriptlang.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/svg-images/typescript.png" alt="typescript" />
            <p className="skills__text">Typescript</p>
          </a>
          <a
            href="https://nodejs.org/docs/latest/api/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/svg-images/nodejs.svg" alt="nodejs" />
            <p className="skills__text">Node.js</p>
          </a>
          <a
            href="https://www.mongodb.com/docs/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/svg-images/mongodb.svg" alt="mongodb" />
            <p className="skills__text">MongoDB</p>
          </a>

          <a
            href="https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/svg-images/express-js.png"
              className="express"
              alt="express-js"
            />
            <p className="skills__text">Express.js</p>
          </a>
        </div>
      </div>

      {/* -------------------Project------------------- */}

      <div id="project">
        <div className="project">
          <h2>Project</h2>

          <div className={`project__container theme-${theme}`}>
            {/* -------------------Project1------------------- */}
            <section className="project__container-1">
              <a
                href="https://hotel-resort-project.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="project__image"
                  src="/images/hotel1.png"
                  alt="screenshot of the project"
                />
              </a>
              <h3 className="project__title">Hotel Resort</h3>
              <div className="project__text-container">
                <article className="project__text">
                  This web application is designed to provide users with
                  detailed information about hotel rooms and services. Users can
                  explore different room types, features, and prices, as well as
                  learn about the amenities offered by the hotel.
                </article>
              </div>
              <div className="project__button-container">
                <a
                  href="https://github.com/Adem-Tozlu/Hotel-Resort-Project"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="project__button-icon" />
                </a>
                <a
                  href="https://hotel-resort-project.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TbWorld className="project__button-icon" />
                </a>
              </div>
            </section>

            {/* -------------------Project2------------------- */}

            <section className="project__container-2 ">
              <a
                href="https://project-shop-xi.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="project__image"
                  src="/images/shop.png"
                  alt="screenshot of the project"
                />
              </a>
              <h3 className="project__title">Phone Shop</h3>
              <div className="project__text-container">
                <article className="project__text">
                  This is a shop that is implemented as a Single-Page
                  Application (SPA) using React and various hooks such as
                  useState, useEffect, useNavigate, and useContext.
                </article>
              </div>
              <div className="project__button-container">
                <a
                  href="https://github.com/Adem-Tozlu/Project-Shop"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="project__button-icon" />
                </a>
                <a
                  href="https://project-shop-xi.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TbWorld className="project__button-icon" />
                </a>
              </div>
            </section>

            {/* -------------------Project3------------------- */}
            <section className="project__container-3">
              <a
                href="https://pokemon-cards-delta.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="project__image"
                  src="/images/pokemon.png"
                  alt="screenshot of the project"
                />
              </a>
              <h3 className="project__title">Pokemon Card</h3>
              <div className="project__text-container">
                <article className="project__text">
                  As part of the "Pokemon Cards" project, a Pokemon card was
                  successfully displayed using data from the Pokemon API. In
                  addition to displaying the card data, the sound of the
                  respective Pokemon was also integrated to make the experience
                  even more interactive and immersive.
                </article>
              </div>
              <div className="project__button-container">
                <a
                  href="https://github.com/Adem-Tozlu/Pokemon-Cards"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="project__button-icon" />
                </a>
                <a
                  href="https://pokemon-cards-delta.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TbWorld className="project__button-icon" />
                </a>
              </div>
            </section>

            {/* -------------------Project4------------------- */}
            <section className="project__container-4">
              <a
                href="https://project-crypto-currencyconverter.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="project__image"
                  src="/images/crypto.png"
                  alt="screenshot of the project"
                />
              </a>
              <h3 className="project__title">Crypto</h3>
              <div className="project__text-container">
                <article className="project__text">
                  This task was about creating a currency calculator. The API
                  from Coinbase was used. You can calculate the following
                  currencies with this app: BTC, EOS, LTC, ETH, AUD, EUR, USD,
                  TRY.
                </article>
              </div>{" "}
              <div className="project__button-container">
                {" "}
                <a
                  href="https://github.com/Adem-Tozlu/Project-Crypto-Currencyconverter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="project__button-icon" />
                </a>
                <a
                  href="https://project-crypto-currencyconverter.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TbWorld className="project__button-icon" />
                </a>
              </div>
            </section>

            {/* -------------------Project5------------------- */}
            <section className="project__container-5">
              <a
                href="https://filmothek-website.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="project__image"
                  src="/images/Filmothek.png"
                  alt="screenshot of the project"
                />
              </a>
              <h3 className="project__title">Filmothek-Website</h3>
              <div className="project__text-container">
                <article className="project__text">
                  This project is a movie library that allows you to watch movie trailers.
                  It was developed using React and Tailwind CSS. Since it does not use an API, it is primarily intended as a practice project.
                  The project utilizes various hooks such as useState, useContext, and useEffect. It also features a dark mode.
                </article>
              </div>{" "}
              <div className="project__button-container">
                {" "}
                <a
                  href="https://github.com/Adem-Tozlu/Filmothek-Website"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="project__button-icon" />
                </a>
                <a
                  href="https://filmothek-website.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TbWorld className="project__button-icon" />
                </a>
              </div>
            </section>
            {/* -------------------Project6------------------- */}
            <section className="project__container-6">
              <a
                href="https://dci-fellow.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="project__image"
                  src="/images/dci.png"
                  alt="screenshot of the project"
                />
              </a>
              <h3 className="project__title">DCI Fellow Program </h3>
              <div className="project__text-container">
                <article className="project__text">
                  The DCI Fellow Program is a comprehensive web application designed to manage and facilitate the activities of the Digital Career Institute.


                </article>
              </div>{" "}
              <div className="project__button-container">
                {" "}
                <a
                  href="https://github.com/Adem-Tozlu/DCI_Fellow_Program"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="project__button-icon" />
                </a>
                <a
                  href="https://dci-fellow.onrender.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TbWorld className="project__button-icon" />
                </a>
              </div>
            </section>

          </div>
        </div>
      </div>

      {/* -------------------Contact------------------- */}

      <div id="contact">
        <div className="contact">
          <h2>Contact</h2>
          <div className="contact__icon-container">
            <a
              href="https://github.com/Adem-Tozlu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="contact__icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/adem-tozlu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoLinkedin className="contact__icon" />
            </a>
            <a href="mailto:Adem-Tozlu@hotmail.de">
              <MdOutlineMail className="contact__icon" />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
