"use client";
import { useState } from "react";
import { X } from "lucide-react";

export default function Popup() {
  const [isOpen, setOpen] = useState(true);

  function handleClose() {
    setOpen(false);
  }

  return (
    <div
      className={`m-2 fixed flex-row md:top-10 md:right-10 z-50 border-white border border-1 bg-white bg-opacity-30 backdrop-blur-sm max-w-md px-4 py-3 rounded-2xl ${
        isOpen ? `flex` : `hidden`
      }`}
    >
      <p className="text-white md:pr-2 text-xs md:text-base">
        For the best experience, enable "Use hardware acceleration when
        available" in Chrome settings. Experience may vary on smaller devices.
      </p>
      <X
        className="flex hover:cursor-pointer min-w-fit"
        size={16}
        color="white"
        onClick={handleClose}
      />
    </div>
  );
}
