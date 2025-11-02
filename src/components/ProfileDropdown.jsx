import React, { useState } from "react";

export default function ProfileDropdown({ user, setUser }) {
  const [open, setOpen] = useState(false);
  const initial = user?.email?.[0]?.toUpperCase();

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="bg-gray-200 dark:bg-gray-700 w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg"
      >
        {initial}
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-[#1E293B] rounded shadow-lg p-4 space-y-2 z-50">
          <button className="w-full text-left text-sm">Change Name</button>
          <button className="w-full text-left text-sm">Change Password</button>
          <button className="w-full text-left text-sm">Upload Profile Picture</button>
          <button
            className="w-full text-left text-sm text-red-500"
            onClick={() => setUser(null)}
          >
            Log Out
          </button>
        </div>
      )}
    </div>
  );
}
