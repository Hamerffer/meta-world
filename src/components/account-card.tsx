import { BellIcon, QrCode, X } from "lucide-react";
import React from "react";


type AccountCardProps = {
  name: string;
  company: string;
  accountNumber: string;
  server: string;
  accessPoint: string;
  balance: string;
  isDemo?: boolean;
  qr?: () => void
  popup?: () => void
};

const AccountCard: React.FC<AccountCardProps> = ({
  name,
  company,
  accountNumber,
  server,
  accessPoint,
  balance,
  isDemo = false,
  qr,
  popup
}) => {


  return (
    <div className="relative bg-[#273544] text-foreground p-4 shadow-lg max-w-md mx-auto mt-8  overflow-hidden">
   
      {isDemo && (
        <div className="absolute top-0 right-0 bg-green-500 text-xs font-semibold px-2 py-1 rounded-bl-lg">
          Demo
        </div>
      )}

   
      <div className="flex justify-center">
        <img src="/no-message.png" alt="MetaTrader 5" className="w-14 h-14" />
      </div>


      <div className="text-center mt-3">
        <h2 className="text-lg font-semibold">{name}</h2>
        <p className="text-primary text-sm">{company}</p>

        <p className="text-secondary text-xs mt-1">
          {accountNumber} — {server}
        </p>
        <p className="text-secondary text-xs">{accessPoint}</p>

        <h3 className="text-2xl font-bold mt-4">{balance} USD</h3>
      </div>


      <div className="flex justify-between items-center mt-4">
        <button
          onClick={qr}
          className="p-2  rounded-lg transition"
        >
          <QrCode className="w-6 h-6" />
        </button>
        <button className="p-2  rounded-lg transition"
        onClick={popup}>
          <BellIcon className="w-6 h-6" />
        </button>
      </div>

    
    </div>
  );
};

export default AccountCard;
