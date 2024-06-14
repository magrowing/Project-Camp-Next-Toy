'use client';

import { useFormState } from 'react-dom';
import { useRouter } from 'next/navigation';

import { loginAction } from '@/lib/action';

import TextField from './ui/TextField';
import CheckBox from './ui/CheckBox';
import Button from './ui/Button';

import { FaGithub } from 'react-icons/fa';

export default function LoginForm() {
  const router = useRouter();
  const [state, formAction] = useFormState(loginAction, {
    success: false,
    message: '',
  });
  const onClickHandler = () => {
    router.push('/register');
  };
  return (
    <>
      <form className="form-wrapper" action={formAction}>
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
          Log In
        </Button>
        {state.message !== '' && (
          <p className="text-rose-500 text-[1.4rem]">{state.message}</p>
        )}
      </form>
      <div className="btn-wrapper">
        <Button type="button" btnStyleType="full">
          <span className="flex items-center justify-center">
            <FaGithub className="w-[2rem] h-[2rem] mr-3" /> GitHub
          </span>
        </Button>
        <Button type="button" btnStyleType="line" onClick={onClickHandler}>
          Go To Sing up
        </Button>
      </div>
    </>
  );
}
