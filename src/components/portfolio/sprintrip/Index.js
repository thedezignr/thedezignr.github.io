import style from "../projects.module.css";
import { NavLink } from "react-router-dom";
import sprinttrip_screen from "../../../assets/sprinttrip_screen.svg";

const Sprintrip = () => {
  return (
    <>
      <section className={style.main__container}>
        <section>
          <main className="main__body">
            <h3>Sprintrip</h3>
            <p>Sprint trip is an all-in-one service that solves the gaps in the travel and booking industry. Users can book,
            organize and manage services they need for travel in one place - Sprintrip. Users can also keep reciepts for future
              referencing.</p>
            <h3>The Design</h3>
            <p>Here are some screens from Sprintrip...</p>
            <img className={style.major__image} src={sprinttrip_screen} alt="Some screens from Sprintrip" />
            <h4 className={style.alt__text}>Some screens from Sprintrip</h4>
          </main>
          <aside className={style.responsibilities__wrapper}>
            <main className="main__body">
              <h3>My Role</h3>
              <ul className="boring__list">
                <li>UI Designer</li>
              </ul>
              <h3>Reponsibilities</h3>
              <ul className="boring__list">
                <li>UI Design</li>
              </ul>
            </main>
          </aside>
        </section>
        <footer className={style.footer}>
          <p>
            <NavLink to="/p/spinero" className="boring__link arrow__left__link pull__left">Previous Post</NavLink>
          </p>
        </footer>
      </section>
    </>
  );
};

export default Sprintrip;