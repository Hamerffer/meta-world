import { useState } from "react";

const MoreOptionsMenu = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  return (
    <div className="relative">
      {/* Three-dot button */}
      <button
        aria-label="More options"
        onClick={toggleMenu}
        className="bg-none border-none cursor-pointer p-2"
      >
        <svg
          width="24"
          height="24"
          fill="#FFF"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="5" cy="12" r="2" />
          <circle cx="12" cy="12" r="2" />
          <circle cx="19" cy="12" r="2" />
        </svg>
      </button>

      {/* Dropdown menu */}
      {open && (
        <div className="absolute right-0 mt-2 w-48  rounded-md shadow-lg text-foreground z-10">
          <ul className="flex flex-col">
            <li className="px-4 py-2  cursor-pointer">
              Change Master Password
            </li>
            <li className="px-4 py-2  cursor-pointer">
              Change Investor Password
            </li>
            <li className="px-4 py-2  cursor-pointer">
              Clear Saved Password
            </li>
            <li className="px-4 py-2  cursor-pointer text-red-500">
              Delete Account
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MoreOptionsMenu;
