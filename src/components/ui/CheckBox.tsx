import { ReactNode, useId } from 'react';

type CheckBoxProps = {
  children: ReactNode;
};

export default function CheckBox(prop: CheckBoxProps) {
  const { children } = prop;
  const uuid = useId();
  return (
    <div className="flex items-center relative">
      <input
        type="checkbox"
        id={`input-${uuid}`}
        className={`appearance-none block w-[2rem] h-[2rem] border border-primary rounded-sm mr-[0.8rem] checked:bg-primary peer`}
      />
      <svg
        className="
        absolute 
        w-[1.6rem] h-[1.6rem] top-[50%] left-[0.2rem] translate-y-[-50%]
        hidden peer-checked:block stroke-white"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
      <label htmlFor={`input-${uuid}`} className={`text-primary text-md`}>
        {children}
      </label>
    </div>
  );
}
