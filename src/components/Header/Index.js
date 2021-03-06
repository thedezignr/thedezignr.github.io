import style from "./index.module.css";
import { NavLink } from 'react-router-dom';

const Header = props => {
  return (
    <>
      <p className={style.header__name__mobile}><NavLink to="/" className="boring__link">Angel Opoku</NavLink></p>
      <header className={style.main__header}>
        <aside className={`${props.active === "about" ? style.active : ""}`}>
          <p><NavLink to={typeof props.back === "string" ? props.back : "/about"} className={`boring__link ${style.prev}`}>{props.back ? "Back" : "About Me"}</NavLink></p>
        </aside>
        <p className={style.header__name}><NavLink to="/" className="boring__link">Angel Opoku</NavLink></p>
        <aside className={`${props.active === "portfolio" ? style.active : ""}`} style={{ visibility: props.hideWork ? "hidden" : "visible" }}>
          <p><NavLink to="/portfolio" className={`boring__link ${style.next}`}>My Work</NavLink></p>
        </aside>
      </header>
    </>
  );
};

export default Header;