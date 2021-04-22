import React from "react";
import styles from "./TechStack.module.css";
function TechStack() {
  return (
    <div className={styles.TechStack} id="TechStack">
      <h2 className={styles.TechStack__Heading}>Journey so far</h2>
      <div className={styles.TechStack__Cards}>
        <div className={styles.TechStack__Cards__Card}>
          <h4>
            1200+ hrs <br /> of full stack coding
          </h4>
        </div>
        <div className={styles.TechStack__Cards__Card}>
          <h4>
            240+ problems
            <br /> on hackerrank
          </h4>
        </div>{" "}
        <div className={styles.TechStack__Cards__Card}>
          <h4>
            300+ <br /> Git Commits
          </h4>
        </div>{" "}
        <div className={styles.TechStack__Cards__Card}>
          <h4>
            20+ <br /> Projects
          </h4>
        </div>
      </div>
    </div>
  );
}

export default TechStack;
