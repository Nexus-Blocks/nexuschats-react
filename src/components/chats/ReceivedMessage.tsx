// ReceivedMessage.tsx
import React from 'react';
import { Florencio } from '../../assets';

interface ReceivedMessageProps {
    text: string;
}

const ReceivedMessage: React.FC<ReceivedMessageProps> = ({ text }) => {
    return (
        <div className="self-stretch justify-start items-start gap-4 inline-flex">
        <img className="w-10 h-10 relative rounded-lg" src={Florencio} alt="Other's profile" />
        <div className="flex-col justify-start items-start gap-2.5 inline-flex">
            <div className="px-4 py-2 bg-zinc-100 rounded-xl justify-start items-start gap-2.5 inline-flex">
            <div className="text-black text-sm font-normal leading-[21px]">
                {text}
            </div>
            </div>
        </div>
        </div>
    );
};

export default ReceivedMessage;
