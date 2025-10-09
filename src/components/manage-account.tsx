import { useState, useRef, useEffect, use } from "react";
import OtpScreen from "./otp-screen";
import Certificates from "./certificates";
import Broker from "./broker";
import AccountCard from "./account-card";
import { motion, AnimatePresence } from "framer-motion";
import { QrCode, X } from "lucide-react";
interface ManageScreenProps {
  onMenuClick: () => void;
}

const ManageAccount = ({ onMenuClick }: ManageScreenProps) => {
  const [showQr, setShowQr] = useState(false);
  const [isOtpOpen, setOtpOpen] = useState(false);
  const [isCertificate, setCertificateOpen] = useState(false);
  const [isBrokerOpen, setBrokerOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showpopup, setShowPopup] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const togglepopup = () => setShowPopup(!showpopup);

  if (isOtpOpen) return <OtpScreen onBack={() => setOtpOpen(false)} />;
  if (isCertificate)
    return <Certificates onBack={() => setCertificateOpen(false)} />;
  if (isBrokerOpen) return <Broker onBack={() => setBrokerOpen(false)} />;

  return (
    <div className="h-screen flex flex-col font-['Roboto'] text-foreground ">
      {/* Header */}
      <header className="flex items-center p-2 border-b border-[#22272A] relative">
        <div className="mr-3 cursor-pointer" onClick={onMenuClick}>
          <svg
            width="20"
            height="14"
            viewBox="0 0 20 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect y="1" width="20" height="2" fill="#FFF" />
            <rect y="6" width="20" height="2" fill="#FFF" />
            <rect y="11" width="20" height="2" fill="#FFF" />
          </svg>
        </div>

        <div className="flex-1 text-foreground font-medium">Accounts</div>

        <button
          aria-label="Security settings"
          className="bg-none border-none mr-5 cursor-pointer"
          onClick={() => setOtpOpen(true)}
        >
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="#FFF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
        </button>

        {/* Certificates */}
        <button
          aria-label="Certificates"
          className="bg-none border-none mr-5 cursor-pointer"
          onClick={() => setCertificateOpen(true)}
        >
          <svg
            width={16}
            height={16}
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x={2} y={2} width={12} height={12} rx={2} ry={2} />
            <path d="M2 10h12" />
            <path d="M6 2v12" />
            <circle cx={12} cy={12} r={2} />
          </svg>
        </button>

        {/* Add Broker */}
        <button
          aria-label="Add Broker"
          className="bg-none border-none mr-5 cursor-pointer"
          onClick={() => setBrokerOpen(true)}
        >
          <svg
            width="24"
            height="24"
            stroke="#FFF"
            fill="none"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </button>

        {/* Three-dot menu */}
        <div ref={menuRef} className="relative">
          <button
            aria-label="More options"
            className="bg-none border-none cursor-pointer p-2"
            onClick={toggleMenu}
          >
            <div className="flex flex-col items-center justify-center">
              <span className="w-1 h-1 bg-foreground rounded-full mb-1"></span>
              <span className="w-1 h-1 bg-foreground rounded-full mb-1"></span>
              <span className="w-1 h-1 bg-foreground rounded-full"></span>
            </div>
          </button>
          {menuOpen && (
            <div className="  w-56 bg-[#2E3440] rounded-md shadow-2xl text-foreground z-50 overflow-hidden absolute right-0 top-0">
              <ul className="flex flex-col divide-y divide-gray-600">
                <li className="px-4 py-3 text-sm hover:bg-[#3B4252] cursor-pointer transition-colors duration-200">
                  Change Master Password
                </li>
                <li className="px-4 py-3 text-sm hover:bg-[#3B4252] cursor-pointer transition-colors duration-200">
                  Change Investor Password
                </li>
                <li className="px-4 py-3 text-sm hover:bg-[#3B4252] cursor-pointer transition-colors duration-200">
                  Clear Saved Password
                </li>
                <li className="px-4 py-3 text-sm cursor-pointer text-destructive font-semibold transition-colors duration-200">
                  Delete Account
                </li>
              </ul>
            </div>
          )}
        </div>
      </header>

      <main className=" text-secondary">
        <AccountCard
          name="Xyz Yzx"
          company="MetaWorld"
          accountNumber="5040906378"
          server="MetaWorld-Demo"
          accessPoint="Access Point IN 1, Hedge"
          balance="100 000.00"
          isDemo={true}
          qr={() => setShowQr(true)}
          popup={() => setShowPopup(true)}
        />
      </main>

      <AnimatePresence>
        {showQr && (
          <motion.div
            initial={{ y: 150, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 150, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="absolute bottom-0 left-0 right-0 bg-background p-6 flex flex-col items-center  shadow-2xl z-[9999] h-[60vh] "
          >
            <button
              className="absolute top-3 right-3 p-1 rounded"
              onClick={() => setShowQr(false)}
            >
              <X className="w-5 h-5" />
            </button>
            <h4 className="text-sm text-foreground mb-3 mt-4">Scan QR Code</h4>
            <div className="flex flex-col items-center justify-center flex-1">
              <QrCode className="w-40 h-40 text-foreground" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {showpopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 z-50">
          <div className="p-6 rounded-lg shadow-lg w-80 relative bg-card text-foreground h-80">
            <h2 className="text-lg font-bold mb-4">Trade notifications</h2>
            <p>
              Receive notifications about trading operations performed on this
              account. These may include information about orders, deals,
              deposits and withdrawals, depending on your broker&apos;s
              settings.
            </p>
            <div className="absolute bottom-4 right-6 space-x-4">
              <button onClick={togglepopup} className="text-primary text-sm">
                CANCEL
              </button>
              <button onClick={togglepopup} className="text-primary text-sm">
                ENABLE
              </button>
            </div>
            <button
              onClick={togglepopup}
              className="absolute top-2 right-2 text-foreground text-xl font-bold "
              aria-label="Close popup"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageAccount;
