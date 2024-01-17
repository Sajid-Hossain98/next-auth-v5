import { auth, signOut } from "@/auth";

const SettingsPage = async () => {
  const session = await auth();

  return (
    <div>
      {JSON.stringify(session)}
      <form
        action={async () => {
          "use server";

          await signOut();
        }}
      >
        <button type="submit" className="bg-black p-2 text-white rounded">
          Sign Out
        </button>
      </form>
    </div>
  );
};

export default SettingsPage;
