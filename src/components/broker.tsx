import { ChevronRight, QrCode, SearchIcon } from "lucide-react";

interface CertificateScreenProps {
  onBack: () => void;
}

const Broker = ({ onBack }: CertificateScreenProps) => {
  return (
    <>
      <div className="h-screen flex flex-col p-4 font-['Roboto'] text-secondary ">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center cursor-pointer" onClick={onBack}>
            <span className="text-xl mr-2">&larr;</span>
            <span className="text-lg font-medium text-foreground">Broker</span>
          </div>

          {/* File input wrapped button */}
          <label className=" w-8 h-8 rounded-full flex items-center justify-center text-foreground cursor-pointer">
            <QrCode size={16} />
          </label>
        </div>

        <div>
          <div className="flex items-center gap-2">
            <SearchIcon className="text-secondary" />
            <input
              type="text"
              placeholder="Find broker"
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          <div className="flex justify-between items-center p-4 mt-4 bg-[#2E3440] rounded-md shadow-sm mb-2 cursor-pointer hover:bg-[#3B4252]">
            <div className="flex flex-col">
              <span className=" font-semibold ">Meta Quotes Ltd</span>
              <span className="text-primary text-sm">MetaQuotes</span>
            </div>
            <ChevronRight className="text-secondary" />
          </div>
        </div>
        {/* No Certificates Message */}
        <div className="flex flex-col items-center justify-center h-full text-center px-4 relative bottom-30">
          <img src="/no-message.png" alt="" />
          <h4 className="text-foreground text-lg font-semibold mb-2">
            Use search to find a company
          </h4>
          <p className="text-secondary text-sm mb-2">
            No installed certificates yet. Add a certificate using the + button
            above.
          </p>
          <p className="text-secondary text-sm">
            Certificates are required to validate access and ensure security.
            Once added, they will appear here.
          </p>
        </div>
      </div>
      <div className="w-full  bg-gray-700 text-center text-foreground py-6 rounded-md  text-bold capitalize ">
  Can't find your broker?
</div>

    </>
  );
};

export default Broker;
