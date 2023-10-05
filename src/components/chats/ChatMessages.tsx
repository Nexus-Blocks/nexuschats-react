interface ChatMessagesProps extends React.HTMLProps<HTMLDivElement> {
    text: string;
    sentByUser: boolean;
}

const ChatMessages: React.FC<ChatMessagesProps> = ({ text, sentByUser }) => {
    const backgroundColorClass = sentByUser ? 'bg-indigo-500' : 'bg-zinc-100';
    const textColorClass = sentByUser ? 'text-white' : 'text-black';

    return (
        <div className={`px-4 py-2 rounded-xl justify-start items-start gap-2.5 inline-flex ${backgroundColorClass}`}>
            <div className={`text-sm font-normal font-['Inter'] leading-[21px] ${textColorClass}`}>
                {text}
            </div>
        </div>
    );
};

export default ChatMessages;
