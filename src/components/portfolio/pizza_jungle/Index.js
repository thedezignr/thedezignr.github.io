import style from "../projects.module.css";
import { NavLink } from "react-router-dom";
import pizza_jungle_user_flow from "../../../assets/pizza_jungle_user_flow.svg";
import pizza_jungle_wire_frame from "../../../assets/pizza_jungle_wire_frame.svg";
import pizza_jungle_ui from "../../../assets/pizza_jungle_ui.svg";

const PizzaJungle = () => {
  return (
    <>
      <section className={style.main__container}>
        <section>
          <main className="main__body">
            <h3>Pizza Jungle</h3>
            <p>Pizza Jungle is an app that is used to order pizza from any of Pizza Jungle’s branches.</p>
            <aside className={style.mobile__roles_section}>
              <h3>My Role</h3>
              <ul className="boring__list">
                <li>UI Designer</li>
              </ul>
            </aside>
            <h3>The Design</h3>
            <p>Here are some screens from Pizza Jungle...</p>
            <img className={`${style.major__image} ${style.pizza__jungle__user__flow}`} src={pizza_jungle_user_flow} style={{ background: "#FDFFFC" }} alt="Pizza Jungle’s User Flow" />
            <h4 className={style.alt__text}>Pizza Jungle’s User Flow</h4>
            <img className={`${style.major__image} ${style.pizza__jungle__wire__frame}`} src={pizza_jungle_wire_frame} alt="Pizza Jungle’s Wireframe" />
            <h4 className={style.alt__text}>Pizza Jungle’s Wireframe</h4>
            <img className={`${style.major__image} ${style.pizza__jungle__ui}`} src={pizza_jungle_ui} alt="Pizza Jungle’s UI" />
            <h4 className={style.alt__text}>Pizza Jungle’s UI</h4>
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
            <li>Wireframes</li>
            <li>UI design</li>
          </ul>
        </aside>
        <footer className={style.footer}>
          <p>
            <NavLink to="/p/hexcord" className="boring__link arrow__left__link pull__left">Previous Post</NavLink>
            <NavLink to="/p/deliverie" className="boring__link arrow__link pull__right">Next Post</NavLink>
          </p>
        </footer>
      </section>
    </>
  );
};

export default PizzaJungle;