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
  const [numberTo, setNumberTo] = useState("");

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

    try {
      const response = await fetch('https://chatbot-m3molnqw3-rogirardini-gmailcoms-projects.vercel.app/send-invitation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ WaId: `549${numberTo}` }),
      });
      
      const data = await response.json();
      console.log(data);
      setDetailsSent(true);
      setSpinner(false);
    } catch (error) {
      console.error('Error enviando la invitación:', error);
      setSpinner(false);
    }
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
        setNumberTo,
        numberTo,
        detailsSent,
        setDetailsSent,
        sendDetailsEmail,
      }}
    >
      {children}
    </InvitacionContext.Provider>
  );
};
