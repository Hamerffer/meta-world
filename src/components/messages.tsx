"use client";
import { DeleteIcon, Menu, SearchIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "@tanstack/react-router";
import { useState } from "react";

interface MessagesProps {
  onMenuClick: () => void;
}

interface PopupProps {
  onClick: () => void;
}

export default function Messages({ onMenuClick }: MessagesProps) {
  const [searchActive, setSearchActive] = useState(false);
  const [open, setOpen] = useState(false);
  const toggleSearch = () => setSearchActive(!searchActive);
  const togglepopup = () => setOpen(!open);

  const Header = () => (
    <div className="flex items-center justify-between px-4 py-3 h-[45px] border-b border-border">
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuClick}
          className="hover:opacity-70 transition-opacity"
        >
          <Menu className="w-6 h-6" />
        </button>
        <h1 className="text-xl font-semibold">Messages</h1>
      </div>

      <div className="flex items-center gap-2">
        <span
          className={`font-medium px-1 py-0.5 rounded-md text-xs ${
            searchActive
              ? "bg-secondary text-muted"
              : "bg-secondary text-muted"
          }`}
          onClick={togglepopup}
        >
          Metaworld
        </span>

        {searchActive ? (
          <DeleteIcon
            className="w-5 h-5 cursor-pointer hover:opacity-75"
            onClick={toggleSearch}
          />
        ) : (
          <SearchIcon
            className="w-5 h-5 cursor-pointer hover:opacity-75"
            onClick={toggleSearch}
          />
        )}
      </div>
    </div>
  );

  return (
    <div className="flex flex-col h-[100vh]">
      <Header />

      {searchActive ? (
        <input
          type="text"
          placeholder="Search"
          className="w-[90%] mx-4 p-2 mt-4 bg-[var(--color-bg-dark)] rounded-md"
        />
      ) : (
        <>
          <div className="flex flex-col justify-center items-center h-[90vh]">
            <img
              src="/no-message.png"
              alt="No Messages"
              className="w-22 h-22 mb-3"
            />
            <p className="text-secondary text-sm">No Message</p>
          </div>

          <div className="flex w-full gap-2 p-3">
            <Button className="button-bg text-foreground w-[70%] py-6">
              <Link to="/register">Sign Up</Link>
            </Button>

            <Link to="/login">
              <Button className="bg-gray-700 text-primary w-full py-6">
                Sign In
              </Button>
            </Link>
          </div>
        </>
      )}
      {open && <Popup onClick={togglepopup} />}
    </div>
  );
}



const Popup = ({ onClick }: PopupProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-card w-[90%] max-w-md rounded-xl shadow-lg p-6 relative flex flex-col">
        {/* Close Button */}
        <button
          onClick={onClick}
          className="absolute top-4 right-4 text-secondary "
        >
          <DeleteIcon className="w-5 h-5" />
        </button>

        {/* Heading */}
        <h2 className="text-xl font-bold text-foreground mb-2 text-center">
          Meta Quotes
        </h2>

        {/* ID Section */}
        <p className="text-secondary text-sm text-center mb-4">
          ID: <span className="font-mono text-foreground">348788</span>
        </p>

        {/* Message Section */}
        <p className="text-secondary text-sm mb-6 text-center">
          Use this ID to send messages to this device via our service.
        </p>

        {/* Buttons */}
        <div className="flex justify-between">
          <button className="flex-1 mr-2 bg-secondary text-foreground  py-2 rounded-lg transition-colors duration-200">
            Copy
          </button>
          <button className="flex-1 ml-2 bg-primary  text-foreground py-2 rounded-lg transition-colors duration-200">
            OK
          </button>
        </div>
      </div>
    </div>
  );
};



