import React from "react";
import styles from "./PersonalInfo.module.css";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import OfflineBoltIcon from "@material-ui/icons/OfflineBolt";
const useStyles = makeStyles({
  Button: {
    border: "1px solid #64FFDA",
    color: "#64FFDA",
    width: "15%",
    height: "50px",
    textTransform: "none",
  },
  Skills: {
    color: "#64FFDA",
  },
});
function PersonalInfo() {
  const classes = useStyles();

  return (
    <>
      <div className={styles.Container} id="introduction">
        <p className={styles.Container__Greetings}>Hi, my name is</p>
        <p className={styles.Container__Name}>Harsh Gaur.</p>
        <p className={styles.Container__Profession}>Full Stack Developer.</p>
        <p className={styles.Container__Info}>
          I'm a Delhi-based software engineer who loves to create React
          applications for the web. Currently, I'm learning full stack and have
          build few amazing fullstack applications and looking for opportunities
          in full stack web development.
        </p>

        <a href="#mailer" style={{ textDecoration: "none" }}>
          <Button className={classes.Button}> Get In Touch 💌 </Button>
        </a>
      </div>
      <div id="about" style={{ height: "80px" }}></div>
      <div className={styles.AboutMe}>
        <div className={styles.AboutMe__Left}>
          <h2 className={styles.AboutMe__Left__Heading}> About Me ✍ </h2>

          <div className={styles.AboutMe__Left__Top}>
            <img
              src="../../Img/profile.jpg"
              alt="profile pic"
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </div>
          <p className={styles.Aboutme__Left__Info}>
            Hello! My name is Harsh Gaur and I enjoy creating things that live
            on the internet. My interest in web development started back in 2018
            when I decided to build a Content Management System for my college.
            <br />
            <br />
            Fast-forward to today, and I've have almost completed my project
            based learnings of fullstack web development at masaischool
            completing 30 weeks of programming.
            <br />
            <br />
            Here are a few technologies I've been working with recently :
            <br />
            <br />
          </p>
          <table className={styles.Aboutme__Left__Info__Table__Small}>
            <tbody className={styles.Aboutme__Left__Info__Table__Body}>
              <tr>
                <td>
                  <div>
                    <OfflineBoltIcon className={classes.Skills} /> &nbsp; Git
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div>
                    <OfflineBoltIcon className={classes.Skills} />
                    &nbsp; HTML and CSS
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div>
                    <OfflineBoltIcon className={classes.Skills} /> &nbsp;
                    Javascript (ES6+)
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div>
                    <OfflineBoltIcon className={classes.Skills} />
                    &nbsp; React
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div>
                    <OfflineBoltIcon className={classes.Skills} />
                    &nbsp; Express
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div>
                    <OfflineBoltIcon className={classes.Skills} />
                    &nbsp; MongoDB
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div>
                    <OfflineBoltIcon className={classes.Skills} />
                    &nbsp; Node.js{" "}
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div>
                    <OfflineBoltIcon className={classes.Skills} />
                    &nbsp; Material UI
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <table className={styles.Aboutme__Left__Info__Table}>
            <tbody className={styles.Aboutme__Left__Info__Table__Body}>
              <tr>
                <td>
                  <div>
                    <OfflineBoltIcon className={classes.Skills} /> &nbsp; Git
                  </div>
                </td>
                <td>
                  <div>
                    <OfflineBoltIcon className={classes.Skills} />
                    &nbsp; HTML and CSS
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div>
                    <OfflineBoltIcon className={classes.Skills} /> &nbsp;
                    Javascript (ES6+)
                  </div>
                </td>
                <td>
                  <div>
                    <OfflineBoltIcon className={classes.Skills} />
                    &nbsp; React
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div>
                    <OfflineBoltIcon className={classes.Skills} />
                    &nbsp; Express
                  </div>
                </td>
                <td>
                  <div>
                    <OfflineBoltIcon className={classes.Skills} />
                    &nbsp; MongoDB
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div>
                    <OfflineBoltIcon className={classes.Skills} />
                    &nbsp; Node.js{" "}
                  </div>
                </td>
                <td>
                  <div>
                    <OfflineBoltIcon className={classes.Skills} />
                    &nbsp; Material UI
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styles.AboutMe__Right}>
          <div className={styles.AboutMe__Right__Top}>
            <img
              src="https://i.ibb.co/qpQQt5r/imageedit-0-9789051645-Copy-removebg-preview.jpg"
              alt="profile pic"
              style={{
                objectFit: "fill",
                width: "100%",
                height: "100%",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default PersonalInfo;
