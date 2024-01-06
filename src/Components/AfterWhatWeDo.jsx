import React from "react";
import text from "../assets/text.png";
import image2 from "../assets/lastImage.png";
import shakti from "../assets/shakti.png";
import SSIP from "../assets/ssip.png";
import lines1 from "../assets/lines1.png";
import lines2 from "../assets/lines2.png";
import anuj from "../assets/anuj.png";
import soham from "../assets/soham.png";
import chintan from "../assets/image9.png";
import kunal from "../assets/sahoomkdbas.png";
import sarthak from "../assets/sarthak.png";
import kishan from "../assets/kishan.png";

export default function AfterWhatWeDo() {
  return (
    <div>
      <img
        src={image2}
        alt="battery image"
        className="rotate-180 w-64 h-64 mx-auto"
      />

      <div style={{ position: "relative" }}>
        <img src={lines1} alt="line1" className="z-0 " />
        <div
          style={{
            textAlign: "center",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 1,
          }}
        >
          <h1 className="text-xl md:text-5xl mt-11 font-bold md:ml-16">
            Experience the Array of <br /> Autonomous Tech at
          </h1>
          <img
            src={text}
            alt="inavlab text"
            style={{ display: "block", margin: "0 auto", zIndex: 1 }}
            className="mt-12"
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: "50px",
          overflowX: "hidden",
          position: "relative",
        }}
        className=""
      >
        <img src={lines2} alt="lines" className="z-0" />
      </div>
      <hr
        style={{ borderColor: "#555", borderWidth: "2px", width: "50%" }}
        className="my-4 mx-auto"
      />
      <h1 className="font-medium text-3xl md:text-5xl text-center mt-8">
        Our Team
      </h1>
      <div className="container mx-auto my-20" id="team">
        <div className="flex flex-wrap justify-center">
          <div className="text-center mb-4 md:mb-0 md:mr-6 mr-4">
            <img src={shakti} alt="shakti image" className="w-32 h-32 mb-1" />
            <p className="text-xs mt-1 font-semibold">DR. SHAKTI MISHRA</p>
            <p className="text-xs mt-1 text-green-500">MENTOR</p>
          </div>
          <div className="text-center mb-4 md:mb-0 md:mr-6 mr-4">
            <img src={chintan} alt="shakti image" className="w-32 h-32 mb-1" />
            <p className="text-xs mt-1 font-semibold">DR. CHINTAN BHATT</p>
            <p className="text-xs mt-1 text-green-500">MENTOR</p>
          </div>
          <div className="text-center mb-4 md:mb-0 md:mr-6 mr-4">
            <img src={anuj} alt="shakti image" className="w-32 h-32 mb-1" />
            <p className="text-xs mt-1 font-semibold">ANUJ PATEL</p>
            <p className="text-xs mt-1 text-green-500">FOUNDER</p>
          </div>
          <div className="text-center mb-4 md:mb-0 md:mr-6 mr-4">
            <img src={soham} alt="shakti image" className="w-32 h-32 mb-1" />
            <p className="text-xs mt-1 font-semibold">SOHAM VYAS</p>
          </div>

          <div className="text-center mb-4 md:mb-0 md:mr-6 mr-4">
            <img src={kunal} alt="shakti image" className="w-32 h-32 mb-1" />
            <p className="text-xs mt-1 font-semibold">KUNAL SAHOO</p>
          </div>
          <div className="text-center mb-4 md:mb-0 md:mr-6 mr-4">
            <img src={sarthak} alt="shakti image" className="w-32 h-32 mb-1" />
            <p className="text-xs mt-1 font-semibold">SARTHAK MEHTA</p>
          </div>
          <div className="text-center mb-4 md:mb-0 md:mr-6 mr-4">
            <img src={kishan} alt="shakti image" className="w-32 h-32 mb-1" />
            <p className="text-xs mt-1 font-semibold">KISHAN PIPARIYA</p>
          </div>
        </div>
      </div>
      <img src={SSIP} alt="sspi image" className="mx-auto mb-10" />
    </div>
  );
}
