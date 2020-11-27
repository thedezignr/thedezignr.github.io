import style from './index.module.css';
import LoveFootball from "../../assets/love_football.svg";
import LoanUp from "../../assets/loan_up.svg";
import Inventopal from "../../assets/inventopal.svg";
import Hexcord from "../../assets/hexcord.svg";
import Spinero from "../../assets/spinero.svg";
import Sprinttrip from "../../assets/sprinttrip.svg";
import PizzaJungle from "../../assets/pizza_jungle.svg";
import Deliverie from "../../assets/deliverie.svg";
import { useState, createRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Portfolio = props => {
  const footballRef = createRef();
  const loanRef = createRef();
  const inventopalRef = createRef();
  const hexcordRef = createRef();
  const spineroRef = createRef();
  const sprintRef = createRef();
  const pizzaJungleRef = createRef();
  const deliverieRef = createRef();

  const [active, setActive] = useState(0);

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add(style.active);
      } else {
        entry.target.classList.remove(style.active);
      }
    });
  }, { threshold: 1 });

  useEffect(() => {
    const fr = footballRef.current;
    const lr = loanRef.current;
    const ir = inventopalRef.current;
    const hr = hexcordRef.current;
    const sr = spineroRef.current;
    const spr = sprintRef.current;
    const pr = pizzaJungleRef.current;
    const dr = deliverieRef.current;
    observer.observe(fr);
    observer.observe(lr);
    observer.observe(ir);
    observer.observe(hr);
    observer.observe(sr);
    observer.observe(spr);
    observer.observe(pr);
    observer.observe(dr);

    return () => {
      observer.unobserve(fr);
      observer.unobserve(lr);
      observer.unobserve(ir);
      observer.unobserve(hr);
      observer.unobserve(sr);
      observer.unobserve(spr);
      observer.unobserve(pr);
      observer.unobserve(dr);
    }
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section id="portfolio" className={style.main__container}>
      <div ref={footballRef} onClick={() => { setActive(0); }} className={`${style.work__card} ${active === 0 ? style.active : ""}`}>
        <span className={style.helper}></span>
        <img src={LoveFootball} alt="love football" />
        <div className={style.card__hover}>
          <p style={{ marginBottom: "64px" }}>UI/UX Design</p>
          <div>
            <h2>Love Football</h2>
            <p>(Gamification Design)</p>
            <p>A fantasy football app</p>
          </div>
          <p><NavLink to="/p/love_football" className="boring__link arrow__link">View case study</NavLink></p>
        </div>
      </div>
      <div ref={loanRef} onClick={() => { setActive(1); }} className={`${style.work__card} ${active === 1 ? style.active : ""}`}>
        <span className={style.helper}></span>
        <img src={LoanUp} alt="loan up" />
        <div className={style.card__hover}>
          <p>UI/UX Design</p>
          <div>
            <h2>Loanup</h2>
            <p>An app for loans</p>
          </div>
          <p><NavLink to="/p/loan_up" className="boring__link arrow__link">View case study</NavLink></p>
        </div>
      </div>
      <div ref={inventopalRef} onClick={() => { setActive(2); }} className={`${style.work__card} ${active === 2 ? style.active : ""}`}>
        <span className={style.helper}></span>
        <img src={Inventopal} alt="inventopal" />
        <div className={style.card__hover}>
          <p>UI/UX Design</p>
          <div>
            <h2>Inventopal</h2>
            <p>A pharmacy inventory app</p>
          </div>
          <p><NavLink to="/p/inventopal" className="boring__link arrow__link">View case study</NavLink></p>
        </div>
      </div>
      <div ref={hexcordRef} onClick={() => { setActive(3); }} className={`${style.work__card} ${active === 3 ? style.active : ""}`}>
        <span className={style.helper}></span>
        <img src={Hexcord} alt="hexcord" />
        <div className={style.card__hover}>
          <p>UI Design</p>
          <div>
            <h2>Hexcord</h2>
            <p>A screen recorder app</p>
          </div>
          <p><NavLink to="/p/hexcord" className="boring__link arrow__link">View case study</NavLink></p>
        </div>
      </div>
      <div ref={pizzaJungleRef} onClick={() => { setActive(4); }} className={`${style.work__card} ${active === 4 ? style.active : ""}`}>
        <span className={style.helper}></span>
        <img src={PizzaJungle} alt="pizza jungle" />
        <div className={style.card__hover}>
          <p>UI Design</p>
          <div>
            <h2>Pizza Jungle</h2>
            <p>A pizza ordering app</p>
          </div>
          <p><NavLink to="/p/pizza_jungle" className="boring__link arrow__link">View case study</NavLink></p>
        </div>
      </div>
      <div ref={deliverieRef} onClick={() => { setActive(5); }} className={`${style.work__card} ${active === 5 ? style.active : ""}`}>
        <span className={style.helper}></span>
        <img src={Deliverie} alt="deliverie app" />
        <div className={style.card__hover}>
          <p>UI Design</p>
          <div>
            <h2>Deliverie</h2>
            <p>A delivery app</p>
          </div>
          <p><NavLink to="/p/deliverie" className="boring__link arrow__link">View case study</NavLink></p>
        </div>
      </div>
      <div ref={spineroRef} onClick={() => { setActive(6); }} className={`${style.work__card} ${active === 6 ? style.active : ""}`}>
        <span className={style.helper}></span>
        <img src={Spinero} alt="spinero" />
        <div className={style.card__hover}>
          <p>UI Design</p>
          <div>
            <h2>Spinero</h2>
            <p>A fashion e-commerce store</p>
          </div>
          <p><NavLink to="/p/spinero" className="boring__link arrow__link">View case study</NavLink></p>
        </div>
      </div>
      <div ref={sprintRef} onClick={() => { setActive(7); }} className={`${style.work__card} ${active === 7 ? style.active : ""}`}>
        <span className={style.helper}></span>
        <img src={Sprinttrip} alt="sprint trip" />
        <div className={style.card__hover}>
          <p>UI Design</p>
          <div>
            <h2>Sprintrip</h2>
            <p>A booking app</p>
          </div>
          <p><NavLink to="/p/sprintrip" className="boring__link arrow__link">View case study</NavLink></p>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;