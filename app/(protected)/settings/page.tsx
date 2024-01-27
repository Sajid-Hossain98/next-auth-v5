"use client";

import { logout } from "@/actions/logout";
import { useSession } from "next-auth/react";

const SettingsPage = () => {
  const session = useSession();

  const onClick = () => {
    logout();
  };

  return (
    <div>
      {JSON.stringify(session)}

      <button
        type="submit"
        className="bg-black p-2 text-white rounded"
        onClick={onClick}
      >
        Sign Out
      </button>
    </div>
  );
};

export default SettingsPage;
