import { redirect } from 'next/navigation';

import { getSession } from '@/lib/getSession';

export default async function Home() {
  const session = await getSession();
  if (!session) redirect('/login');
  return (
    <article>
      <h1>page Component</h1>
    </article>
  );
}
