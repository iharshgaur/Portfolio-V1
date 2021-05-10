import React from "react";
import styles from "./Stats.module.css";
function Stats() {
  return (
    <div className={styles.Stats} id="Stats">
      <h2 className={styles.Stats__Heading}>Journey so far 🚶‍♂️ </h2>
      <div className={styles.Stats__Cards}>
        <div className={styles.Stats__Cards__Card}>
          <h4>
            1200+ hrs <br /> of full stack coding
          </h4>
        </div>
        <div className={styles.Stats__Cards__Card}>
          <h4>
            240+ problems
            <br /> of hackerrank
          </h4>
        </div>{" "}
        <div className={styles.Stats__Cards__Card}>
          <h4>
            300+ <br /> Git Commits
          </h4>
        </div>{" "}
        <div className={styles.Stats__Cards__Card}>
          <h4>
            20+ <br /> Projects
          </h4>
        </div>
        <img
          src="https://github-readme-stats.vercel.app/api?username=iharshgaur&&show_icons=true&title_color=5BE8C9&icon_color=5BE8C9&text_color=ffffff&bg_color=060f1d"
          alt="git stats"
          width="60%"
        />
      </div>
    </div>
  );
}

export default Stats;
