"use client";
import React, { useState } from "react";
import ToastWithProgressBar from "../components/Toast_Progress_Bar";
import SuccessToast2 from "../components/successToast";
import WarningToast from "../components/mailFailedToast";
import Spinner5 from "../components/spinnerButton";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [failed, setFailed] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSending(true);

    try {
      const response = await fetch("/api/send-mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }, {cache: "no-store"});

      if (response.ok) {
        setSending(false);
        setIsSuccessful(true);
        setTimeout(() => {
          setIsSuccessful(false);
        }, 3000);
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setSending(false);
        setFailed(true);
        setTimeout(() => {
          setFailed(false);
        }, 3000);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleClick = () => {
    setSending(false);
    setIsSuccessful(false);
    setFailed(false);
  };

  return (
    <>
      <section className="p-12 lg:p-24 relative z-10 flex flex-col overflow-hidden bg-stone-50 py-20">
        <div className="container">
          <div className="fixed top-[10%] right-0 lg:top-20 w-full lg:right-20 z-20">
            {sending ? <ToastWithProgressBar clicked={handleClick} /> : null}
            {isSuccessful ? <SuccessToast2 clicked={handleClick} /> : null}
            {failed ? <WarningToast clicked={handleClick} /> : null}
          </div>
          <div className="-mx-4 flex flex-wrap lg:justify-between">
            <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
              <div className="mb-12 max-w-[570px] lg:mb-0">
                <span className="mb-4 block text-base font-semibold text-primary">
                  Connect with us
                </span>
                <h2 className="mb-6 text-[32px] font-bold uppercase text-dark sm:text-[40px] lg:text-[36px] xl:text-[40px]">
                  Reach Out to Geeta Jain
                </h2>
                <p className="mb-9 text-base leading-relaxed text-body-color">
                  We value your concerns, suggestions, and feedback. As your
                  elected representative, Geeta Jain is committed to addressing
                  the issues that matter most to you. Whether you have a query,
                  require assistance, or wish to share your thoughts, we&apos;re
                  here to listen and help.
                </p>
                <div className="mb-8 flex w-full max-w-[500px]">
                  <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-blue-400/15 text-primary sm:h-[70px] sm:max-w-[70px]">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M30.6 11.8002L17.7 3.5002C16.65 2.8502 15.3 2.8502 14.3 3.5002L1.39998 11.8002C0.899983 12.1502 0.749983 12.8502 1.04998 13.3502C1.39998 13.8502 2.09998 14.0002 2.59998 13.7002L3.44998 13.1502V25.8002C3.44998 27.5502 4.84998 28.9502 6.59998 28.9502H25.4C27.15 28.9502 28.55 27.5502 28.55 25.8002V13.1502L29.4 13.7002C29.6 13.8002 29.8 13.9002 30 13.9002C30.35 13.9002 30.75 13.7002 30.95 13.4002C31.3 12.8502 31.15 12.1502 30.6 11.8002ZM13.35 26.7502V18.5002C13.35 18.0002 13.75 17.6002 14.25 17.6002H17.75C18.25 17.6002 18.65 18.0002 18.65 18.5002V26.7502H13.35ZM26.3 25.8002C26.3 26.3002 25.9 26.7002 25.4 26.7002H20.9V18.5002C20.9 16.8002 19.5 15.4002 17.8 15.4002H14.3C12.6 15.4002 11.2 16.8002 11.2 18.5002V26.7502H6.69998C6.19998 26.7502 5.79998 26.3502 5.79998 25.8502V11.7002L15.5 5.4002C15.8 5.2002 16.2 5.2002 16.5 5.4002L26.3 11.7002V25.8002Z"
                        fill="#00f"
                      />
                    </svg>
                  </div>
                  <div className="w-full">
                    <h4 className="mb-1 text-xl font-bold text-dark">
                      Our Location
                    </h4>
                    <p className="text-base text-body-color">
                      MLA Jansampark Karyalaya, Shop No. 8. Mithalal Jain
                      Bunglow, Golden Nest. Bhayandar East
                    </p>
                  </div>
                </div>

                <div className="mb-8 flex w-full max-w-[370px]">
                  <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-blue-400/15 text-primary sm:h-[70px] sm:max-w-[70px]">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_941_17577)">
                        <path
                          d="M24.3 31.1499C22.95 31.1499 21.4 30.7999 19.7 30.1499C16.3 28.7999 12.55 26.1999 9.19997 22.8499C5.84997 19.4999 3.24997 15.7499 1.89997 12.2999C0.39997 8.59994 0.54997 5.54994 2.29997 3.84994C2.34997 3.79994 2.44997 3.74994 2.49997 3.69994L6.69997 1.19994C7.74997 0.599942 9.09997 0.899942 9.79997 1.89994L12.75 6.29994C13.45 7.34994 13.15 8.74994 12.15 9.44994L10.35 10.6999C11.65 12.7999 15.35 17.9499 21.25 21.6499L22.35 20.0499C23.2 18.8499 24.55 18.4999 25.65 19.2499L30.05 22.1999C31.05 22.8999 31.35 24.2499 30.75 25.2999L28.25 29.4999C28.2 29.5999 28.15 29.6499 28.1 29.6999C27.2 30.6499 25.9 31.1499 24.3 31.1499ZM3.79997 5.54994C2.84997 6.59994 2.89997 8.74994 3.99997 11.4999C5.24997 14.6499 7.64997 18.0999 10.8 21.2499C13.9 24.3499 17.4 26.7499 20.5 27.9999C23.2 29.0999 25.35 29.1499 26.45 28.1999L28.85 24.0999C28.85 24.0499 28.85 24.0499 28.85 23.9999L24.45 21.0499C24.45 21.0499 24.35 21.0999 24.25 21.2499L23.15 22.8499C22.45 23.8499 21.1 24.1499 20.1 23.4999C13.8 19.5999 9.89997 14.1499 8.49997 11.9499C7.84997 10.8999 8.09997 9.54994 9.09997 8.84994L10.9 7.59994V7.54994L7.94997 3.14994C7.94997 3.09994 7.89997 3.09994 7.84997 3.14994L3.79997 5.54994Z"
                          fill="#0000ff"
                        />
                        <path
                          d="M29.3 14.25C28.7 14.25 28.25 13.8 28.2 13.2C27.8 8.15003 23.65 4.10003 18.55 3.75003C17.95 3.70003 17.45 3.20003 17.5 2.55003C17.55 1.95003 18.05 1.45003 18.7 1.50003C24.9 1.90003 29.95 6.80003 30.45 13C30.5 13.6 30.05 14.15 29.4 14.2C29.4 14.25 29.35 14.25 29.3 14.25Z"
                          fill="#0000ff"
                        />
                        <path
                          d="M24.35 14.7002C23.8 14.7002 23.3 14.3002 23.25 13.7002C22.95 11.0002 20.85 8.90018 18.15 8.55018C17.55 8.50018 17.1 7.90018 17.15 7.30018C17.2 6.70018 17.8 6.25018 18.4 6.30018C22.15 6.75018 25.05 9.65018 25.5 13.4002C25.55 14.0002 25.15 14.5502 24.5 14.6502C24.4 14.7002 24.35 14.7002 24.35 14.7002Z"
                          fill="#0000ff"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_941_17577">
                          <rect width="32" height="32" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="w-full">
                    <h4 className="mb-1 text-xl font-bold text-dark">
                      Phone Number
                    </h4>
                    <p className="text-base text-body-color">
                      (+91)74 004 02 834
                    </p>
                  </div>
                </div>

                <div className="mb-8 flex w-full max-w-[370px]">
                  <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-blue-400/15 text-primary sm:h-[70px] sm:max-w-[70px]">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M28 4.7998H3.99998C2.29998 4.7998 0.849976 6.1998 0.849976 7.9498V24.1498C0.849976 25.8498 2.24998 27.2998 3.99998 27.2998H28C29.7 27.2998 31.15 25.8998 31.15 24.1498V7.8998C31.15 6.1998 29.7 4.7998 28 4.7998ZM28 7.0498C28.05 7.0498 28.1 7.0498 28.15 7.0498L16 14.8498L3.84998 7.0498C3.89998 7.0498 3.94998 7.0498 3.99998 7.0498H28ZM28 24.9498H3.99998C3.49998 24.9498 3.09998 24.5498 3.09998 24.0498V9.2498L14.8 16.7498C15.15 16.9998 15.55 17.0998 15.95 17.0998C16.35 17.0998 16.75 16.9998 17.1 16.7498L28.8 9.2498V24.0998C28.9 24.5998 28.5 24.9498 28 24.9498Z"
                        fill="#00f"
                      />
                    </svg>
                  </div>
                  <div className="w-full flex gap-6 items-center">
                    <div>
                      <h4 className="mb-1 text-xl font-bold text-dark">
                        Email Address
                      </h4>
                      <p className="text-base text-body-color">
                        geetajainoffice@gmail.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div className="relative rounded-lg bg-white p-8 shadow-lg dark:bg-dark-2 sm:p-12">
                <form onSubmit={handleSubmit}>
                  <ContactInputBox
                    type="text"
                    name="name"
                    handleChange={handleChange}
                    value={formData.name}
                    placeholder="Your Name"
                  />
                  <ContactInputBox
                    type="text"
                    name="email"
                    handleChange={handleChange}
                    value={formData.email}
                    placeholder="Your Email"
                  />
                  <ContactInputBox
                    type="text"
                    name="phone"
                    handleChange={handleChange}
                    value={formData.phone}
                    placeholder="Your Phone"
                  />
                  <ContactTextArea
                    row="6"
                    placeholder="Your Message"
                    name="message"
                    handleChange={handleChange}
                    value={formData.message}
                  />
                  <div className="flex flex-col gap-3">
                    <div className="">
                      {sending ? (
                        <Spinner5 />
                      ) : (
                        <button
                          type="submit"
                          className="rounded w-full border font-semibold border-primary bg-blue-700 p-2 text-white transition hover:bg-opacity-90"
                        >
                          Send Message
                        </button>
                      )}
                    </div>
                    <h1 className="text-center font-medium">Or</h1>
                    <p className="font-semibold">
                      In case you want to attach media files, use mail option
                      below.
                    </p>
                    <a
                      href="mailto:geetajainoffice@gmail.com"
                      className="w-full  rounded border h-1/2 flex items-center p-2 justify-center font-semibold border-blue-700 bg-white text-blue-700 transition hover:bg-blue-700 text-center hover:text-white"
                    >
                      Open Mail
                    </a>
                  </div>
                </form>
                <div>
                  <span className="absolute -right-9 -top-10 z-[-1]">
                    <svg
                      width={100}
                      height={100}
                      viewBox="0 0 100 100"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0 100C0 44.7715 0 0 0 0C55.2285 0 100 44.7715 100 100C100 100 100 100 0 100Z"
                        fill="#3056D3"
                      />
                    </svg>
                  </span>
                  <span className="absolute -right-10 top-[90px] z-[-1]">
                    <svg
                      width={34}
                      height={134}
                      viewBox="0 0 34 134"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="31.9993"
                        cy={132}
                        r="1.66667"
                        transform="rotate(180 31.9993 132)"
                        fill="#13C296"
                      />
                      <circle
                        cx="31.9993"
                        cy="117.333"
                        r="1.66667"
                        transform="rotate(180 31.9993 117.333)"
                        fill="#13C296"
                      />
                      <circle
                        cx="31.9993"
                        cy="102.667"
                        r="1.66667"
                        transform="rotate(180 31.9993 102.667)"
                        fill="#13C296"
                      />
                      <circle
                        cx="31.9993"
                        cy={88}
                        r="1.66667"
                        transform="rotate(180 31.9993 88)"
                        fill="#13C296"
                      />
                      <circle
                        cx="31.9993"
                        cy="73.3333"
                        r="1.66667"
                        transform="rotate(180 31.9993 73.3333)"
                        fill="#13C296"
                      />
                      <circle
                        cx="31.9993"
                        cy={45}
                        r="1.66667"
                        transform="rotate(180 31.9993 45)"
                        fill="#13C296"
                      />
                      <circle
                        cx="31.9993"
                        cy={16}
                        r="1.66667"
                        transform="rotate(180 31.9993 16)"
                        fill="#13C296"
                      />
                      <circle
                        cx="31.9993"
                        cy={59}
                        r="1.66667"
                        transform="rotate(180 31.9993 59)"
                        fill="#13C296"
                      />
                      <circle
                        cx="31.9993"
                        cy="30.6666"
                        r="1.66667"
                        transform="rotate(180 31.9993 30.6666)"
                        fill="#13C296"
                      />
                      <circle
                        cx="31.9993"
                        cy="1.66665"
                        r="1.66667"
                        transform="rotate(180 31.9993 1.66665)"
                        fill="#13C296"
                      />
                      <circle
                        cx="17.3333"
                        cy={132}
                        r="1.66667"
                        transform="rotate(180 17.3333 132)"
                        fill="#13C296"
                      />
                      <circle
                        cx="17.3333"
                        cy="117.333"
                        r="1.66667"
                        transform="rotate(180 17.3333 117.333)"
                        fill="#13C296"
                      />
                      <circle
                        cx="17.3333"
                        cy="102.667"
                        r="1.66667"
                        transform="rotate(180 17.3333 102.667)"
                        fill="#13C296"
                      />
                      <circle
                        cx="17.3333"
                        cy={88}
                        r="1.66667"
                        transform="rotate(180 17.3333 88)"
                        fill="#13C296"
                      />
                      <circle
                        cx="17.3333"
                        cy="73.3333"
                        r="1.66667"
                        transform="rotate(180 17.3333 73.3333)"
                        fill="#13C296"
                      />
                      <circle
                        cx="17.3333"
                        cy={45}
                        r="1.66667"
                        transform="rotate(180 17.3333 45)"
                        fill="#13C296"
                      />
                      <circle
                        cx="17.3333"
                        cy={16}
                        r="1.66667"
                        transform="rotate(180 17.3333 16)"
                        fill="#13C296"
                      />
                      <circle
                        cx="17.3333"
                        cy={59}
                        r="1.66667"
                        transform="rotate(180 17.3333 59)"
                        fill="#13C296"
                      />
                      <circle
                        cx="17.3333"
                        cy="30.6666"
                        r="1.66667"
                        transform="rotate(180 17.3333 30.6666)"
                        fill="#13C296"
                      />
                      <circle
                        cx="17.3333"
                        cy="1.66665"
                        r="1.66667"
                        transform="rotate(180 17.3333 1.66665)"
                        fill="#13C296"
                      />
                      <circle
                        cx="2.66536"
                        cy={132}
                        r="1.66667"
                        transform="rotate(180 2.66536 132)"
                        fill="#13C296"
                      />
                      <circle
                        cx="2.66536"
                        cy="117.333"
                        r="1.66667"
                        transform="rotate(180 2.66536 117.333)"
                        fill="#13C296"
                      />
                      <circle
                        cx="2.66536"
                        cy="102.667"
                        r="1.66667"
                        transform="rotate(180 2.66536 102.667)"
                        fill="#13C296"
                      />
                      <circle
                        cx="2.66536"
                        cy={88}
                        r="1.66667"
                        transform="rotate(180 2.66536 88)"
                        fill="#13C296"
                      />
                      <circle
                        cx="2.66536"
                        cy="73.3333"
                        r="1.66667"
                        transform="rotate(180 2.66536 73.3333)"
                        fill="#13C296"
                      />
                      <circle
                        cx="2.66536"
                        cy={45}
                        r="1.66667"
                        transform="rotate(180 2.66536 45)"
                        fill="#13C296"
                      />
                      <circle
                        cx="2.66536"
                        cy={16}
                        r="1.66667"
                        transform="rotate(180 2.66536 16)"
                        fill="#13C296"
                      />
                      <circle
                        cx="2.66536"
                        cy={59}
                        r="1.66667"
                        transform="rotate(180 2.66536 59)"
                        fill="#13C296"
                      />
                      <circle
                        cx="2.66536"
                        cy="30.6666"
                        r="1.66667"
                        transform="rotate(180 2.66536 30.6666)"
                        fill="#13C296"
                      />
                      <circle
                        cx="2.66536"
                        cy="1.66665"
                        r="1.66667"
                        transform="rotate(180 2.66536 1.66665)"
                        fill="#13C296"
                      />
                    </svg>
                  </span>
                  <span className="absolute -bottom-7 -left-7 z-[-1]">
                    <svg
                      width={107}
                      height={134}
                      viewBox="0 0 107 134"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="104.999"
                        cy={132}
                        r="1.66667"
                        transform="rotate(180 104.999 132)"
                        fill="#13C296"
                      />
                      <circle
                        cx="104.999"
                        cy="117.333"
                        r="1.66667"
                        transform="rotate(180 104.999 117.333)"
                        fill="#13C296"
                      />
                      <circle
                        cx="104.999"
                        cy="102.667"
                        r="1.66667"
                        transform="rotate(180 104.999 102.667)"
                        fill="#13C296"
                      />
                      <circle
                        cx="104.999"
                        cy={88}
                        r="1.66667"
                        transform="rotate(180 104.999 88)"
                        fill="#13C296"
                      />
                      <circle
                        cx="104.999"
                        cy="73.3333"
                        r="1.66667"
                        transform="rotate(180 104.999 73.3333)"
                        fill="#13C296"
                      />
                      <circle
                        cx="104.999"
                        cy={45}
                        r="1.66667"
                        transform="rotate(180 104.999 45)"
                        fill="#13C296"
                      />
                      <circle
                        cx="104.999"
                        cy={16}
                        r="1.66667"
                        transform="rotate(180 104.999 16)"
                        fill="#13C296"
                      />
                      <circle
                        cx="104.999"
                        cy={59}
                        r="1.66667"
                        transform="rotate(180 104.999 59)"
                        fill="#13C296"
                      />
                      <circle
                        cx="104.999"
                        cy="30.6666"
                        r="1.66667"
                        transform="rotate(180 104.999 30.6666)"
                        fill="#13C296"
                      />
                      <circle
                        cx="104.999"
                        cy="1.66665"
                        r="1.66667"
                        transform="rotate(180 104.999 1.66665)"
                        fill="#13C296"
                      />
                      <circle
                        cx="90.3333"
                        cy={132}
                        r="1.66667"
                        transform="rotate(180 90.3333 132)"
                        fill="#13C296"
                      />
                      <circle
                        cx="90.3333"
                        cy="117.333"
                        r="1.66667"
                        transform="rotate(180 90.3333 117.333)"
                        fill="#13C296"
                      />
                      <circle
                        cx="90.3333"
                        cy="102.667"
                        r="1.66667"
                        transform="rotate(180 90.3333 102.667)"
                        fill="#13C296"
                      />
                      <circle
                        cx="90.3333"
                        cy={88}
                        r="1.66667"
                        transform="rotate(180 90.3333 88)"
                        fill="#13C296"
                      />
                      <circle
                        cx="90.3333"
                        cy="73.3333"
                        r="1.66667"
                        transform="rotate(180 90.3333 73.3333)"
                        fill="#13C296"
                      />
                      <circle
                        cx="90.3333"
                        cy={45}
                        r="1.66667"
                        transform="rotate(180 90.3333 45)"
                        fill="#13C296"
                      />
                      <circle
                        cx="90.3333"
                        cy={16}
                        r="1.66667"
                        transform="rotate(180 90.3333 16)"
                        fill="#13C296"
                      />
                      <circle
                        cx="90.3333"
                        cy={59}
                        r="1.66667"
                        transform="rotate(180 90.3333 59)"
                        fill="#13C296"
                      />
                      <circle
                        cx="90.3333"
                        cy="30.6666"
                        r="1.66667"
                        transform="rotate(180 90.3333 30.6666)"
                        fill="#13C296"
                      />
                      <circle
                        cx="90.3333"
                        cy="1.66665"
                        r="1.66667"
                        transform="rotate(180 90.3333 1.66665)"
                        fill="#13C296"
                      />
                      <circle
                        cx="75.6654"
                        cy={132}
                        r="1.66667"
                        transform="rotate(180 75.6654 132)"
                        fill="#13C296"
                      />
                      <circle
                        cx="31.9993"
                        cy={132}
                        r="1.66667"
                        transform="rotate(180 31.9993 132)"
                        fill="#13C296"
                      />
                      <circle
                        cx="75.6654"
                        cy="117.333"
                        r="1.66667"
                        transform="rotate(180 75.6654 117.333)"
                        fill="#13C296"
                      />
                      <circle
                        cx="31.9993"
                        cy="117.333"
                        r="1.66667"
                        transform="rotate(180 31.9993 117.333)"
                        fill="#13C296"
                      />
                      <circle
                        cx="75.6654"
                        cy="102.667"
                        r="1.66667"
                        transform="rotate(180 75.6654 102.667)"
                        fill="#13C296"
                      />
                      <circle
                        cx="31.9993"
                        cy="102.667"
                        r="1.66667"
                        transform="rotate(180 31.9993 102.667)"
                        fill="#13C296"
                      />
                      <circle
                        cx="75.6654"
                        cy={88}
                        r="1.66667"
                        transform="rotate(180 75.6654 88)"
                        fill="#13C296"
                      />
                      <circle
                        cx="31.9993"
                        cy={88}
                        r="1.66667"
                        transform="rotate(180 31.9993 88)"
                        fill="#13C296"
                      />
                      <circle
                        cx="75.6654"
                        cy="73.3333"
                        r="1.66667"
                        transform="rotate(180 75.6654 73.3333)"
                        fill="#13C296"
                      />
                      <circle
                        cx="31.9993"
                        cy="73.3333"
                        r="1.66667"
                        transform="rotate(180 31.9993 73.3333)"
                        fill="#13C296"
                      />
                      <circle
                        cx="75.6654"
                        cy={45}
                        r="1.66667"
                        transform="rotate(180 75.6654 45)"
                        fill="#13C296"
                      />
                      <circle
                        cx="31.9993"
                        cy={45}
                        r="1.66667"
                        transform="rotate(180 31.9993 45)"
                        fill="#13C296"
                      />
                      <circle
                        cx="75.6654"
                        cy={16}
                        r="1.66667"
                        transform="rotate(180 75.6654 16)"
                        fill="#13C296"
                      />
                      <circle
                        cx="31.9993"
                        cy={16}
                        r="1.66667"
                        transform="rotate(180 31.9993 16)"
                        fill="#13C296"
                      />
                      <circle
                        cx="75.6654"
                        cy={59}
                        r="1.66667"
                        transform="rotate(180 75.6654 59)"
                        fill="#13C296"
                      />
                      <circle
                        cx="31.9993"
                        cy={59}
                        r="1.66667"
                        transform="rotate(180 31.9993 59)"
                        fill="#13C296"
                      />
                      <circle
                        cx="75.6654"
                        cy="30.6666"
                        r="1.66667"
                        transform="rotate(180 75.6654 30.6666)"
                        fill="#13C296"
                      />
                      <circle
                        cx="31.9993"
                        cy="30.6666"
                        r="1.66667"
                        transform="rotate(180 31.9993 30.6666)"
                        fill="#13C296"
                      />
                      <circle
                        cx="75.6654"
                        cy="1.66665"
                        r="1.66667"
                        transform="rotate(180 75.6654 1.66665)"
                        fill="#13C296"
                      />
                      <circle
                        cx="31.9993"
                        cy="1.66665"
                        r="1.66667"
                        transform="rotate(180 31.9993 1.66665)"
                        fill="#13C296"
                      />
                      <circle
                        cx="60.9993"
                        cy={132}
                        r="1.66667"
                        transform="rotate(180 60.9993 132)"
                        fill="#13C296"
                      />
                      <circle
                        cx="17.3333"
                        cy={132}
                        r="1.66667"
                        transform="rotate(180 17.3333 132)"
                        fill="#13C296"
                      />
                      <circle
                        cx="60.9993"
                        cy="117.333"
                        r="1.66667"
                        transform="rotate(180 60.9993 117.333)"
                        fill="#13C296"
                      />
                      <circle
                        cx="17.3333"
                        cy="117.333"
                        r="1.66667"
                        transform="rotate(180 17.3333 117.333)"
                        fill="#13C296"
                      />
                      <circle
                        cx="60.9993"
                        cy="102.667"
                        r="1.66667"
                        transform="rotate(180 60.9993 102.667)"
                        fill="#13C296"
                      />
                      <circle
                        cx="17.3333"
                        cy="102.667"
                        r="1.66667"
                        transform="rotate(180 17.3333 102.667)"
                        fill="#13C296"
                      />
                      <circle
                        cx="60.9993"
                        cy={88}
                        r="1.66667"
                        transform="rotate(180 60.9993 88)"
                        fill="#13C296"
                      />
                      <circle
                        cx="17.3333"
                        cy={88}
                        r="1.66667"
                        transform="rotate(180 17.3333 88)"
                        fill="#13C296"
                      />
                      <circle
                        cx="60.9993"
                        cy="73.3333"
                        r="1.66667"
                        transform="rotate(180 60.9993 73.3333)"
                        fill="#13C296"
                      />
                      <circle
                        cx="17.3333"
                        cy="73.3333"
                        r="1.66667"
                        transform="rotate(180 17.3333 73.3333)"
                        fill="#13C296"
                      />
                      <circle
                        cx="60.9993"
                        cy={45}
                        r="1.66667"
                        transform="rotate(180 60.9993 45)"
                        fill="#13C296"
                      />
                      <circle
                        cx="17.3333"
                        cy={45}
                        r="1.66667"
                        transform="rotate(180 17.3333 45)"
                        fill="#13C296"
                      />
                      <circle
                        cx="60.9993"
                        cy={16}
                        r="1.66667"
                        transform="rotate(180 60.9993 16)"
                        fill="#13C296"
                      />
                      <circle
                        cx="17.3333"
                        cy={16}
                        r="1.66667"
                        transform="rotate(180 17.3333 16)"
                        fill="#13C296"
                      />
                      <circle
                        cx="60.9993"
                        cy={59}
                        r="1.66667"
                        transform="rotate(180 60.9993 59)"
                        fill="#13C296"
                      />
                      <circle
                        cx="17.3333"
                        cy={59}
                        r="1.66667"
                        transform="rotate(180 17.3333 59)"
                        fill="#13C296"
                      />
                      <circle
                        cx="60.9993"
                        cy="30.6666"
                        r="1.66667"
                        transform="rotate(180 60.9993 30.6666)"
                        fill="#13C296"
                      />
                      <circle
                        cx="17.3333"
                        cy="30.6666"
                        r="1.66667"
                        transform="rotate(180 17.3333 30.6666)"
                        fill="#13C296"
                      />
                      <circle
                        cx="60.9993"
                        cy="1.66665"
                        r="1.66667"
                        transform="rotate(180 60.9993 1.66665)"
                        fill="#13C296"
                      />
                      <circle
                        cx="17.3333"
                        cy="1.66665"
                        r="1.66667"
                        transform="rotate(180 17.3333 1.66665)"
                        fill="#13C296"
                      />
                      <circle
                        cx="46.3333"
                        cy={132}
                        r="1.66667"
                        transform="rotate(180 46.3333 132)"
                        fill="#13C296"
                      />
                      <circle
                        cx="2.66536"
                        cy={132}
                        r="1.66667"
                        transform="rotate(180 2.66536 132)"
                        fill="#13C296"
                      />
                      <circle
                        cx="46.3333"
                        cy="117.333"
                        r="1.66667"
                        transform="rotate(180 46.3333 117.333)"
                        fill="#13C296"
                      />
                      <circle
                        cx="2.66536"
                        cy="117.333"
                        r="1.66667"
                        transform="rotate(180 2.66536 117.333)"
                        fill="#13C296"
                      />
                      <circle
                        cx="46.3333"
                        cy="102.667"
                        r="1.66667"
                        transform="rotate(180 46.3333 102.667)"
                        fill="#13C296"
                      />
                      <circle
                        cx="2.66536"
                        cy="102.667"
                        r="1.66667"
                        transform="rotate(180 2.66536 102.667)"
                        fill="#13C296"
                      />
                      <circle
                        cx="46.3333"
                        cy={88}
                        r="1.66667"
                        transform="rotate(180 46.3333 88)"
                        fill="#13C296"
                      />
                      <circle
                        cx="2.66536"
                        cy={88}
                        r="1.66667"
                        transform="rotate(180 2.66536 88)"
                        fill="#13C296"
                      />
                      <circle
                        cx="46.3333"
                        cy="73.3333"
                        r="1.66667"
                        transform="rotate(180 46.3333 73.3333)"
                        fill="#13C296"
                      />
                      <circle
                        cx="2.66536"
                        cy="73.3333"
                        r="1.66667"
                        transform="rotate(180 2.66536 73.3333)"
                        fill="#13C296"
                      />
                      <circle
                        cx="46.3333"
                        cy={45}
                        r="1.66667"
                        transform="rotate(180 46.3333 45)"
                        fill="#13C296"
                      />
                      <circle
                        cx="2.66536"
                        cy={45}
                        r="1.66667"
                        transform="rotate(180 2.66536 45)"
                        fill="#13C296"
                      />
                      <circle
                        cx="46.3333"
                        cy={16}
                        r="1.66667"
                        transform="rotate(180 46.3333 16)"
                        fill="#13C296"
                      />
                      <circle
                        cx="2.66536"
                        cy={16}
                        r="1.66667"
                        transform="rotate(180 2.66536 16)"
                        fill="#13C296"
                      />
                      <circle
                        cx="46.3333"
                        cy={59}
                        r="1.66667"
                        transform="rotate(180 46.3333 59)"
                        fill="#13C296"
                      />
                      <circle
                        cx="2.66536"
                        cy={59}
                        r="1.66667"
                        transform="rotate(180 2.66536 59)"
                        fill="#13C296"
                      />
                      <circle
                        cx="46.3333"
                        cy="30.6666"
                        r="1.66667"
                        transform="rotate(180 46.3333 30.6666)"
                        fill="#13C296"
                      />
                      <circle
                        cx="2.66536"
                        cy="30.6666"
                        r="1.66667"
                        transform="rotate(180 2.66536 30.6666)"
                        fill="#13C296"
                      />
                      <circle
                        cx="46.3333"
                        cy="1.66665"
                        r="1.66667"
                        transform="rotate(180 46.3333 1.66665)"
                        fill="#13C296"
                      />
                      <circle
                        cx="2.66536"
                        cy="1.66665"
                        r="1.66667"
                        transform="rotate(180 2.66536 1.66665)"
                        fill="#13C296"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

const ContactTextArea = ({
  row,
  placeholder,
  name,
  handleChange,
  value,
}) => {
  return (
    <>
      <div className="mb-6">
        <textarea
          rows={row}
          required
          onChange={handleChange}
          placeholder={placeholder}
          name={name}
          className="w-full resize-none rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6"
          value={value}
        />
      </div>
    </>
  );
};

const ContactInputBox = ({ type, placeholder, value, handleChange, name }) => {
  return (
    <>
      <div className="mb-6">
        <input
          type={type}
          onChange={handleChange}
          value={value}
          required
          placeholder={placeholder}
          name={name}
          className="w-full rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6"
        />
      </div>
    </>
  );
};

// const SuccessAlert2 = () => {
//   return (
//     <div className="py-10 bg-white dark:bg-dark">
//       <div className="container">
//         <div className="border-green bg-green-light-6 flex w-full rounded-lg border-l-[6px] px-7 py-8 md:p-9">
//           <div className="bg-green mr-5 flex h-[34px] w-full max-w-[34px] items-center justify-center rounded-md">
//             <svg
//               width="18"
//               height="18"
//               viewBox="0 0 18 18"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <g clipPath="url(#clip0_961_15637)">
//                 <path
//                   d="M8.99998 0.506248C4.3031 0.506248 0.506226 4.30312 0.506226 9C0.506226 13.6969 4.3031 17.5219 8.99998 17.5219C13.6969 17.5219 17.5219 13.6969 17.5219 9C17.5219 4.30312 13.6969 0.506248 8.99998 0.506248ZM8.99998 16.2562C5.00623 16.2562 1.77185 12.9937 1.77185 9C1.77185 5.00625 5.00623 1.77187 8.99998 1.77187C12.9937 1.77187 16.2562 5.03437 16.2562 9.02812C16.2562 12.9937 12.9937 16.2562 8.99998 16.2562Z"
//                   fill="white"
//                 />
//                 <path
//                   d="M11.4187 6.38437L8.07183 9.64687L6.55308 8.15625C6.29996 7.90312 5.90621 7.93125 5.65308 8.15625C5.39996 8.40937 5.42808 8.80312 5.65308 9.05625L7.45308 10.8C7.62183 10.9687 7.84683 11.0531 8.07183 11.0531C8.29683 11.0531 8.52183 10.9687 8.69058 10.8L12.3187 7.3125C12.5718 7.05937 12.5718 6.66562 12.3187 6.4125C12.0656 6.15937 11.6718 6.15937 11.4187 6.38437Z"
//                   fill="white"
//                 />
//               </g>
//               <defs>
//                 <clipPath id="clip0_961_15637">
//                   <rect width="18" height="18" fill="white" />
//                 </clipPath>
//               </defs>
//             </svg>
//           </div>
//           <div className="w-full">
//             <h5 className="mb-3 text-lg font-semibold text-[#004434]">
//               Message Sent Successfully
//             </h5>
//             <p className="text-base leading-relaxed text-body-color">
//               Your message has been send to our team. Thank you.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
