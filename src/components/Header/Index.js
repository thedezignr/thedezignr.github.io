import React from 'react';
import style from "./index.module.css";
import { NavLink } from 'react-router-dom';

const Header = props => {
  return (
    <header className={style.main__header}>
      <aside className={`${props.active === "about" ? style.active : ""}`}>
        <p><NavLink to="/about" className={`boring__link ${style.prev}`}>{props.back ? "Back" : "About Me"}</NavLink></p>
      </aside>
      <p className={style.header__name}><NavLink to="/" className="boring__link">Angel Opoku</NavLink></p>
      <aside className={`${props.active === "work" ? style.active : ""}`}>
        <p><NavLink to="/work" className={`boring__link ${style.next}`}>My Work</NavLink></p>
      </aside>
    </header>
  );
};

export default Header;