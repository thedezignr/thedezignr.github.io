import style from "../projects.module.css";
import { NavLink } from "react-router-dom";
import spinero_user_flow from "../../../assets/spinero_user_flow.svg";
import spinero_screen_1 from "../../../assets/spinero_screen_1.svg";
import spinero_screen_2 from "../../../assets/spinero_screen_2.svg";

const Spinero = () => {
  return (
    <>
      <section className={style.main__container}>
        <section>
          <main className="main__body">
            <h3>Spinero</h3>
            <p>Spinero is a fashion house that sells its products through its e-commerce.</p>
            <aside className={style.mobile__roles_section}>
              <h3>My Role</h3>
              <ul className="boring__list">
                <li>UI Designer</li>
              </ul>
            </aside>
            <h3>The Design</h3>
            <p>Here are some screens from Spinero...</p>
            <img onLoad={e => e.target.classList.remove("image__loader")} className={`${style.major__image} ${style.spinero__user__flow} image__loader`} src={spinero_user_flow} style={{ background: "#FDFFFC" }} alt="Spinero’s User Flow" />
            <h4 className={style.alt__text}>Spinero’s User Flow</h4>
            <img onLoad={e => e.target.classList.remove("image__loader")} className={`${style.major__image} ${style.spinero__screen} image__loader`} src={spinero_screen_1} alt="Some screens from Spinero Web" />
            <h4 className={style.alt__text}>Some screens from Spinero Web</h4>
            <img onLoad={e => e.target.classList.remove("image__loader")} className={`${style.major__image} ${style.spinero__screen} image__loader`} src={spinero_screen_2} alt="Some screens from Spinero Mobile" />
            <h4 className={style.alt__text}>Some screens from Spinero Mobile</h4>
          </main>
        </section>
        <aside className={style.responsibilities__wrapper}>
          <h3>My Role</h3>
          <ul className="boring__list">
            <li>UI Designer</li>
          </ul>
          <h3>Reponsibilities</h3>
          <ul className="boring__list">
            <li>User Flow</li>
            <li>UI Design</li>
          </ul>
        </aside>
        <footer className={style.footer}>
          <p>
            <NavLink to="/p/deliverie" className="boring__link arrow__left__link pull__left">Previous Post</NavLink>
            <NavLink to="/p/sprintrip" className="boring__link arrow__link pull__right">Next Post</NavLink>
          </p>
        </footer>
      </section>
    </>
  );
};

export default Spinero;