import style from "./index.module.css";

const Tenece = props => {

  return (
    <section className={style.main__container}>
      <section>
        <main className="main__body">
          <div className="table">
            <div className="table__row">
              <div style={{ paddingBottom: "0" }} className="table__cell">
                <h3>Tenece  Professional Services</h3>
                <p>UI/UX Design</p>
              </div>
              <div style={{ paddingBottom: "0" }} className="table__cell">
                <p>March 2019 - August 2020</p>
              </div>
            </div>
          </div>
          <p>At Tenece, I worked on company products and client-facing products, gaining hands-on experience on B2B products and
          SaaS products. I constantly worked as the only designer in multi-disciplinary teams of developers, testers,
          project managers, customer service representatives, business development people and stakeholders.</p>
          <ul className={style.default__list}>
            <li>
              <p>Dynamo: I designed a developer interface that allowed developers build a framework that is used to quickly
              create various management information systems without having to worry about architecture and system interfaces.
              I also created and maintained the design system for Dynamo.</p>
              <p>This system significantly reduced the time it took to build other company products such as the multi-tenant
              school manager that is being used to service a lot of colleges.</p>
            </li>
            <li>
              <p>School Manager: I redesigned interfaces, components and a design system that is being used for the company’s
              flagship product; School Manager. This product houses at least 5 schools with 20,000 students each.</p>
              <p>The uniformity and consistency of the school management portal greatly increased usability, brand recognition and
              lowered the learning curve. The new interface design is also much easier to use. After the redesign, the adoption
              rate for the product, increased significantly.</p>
            </li>
            <li>
              <p>School Manager: I conducted the first ever usability testing, A/B testing and heuristics evaluation on the
              School Manager.</p>
              <p>The report led to a design overhaul that further reduced the learning curve and also increased adoption rates.</p>
            </li>
            <li>
              <p>CBT System: As part of the school manager, I conducted a UI and UX overhaul for the CBT (Computer Based Testing)
              platform.</p>
              <p>This increased the adoption rate by lecturers who now find it easy to set exams.</p>
            </li>
            <li>
              <p>HMS: I designed the entire interface for a hospital management system, constantly doing qualitative research on
              users and pulling knowledge from experts.</p>
              <p>The new HMS product, created a new stream of income for the company, as the company now branched into the health industry.</p>
            </li>
          </ul>
        </main>
      </section>
      <aside className={style.responsibilities__wrapper}>
        <h3>Reponsibilities</h3>
        <ul className="boring__list">
          <li>Qualitative Research</li>
          <li>Quantitative Research</li>
          <li>User Personas</li>
          <li>Information Architecture</li>
          <li>Wireframing</li>
          <li>Design thinking</li>
          <li>Usability Testing</li>
          <li>Heuristics Evaluation</li>
          <li>A/B Testing</li>
          <li>UI Design</li>
          <li>Design Systems</li>
          <li>Low - Hi Fidelity Mockups</li>
          <li>UX Strategy</li>
        </ul>
      </aside>
    </section >
  );
};

export default Tenece;