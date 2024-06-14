'use client';

import { useFormState } from 'react-dom';
import { useRouter } from 'next/navigation';

import { registerAction } from '@/lib/action';

import TextField from './ui/TextField';
import CheckBox from './ui/CheckBox';
import Button from './ui/Button';

export default function RegisterForm() {
  const router = useRouter();

  const [state, formAction] = useFormState(registerAction, {
    success: false,
    message: '',
  });

  const onClickHandler = () => {
    router.push('/login');
  };

  return (
    <>
      <form className="form-wrapper" action={formAction}>
        <TextField type="text" name="name" placeholder="Enter Your Name" />
        <TextField
          type="email"
          name="email"
          placeholder="someone@example.com"
        />
        <TextField
          type="password"
          name="password"
          placeholder="Enter Password"
        />
        <CheckBox>
          I agree with <span className="bold">terms</span> and{' '}
          <span className="bold">policies.</span>
        </CheckBox>
        <Button type="submit" btnStyleType="full">
          Sing Up
        </Button>
        {state.message !== '' && (
          <p className="text-rose-500 text-[1.4rem]">{state.message}</p>
        )}
      </form>
      <div className="btn-wrapper">
        <Button type="button" btnStyleType="line" onClick={onClickHandler}>
          Go To Login In
        </Button>
      </div>
    </>
  );
}
