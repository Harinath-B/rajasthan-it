import { useState } from "react";
import { useNavigate } from "react-router-dom";
import conf from "../assets/pexels-cottonbro-studio-5990264.jpg";
import { Navbar } from "../components/Navbar.jsx";
import { Form } from "../components/Form.jsx";

export const Home = () => {
  const [roomCode, setRoomCode] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/room/${roomCode}`);
  };

  return (
    <div className="">
      <Navbar />
      <div className="relative h-screen">
        <div className="absolute h-full w-full flex overflow-hidden">
          <img
            src={conf}
            alt="VideoChat conference"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="absolute h-full w-full flex overflow-hidden bg-black/25"></div>
        <div className="lg:flex lg:pt-20 flex-col items-center justify-center relative z-10 px-6 md:max-w-[90vw] mx-auto">
          <div className=" flex flex-col items-center justify-center pb-6">
            <h1 className="text-[50px] md:text-[140px] text-white font-bold pt-12">
              D.I.R.L
            </h1>
            <p className="text-[40px] text-white -mt-2 text-center">
              VIRTUAL THERAPY &nbsp;
              <span className="text-[#2D72FF] uppercase font-bold">
                APP
              </span>
            </p>
            <Form
              roomCode={roomCode}
              setRoomCode={setRoomCode}
              handleSubmit={handleSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
