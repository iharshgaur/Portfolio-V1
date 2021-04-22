import React from "react";
import Footer from "./Footer";
import Mailer from "./Mailer";
import Navbar from "./Navbar";
import PersonalInfo from "./PersonalInfo";
import styles from "./Profile.module.css";
import Projects from "./Projects";
import SocialPresence from "./SocialPresence";
import Stats from "./Stats";
import WorkExperience from "./WorkExperience";
function Profile() {
  return (
    <div className={styles.Profile}>
      <Navbar />
      <PersonalInfo />
      <SocialPresence />
      <WorkExperience />
      <Stats />
      <Projects />
      <Mailer />
      <Footer />
    </div>
  );
}

export default Profile;
