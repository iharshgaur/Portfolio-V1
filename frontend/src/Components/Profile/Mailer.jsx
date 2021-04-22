import React from "react";
import styles from "./Mailer.module.css";

import { useForm } from "react-hook-form";
import { sendForm } from "emailjs-com";
import { ReactComponent as MailerImg } from "../../svg/MailerImg.svg";
import { useToasts } from "react-toast-notifications";

function Mailer() {
  const { addToast } = useToasts();
  const [sent, setSent] = React.useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  function sending() {
    addToast("Sending mail, please wait!!", {
      appearance: "info",
      autoDismiss: true,
    });
  }
  function sendOK() {
    addToast("Your message has been sent!", {
      appearance: "success",
      autoDismiss: true,
    });
  }

  const onSubmit = (data) => {
    sending();
    sendEmail(document.getElementById("contact-form"));
  };
  const sendEmail = (data) => {
    try {
      sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        data,
        process.env.REACT_APP_USER_ID
      ).then((result) => {
        sendOK();
        setSent(true);
      });
    } catch (error) {
      addToast("Something went wrong, please try again!!!", {
        appearance: "error",
        autoDismiss: true,
      });
    }
    data.reset();
  };
  return (
    <div className={styles.Mailer} id="mailer">
      <h2 className={styles.Mailer__Heading}>
        Want to hire me? Let's connect 👋{" "}
      </h2>

      <div className={styles.Mailer__Body}>
        <div className={styles.Mailer__Cards}>
          <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
            <input
              defaultValue=""
              placeholder="Your Name"
              {...register("username", { required: true })}
            />

            {errors.username && <span>*This field is required</span>}
            <br />
            <input
              placeholder="Your Email"
              {...register("email", { required: true })}
            />
            {errors.email && <span>*This field is required</span>}
            <br />
            <input
              placeholder="Subject of the email"
              {...register("subject", { required: true })}
            />
            {errors.email && <span>*This field is required</span>}
            <br />
            <input
              placeholder="Message ( please keep it short 😇  )"
              {...register("message", { required: true })}
            />

            {errors.message && <span>*This field is required</span>}
            <br />
            {!sent ? (
              <input
                type="submit"
                className={styles.Form__Button}
                value="Send"
              />
            ) : (
              <input
                type="submit"
                className={styles.Form__Button}
                value="Message sent already"
                disabled
                style={{ backgroundColor: "grey" }}
              />
            )}
          </form>
        </div>

        <MailerImg className={styles.Mailer__Image} />
      </div>
    </div>
  );
}

export default Mailer;
