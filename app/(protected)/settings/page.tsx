"use client";

import { useSession, signOut } from "next-auth/react";

const SettingsPage = () => {
  const session = useSession();

  const onClick = () => {
    signOut();
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
