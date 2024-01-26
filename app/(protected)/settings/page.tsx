"use client";

import { useSession } from "next-auth/react";

const SettingsPage = () => {
  const session = useSession();

  return (
    <div>
      {JSON.stringify(session)}
      <form>
        <button type="submit" className="bg-black p-2 text-white rounded">
          Sign Out
        </button>
      </form>
    </div>
  );
};

export default SettingsPage;
