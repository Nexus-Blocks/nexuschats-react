import { FC, useEffect, useState } from "react";
import { ChatMessage, DirectMessageType } from "../utils/types";
import { chatActor } from "../utils/actors";
import { v4 as uuidv4 } from "uuid";

import MessageComponent from "./chats/MessageComponent";
import { dataSet, chatData } from "../state/MessageData";

import SentMessage from "../components/chats/SentMessage";
import ReceivedMessage from "../components/chats/ReceivedMessage";

import {
  ClipboardIcon,
  CodeBracketIcon,
  DocumentIcon,
  PaperClipIcon,
} from "@heroicons/react/24/outline";
import {
  PaperAirplaneIcon,
  PhoneIcon,
  PhotoIcon,
} from "@heroicons/react/24/solid";

import SideBar from "./navbars/SideBar";

import Florencio from "../assets/florencio.png";
import Lavern from "../assets/lavern.png";
import Alfonso from "../assets/alfonzo.png";
import Benny from "../assets/benny.png";
import Jamel from "../assets/jamel.png";
import Daryl from "../assets/darly.png";

import ChatMessages from "./chats/ChatMessages";
import { User } from "../App";

interface DirectChatProps {
  user: User;
}

const DirectChat: FC<DirectChatProps> = ({ user }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [userVal, setUserVal] = useState("");
  const [userName, setUserName] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    console.log(chatActor);
  }, []);

  const handleUsernameChange = (event) => {
    setUserName(userVal);
    const handleScrollToBottom = () => {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    };
    handleScrollToBottom();
  };

  const handleMessageChange = async (event: any) => {
    setMessage(event.target.value);
  };

  const getChats = async () => {
   try {
    const chats = await chatActor.getUserChats(user.email);
    console.log(chats);
   } catch (error) {
    console.log(error)
   }
  };

  useEffect(() => {
    if (user) {
      getChats();
    }
  }, [user]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const directMessage: DirectMessageType = {
      chatId: uuidv4(),
      sender: user.email,
      receiver: "chirimaenoch@gmail.com",
      messageId: uuidv4(),
      created: BigInt(Date.now()),
      edited: false,
      body: {
        text: message,
        video: null,
        image: null,
      },
    };

    const result = await chatActor.sendMessage(directMessage);
    console.log("result", result);
    console.log("message submitted");
  };

  return (
    <div className="w-[1440px] h-[1024px] bg-zinc-100 justify-center items-start inline-flex">
      {/* <SideBar /> */}

      {/* chat heading component */}
      <div className="w-[349px] h-[1024px] bg-white shadow flex-col justify-start items-center inline-flex">
        <div className="flex-col justify-start items-start flex">
          <div className="w-[349px] p-6 justify-between items-center inline-flex">
            <div className="justify-start items-center gap-2.5 flex">
              <div className="justify-start items-center gap-1.5 flex">
                <div className="text-black text-xl font-semibold leading-[30px]">
                  Messages
                </div>
                <div className="w-4 h-4 relative" />
              </div>
              <div className="px-2 py-0.5 bg-slate-100 rounded-3xl flex-col justify-start items-start gap-2.5 inline-flex">
                <div className="text-black text-xs font-semibold leading-[18px]">
                  12
                </div>
              </div>
            </div>
            <div className="w-10 h-10 relative" />
          </div>
          <div className="w-[349px] h-px opacity-10 bg-black" />
        </div>
        <div className="self-stretch h-[670px] flex-col justify-start items-start flex">
          <div className="self-stretch h-[72px] px-6 py-3 flex-col justify-start items-start gap-2.5 flex">
            <div className="self-stretch h-12 px-5 py-2.5 bg-zinc-100 rounded-xl justify-start items-center gap-2.5 inline-flex">
              <div className="opacity-40 text-black text-sm font-normal">
                search
              </div>
              <div className="opacity-40 text-black text-sm font-normal leading-[21px]">
                Search messages
              </div>
            </div>
          </div>
          <div className="self-stretch h-[598px] px-4 flex-col justify-start items-start gap-2 flex">
            {dataSet.map((data, index) => (
              <MessageComponent
                key={index}
                name={data.name}
                message={data.message}
                profilePhoto={data.profilePhoto}
              />
            ))}
          </div>
        </div>
      </div>

      {/* chat window component */}
      <div className=" w-[640px] h-[1024px] bg-white flex-col justify-between items-start inline-flex">
        <div className="flex-col justify-start items-start flex">
          {/* chat header details */}
          <div className="w-[640px] h-20 p-6 justify-between items-center inline-flex">
            <div className="justify-start items-start gap-4 flex">
              <img
                className="w-10 h-10 relative rounded-[10px]"
                src={Florencio}
              />
              <div className="flex-col justify-start items-start inline-flex">
                <div className="text-black text-xl font-semibold leading-[25px]">
                  Florencio Dorrance
                </div>
                <div className="justify-start items-center gap-2 inline-flex">
                  <div className="w-2.5 h-2.5 bg-green-400 rounded-full" />
                  <div className="opacity-60 text-black text-xs font-semibold leading-[18px]">
                    Online
                  </div>
                </div>
              </div>
            </div>

            <div className="px-4 py-2.5 bg-indigo-500 bg-opacity-10 rounded-lg justify-start items-center gap-2 flex">
              <PhoneIcon className="text-indigo-500" />
              <div className="w-6 h-6 relative" />
              <div className="text-indigo-500 text-base font-semibold leading-tight">
                Call
              </div>
            </div>
          </div>

          <div className="w-[640px] h-px opacity-10 bg-black" />

          <div className="h-[693px] w-[640px] p-6 flex-col justify-start items-start gap-8 flex">
            {chatData.map((message, index) => {
              // Check if the message was sent by the user
              return message.sentByUser ? (
                <SentMessage key={index} text={message.text} />
              ) : (
                <ReceivedMessage key={index} text={message.text} />
              );
            })}
          </div>
        </div>

        {/* message input field */}
        <form
          onSubmit={handleSubmit}
          className="self-stretch p-6 justify-start items-center gap-6 inline-flex"
        >
          <PaperClipIcon className="w-6 h-6" />
          <div className="w-6 h-6 relative" />
          <div className="grow shrink basis-0 h-12 px-5 py-2.5 bg-white rounded-xl border-2 border-slate-200 justify-between items-center flex">
            <input
              type="text"
              placeholder="Type a message"
              value={message}
              onChange={handleMessageChange}
              className="opacity-40 text-black text-sm font-normal "
            />
            <div className="w-6 h-6 relative" />
            <button>
              <PaperAirplaneIcon className="w-6 h-6 text-indigo-500" />
            </button>
          </div>
        </form>
      </div>

      <div className="w-px self-stretch bg-black bg-opacity-10" />

      {/* directory window component */}
      <div className="grow shrink basis-0 h-[1024px] bg-white shadow flex-col justify-start items-start gap-6 inline-flex">
        <div className="self-stretch h-[81px] flex-col justify-start items-start flex">
          <div className="self-stretch h-20 p-6 justify-between items-center inline-flex">
            <div className="justify-start items-center gap-2.5 flex">
              <div className="justify-start items-center gap-1.5 flex">
                <div className="text-black text-xl font-semibold leading-[30px]">
                  Directory
                </div>
              </div>
            </div>
            <div className="w-10 h-10 relative">
              <div className="w-10 h-10 left-[40px] top-0 absolute origin-top-left rotate-90" />
              <div className="w-1 h-[18px] left-[18px] top-[11px] absolute flex-col justify-start items-start gap-[3px] inline-flex">
                <div className="w-1 h-1 bg-indigo-500 rounded-full" />
                <div className="w-1 h-1 bg-indigo-500 rounded-full" />
                <div className="w-1 h-1 bg-indigo-500 rounded-full" />
              </div>
            </div>
          </div>
          <div className="self-stretch h-px opacity-10 bg-black" />
        </div>
        <div className="self-stretch h-[502px] px-4 flex-col justify-start items-start gap-2 flex">
          <div className="justify-start items-center gap-2 inline-flex">
            <div className="text-black text-sm font-semibold leading-[21px]">
              Team Members
            </div>
            <div className="px-2 py-0.5 bg-slate-100 rounded-3xl flex-col justify-start items-start gap-2.5 inline-flex">
              <div className="text-black text-xs font-semibold leading-[18px]">
                6
              </div>
            </div>
          </div>
          <div className="self-stretch p-3 justify-start items-start gap-4 inline-flex">
            <img className="w-12 h-12 relative rounded-xl" src={Florencio} />
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
              <div className="self-stretch h-[39px] flex-col justify-start items-start flex">
                <div className="self-stretch justify-start items-start gap-3 inline-flex">
                  <div className="grow shrink basis-0 text-black text-sm font-semibold leading-[21px]">
                    Florencio Dorrance
                  </div>
                </div>
                <div className="self-stretch text-black text-opacity-40 text-xs font-semibold leading-[18px]">
                  Market Development Manager
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch p-3 justify-start items-start gap-4 inline-flex">
            <img className="w-12 h-12 relative rounded-xl" src={Benny} />
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
              <div className="self-stretch h-[39px] flex-col justify-start items-start flex">
                <div className="self-stretch justify-start items-start gap-3 inline-flex">
                  <div className="grow shrink basis-0 text-black text-sm font-semibold leading-[21px]">
                    Benny Spanbauer
                  </div>
                </div>
                <div className="self-stretch text-black text-opacity-40 text-xs font-semibold leading-[18px]">
                  Area Sales Manager
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch p-3 justify-start items-start gap-4 inline-flex">
            <img className="w-12 h-12 relative rounded-xl" src={Jamel} />
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
              <div className="self-stretch h-[39px] flex-col justify-start items-start flex">
                <div className="self-stretch justify-start items-start gap-3 inline-flex">
                  <div className="grow shrink basis-0 text-black text-sm font-semibold leading-[21px]">
                    Jamel Eusebio
                  </div>
                </div>
                <div className="self-stretch text-black text-opacity-40 text-xs font-semibold leading-[18px]">
                  Administrator
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch p-3 justify-start items-start gap-4 inline-flex">
            <img className="w-12 h-12 relative rounded-xl" src={Lavern} />
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
              <div className="self-stretch h-[39px] flex-col justify-start items-start flex">
                <div className="self-stretch justify-start items-start gap-3 inline-flex">
                  <div className="grow shrink basis-0 text-black text-sm font-semibold leading-[21px]">
                    Lavern Laboy
                  </div>
                </div>
                <div className="self-stretch text-black text-opacity-40 text-xs font-semibold leading-[18px]">
                  Account Executive
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch p-3 justify-start items-start gap-4 inline-flex">
            <img className="w-12 h-12 relative rounded-xl" src={Alfonso} />
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
              <div className="self-stretch h-[39px] flex-col justify-start items-start flex">
                <div className="self-stretch justify-start items-start gap-3 inline-flex">
                  <div className="grow shrink basis-0 text-black text-sm font-semibold leading-[21px]">
                    Alfonzo Schuessler
                  </div>
                </div>
                <div className="self-stretch text-black text-opacity-40 text-xs font-semibold leading-[18px]">
                  Proposal Writer
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch p-3 justify-start items-start gap-4 inline-flex">
            <img className="w-12 h-12 relative rounded-xl" src={Daryl} />
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
              <div className="self-stretch h-[39px] flex-col justify-start items-start flex">
                <div className="self-stretch justify-start items-start gap-3 inline-flex">
                  <div className="grow shrink basis-0 text-black text-sm font-semibold leading-[21px]">
                    Daryl Nehls
                  </div>
                </div>
                <div className="self-stretch text-black text-opacity-40 text-xs font-semibold leading-[18px]">
                  Nursing Assistant
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch h-px bg-black bg-opacity-10" />
        <div className="self-stretch h-[422px] px-4 flex-col justify-start items-start gap-2 flex">
          <div className="justify-start items-center gap-2 inline-flex">
            <div className="text-black text-sm font-semibold leading-[21px]">
              Files
            </div>
            <div className="px-2 py-0.5 bg-slate-100 rounded-3xl flex-col justify-start items-start gap-2.5 inline-flex">
              <div className="text-black text-xs font-semibold leading-[18px]">
                125
              </div>
            </div>
          </div>
          <div className="self-stretch p-3 justify-start items-center gap-4 inline-flex">
            <div className="w-12 h-12 p-[17px] bg-blue-100 rounded-xl flex-col justify-center items-center gap-2.5 inline-flex">
              <ClipboardIcon className="w-40 h-40 text-red-500" />
            </div>
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
              <div className="self-stretch h-[39px] flex-col justify-start items-start flex">
                <div className="self-stretch justify-start items-start gap-3 inline-flex">
                  <div className="grow shrink basis-0 text-black text-sm font-semibold leading-[21px]">
                    i9.pdf
                  </div>
                </div>
                <div className="justify-start items-start gap-2.5 inline-flex">
                  <div className="text-black text-opacity-40 text-xs font-semibold leading-[18px]">
                    PDF
                  </div>
                  <div className="text-black text-opacity-40 text-xs font-semibold leading-[18px]">
                    9mb
                  </div>
                </div>
              </div>
            </div>
            <div className="w-6 h-6 relative" />
          </div>
          <div className="self-stretch p-3 justify-start items-center gap-4 inline-flex">
            <div className="w-12 h-12 p-[17px] bg-green-50 rounded-xl flex-col justify-center items-center gap-2.5 inline-flex">
              <PhotoIcon className="w-8 h-8 text-green-300" />
            </div>
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
              <div className="self-stretch h-[39px] flex-col justify-start items-start flex">
                <div className="self-stretch justify-start items-start gap-3 inline-flex">
                  <div className="grow shrink basis-0 text-black text-sm font-semibold leading-[21px]">
                    Screenshot-3817.png
                  </div>
                </div>
                <div className="justify-start items-start gap-2.5 inline-flex">
                  <div className="text-black text-opacity-40 text-xs font-semibold leading-[18px]">
                    PNG
                  </div>
                  <div className="text-black text-opacity-40 text-xs font-semibold leading-[18px]">
                    4mb
                  </div>
                </div>
              </div>
            </div>
            <div className="w-6 h-6 relative" />
          </div>
          <div className="self-stretch p-3 justify-start items-center gap-4 inline-flex">
            <div className="w-12 h-12 p-[17px] bg-blue-50 rounded-xl flex-col justify-center items-center gap-2.5 inline-flex">
              <DocumentIcon className="w-8 h-8 text-blue-300" />
            </div>
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
              <div className="self-stretch h-[39px] flex-col justify-start items-start flex">
                <div className="self-stretch justify-start items-start gap-3 inline-flex">
                  <div className="grow shrink basis-0 text-black text-sm font-semibold leading-[21px]">
                    sharefile.docx
                  </div>
                </div>
                <div className="justify-start items-start gap-2.5 inline-flex">
                  <div className="text-black text-opacity-40 text-xs font-semibold leading-[18px]">
                    DOC
                  </div>
                  <div className="text-black text-opacity-40 text-xs font-semibold leading-[18px]">
                    555kb
                  </div>
                </div>
              </div>
            </div>
            <div className="w-6 h-6 relative" />
          </div>
          <div className="self-stretch p-3 justify-start items-center gap-4 inline-flex">
            <div className="w-12 h-12 p-[17px] bg-purple-50 rounded-xl flex-col justify-center items-center gap-2.5 inline-flex">
              <CodeBracketIcon className="text-purple-500" />
            </div>
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
              <div className="self-stretch h-[39px] flex-col justify-start items-start flex">
                <div className="self-stretch justify-start items-start gap-3 inline-flex">
                  <div className="grow shrink basis-0 text-black text-sm font-semibold leading-[21px]">
                    Jerry-2020_I-9_Form.xxl
                  </div>
                </div>
                <div className="justify-start items-start gap-2.5 inline-flex">
                  <div className="text-black text-opacity-40 text-xs font-semibold leading-[18px]">
                    XXL
                  </div>
                  <div className="text-black text-opacity-40 text-xs font-semibold leading-[18px]">
                    24mb
                  </div>
                </div>
              </div>
            </div>
            <div className="w-6 h-6 relative" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DirectChat;
