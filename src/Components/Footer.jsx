import React from "react";
import logo from "../assets/logo1.png";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

export default function Footer() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zpycakl",
        "template_y60uctj",
        form.current,
        "jlW0W2HGD6JRkBHvm"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="bg-black min-h-96 justify-between">
      <div className="flex flex-col md:flex-row justify-between p-5 md:p-10">
        <div className="flex-col items-center gap-2">
          <div className="flex items-center">
            <img
              src={logo}
              alt="logo"
              className="bg-black rounded-full w-16 h-16"
            />
            <div className="ml-3">
              <span className="font-bold text-3xl text-green-500 tracking-widest">
                i
              </span>
              <span className="font-bold text-3xl tracking-widest text-white">
                NAV LABS
              </span>
            </div>
          </div>
          <div className="flex">
            {/* <form
              action="/submit"
              method="post"
              className="flex flex-col md:items-center md:max-w-md mx-auto mt-4 md:mt-0"
              id="contactus"
            >
              <textarea
                id="email"
                name="email"
                rows="1"
                placeholder="Enter your mail here"
                className="text-white rounded-2xl p-3 bg-transparent border-2 border-white mb-4 resize-none focus:outline-none focus:border-green-500 md:w-[300px]"
              ></textarea>
              <textarea
                id="email"
                name="email"
                rows="1"
                placeholder="Enter your mail here"
                className="text-white rounded-2xl p-3 bg-transparent border-2 border-white mb-4 resize-none focus:outline-none focus:border-green-500 md:w-[300px]"
              ></textarea>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Enter your message here"
                className="text-white rounded-2xl p-3 bg-transparent border-2 border-white mb-4 resize-none focus:outline-none focus:border-green-500 md:w-[300px]"
              ></textarea>
              <button
                type="submit"
                className="bg-green-500 text-white p-3 rounded-xl hover:bg-green-800 transition duration-300 w-full md:w-[100px]"
              >
                Send
              </button>
            </form> */}
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col md:items-center md:max-w-md mx-auto mt-4 md:mt-0"
              id="contactus"
            >
              <label>Name</label>
              <input
                type="text"
                name="user_name"
                className="text-white rounded-2xl p-3 bg-transparent border-2 border-white mb-4 resize-none focus:outline-none focus:border-green-500 md:w-[300px]"
                placeholder="Enter your name here"
              />
              <label>Email</label>
              <input
                type="email"
                name="user_email"
                className="text-white rounded-2xl p-3 bg-transparent border-2 border-white mb-4 resize-none focus:outline-none focus:border-green-500 md:w-[300px]"
                placeholder="Enter your email here"
              />
              <label>Message</label>
              <textarea
                name="message"
                className="text-white rounded-2xl p-3 bg-transparent border-2 border-white mb-4 resize-none focus:outline-none focus:border-green-500 md:w-[300px]"
                placeholder="Enter your message here"
              />
              <input
                type="submit"
                value="Send"
                className="bg-green-500 text-white p-3 rounded-xl hover:bg-green-800 transition duration-300 w-full md:w-[100px]"
              />
            </form>
          </div>
        </div>
        <div>
          <div className="flex-row mt-4 md:mt-0 md:order-2">
            <h3 className="text-white mb-3 font-bold">Legal</h3>
            <ul className="flex flex-col">
              <li className="text-white mb-2 md:mr-4">General Info</li>
              <li className="text-white mb-2 md:mr-4">Privacy Policy</li>
              <li className="text-white mb-2 md:mr-4">Terms of Service</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="flex-row mt-4 md:mt-0 md:order-2">
            <h3 className="text-white mb-3 font-bold">Talk to Us</h3>
            <ul className="flex flex-col">
              <li className="text-white mb-2 md:mr-4">ceo@inavlabs.com</li>
              <li className="text-white mb-2 md:mr-4">+91 9408393005</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
