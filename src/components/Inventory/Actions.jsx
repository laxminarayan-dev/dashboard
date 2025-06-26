"use client";
import { useState } from "react";
import InventoryUpdateModel from "./UpdateModel";
const Actions = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <div className="flex flex-row justify-between items-center mt-2 gap-2">
        <button
          aria-label="updateEntry"
          className="font-semibold font-mono bg-amber-400 text-gray-900 p-1 flex-1 rounded-full cursor-pointer"
          onClick={() => {
            setIsModalOpen(true);
          }}
        >
          Edit
        </button>
        <button
          className="font-semibold font-mono bg-red-400 text-gray-900 p-1 flex-1 rounded-full cursor-pointer"
          aria-label="deleteEntry"
        >
          Remove
        </button>
      </div>
      <InventoryUpdateModel
        updateModalVisible={isModalOpen}
        setUpdateModalVisible={setIsModalOpen}
        updateDataPayload={data}
      />
    </>
  );
};

export default Actions;
