import { currentUserRole } from "@/lib/auth";

const AdminPage = async () => {
  const role = currentUserRole();

  return <div>Current Role: {role}</div>;
};

export default AdminPage;
