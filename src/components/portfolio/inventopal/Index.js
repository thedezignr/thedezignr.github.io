import style from "../projects.module.css";
import { NavLink } from "react-router-dom";
import inventopal_screen_1 from "../../../assets/inventopal_screen_1.svg";
import inventopal_screen_2 from "../../../assets/inventopal_screen_2.svg";

const Inventopal = () => {
  return (
    <>
      <section className={style.main__container}>
        <section>
          <main className="main__body">
            <h3>Inventopal</h3>
            <p>Inventopal is a pharmacy management system. It automates the sales and inventory system of a pharmacy.</p>
            <h3>The Challenge</h3>
            <p>The average pharmacy owner is often plagued with a lot of problems concerning stock taking, stock analysis, and
              stock prediction.</p>
            <p>Inventopal sought to solve inventory system problems, data storage problems and help users adequately predict and
              plan for the availability of their products.</p>
            <h3>The Process</h3>
            <p className="regular__bold__text">Qualitative Research</p>
            <p>At the start of the project I had interview sessions with 4 pharmacy owners to better understand the challenges they
              face.</p>
            <p>Key findings</p>
            <ul className={style.default__list}>
              <li>
                <p>Participants have a problem with being able to keep track of the drugs that are available on the counter even
                  with the presence of software.</p>
              </li>
              <li>
                <p>Participants are hardly aware about when a drug is expiring. This can cause serious wastage or sale of an
                  expired drug.</p>
              </li>
              <li>
                <p>Participants are unable to predict and then plan addequately for when they run out of stock.</p>
              </li>
            </ul>
            <h3>The Solution</h3>
            <p>The client, the software engineer and I spent time brainstorming about how best to solve the above listed problems.
              We decided to build an app that allows pharmacy owners to;</p>
            <ul className={style.default__list}>
              <li>
                <p>Automate the stock taking process.</p>
              </li>
              <li>
                <p>Automate the processing of sales process.</p>
              </li>
              <li>
                <p>Predict and plan for reduction in or expiration of stock.</p>
              </li>
              <li>
                <p>Maintain a database of drug distributors.</p>
              </li>
              <li>
                <p>Maintain a database of clients who are on routine drugs.</p>
              </li>
            </ul>
            <img className={style.major__image} src={inventopal_screen_1} alt="Some screens from Inventopal Web" />
            <h4 className={style.alt__text}>Some screens from Inventopal Web</h4>
            <img className={style.major__image} src={inventopal_screen_2} alt="Some screens from Inventopal Mobile" />
            <h4 className={style.alt__text}>Some screens from Inventopal Mobile</h4>
          </main>
          <aside className={style.responsibilities__wrapper}>
            <main className="main__body">
              <h3>My Role</h3>
              <ul className="boring__list">
                <li>UI Designer</li>
                <li>UX Designer</li>
              </ul>
              <h3>Reponsibilities</h3>
              <ul className="boring__list">
                <li>Qualitative Research</li>
                <li>UI design</li>
              </ul>
            </main>
          </aside>
        </section>
        <footer className={style.footer}>
          <p>
            <NavLink to="/p/loan_up" className="boring__link arrow__left__link pull__left">Previous Post</NavLink>
            <NavLink to="/p/hexcord" className="boring__link arrow__link pull__right">Next Post</NavLink>
          </p>
        </footer>
      </section >
    </>
  );
};

export default Inventopal;