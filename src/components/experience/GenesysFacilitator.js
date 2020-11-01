import style from "./index.module.css";

const GenesysFacilitator = props => {

  return (
    <section className={`${style.main__container} ${style.genesys__facilitator}`}>
      <main className="main__body">
        <div className="table">
          <div className="table__row">
            <div style={{ paddingBottom: "0" }} className="table__cell">
              <h3>Genesys Tech Hub</h3>
              <p>UI/UX Design Facilitator</p>
            </div>
            <div style={{ paddingBottom: "0" }} className="table__cell">
              <p>June 2020 - August 2020</p>
            </div>
          </div>
        </div>
        <p>Genesys Tech Hub takes interns every year and trains them on Product Design.
          This year I was one of the facilitators and I took them on the topics below;</p>
        <ul className={style.default__list}>
          <li>
            <p>UI Design Patterns</p>
          </li>
          <li>
            <p>User Research & User Personas</p>
          </li>
        </ul>
      </main>
    </section >
  );
};

export default GenesysFacilitator;