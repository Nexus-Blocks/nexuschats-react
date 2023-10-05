import { CalendarDaysIcon, ChatBubbleLeftEllipsisIcon, ChatBubbleLeftRightIcon, HomeIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const SideBar = () => {
    return (
        <div className="h-[1024px] px-4 pt-4 pb-6 bg-white shadow flex-col justify-between items-center inline-flex">
            <div className="flex-col justify-center items-center gap-12 flex">
                <div className="w-14 h-14 py-[12.25px] bg-indigo-500 rounded-[14px] justify-center items-center inline-flex">
                    <div className="w-[15.75px] h-[31.50px] text-white text-[21px] font-bold leading-loose">N</div>
                </div>
                <div className="flex-col justify-center items-center gap-8 flex">
                    <HomeIcon />
                    <div className="w-6 h-6 relative" />
                    <ChatBubbleLeftEllipsisIcon className="text-indigo-500"/>
                    <div className="w-6 h-6 relative" />
                    <ChatBubbleLeftRightIcon />
                    <div className="w-6 h-6 relative" />
                    <MagnifyingGlassIcon />
                    <div className="w-6 h-6 relative" />
                    <CalendarDaysIcon />
                    <div className="w-6 h-6 relative" />
                </div>
            </div>
            <div className="w-6 h-6 relative" />
        </div>
    )
}

export default SideBar