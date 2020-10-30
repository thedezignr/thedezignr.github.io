import style from "./index.module.css";

const GenesysDesigner = props => {

  return (
    <section className={style.main__container}>
      <main className="main__body">
        <div className="table">
          <div className="table__row">
            <div style={{ paddingBottom: "0" }} className="table__cell">
              <h3>Genesys Tech Hub</h3>
              <p>UI/UX Designer</p>
            </div>
            <div style={{ paddingBottom: "0" }} className="table__cell">
              <p>January 2020 - August 2020</p>
            </div>
          </div>
        </div>
        <p>While at Genesys I worked on a number of client-facing products that cut across both B2B and B2C categories.
        I also worked on multidisciplinary teams to achieve products success - I worked with developers, designers,
          project managers, testers and stakeholders constantly.</p>
        <ul className={style.default__list}>
          <li>
            <p>Resource Edge: My designer colleagues and I redesigned the company’s employee  management system.</p>
            <p>The system helps employee to keep track of their KPI from the beginning of the quarter till the quarter ends.
            As such, it increased awareness among staff concerning their KPI’s (Key Performance Indicator) which in turn
            increased productivity amongst staff. The system also made appraisals easy, for employees, line managers,
              supervisors, managers etc.</p>
          </li>
          <li>
            <p>Anambra Payroll System: I handled UX design, UI design and design system on a payroll management system for a
              neighboring state’s government. </p>
            <p>The system automated payrolling in the state and reduced fraud within the state ministries, saving the
              government, millions.</p>
          </li>
          <li>
            <p>I created personal development curriculums for the members of the team, the curriculum cut across UX Design,
              UI Design, Branding and Graphics Design.</p>
          </li>
        </ul>
      </main>
    </section >
  );
};

export default GenesysDesigner;