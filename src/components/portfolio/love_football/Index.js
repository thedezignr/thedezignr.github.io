import style from "../projects.module.css";
import love_football_survey_data from "../../../assets/love_football_survey_data.svg";
import love_football_empathy_map from "../../../assets/love_football_empathy_map.svg";
import love_football_brainstorming from "../../../assets/love_football_brainstorming.svg";
import love_football_wireframe from "../../../assets/love_football_wireframe.svg";
import love_football_ui_design from "../../../assets/love_football_ui_design.svg";
import { NavLink } from "react-router-dom";

const LoveFootball = () => {
  return (
    <>
      <section className={style.main__container}>
        <section>
          <main className="main__body">
            <h3>LoveFootball App - Gamification</h3>
            <p>Lovefootball is a game for fantasy football lovers and football lovers where gamers compete for more points on an
          upcoming match. Its the only platform of its kind in Nigeria.</p>
            <h3>The Challenge</h3>
            <p>Lovefootball is new to its Nigerian target market. Prior to Lovefootball, there was no Fantasy football gaming platform.</p>
            <p>I was tasked with a user-friendly strategy to make the app a habit forming product. I had the responsibilty of
          analysizing existing quantitative research data to validate the product’s idea.</p>
            <p>Prior to coming to me, they had already designed and built out the app. I was constrained to the existing design system,
          and development boundaries.</p>
            <h3>The Process</h3>
            <p className="regular__bold__text">Quantitative Research Analysis</p>
            <p>Prior to my coming on board the LoveFootball team, they had done some quantitative research but had not analyzed their
          findings.</p>
            <p>On coming on board, I first went through their quantitative data and analyzed it. Because of the newness of the Fantasy
          football idea to the Nigerian market, it was important to first validate the idea with the data available.</p>
            <img className={style.major__image} src={love_football_survey_data} alt="A screenshot of the one of the excel sheets that contain survey data." />
            <h4 className={style.alt__text}>A screenshot of the one of the excel sheets that contain survey data.</h4>
            <p>Key findings</p>
            <ul className={style.default__list}>
              <li>
                <p>Nigerian football lovers are familiar with Fantasy Football.</p>
              </li>
              <li>
                <p>Most Nigerian football lovers get their football information from Google.</p>
                <p>This data was important because the team at Lovefootball had considered adding a feature that allowed users to
              discuss football on the app.</p>
              </li>
            </ul>
            <p className="regular__bold__text">Qualitative Research</p>
            <p>The goal of the qualitative research was to;</p>
            <ul className={style.default__list}>
              <li>
                <p>Ascertain the level of interest Nigerian football lovers have in Fantasy football.</p>
              </li>
              <li>
                <p>Find out the challenges users had faced with similar products or with Lovefootball app.</p>
              </li>
            </ul>
            <div className={style.double__image}>
              <div>
                <img className={style.major__image} src={love_football_empathy_map} alt="A screenshot of the empathy map that was used to collate data after qual research." />
                <h4 className={style.alt__text}>A screenshot of the empathy map that was used to collate data after qual research.</h4>
              </div>
              <div>
                <img className={style.minor__image} src={love_football_brainstorming} alt="A screenshot of the Miro board after brainstorming." />
                <h4 className={style.alt__text}>A screenshot of the Miro board after brainstorming.</h4>
              </div>
            </div>
            <p>Key findings</p>
            <ul className={style.default__list}>
              <li>
                <p>4 out of the 5 participants, had been playing Fantasy football for upwards of 6 months, while 1 user had played
              Fantasy football for a month.</p>
              </li>
              <li>
                <p>The participants did not have enough resources for contesting on Lovefootball as compared to what they were used to.</p>
              </li>
              <li>
                <p>The contest links and the referral links confused the participants as they both look familiar.</p>
              </li>
              <li>
                <p>The football language on LoveFootball was not the football language that the participants.</p>
              </li>
            </ul>
            <p>The last 2 findings bothered on technical issues that were immediately fixed.</p>
            <p>Having known that Nigerian users were very interested in Fantasy Football, we proceeded to focus on;</p>
            <ul className={style.default__list}>
              <li>
                <p>How might we provide the users with enough resources in the app?</p>
              </li>
            </ul>
            <h3>The Solution</h3>
            <p>Solving the problem of providing the users with enough resources in the game was dicey. Too many resources would make
            the app too easy and less interesting, too little resources and the users would find the app too difficult and will not
          come back.</p>
            <p>After a brainstorming session, we resolved to gamify Lovefootball even further, by;</p>
            <ul className={style.default__list}>
              <li>
                <p>Creating rewards systems that provide the users with more resources when they achieve certain goals.</p>
              </li>
              <li>
                <p>Creating extra competitions asides Fantasy football itself that will enable the user to win rewards.</p>
              </li>
            </ul>
            <div className={style.double__mobile__image}>
              <div>
                <img className={style.mobile__image} src={love_football_wireframe} alt="The screen shows a  wireframe congratulating a user who has just won a reward." />
              </div>
              <div>
                <img className={style.mobile__image} src={love_football_ui_design} alt="The screen shows the final UI design congratulating a user who has just won a reward." />
              </div>
            </div>
            <h4 className={style.alt__text} style={{ marginTop: "0" }}>The screen above shows a  wireframe and the final UI design
        congratulating a user who has just won a reward.</h4>
            <p>Our first strategy at gamification was the incentivization of the already existing leaderboards system, allowing users to
          win rewards every week and every month.</p>
            <p>By the next upgrade we intend to add trivia questions about the football to the app. Users will earn rewards as they
          answer questions.</p>
            <h3>Lessons</h3>
            <p>With every project comes lessons and I have a few lessons from this project;</p>
            <ul className={style.default__list}>
              <li>
                <p>I would rather have had wider and more varied pick of participants for the qualitative research. 5 people was too
                few and they were all enthusiasts. I would have loved to hear from people who are not interested in Fantasy Football.
              I believe that such people would have given me more balanced data.</p>
              </li>
              <li>
                <p>I would have loved to test different UI designs with the users, conducting A/B Tests and Usability Tests to know
                which design best resonated with users. I would have loved to know which particular design best resonated with the
              gamification strategy and how interesting the users found the strategy. </p>
              </li>
            </ul>
            <p>Due to the constraints of timelines and budgets, I had to make do with what I had.</p>
          </main>
          <aside className={style.responsibilities__wrapper}>
            <main className="main__body">
              <h3>My Role</h3>
              <ul className="boring__list">
                <li>UI Designer</li>
                <li>UX Designer</li>
              </ul>
              <h3>Reponsibilities</h3>
              <ul className="boring__list">
                <li>Qualitative Research</li>
                <li>Quantitative Research Analysis</li>
                <li>User Personas</li>
                <li>Empathy Map</li>
                <li>Brainstorming</li>
                <li>UI Design</li>
              </ul>
            </main>
          </aside>
        </section>
        <footer className={style.footer}>
          <p>
            <NavLink to="/p/loan_up" className="boring__link arrow__link pull__right">Next Post</NavLink>
          </p>
        </footer>
      </section >
    </>
  );
};

export default LoveFootball;