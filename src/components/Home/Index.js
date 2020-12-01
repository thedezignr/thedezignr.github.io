import style from "./index.module.css";
import { NavLink } from 'react-router-dom';
import { useState } from "react";

const getAbout = () => (
  <section id="about">
    <h1>About Me</h1>
    <main className="main__body">
      <p>
        I started out with graphics designing and branding while in college. Over the next 4 years,
        I spent my time studying and designing.  Upon leaving college, I heard about Product Design as a career path and
        I entered an internship program where I learned and practiced UX/UI Design.
      </p>
      <p>
        Since I left the internship program, I have worked with 3 companies as UI/UX Designer, worked with several clients and
        designed products across a variety of industries. I have experience with B2B, B2C and SaaS products.
      </p>
      <p>
        I am interested in new opportunities to design products that REALLY solve a problem.
      </p>
      <a href="https://bit.ly/angelopokuCV" className={["no__border", "boring__link", style.download_button].join(" ")} target="_blank" rel="noreferrer">View my resume</a>
    </main>
  </section>
);

const getSocials = () => (
  <section id="socials" className={style.socials__container}>
    <div className={style.socials}>
      <ul className="boring__list">
        <li>
          <a href="https://dribbble.com/theDezignr " style={{ marginBottom: "40px", display: "block" }} className="no__background no__border boring__link" target="_blank" rel="noreferrer">
            <span className="icon dribble"></span>
          </a>
        </li>
        <li>
          <a href="https://twitter.com/thedezignr_" style={{ marginBottom: "40px", display: "block" }} className="no__background no__border" target="_blank" rel="noreferrer">
            <span className="icon twitter"></span>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/angel-opoku" style={{ marginBottom: "40px", display: "block" }} className="no__background no__border" target="_blank" rel="noreferrer">
            <span className="icon linkedin"></span>
          </a>
        </li>
        <li>
          <a href="mailto:angelopoku2@gmail.com" style={{ marginBottom: "40px", display: "block" }} className="no__background no__border" target="_blank" rel="noreferrer">
            <span className="icon email"></span>
          </a>
        </li>
      </ul>
    </div>
  </section>
);

const getExperience = () => (
  <section id="experience">
    <h1>Experience</h1>
    <hr className={style.header__marker} />
    <main className="main__body table">
      <div className="table__row">
        <div className="table__cell">
          <h3>Genesys Tech Hub</h3>
          <p>UI/UX Design Facilitator</p>
        </div>
        <div className="table__cell">
          <p>June 2020 - August 2020</p>
        </div>
      </div>
      <NavLink to="/genesys/facilitator" className={style.details__link}>Details</NavLink>
      <div className="table__row">
        <div className="table__cell">
          <h3>Genesys Tech Hub</h3>
          <p>UI/UX Designer</p>
        </div>
        <div className="table__cell">
          <p>January 2020 - August 2020</p>
        </div>
      </div>
      <NavLink to="/genesys/designer" className={style.details__link}>Details</NavLink>
      <div className="table__row">
        <div className="table__cell">
          <h3>Tenece Professional Services</h3>
          <p>UI/UX Designer</p>
        </div>
        <div className="table__cell">
          <p>March 2019 - August 2020</p>
        </div>
      </div>
      <NavLink to="/tenece" className={style.details__link}>Details</NavLink>
    </main>
  </section>
);

const Skills = () => {
  const [isCollapsed, toggleCollapse] = useState(true);

  return (
    <section id="skills" className={`${!isCollapsed ? style.section__active : ""}`}>
      <h3
        onClick={() => { toggleCollapse(!isCollapsed); }}
        className={`${style.mobile__skills__header} ${!isCollapsed ? style.header__active : ""}`}>Skills</h3>
      <main className={`main__body ${isCollapsed ? style.collapsed : ""}`}>
        <h3>UX Design</h3>
        <ul className="boring__list">
          <li>Qualitative Research</li>
          <li>Quantitative Research</li>
          <li>User Personas</li>
          <li>User Stories</li>
          <li>User Flows</li>
          <li>Information Architecture</li>
          <li>Wireframing</li>
          <li>Design thinking</li>
        </ul>
        <h3>UI Design</h3>
        <ul className="boring__list">
          <li>Low — Hi-fi Prototype</li>
          <li>Design System</li>
        </ul>
      </main>
    </section>
  );
};

const getClients = () => (
  <section id="clients" className={style.clients}>
    <h1>Clients</h1>
    <hr className={style.header__marker} />
    <main className="main__body">
      <ul className={style.two__columns_list}>
        <li>Spinero</li>
        <li>Effect Studios</li>
        <li>Love Football</li>
        <li>Sprintrip</li>
        <li>Bikelane</li>
        <li>Boolean Labs</li>
        <li>Hexcord</li>
        <li>CopenHagen</li>
        <li>HyperDebugger</li>
        <li>Zoe's Lab</li>
      </ul>
    </main>
  </section>
);

const getActivities = () => (
  <section id="activities">
    <h1>Activities</h1>
    <hr className={style.header__marker} />
    <main className="main__body">
      <ul className={style.default__list}>
        <li>
          <p>I hosted the first edition of Design Week, an online week-long session that aimed at giving newbie designers
                direction and helping them gain design knowledge from experts, at no charge.</p>
          <p>The edition featured Chris Do, Joe Natoli, Andy Clarke, Maya El Murr and Bojan Novakovich</p>
        </li>
      </ul>
    </main>
  </section>
);

const Tools = () => {
  const [isCollapsed, toggleCollapse] = useState(true);

  return (
    <section id="tools" className={`${!isCollapsed ? style.section__active : ""}`}>
      <h3
        onClick={() => { toggleCollapse(!isCollapsed); }}
        className={`${style.mobile__skills__header} ${!isCollapsed ? style.header__active : ""}`}>Tools</h3>
      <main className={`main__body ${isCollapsed ? style.collapsed : ""}`}>
        <h3>UX Design</h3>
        <ul className="boring__list">
          <li>Pen & Paper</li>
          <li>Miro</li>
          <li>FlowMapp</li>
          <li>Balsamiq</li>
        </ul>
        <h3>UI Design</h3>
        <ul className="boring__list">
          <li>Pen & Paper</li>
          <li>Figma</li>
          <li>XD</li>
          <li>Invision</li>
          <li>Sketch</li>
          <li>Illustrator</li>
          <li>Photoshop</li>
        </ul>
      </main>
    </section>
  );
}

const Home = props => {
  const isMobile = window.screen.availWidth <= 800;

  return (
    <div className={style.wrapper}>
      <section className={style.main__container}>
        {getAbout()}
        {getSocials()}
      </section>
      {
        isMobile && (
          <section className={style.main__container}>
            <section className={style.mobile__collapsible__wrapper}>
              <Skills />
              <Tools />
            </section>
          </section>
        )
      }
      <section className={style.main__container}>
        {getExperience()}
        {!isMobile && <Skills />}
      </section>
      <section className={style.main__container}>
        <section>
          {getClients()}
          {getActivities()}
        </section>
        {!isMobile && <Tools />}
      </section>
    </div >
  )
};

export default Home;