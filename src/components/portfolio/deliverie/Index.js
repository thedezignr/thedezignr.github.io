import style from "../projects.module.css";
import { NavLink } from "react-router-dom";
import deliverie_user_flow from "../../../assets/deliverie_user_flow.png";
import deliverie_ui from "../../../assets/deliverie_ui.png";

const Deliverie = () => {
  return (
    <>
      <section className={style.main__container}>
        <section>
          <main className="main__body">
            <h3>Deliverie</h3>
            <p>Deliverie is an app for dispatch riders. It is used to find available deliveries, pick them up and deliver them.</p>
            <aside className={style.mobile__roles_section}>
              <h3>My Role</h3>
              <ul className="boring__list">
                <li>UI Designer</li>
              </ul>
            </aside>
            <h3>The Design</h3>
            <p>Here are some screens from Deliverie...</p>
            <img onLoad={e => e.target.classList.remove("image__loader")} className={`${style.major__image} ${style.deliverie__user__flow} image__loader`} src={deliverie_user_flow} alt="Deliverie’s User Flow" />
            <h4 className={style.alt__text}>Deliverie’s User Flow</h4>
            <img onLoad={e => e.target.classList.remove("image__loader")} className={`${style.major__image} ${style.deliverie__ui} image__loader`} src={deliverie_ui} alt="Deliverie’s Wireframe" />
            <h4 className={style.alt__text}>Deliverie’s Wireframe</h4>
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
            <li>UI design</li>
          </ul>
        </aside>
        <footer className={style.footer}>
          <p>
            <NavLink to="/p/pizza_jungle" className="boring__link arrow__left__link gray__before__arrow__link pull__left">Previous Post</NavLink>
            <NavLink to="/p/spinero" className="boring__link arrow__link gray__after__arrow__link pull__right">Next Post</NavLink>
          </p>
        </footer>
      </section >
    </>
  );
};

export default Deliverie;