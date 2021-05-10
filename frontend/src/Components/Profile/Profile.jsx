import React from "react";
import Footer from "./Footer";

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
      <Projects />
      <WorkExperience />
      <SocialPresence />
      <Stats />
      <Footer />
    </div>
  );
}

export default Profile;
