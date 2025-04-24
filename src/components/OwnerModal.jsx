import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";

import { GiSittingDog } from "react-icons/gi";
import { SiDatadog } from "react-icons/si";

const OwnerModal = ({ open, setOpen, data }) => {
  if (!data) return null;

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <div className="fixed inset-0 bg-black/50" aria-hidden="true" />

      <div className="fixed inset-0 z-10 flex items-center justify-center p-4">
        <DialogPanel className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
          <div className="flex items-start gap-4">
            <div className=" shadow-xl p-2 mt-2 rounded-full">
              <SiDatadog className="text-center items-center text-7xl" />
            </div>
            <div className="flex flex-col gap-4">
              <DialogTitle className="text-lg font-semibold text-gray-900 mb-2">
                {data.name}'s Owner Info
              </DialogTitle>
              <p className="text-sm text-gray-700 flex gap-1">
                <strong>Owner:</strong> {data.ownerName}
                <GiSittingDog className="text-2xl" />
              </p>
              <p className="text-sm text-gray-700">
                <strong>Contact:</strong> {data.ownerContact}
              </p>
              <p className="text-sm text-gray-700">
                <strong>Location:</strong> {data.ownerLocation}
              </p>
              {data.purpose === "sale" && (
                <p className="text-sm text-gray-700">
                  <strong>Cost:</strong> Ksh {data.cost}
                </p>
              )}
            </div>
          </div>
          <div className="mt-4 text-right">
            <button
              onClick={() => setOpen(false)}
              className="px-4 py-2 bg-blue-600 text-white text-sm rounded hover:bg-red-500"
            >
              Close
            </button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default OwnerModal;
