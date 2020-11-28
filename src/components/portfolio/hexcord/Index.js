import style from "../projects.module.css";
import { NavLink } from "react-router-dom";
import hexcord_user_flow from "../../../assets/hexcord_user_flow.svg";
import hexcord_screen_1 from "../../../assets/hexcord_screen_1.svg";
import hexcord_screen_2 from "../../../assets/hexcord_screen_2.svg";

const Hexcord = () => {
  return (
    <>
      <section className={style.main__container}>
        <section>
          <main className="main__body">
            <h3>Hexcord</h3>
            <p>Hexcord is a simple to use tool for creating presentations, tutorial videos, recording talks, speeches or coding
              sessions and basically just recording anything that is on your computer screen including a face.</p>
            <h3>The Challenge</h3>
            <p>Screen recording for users can be quite complex. Existing alternatives are complex and not suited to the needs of
            the non-expert user. Users who just want to record a video for an interview or a presentation usually have to learn
              how to use a complex software.</p>
            <h3>The Solution</h3>
            <p>To solve the problem we built an app that is both  easy to use and quick to use. The app has the following features.</p>
            <ul className={style.default__list}>
              <li>
                <p>Quick sign up with google and dropbox.</p>
              </li>
              <li>
                <p>Embedded camera feed</p>
              </li>
              <li>
                <p>It is a browser extension, users do not have to download software that will take up storage space.</p>
              </li>
              <li>
                <p>Videos can be broadcasted live on YouTube or shared on YouTube</p>
              </li>
              <li>
                <p>Minimal configurations</p>
              </li>
            </ul>
            <img className={style.major__image} src={hexcord_user_flow} style={{ background: "#FDFFFC" }} alt="Hexcord’s User Flow" />
            <h4 className={style.alt__text}>Hexcord’s User Flow</h4>
            <img className={style.major__image} src={hexcord_screen_1} alt="Some screens from Hexcord Web Extension and Web App" />
            <h4 className={style.alt__text}>Some screens from Hexcord Web Extension and Web App</h4>
            <img className={style.major__image} src={hexcord_screen_2} alt="Some screens from Hexcord’s Web App (Mobile)" />
            <h4 className={style.alt__text}>Some screens from Hexcord’s Web App (Mobile)</h4>
          </main>
        </section>
        <aside className={style.responsibilities__wrapper}>
          <h3>My Role</h3>
          <ul className="boring__list">
            <li>UI Designer</li>
            <li>UX Designer</li>
          </ul>
          <h3>Reponsibilities</h3>
          <ul className="boring__list">
            <li>User flow</li>
            <li>UI Design</li>
          </ul>
        </aside>
        <footer className={style.footer}>
          <p>
            <NavLink to="/p/inventopal" className="boring__link arrow__left__link pull__left">Previous Post</NavLink>
            <NavLink to="/p/pizza_jungle" className="boring__link arrow__link pull__right">Next Post</NavLink>
          </p>
        </footer>
      </section >
    </>
  );
};

export default Hexcord;