type ButtonProps = React.ComponentProps<'button'> & {
  btnStyleType: string;
  children: React.ReactNode;
  style?: string;
};

const BtnTypeVariants: { [key: string]: string } = {
  full: 'bg-primary text-white',
  line: 'bg-white text-primary',
};

function Button(prop: ButtonProps) {
  const { children, btnStyleType, style, ...restProps } = prop;
  return (
    <button
      className={`${BtnTypeVariants[btnStyleType]} ${
        style ?? 'w-[100%]'
      } h-[4.4rem] rounded-md border text-md border-primary`}
      {...restProps}
    >
      {children}
    </button>
  );
}

export default Button;
