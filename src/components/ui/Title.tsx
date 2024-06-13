import { ReactNode } from 'react';

type TitleProps = {
  type: string;
  children: ReactNode;
};

const typeVariants: { [key: string]: string } = {
  main: 'text-lg font-bold mb-[1rem]',
  sub: 'text-md mb-[1rem] mb-[2rem]',
};

export default function MainTitle({ children, type }: TitleProps) {
  if (type === 'main') {
    return <h2 className={`text-primary ${typeVariants[type]}`}>{children}</h2>;
  }

  return <p className={`text-primary ${typeVariants[type]}`}>{children}</p>;
}
