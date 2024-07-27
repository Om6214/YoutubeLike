// app/page.js

import { getAuthSession } from '../utils/auth';
import Heronotauth from "./Component/heronotauth";
import Dashboard from './dashboard/page';

export default async function Home() {
  const { isUserAuthenticated } = await getAuthSession();

  return (
    <>
      {isUserAuthenticated ? <Dashboard /> : <Heronotauth />}
    </>
  );
}
