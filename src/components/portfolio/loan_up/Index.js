import style from "../projects.module.css";
import { NavLink } from "react-router-dom";
import loan_up_survey_data from "../../../assets/loan_up_survey_data.svg";
import loan_up_user_persona from "../../../assets/loan_up_user_persona.svg";
import loan_up_wire_flow from "../../../assets/loan_up_wire_flow.svg";
import loan_up_wire_frame from "../../../assets/loan_up_wire_frame.svg";
import loan_up_screens from "../../../assets/loan_up_screens.svg";

const LoanUp = () => {
  return (
    <>
      <section className={style.main__container}>
        <section>
          <main className="main__body">
            <h3>LoanUp</h3>
            <p>LoanUp is a fintech product. With LoanUp users are able to take loans and pay off the loans from the comfort of
              their homes.</p>
            <aside className={style.mobile__roles_section}>
              <h3>My Role</h3>
              <ul className="boring__list">
                <li>UI Designer</li>
                <li>UX Designer</li>
              </ul>
            </aside>
            <h3>The Challenge</h3>
            <p>LoanUp is owned by a micro-finance bank that has been running an analogue loan service for years and have faced
              the following challenges;</p>
            <ul className={style.default__list}>
              <li>
                <p>Delay in payment of loans.</p>
              </li>
              <li>
                <p>Ineffective ways of communicating with clients about the status of their loans and upcoming due dates.</p>
              </li>
              <li>
                <p>Insufficient information about clients caused by clients’ difficulty in filling the PDF forms.</p>
              </li>
              <li>
                <p>Lack of a digital database of clients and loans for easy referencing.</p>
              </li>
            </ul>
            <h3>The Process</h3>
            <p className="regular__bold__text">Quantitative Research</p>
            <p>I started the project by creating a survey. I was interested in understanding the challenges their clients face
              from their own point of view and their experience if any with digital methods of banking.</p>
            <p>The focus of the survey was to;</p>
            <ul className={style.default__list}>
              <li>
                <p>Find out why the users delay in making payments.</p>
              </li>
              <li>
                <p>Find out the challenges that the users have with the current methods of taking loans.</p>
              </li>
              <li>
                <p>Find out if their existing users have any experience with digital methods of banking.</p>
              </li>
            </ul>
            <img className={`${style.major__image} ${style.loan__up__survey__data}`} src={loan_up_survey_data} alt="A screenshot of the responses of the users." />
            <h4 className={style.alt__text}>A screenshot of the responses of the users.</h4>
            <p>Key findings</p>
            <ul className={style.default__list}>
              <li>
                <p>Most users mentioned “collateral” as the main challenge they face with taking loans.</p>
              </li>
              <li>
                <p>Most users have used a digital method of banking.</p>
              </li>
              <li>
                <p>There was no uniform response on why users often default on paying off of their loans. Every user had a
                  different personal reason.</p>
              </li>
            </ul>
            <img className={`${style.major__image__1} ${style.loan__up__user__persona}`} src={loan_up_user_persona} alt="This is a goal-oriented user persona used for this project." />
            <h4 className={style.alt__text}>This is a goal-oriented user persona used for this project.</h4>
            <h3>The Solution</h3>
            <p className="regular__bold__text">LoanUp App</p>
            <p>After brainstorming with the client and project manager we decided to build an app that does the following;</p>
            <ul className={style.default__list}>
              <li>
                <p>Enable a user take a loan without collateral just as long as their bank statement shows the user is capable of
                  paying off the amount they want to borrow.</p>
              </li>
              <li>
                <p>Enable users to pay off loans in installments.</p>
              </li>
              <li>
                <p>Reduce time of loan processing to 48 hours.</p>
              </li>
              <li>
                <p>Reduce information needed to take a loan.</p>
              </li>
              <li>
                <p>Provides in-app and email notifications of the status of a loan, payback duration and time.</p>
              </li>
            </ul>
            <p className="regular__bold__text">LoanUp Admin</p>
            <p>I designed the admin interface that allowed the microfinance bank to;</p>
            <ul className={style.default__list}>
              <li>
                <p>Maintain a database of clients and loans.</p>
              </li>
              <li>
                <p>Effectively communicate with users about loans</p>
              </li>
            </ul>
            <p>The focus of this case study is not the admin side of the product, details about it will not be shared</p>
            <div className={style.double__image}>
              <div>
                <img className={`${style.major__image} ${style.loan__up__wireflow}`} src={loan_up_wire_flow} alt="LoanUp wireflow" />
                <h4 className={style.alt__text}>LoanUp wireflow</h4>
              </div>
              <div>
                <img className={`${style.minor__image} ${style.loan__up__wire__frame}`} src={loan_up_wire_frame} alt="LoanUp Wireframes" />
                <h4 className={style.alt__text}>LoanUp Wireframes</h4>
              </div>
            </div>
            <p>To start of the design of the app, I started with a wireflow. I picked a wireflow over a userflow because a
            wireflow is much more detailed and accounts for every element on the design interface. A wireflow can also be easily
              communicated to developers, PMs and stakeholders.</p>
            <img className={`${style.major__image} ${style.loan__up__screens}`} src={loan_up_screens} alt="LoanUp Screens" />
            <h4 className={style.alt__text}>LoanUp Screens</h4>
          </main>
        </section>
        <aside className={style.responsibilities__wrapper}>
          <h3>My Role</h3>
          <ul className="boring__list">
            <li>UI Designer</li>
            <li>UX Designer</li>
          </ul>
          <h3>Reponsibilities</h3>
          <ul className="boring__list">
            <li>Quantitative Research</li>
            <li>User Personas</li>
            <li>Wireflows</li>
            <li>Wire-frames</li>
            <li>UI design</li>
          </ul>
        </aside>
        <footer className={style.footer}>
          <p>
            <NavLink to="/p/love_football" className="boring__link arrow__left__link pull__left">Previous Post</NavLink>
            <NavLink to="/p/inventopal" className="boring__link arrow__link pull__right">Next Post</NavLink>
          </p>
        </footer>
      </section >
    </>
  );
};

export default LoanUp;