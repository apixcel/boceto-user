import { useState } from "react";
import { BiSend } from "react-icons/bi";
import { CgClose } from "react-icons/cg";
import { FaArrowRight, FaRobot } from "react-icons/fa";
import MessageIcon from "../icons/MessageIcon";

const ChatWindow = () => {
  const [messageOpen, setMessageOpen] = useState(false);

  return (
    <>
      <div className="fixed right-5 bottom-5">
        <button
          onClick={() => setMessageOpen(!messageOpen)}
          className="bg-[#4285F4] w-[48px] h-[48px] rounded-full center custom-shadow"
        >
          <MessageIcon />
        </button>
      </div>

      {messageOpen ? (
        <div className="fixed right-[20px] bottom-[80px] ">
          <div className="bg-gradient-to-b from-gray-300 to-white border custom-shadow p-[16px] w-[320px] rounded-[13px]">
            <div className="flex justify-end">
              <button onClick={() => setMessageOpen(false)} className="">
                <CgClose size={24} />
              </button>
            </div>

            <h3 className="font-bold text-[24px]">Chat With Us</h3>
            <div className="rounded-[13px] shadow bg-white p-5 mt-[20px]">
              <div className="flex gap-[20px]">
                <div className="w-[60px] h-[60px] border border-gray-300 rounded-full center">
                  <FaRobot size={40} />
                </div>
                <div className="">
                  <small className="text-gray-400">liveChat Bot</small>
                  <p className="text-[16px] font-medium">Hello there!</p>
                </div>
              </div>
              <button className="w-full py-[12px] font-semibold text-white bg-black rounded-[13px] mt-[20px] center gap-[10px]">
                Chat now <BiSend />
              </button>
            </div>
            <div className="rounded-[13px] shadow bg-white p-5 mt-[12px] flex  items-center justify-between">
              <div className="flex items-center ">
                <img
                  src="/public/images/coin.png"
                  alt=""
                  className="w-[24px] h-[24px]"
                />
                <p className="">Pricing</p>
              </div>
              <button className="w-[24px] h-[24px] rounded-full bg-black/40 center">
                <FaArrowRight color="white" size={14} />
              </button>
            </div>
            <div className="rounded-[13px] shadow bg-white p-5 mt-[12px] flex  items-center justify-between">
              <div className="flex items-center ">
                <img
                  src="/public/images/coin.png"
                  alt=""
                  className="w-[24px] h-[24px]"
                />
                <p className="">Take a tour</p>
              </div>
              <button className="w-[24px] h-[24px] rounded-full bg-black/40 center">
                <FaArrowRight color="white" size={14} />
              </button>
            </div>
            <div className="rounded-[13px] shadow bg-white p-5 mt-[12px] flex  items-center justify-between">
              <div className="flex items-center ">
                <img
                  src="/public/images/coin.png"
                  alt=""
                  className="w-[24px] h-[24px]"
                />
                <p className="">hire AI-powered ChatBot</p>
              </div>
              <button className="w-[24px] h-[24px] rounded-full bg-black/40 center">
                <FaArrowRight color="white" size={14} />
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default ChatWindow;
