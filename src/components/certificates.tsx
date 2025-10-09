import { Plus } from "lucide-react";

interface CertificateScreenProps {
  onBack: () => void;
}

const Certificates = ({ onBack }: CertificateScreenProps) => {
  return (
    <div className="h-screen flex flex-col p-4 font-['Roboto'] text-secondary ">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center cursor-pointer" onClick={onBack}>
          <span className="text-xl mr-2">&larr;</span>
          <span className="text-lg font-medium text-foreground">Certificates</span>
        </div>

        {/* File input wrapped button */}
        <label className=" w-8 h-8 rounded-full flex items-center justify-center text-foreground cursor-pointer">
          <Plus size={16} />
          
          <input
            type="file"
            className="hidden"
            accept=".cer,.crt,.pem" // optional: restrict to certificate files
            onChange={(e) => {
              if (e.target.files?.length) {
                console.log("Selected file:", e.target.files[0]);
              }
            }}
          />
        </label>
      </div>

      {/* No Certificates Message */}
      <span className="text-gray-500 text-sm text-center">
        No installed certificates
      </span>
    </div>
  );
};

export default Certificates;
