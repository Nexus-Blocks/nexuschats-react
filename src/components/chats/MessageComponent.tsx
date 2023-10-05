import React, { FC } from 'react';

interface MessageComponentProps {
    name: string;
    message: string;
    profilePhoto: string;
    }

const MessageComponent: FC<MessageComponentProps> = ({ name, message, profilePhoto }) => {
    return (
        <div className="self-stretch h-[598px] px-4 flex-col justify-start items-start gap-2 flex">
        <div className="self-stretch p-3 justify-start items-start gap-4 inline-flex">
            <img className="w-12 h-12 relative rounded-xl" src={profilePhoto} alt={`${name}'s profile`} />
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
            <div className="self-stretch h-[39px] flex-col justify-start items-start flex">
                <div className="self-stretch justify-start items-start gap-3 inline-flex">
                <div className="grow shrink basis-0 text-black text-sm font-semibold  leading-[21px]">
                    {name}
                </div>
                <div className="opacity-30 text-black text-sm font-semibold  leading-[21px]">12m</div>
                </div>
                <div className="self-stretch text-black text-opacity-40 text-xs font-semibold  leading-[18px]">
                {message}
                </div>
            </div>
            </div>
        </div>
        </div>
    );
};

export default MessageComponent;
