import { db } from "@/lib/db";

export const getTwoFactorToken = async (token: string) => {
  try {
    const twoFactorToken = await db.twoFactorToken.findUnique({
      where: {
        token,
      },
    });

    return twoFactorToken;
  } catch {
    return null;
  }
};
