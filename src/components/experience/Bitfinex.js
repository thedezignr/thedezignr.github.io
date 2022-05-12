import style from "./index.module.css";

const Bitfinex = props => {

  return (
    <section className={`${style.main__container} ${style.genesys__facilitator}`}>
      <main className="main__body">
        <div className="table">
          <div className="table__row">
            <div style={{ paddingBottom: "0" }} className="table__cell">
              <h3>Bitfinex</h3>
              <p>Product Designer</p>
            </div>
            <div style={{ paddingBottom: "0" }} className="table__cell">
              <p>February 2021 - Present</p>
            </div>
          </div>
        </div>
        <p>
          Working in a crypto company can be challenging and I have been fortunate enough to work on most company products, 
          providing me with valauble experience.
        </p>
        <p>
          I have spent the most time working on our;
        </p>
        <ul className={style.default__list}>
          <li>
            <p>Mobile app</p>
          </li>
          <li>
            <p>Web app</p>
          </li>
          <li>
            <p>Design System</p>
          </li>
          <li>
            <p>KYC Admin</p>
          </li>
        </ul>
      </main>
    </section >
  );
};

export default Bitfinex;
