import style from "./index.module.css";

const Footer = props => {
  return (
    <footer className={`${style.footer} ${props.forHighlight ? style.positioned__footer : ""} ${props.small ? style.small__footer : ""}`}>
      <div>
        <p className={style.credits}>Designed by Angel, built by <a href="https://www.hyperdebugger.dev" className="no__background no__border boring__link">hyper_debugger</a></p>
      </div>
      <div className={style.socials}>
        <a href="https://dribbble.com/theDezignr " className="no__background no__border boring__link" target="_blank" rel="noreferrer">
          <span className="icon dribble"></span>
        </a>
        <a href="https://twitter.com/thedezignr_" className="no__background no__border" target="_blank" rel="noreferrer">
          <span className="icon twitter"></span>
        </a>
        <a href="https://www.linkedin.com/in/angel-opoku" className="no__background no__border" target="_blank" rel="noreferrer">
          <span className="icon linkedin"></span>
        </a>
        <a href="mailto:angelopoku2@gmail.com" className="no__background no__border" target="_blank" rel="noreferrer">
          <span className="icon email"></span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;