import { createContext, useContext, useState } from "react";
import emailjs from "@emailjs/browser";

const InvitacionContext = createContext();

export const useInvitation = () => {
  return useContext(InvitacionContext);
};

export const InvitacionProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [showName, setShowName] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [detailsSent, setDetailsSent] = useState(false);
  const [hasPartner, setHasPartner] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const [spinner, setSpinner] = useState(false);
  const [step, setStep] = useState(0);
  const [emailTo, setEmailTo] = useState("");

  const next = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const sendEmailToMe = () => {
    setSpinner(true);

    const params = {
      subject: "Alguien confirmó!",
      title: "Confirmé :)",
      name: name,
      quantity: quantity + 1,
    };

    emailjs
      .send("service_6con24h", "template_8qb0c7r", params, "F4640DpjT_pQg77Km")
      .then(
        (result) => {
          setShowName(true);
          setEmailSent(true);
          setSpinner(false);
          next();
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
          setSpinner(false);
        }
      );
  };

  const sendDetailsEmail = async () => {
    setSpinner(true);

    const params = {
      name: name,
      user_email: emailTo,
    };

    emailjs
      .send("service_6con24h", "template_3qs0yk8", params, "F4640DpjT_pQg77Km")
      .then(
        (result) => {
          setDetailsSent(true);
          setSpinner(false);
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
          setSpinner(false);
        }
      );
  };

  return (
    <InvitacionContext.Provider
      value={{
        name,
        setName,
        showName,
        setShowName,
        hasPartner,
        setHasPartner,
        quantity,
        setQuantity,
        spinner,
        setSpinner,
        step,
        setStep,
        next,
        sendEmailToMe,
        emailSent,
        setEmailTo,
        emailTo,
        detailsSent,
        setDetailsSent,
        sendDetailsEmail,
      }}
    >
      {children}
    </InvitacionContext.Provider>
  );
};
