// SentMessage.tsx
import React from 'react';
import { Florencio } from '../../assets';

interface SentMessageProps {
    text: string;
}

const SentMessage: React.FC<SentMessageProps> = ({ text }) => {
    return (
        <div className="self-stretch justify-end items-start gap-4 inline-flex">
        <div className="flex-col justify-start items-end gap-2.5 inline-flex">
            <div className="px-4 py-2 bg-indigo-500 rounded-xl justify-start items-start gap-2.5 inline-flex">
            <div className="text-white text-sm font-normal leading-[21px]">
                {text}
            </div>
            </div>
        </div>
        <img className="w-10 h-10 relative rounded-lg" src={Florencio} alt="User's profile" />
        </div>
    );
};

export default SentMessage;
