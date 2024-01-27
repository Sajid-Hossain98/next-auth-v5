"use server";

import { signOut } from "@/auth";

export const logout = async () => {
  //can be done some server stuff
  await signOut();
};
