import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export async function getAuthSession() {
  const { getUser, isAuthenticated } = getKindeServerSession();

  const data = await getUser();
  const isUserAuthenticated = await isAuthenticated();

  return { data, isUserAuthenticated };
}
