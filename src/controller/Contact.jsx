import React from "react";
import { contact } from "../../utility/contact";
import BackToTop from "./BackToTop";

function Contact({ id }) {
  return (
    <div
      id={id}
      className="w-full h-[30vh]    flex flex-col justify-center items-center "
    >
      <div className="text-4xl font-semibold">Contact us</div>
      <div className="w-[90%] h-[65%]  flex justify-center items-center gap-8 flex-wrap ">
        {contact.map((e, i) => {
          const Icon = e.icon;
          return (
            <a
              key={i}
              href={e.link}
              className="w-[5vw]  h-[7vh] max-lg:w-[17vw] "
            >
              <Icon className="text-[40px] w-[100%] h-[100%] bg-[#e6d2ac] p-[10px] rounded-3xl hover:bg-white hover:text-[#c4b292] hover:border-3 active:bg-white active:text-[#c4b292] active:border-3 hover:duration-600 " />
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default Contact;
