import { ReactNode } from 'react';
import { redirect } from 'next/navigation';

import { getSession } from '@/lib/getSession';

export default async function layout({ children }: { children: ReactNode }) {
  const session = await getSession();
  if (session) redirect('/');
  return <>{children}</>;
}
