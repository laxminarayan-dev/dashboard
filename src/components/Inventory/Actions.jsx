"use client";
import InventoryModel from "./Model";
import { useState } from "react";
const Actions = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <div className="flex flex-row justify-between items-center mt-2 gap-2">
        <button
          className="font-semibold font-mono bg-amber-400 text-gray-100 p-1 flex-1 rounded-full cursor-pointer"
          onClick={() => {
            setIsModalOpen(true);
          }}
        >
          Edit
        </button>
        <button className="font-semibold font-mono bg-red-400 text-gray-100 p-1 flex-1 rounded-full cursor-pointer">
          Remove
        </button>
      </div>
      <InventoryModel
        type={"update"}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        modelDataObj={data}
      />
    </>
  );
};

export default Actions;
