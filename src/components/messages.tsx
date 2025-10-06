import { Menu, SearchIcon } from "lucide-react";
import { Button } from "./ui/button";

interface MessagesProps {
  onMenuClick: () => void;
}

export default function Messages({ onMenuClick }: MessagesProps) {
  return (
    <div className="flex flex-col h-[84vh]">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 h-[65px] border-b border-border">
        {/* Left side — menu + title */}
        <div className="flex items-center gap-3">
          <button
            onClick={onMenuClick}
            className="hover:opacity-70 transition-opacity"
          >
            <Menu className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-semibold">Messages</h1>
        </div>

        {/* Right side — Mquid + Search icon */}
        <div className="flex items-center gap-2">
          <span className="font-medium bg-gray-400 text-gray-900 px-1 py-0.5 rounded-md  text-xs">
            MQID
          </span>

          <SearchIcon className="w-5 h-5 cursor-pointer hover:opacity-75" />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center h-[90vh]">
        <img src="/no-message.png" alt="" className="w-22 h-22 mb-3" />
        <p className="text-gray-400 text-sm">No Message</p>
      </div>
      <div className="flex w-full gap-2 p-3 ">
        <Button className="bg-blue-600 text-white w-[70%] py-6">
          Register
        </Button>
        <Button className="bg-gray-700 text-blue-500 w-[30%] py-6">
          Sign In
        </Button>
      </div>
    </div>
    
  );
}
