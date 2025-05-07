import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { MdWarning } from "react-icons/md";

const DeletionPopup = ({
  isOpen,
  onClose,
  onDelete,
  itemName,
  isImageOpen,
  onImageDelete,
}) => {
  if (!isOpen && !isImageOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="rounded-lg w-[400px] bg-[#09090B]/40 backdrop-blur-xl text-white p-5 border-2 border-white/10 shadow-lg shadow-white/5 relative">
        {/* Close Button */}
        <div
          className="absolute right-3 top-3 cursor-pointer"
          onClick={onClose}
        >
          <AiOutlineCloseCircle className="text-2xl text-white/80 hover:text-white/90" />
        </div>

        {/* Warning Header */}
        <div className="flex items-start gap-1 mb-2">
          <MdWarning className="text-3xl text-red-600" />
          <h1 className="text-xl font-semibold text-wrap w-10/12">Delete {itemName}</h1>
        </div>

        {/* Warning Message */}
        <p className="text-sm text-white/80 mb-6">
          Are you sure you want to delete this {itemName.toLowerCase()}? This
          action cannot be undone and you will lose all associated data.
        </p>

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 h-10 rounded-lg p-2 border border-white/10 hover:bg-white/5 text-white duration-200"
          >
            Cancel
          </button>
          <button
            onClick={isImageOpen ? onImageDelete : onDelete}
            className="flex-1 h-10 rounded-lg p-2 bg-red-600 hover:bg-red-700 text-white duration-200"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeletionPopup;
