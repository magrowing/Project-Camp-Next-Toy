import { title } from 'process';

export const metadata = {
  title: 'Register',
};

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <article className="auth-wrapper">{children}</article>;
}
