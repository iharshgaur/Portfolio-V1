import React from "react";
import styles from "./WorkExperience.module.css";
function WorkExperience() {
  return (
    <>
      <div id="experience" style={{ height: "10px" }}></div>

      <div className={styles.WorkExperience}>
        <h2 className={styles.WorkExperience__Heading}>
          Where I have worked 🏢{" "}
        </h2>

        <div className={styles.WorkExperience__Experiences}>
          <div className={styles.WorkExperience__Experiences__First}>
            <p className={styles.Experience__Title}>
              Python Developer{" "}
              <em style={{ color: "#64FFDA" }}> @Apex Tier Technologies </em>
            </p>
            <p style={{ color: "#c6d1f0", marginLeft: 20 }}>
              July 2019 - December 2019
            </p>
            <p
              style={{
                color: "#c6d1f0",
                marginLeft: 20,
              }}
            >
              Tech Stack: <em style={{ color: "#64FFDA" }}> SQL, Python </em>
              <br />
            </p>
            <p
              style={{
                color: "#c6d1f0",
                marginLeft: 20,
              }}
            >
              Responsibilities:
            </p>
            <ul
              style={{
                color: "#c6d1f0",
                marginLeft: 20,
                lineheight: "20px",
              }}
            >
              <li className={styles.Responsibilities}>
                Operated on large datasets with libraries like Numpy and Pandas.
              </li>
              <li className={styles.Responsibilities}>
                Assembled a semantic parser to work along with the user's
                natural language for a chatbot.
              </li>
              <li className={styles.Responsibilities}>
                Acquired hands-on experience on libraries like fuzzy-wuzzy and
                pattern.
              </li>
              <li className={styles.Responsibilities}>
                Optimised the sequence to sequence model for building NL to SQL
                queries.
              </li>
            </ul>
          </div>
          <div className={styles.WorkExperience__Experiences__Second}>
            {" "}
            <p className={styles.Experience__Title}>
              Web Developer Intern{" "}
              <em style={{ color: "#64FFDA" }}> @N.H.P.C </em>
            </p>
            <p style={{ color: "#c6d1f0", marginLeft: 20 }}>
              July 2018 - December 2018
            </p>
            <p
              style={{
                color: "#c6d1f0",
                marginLeft: 20,
              }}
            >
              Tech Stack:{" "}
              <em style={{ color: "#64FFDA" }}>
                {" "}
                SQL, HTML5, CSS, JavaScript{" "}
              </em>
              <br />
            </p>
            <p
              style={{
                color: "#c6d1f0",
                marginLeft: 20,
              }}
            >
              Responsibilities:
            </p>
            <ul
              style={{
                color: "#c6d1f0",
                marginLeft: 20,
              }}
            >
              <li className={styles.Responsibilities}>
                Constructed an online complaint lodging system for simultaneous
                multiple user requests.
              </li>
              <li className={styles.Responsibilities}>
                Delivered interactive admin and user pages.
              </li>
              <li className={styles.Responsibilities}>
                Optimized a real-time chat system for admin and users using
                AJAX.
              </li>
              <li className={styles.Responsibilities}>
                Secured the database to store the user and admin information
                such as passwords, chats, and queries using SQL.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default WorkExperience;
