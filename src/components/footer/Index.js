import style from "./index.module.css";

const Footer = props => {
  return (
    <footer className={`${style.footer} ${props.forHighlight ? style.positioned__footer : ""}`}>
        <div className={style.socials}>
          <button type="button" className="no__background no__border">
            <span className="icon dribble"></span>
          </button>
          <button type="button" className="no__background no__border">
            <span className="icon twitter"></span>
          </button>
          <button type="button" className="no__background no__border">
            <span className="icon linkedin"></span>
          </button>
          <button type="button" className="no__background no__border">
            <span className="icon email"></span>
          </button>
        </div>
      </footer>
  );
};

export default Footer;