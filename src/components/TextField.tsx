type TextFieldProps = React.ComponentProps<'input'> & {
  style?: string;
};

export default function TextField(prop: TextFieldProps) {
  const { style, ...restProps } = prop;
  return (
    <input
      className={`${
        style ?? 'w-[100%]'
      } h-[4.4rem] border border-primary rounded-md text-md text-primary placeholder:text-third px-[1.6rem] py-[1.3rem]`}
      {...restProps}
    />
  );
}
