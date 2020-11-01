import style from './index.module.css';
import LoveFootball from "../../assets/love_football.svg";
import LoanUp from "../../assets/loan_up.svg";
import Inventopal from "../../assets/inventopal.svg";
import Hexcord from "../../assets/hexcord.svg";
import Spinero from "../../assets/spinero.svg";
import Sprinttrip from "../../assets/sprinttrip.svg";
import PizzaJungle from "../../assets/pizza_jungle.svg";
import Deliverie from "../../assets/deliverie.svg";
import { useState } from 'react';

const Portfolio = props => {
  const [active, setActive] = useState(0);

  return (
    <section id="portfolio" className={style.main__container}>
      <div style={{ backgroundColor: "#4FFF71" }} onClick={() => { setActive(0); }} className={`${style.work__card} ${active === 0 ? style.active : ""}`}>
        <span className={style.helper}></span>
        <img src={LoveFootball} alt="love football" />
        <div className={style.card__hover}>
          <p style={{ marginBottom: "64px" }}>UI/UX Design</p>
          <div>
            <h2>Love Football</h2>
            <p>(Gamification Design)</p>
            <p>A fantasy football app</p>
          </div>
          <p><a href="https://www.sd.com" className={`boring__link ${style.arrow__link}`}>View case study</a></p>
        </div>
      </div>
      <div style={{ backgroundColor: "#D3E468" }} onClick={() => { setActive(1); }} className={`${style.work__card} ${active === 1 ? style.active : ""}`}>
        <span className={style.helper}></span>
        <img src={LoanUp} alt="loan up" />
        <div className={style.card__hover}>
          <p>UI/UX Design</p>
          <div>
            <h2>Loanup</h2>
            <p>An app for loans</p>
          </div>
          <p><a href="https://www.sd.com" className={`boring__link ${style.arrow__link}`}>View case study</a></p>
        </div>
      </div>
      <div style={{ backgroundColor: "#0260ED" }} onClick={() => { setActive(2); }} className={`${style.work__card} ${active === 2 ? style.active : ""}`}>
        <span className={style.helper}></span>
        <img src={Inventopal} alt="inventopal" />
        <div className={style.card__hover}>
          <p>UI/UX Design</p>
          <div>
            <h2>Inventopal</h2>
            <p>A pharmacy inventory app</p>
          </div>
          <p><a href="https://www.sd.com" className={`boring__link ${style.arrow__link}`}>View case study</a></p>
        </div>
      </div>
      <div style={{ backgroundColor: "#0000FF" }} onClick={() => { setActive(3); }} className={`${style.work__card} ${active === 3 ? style.active : ""}`}>
        <span className={style.helper}></span>
        <img src={Hexcord} alt="hexcord" />
        <div className={style.card__hover}>
          <p>UI/UX Design</p>
          <div>
            <h2>Hexcord</h2>
            <p>A screen recorder app</p>
          </div>
          <p><a href="https://www.sd.com" className={`boring__link ${style.arrow__link}`}>View case study</a></p>
        </div>
      </div>
      <div style={{ backgroundColor: "#F2F2F2" }} onClick={() => { setActive(4); }} className={`${style.work__card} ${active === 4 ? style.active : ""}`}>
        <span className={style.helper}></span>
        <img src={Spinero} alt="spinero" />
        <div className={style.card__hover}>
          <p>UI Design</p>
          <div>
            <h2>Spinero</h2>
            <p>A fashion e-commerce store</p>
          </div>
          <p><a href="https://www.sd.com" className={`boring__link ${style.arrow__link}`}>View case study</a></p>
        </div>
      </div>
      <div style={{ backgroundColor: "#58D658" }} onClick={() => { setActive(5); }} className={`${style.work__card} ${active === 5 ? style.active : ""}`}>
        <span className={style.helper}></span>
        <img src={Sprinttrip} alt="sprint trip" />
        <div className={style.card__hover}>
          <p>UI Design</p>
          <div>
            <h2>Sprintrip</h2>
            <p>A booking app</p>
          </div>
          <p><a href="https://www.sd.com" className={`boring__link ${style.arrow__link}`}>View case study</a></p>
        </div>
      </div>
      <div style={{ backgroundColor: "#FC5353" }} onClick={() => { setActive(6); }} className={`${style.work__card} ${active === 6 ? style.active : ""}`}>
        <span className={style.helper}></span>
        <img src={PizzaJungle} alt="pizza jungle" />
        <div className={style.card__hover}>
          <p>UI Design</p>
          <div>
            <h2>Pizza Jungle</h2>
            <p>A pizza ordering app</p>
          </div>
          <p><a href="https://www.sd.com" className={`boring__link ${style.arrow__link}`}>View case study</a></p>
        </div>
      </div>
      <div style={{ backgroundColor: "#0E87DC" }} onClick={() => { setActive(7); }} className={`${style.work__card} ${active === 7 ? style.active : ""}`}>
        <span className={style.helper}></span>
        <img src={Deliverie} alt="deliverie app" />
        <div className={style.card__hover}>
          <p>UI Design</p>
          <div>
            <h2>Deliverie</h2>
            <p>A delivery app</p>
          </div>
          <p><a href="https://www.sd.com" className={`boring__link ${style.arrow__link}`}>View case study</a></p>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;