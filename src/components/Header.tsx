import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div className="mb-2 flex items-center gap-5 h-[50px] text-white bg-gray-600 py-3 px-10">
        <Link to="/">Direct Chat</Link>
        <Link to="/support">Customer support</Link>
        <Link to="/group-chat">Group Chat</Link>
    </div>
  )
}

export default Header