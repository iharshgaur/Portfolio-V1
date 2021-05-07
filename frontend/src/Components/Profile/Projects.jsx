import React from "react";
import styles from "./Projects.module.css";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: "rgba(10, 25, 47, 0.856)",
    width: "500px",
    color: "white",
    boxShadow: theme.shadows[10],
    padding: "3%",
  },
}));
function Projects() {
  const classes = useStyles();
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [open4, setOpen4] = React.useState(false);

  const handleOpen1 = () => {
    setOpen1(true);
  };

  const handleClose1 = () => {
    setOpen1(false);
  };

  const handleOpen2 = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };

  const handleOpen3 = () => {
    setOpen3(true);
  };

  const handleClose3 = () => {
    setOpen3(false);
  };

  const handleOpen4 = () => {
    setOpen4(true);
  };

  const handleClose4 = () => {
    setOpen4(false);
  };

  return (
    <>
      <div id="projects" style={{ height: "10px" }}></div>

      <div className={styles.Projects}>
        <h2 className={styles.Projects__Heading}>
          Somethings that I have built 💻{" "}
        </h2>
        <div className={styles.Projects__Cards}>
          <div className={styles.Projects__Cards__Card}>
            <div className={styles.Projects__Cards__Card__Project1}>
              <div>
                <h4>Real Time Chat Application</h4>
                <Button
                  variant="outlined"
                  style={{ border: "1px solid #5BE8C9", color: "#5be8c9" }}
                  onClick={handleOpen1}
                >
                  Description
                </Button>
                <Modal
                  aria-labelledby="transition-modal-title"
                  aria-describedby="transition-modal-description"
                  className={classes.modal}
                  open={open1}
                  onClose={handleClose1}
                  closeAfterTransition
                  BackdropComponent={Backdrop}
                  BackdropProps={{
                    timeout: 500,
                  }}
                >
                  <Fade in={open1}>
                    <div className={classes.paper}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "flex-end",
                          marginTop: "20px",
                        }}
                      >
                        <button
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            textAlign: "center",
                            backgroundColor: "transparent",
                            border: "1px solid #5BE8C9",
                            color: "#5be8c9",
                            borderRadius: "1px",
                            fontSize: "15px",
                          }}
                          onClick={handleClose1}
                        >
                          X
                        </button>
                      </div>
                      <h2
                        id="transition-modal-title"
                        style={{ color: "#5be8c9" }}
                      >
                        Real Time Chat Application
                      </h2>
                      <p id="transition-modal-description">
                        Tech Stack: React.js, Node.js, Express, Socket.io
                      </p>
                      <p id="transition-modal-description">
                        Description : A real-time chat application that allows
                        users to create private chat rooms and invite their
                        friends to chat with them in real-time.
                      </p>
                      <p id="transition-modal-description">
                        My Responsibilities and Contributions:
                        <ul>
                          <li>Engineered both backend and front end alone</li>
                          <li>
                            Implemented the real-time conversations using
                            socket.io
                          </li>
                          <li>
                            Coded the front end using React.js and Material UI
                          </li>
                        </ul>
                      </p>

                      <div>
                        <div
                          style={{
                            textDecoration: "none",
                            display: "flex",
                            justifyContent: "space-evenly",
                          }}
                        >
                          <a
                            href="https://github.com/iharshgaur/Real-Time-Chat-Application"
                            style={{ textDecoration: "none" }}
                          >
                            <Button
                              variant="outlined"
                              style={{
                                border: "1px solid #5BE8C9",
                                color: "#5be8c9",
                              }}
                            >
                              Github
                            </Button>
                          </a>
                          {/* eslint-disable-next-line */}
                          <a href="" style={{ textDecoration: "none" }}>
                            <Button
                              variant="outlined"
                              style={{
                                border: "1px solid #5BE8C9",
                                color: "#5be8c9",
                              }}
                            >
                              Demo
                            </Button>
                          </a>
                          {/* eslint-disable-next-line */}
                          <a href="" style={{ textDecoration: "none" }}>
                            <Button
                              variant="outlined"
                              style={{
                                border: "1px solid #5BE8C9",
                                color: "#5be8c9",
                              }}
                            >
                              Blog
                            </Button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </Fade>
                </Modal>
              </div>
            </div>
          </div>
          <div className={styles.Projects__Cards__Card}>
            <div className={styles.Projects__Cards__Card__Project2}>
              <div>
                <h4>Revv Cars Clone</h4>
                <Button
                  variant="outlined"
                  style={{ border: "1px solid #5BE8C9", color: "#5be8c9" }}
                  onClick={handleOpen2}
                >
                  Description
                </Button>
                <Modal
                  aria-labelledby="transition-modal-title"
                  aria-describedby="transition-modal-description"
                  className={classes.modal}
                  open={open2}
                  onClose={handleClose1}
                  closeAfterTransition
                  BackdropComponent={Backdrop}
                  BackdropProps={{
                    timeout: 500,
                  }}
                >
                  <Fade in={open2}>
                    <div className={classes.paper}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "flex-end",
                          marginTop: "20px",
                        }}
                      >
                        <button
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            textAlign: "center",
                            backgroundColor: "transparent",
                            border: "1px solid #5BE8C9",
                            color: "#5be8c9",
                            borderRadius: "1px",
                            fontSize: "15px",
                          }}
                          onClick={handleClose2}
                        >
                          X
                        </button>
                      </div>
                      <h2
                        id="transition-modal-title"
                        style={{ color: "#5be8c9" }}
                      >
                        Revv Cars Clone
                      </h2>
                      <p id="transition-modal-description">
                        Tech Stack: React.js, Express.js, MongoDB, Node.js,
                        Material UI, and CSS.
                      </p>
                      <p id="transition-modal-description">
                        Description : Revv Cars is an Indian car rental startup
                        and we have tried to engineer its clone, with a platform
                        where users can either rent a car or subscribe to a car
                        just like on the main website.
                      </p>
                      <p id="transition-modal-description">
                        My Responsibilities and Contributions:
                        <ul>
                          <li>
                            Developed the landing page to route the users on the
                            desired "renting" or "subscription" pages
                          </li>
                          <li>
                            Re-engineered the entire user profile to show the
                            bookings made by the user
                          </li>
                          <li>
                            Modified the backend architecture on Mongo Atlas
                            Cloud
                          </li>
                        </ul>
                      </p>

                      <div>
                        <div
                          style={{
                            textDecoration: "none",
                            display: "flex",
                            justifyContent: "space-evenly",
                          }}
                        >
                          <a
                            href="https://github.com/iharshgaur/Revv-Clone"
                            style={{ textDecoration: "none" }}
                          >
                            <Button
                              variant="outlined"
                              style={{
                                border: "1px solid #5BE8C9",
                                color: "#5be8c9",
                              }}
                            >
                              Github
                            </Button>
                          </a>
                          {/* eslint-disable-next-line */}
                          <a href="" style={{ textDecoration: "none" }}>
                            <Button
                              variant="outlined"
                              style={{
                                border: "1px solid #5BE8C9",
                                color: "#5be8c9",
                              }}
                            >
                              Demo
                            </Button>
                          </a>
                          {/* eslint-disable-next-line */}
                          <a href="" style={{ textDecoration: "none" }}>
                            <Button
                              variant="outlined"
                              style={{
                                border: "1px solid #5BE8C9",
                                color: "#5be8c9",
                              }}
                            >
                              Blog
                            </Button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </Fade>
                </Modal>
              </div>
            </div>
          </div>
          <div className={styles.Projects__Cards__Card}>
            <div className={styles.Projects__Cards__Card__Project3}>
              <div>
                <h4>Couch Surfer Clone</h4>
                <Button
                  variant="outlined"
                  style={{ border: "1px solid #5BE8C9", color: "#5be8c9" }}
                  onClick={handleOpen3}
                >
                  Description
                </Button>
                <Modal
                  aria-labelledby="transition-modal-title"
                  aria-describedby="transition-modal-description"
                  className={classes.modal}
                  open={open3}
                  onClose={handleClose3}
                  closeAfterTransition
                  BackdropComponent={Backdrop}
                  BackdropProps={{
                    timeout: 500,
                  }}
                >
                  <Fade in={open3}>
                    <div className={classes.paper}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "flex-end",
                          marginTop: "20px",
                        }}
                      >
                        <button
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            textAlign: "center",
                            backgroundColor: "transparent",
                            border: "1px solid #5BE8C9",
                            color: "#5be8c9",
                            borderRadius: "1px",
                            fontSize: "15px",
                          }}
                          onClick={handleClose3}
                        >
                          X
                        </button>
                      </div>
                      <h2
                        id="transition-modal-title"
                        style={{ color: "#5be8c9" }}
                      >
                        Couch Surfers Clone
                      </h2>
                      <p id="transition-modal-description">
                        Tech Stack: React.js, CSS, MATERIAL UI, Node.js
                      </p>
                      <p id="transition-modal-description">
                        Description : CouchSurfing is a global hospitality
                        exchange service and we managed to code its clone where
                        users can watch various events, organize new events,
                        interact with hosts of different countries and get their
                        queries resolved in the discussion board.
                      </p>
                      <p id="transition-modal-description">
                        My Responsibilities and Contributions:
                        <ul>
                          <li>
                            Programmed and deployed the API that could handle
                            the user queries.
                          </li>
                          <li>
                            Programmed and deployed the API that could handle
                            the user queries.
                          </li>
                          <li>
                            Modeled the landing page and assembled all the pages
                            to enable a seamless user flow.
                          </li>
                        </ul>
                      </p>

                      <div>
                        <div
                          style={{
                            textDecoration: "none",
                            display: "flex",
                            justifyContent: "space-evenly",
                          }}
                        >
                          <a
                            href="https://github.com/iharshgaur/Couchsurfing-Bravo"
                            style={{ textDecoration: "none" }}
                          >
                            <Button
                              variant="outlined"
                              style={{
                                border: "1px solid #5BE8C9",
                                color: "#5be8c9",
                              }}
                            >
                              Github
                            </Button>
                          </a>
                          {/* eslint-disable-next-line */}
                          <a href="" style={{ textDecoration: "none" }}>
                            <Button
                              variant="outlined"
                              style={{
                                border: "1px solid #5BE8C9",
                                color: "#5be8c9",
                              }}
                            >
                              Demo
                            </Button>
                          </a>
                          {/* eslint-disable-next-line */}
                          <a href="" style={{ textDecoration: "none" }}>
                            <Button
                              variant="outlined"
                              style={{
                                border: "1px solid #5BE8C9",
                                color: "#5be8c9",
                              }}
                            >
                              Blog
                            </Button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </Fade>
                </Modal>
              </div>
            </div>
          </div>
          <div className={styles.Projects__Cards__Card}>
            <div className={styles.Projects__Cards__Card__Project4}>
              <div>
                <h4>Cult Fit Clone</h4>
                <Button
                  variant="outlined"
                  style={{ border: "1px solid #5BE8C9", color: "#5be8c9" }}
                  onClick={handleOpen4}
                >
                  Description
                </Button>
                <Modal
                  aria-labelledby="transition-modal-title"
                  aria-describedby="transition-modal-description"
                  className={classes.modal}
                  open={open4}
                  onClose={handleClose4}
                  closeAfterTransition
                  BackdropComponent={Backdrop}
                  BackdropProps={{
                    timeout: 500,
                  }}
                >
                  <Fade in={open4}>
                    <div className={classes.paper}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "flex-end",
                          marginTop: "20px",
                        }}
                      >
                        <button
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            textAlign: "center",
                            backgroundColor: "transparent",
                            border: "1px solid #5BE8C9",
                            color: "#5be8c9",
                            borderRadius: "1px",
                            fontSize: "15px",
                          }}
                          onClick={handleClose4}
                        >
                          X
                        </button>
                      </div>
                      <h2
                        id="transition-modal-title"
                        style={{ color: "#5be8c9" }}
                      >
                        Cult Fit Clone
                      </h2>
                      <p id="transition-modal-description">
                        Tech Stack: HTML, CSS, JavaScript
                      </p>
                      <p id="transition-modal-description">
                        Description : CureFit is a health and fitness company
                        offering digital and offline experiences across fitness,
                        nutrition, and mental well-being and we built a similar
                        platform for the users to buy products and services
                        offered by curefit.com and also implemented crucial
                        features like secure login and personal notification
                      </p>
                      <p id="transition-modal-description">
                        My Responsibilities and Contributions:
                        <ul>
                          <li>
                            Coded the landing page of the website and optimized
                            it for SEO using publicly available technologies
                          </li>
                          <li>
                            Developed various UX designs to make the user
                            experience smooth
                          </li>
                          <li>
                            Prevented unauthorized users from getting access to
                            the website data by enabling secure login
                          </li>
                        </ul>
                      </p>

                      <div>
                        <div
                          style={{
                            textDecoration: "none",
                            display: "flex",
                            justifyContent: "space-evenly",
                          }}
                        >
                          <a
                            href="https://github.com/iharshgaur/CULT.FIT-CLONE"
                            style={{ textDecoration: "none" }}
                          >
                            <Button
                              variant="outlined"
                              style={{
                                border: "1px solid #5BE8C9",
                                color: "#5be8c9",
                              }}
                            >
                              Github
                            </Button>
                          </a>
                          {/* eslint-disable-next-line */}
                          <a href="" style={{ textDecoration: "none" }}>
                            <Button
                              variant="outlined"
                              style={{
                                border: "1px solid #5BE8C9",
                                color: "#5be8c9",
                              }}
                            >
                              Demo
                            </Button>
                          </a>
                          {/* eslint-disable-next-line */}
                          <a href="" style={{ textDecoration: "none" }}>
                            <Button
                              variant="outlined"
                              style={{
                                border: "1px solid #5BE8C9",
                                color: "#5be8c9",
                              }}
                            >
                              Blog
                            </Button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </Fade>
                </Modal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
