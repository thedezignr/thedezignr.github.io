import React from 'react';
import style from "./index.module.css";
import { NavLink } from 'react-router-dom';

const Home = props => {

  return (
    <div>
      <section className={style.main__container}>
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
            <button type="button" className={["no__border", style.download_button].join(" ")}>Download Resume</button>
          </main>
        </section>
        <section id="socials">
          <div className={style.socials}>
            <ul className="boring__list">
              <li>
                <button type="button" style={{ marginBottom: "40px" }} className="no__background no__border">
                  <span className="icon dribble"></span>
                </button>
              </li>
              <li>
                <button type="button" style={{ marginBottom: "40px" }} className="no__background no__border">
                  <span className="icon twitter"></span>
                </button>
              </li>
              <li>
                <button type="button" style={{ marginBottom: "40px" }} className="no__background no__border">
                  <span className="icon linkedin"></span>
                </button>
              </li>
              <li>
                <button type="button" style={{ marginBottom: "40px" }} className="no__background no__border">
                  <span className="icon email"></span>
                </button>
              </li>
            </ul>
          </div>
        </section>
      </section>
      <section className={style.main__container}>
        <section id="experience">
          <h1>Experience</h1>
          <hr className={style.header__marker} />
          <main className="main__body table">
            <div className="table__row">
              <div className="table__cell">
                <h3>Genesys Tech Hub</h3>
                <p>UI/UX Design Facilitator</p>
                <NavLink to="/genesys/facilitator" className={style.details__link}>Details</NavLink>
              </div>
              <div className="table__cell">
                <p>June 2020 - August 2020</p>
              </div>
            </div>
            <div className="table__row">
              <div className="table__cell">
                <h3>Genesys Tech Hub</h3>
                <p>UI/UX Designer</p>
                <NavLink to="/genesys/designer" className={style.details__link}>Details</NavLink>
              </div>
              <div className="table__cell">
                <p>January 2020 - August 2020</p>
              </div>
            </div>
            <div className="table__row">
              <div className="table__cell">
                <h3>Tenece Professional Services</h3>
                <p>UI/UX Designer</p>
                <NavLink to="/tenece" className={style.details__link}>Details</NavLink>
              </div>
              <div className="table__cell">
                <p>March 2019 - August 2020</p>
              </div>
            </div>
          </main>
        </section>
        <section id="skills">
          <h3>Skills</h3>
          <main className="main__body">
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
      </section>
      <section className={style.main__container}>
        <section>
          <section id="clients" style={{ marginBottom: "120px" }}>
            <h1>Clients</h1>
            <hr className={style.header__marker} />
            <main className="main__body">
              <ul className={style.two__columns_list}>
                <a href="https://www.sd.com" className="boring__link" ><li>Spinero</li></a>
                <a href="https://www.sd.com" className="boring__link" ><li>Effect Studios</li></a>
                <a href="https://www.sd.com" className="boring__link" ><li>Love Football</li></a>
                <a href="https://www.sd.com" className="boring__link" ><li>Sprintrip</li></a>
                <a href="https://www.sd.com" className="boring__link" ><li>Bikelane</li></a>
                <a href="https://www.sd.com" className="boring__link" ><li>Boolean Labs</li></a>
                <a href="https://www.sd.com" className="boring__link" ><li>Hexcord</li></a>
                <a href="https://www.sd.com" className="boring__link" ><li>CopenHagen</li></a>
                <a href="https://www.sd.com" className="boring__link" ><li>HyperDebugger</li></a>
                <a href="https://www.sd.com" className="boring__link" ><li>Zoe's Lab</li></a>
              </ul>
            </main>
          </section>
          <section id="activities">
            <h1>Activities</h1>
            <hr className={style.header__marker} />
            <main className="main__body">
              <ul>
                <li>
                  <p>I hosted the first edition of Design Week, an online week-long session that aimed at giving newbie designers
                direction and helping them gain design knowledge from experts, at no charge.</p>
                  <p>The edition featured Chris Do, Joe Natoli, Andy Clarke, Maya El Murr and Bojan Novakovich</p>
                </li>
              </ul>
            </main>
          </section>
        </section>
        <section id="tools">
          <h3>Tools</h3>
          <main className="main__body">
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
      </section>
    </div >
  )
};

export default Home;