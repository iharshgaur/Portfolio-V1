import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import styles from "./Navbar.module.css";
const useStyles = makeStyles({
  Button: {
    border: "1px solid #64FFDA",
    color: "#64FFDA",
    textTransform: "none",
  },
});
function Navbar() {
  const classes = useStyles();
  return (
    <div className={styles.Container}>
      <div className={styles.Container__Left}>
        {/*eslint-disable-next-line*/}
        <a href="#" style={{ textDecoration: "none", color: "#64ffda" }}>
          Hello World!
        </a>
      </div>
      <div className={styles.Container__Right}>
        <a href="#about" className={styles.Container__Right__Link}>
          About
        </a>
        <a href="#experience" className={styles.Container__Right__Link}>
          Experience
        </a>
        <a href="#projects" className={styles.Container__Right__Link}>
          Projects
        </a>
        <a href="#SocialPresence" className={styles.Container__Right__Link}>
          Contact
        </a>
        <a
          href="https://drive.google.com/file/d/1nw7Taga_4PcjV6oejBIAnX86QLBNwoYJ/view?usp=sharing"
          style={{ textDecoration: "none", color: "#64ffda" }}
        >
          <Button className={classes.Button}> Resume </Button>
        </a>
      </div>
      <a
        href="https://drive.google.com/file/d/1nw7Taga_4PcjV6oejBIAnX86QLBNwoYJ/view?usp=sharing"
        style={{ textDecoration: "none", color: "#64ffda", marginRight: "5%" }}
        className={styles.ResumeSmall}
      >
        <Button className={classes.Button}> Resume </Button>
      </a>
    </div>
  );
}

export default Navbar;
