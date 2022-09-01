import React from "react";
import React2, { useState } from "react";
import React1, { useRef } from "react";
import emailjs from "@emailjs/browser";
import React3, { useForm } from "react-hook-form";

export const Contact = () => {
  const [message, setMessage] = useState(false);
  const sent = () => setMessage(!message);

  const [sentMessage, setsetMessage] = useState(false);
  const sentmodeClick = () => setsetMessage(!sentMessage);

  const { reset } = useForm();

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vr2nzdw",
        "template_ypatv6r",
        form.current,
        "R72PkENUMNzRrHTqi"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
          console.log("error");
        }
      );
  };

  return (
    <div name="contact" className="h-screen w-full">
      <div className="flex flex-col justify-center">
        <div className="text-center mt-24">
          <h1 className="text-4xl md:text-6xl font-bold">Contacts.</h1>
        </div>

        <div className="mt-6 bg-orange-100 mx-24 justify-center text-justify ">
          <form ref={form} onSubmit={sendEmail}>
            <p className="text-1xl font-bold text-center my-5 md:text-2xl mx-2">
              Feel free to send your message, feedback, suggestions and ideas.
            </p>
            <div className="justify-center items-center align-middle flex mx-4">
              <label className=" space-x-4 text-1xl font-bold md:text-2xl">
                Name:{" "}
              </label>
              <input
                className="justify-center max-w-xs h-9 items-center mb-6 border-spacing-y-16 border-solid border-2 border-neutral-800 rounded-md w-80 ml-5 mt-2"
                type="text"
                name="from_name"
              />
            </div>
            <div className="justify-center items-center align-middle flex mx-4">
              <label className=" space-x-4 text-1xl font-bold md:text-2xl">
                Email:{" "}
              </label>
              <input
                className="justify-center max-w-xs h-9 items-center mb-6 border-solid border-2 border-neutral-800 rounded-md w-80 ml-5 mt-2"
                type="email"
                name="from_email"
              />
            </div>
            <div className="space-y-2 mb-3 justify-center align-middle items-center flex mx-4">
              <label className=" space-x-4 text-1xl font-bold md:text-2xl">
                Message:{" "}
              </label>
              <textarea
                name="message"
                className="items-end border-solid border-2 border-neutral-800 rounded-md w-80 h-32 ml-6 "
              />
            </div>
            <div className="mt-6 mx-24 justify-center text-justify flex mb-10">
              {!sentMessage ? (
                <input
                  className="justify-center text-center cursor-pointer h-9 text-2xl font-bold bg-orange-300 rounded-full mx-4 w-40 hover:bg-orange-100"
                  type="submit"
                  onClick={sentmodeClick}
                  value="Send"
                />
              ) : (
                <input
                  className="justify-center text-center cursor-pointer h-9 text-2xl font-bold"
                  value="EMAIL SENT!"
                />
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
