"use client";

import { logout } from "@/actions/logout";
import { useCurrentUser } from "@/hooks/useCurrentUser";

const SettingsPage = () => {
  const user = useCurrentUser();

  const onClick = () => {
    logout();
  };

  return (
    <div>
      {JSON.stringify(user)}

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
