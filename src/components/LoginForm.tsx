import TextField from './ui/TextField';
import CheckBox from './ui/CheckBox';
import Button from './ui/Button';

import { FaGithub } from 'react-icons/fa';

export default function LoginForm() {
  return (
    <>
      <form className="form-wrapper">
        <TextField type="text" placeholder="someone@example.com" />
        <TextField type="password" placeholder="Enter Password" />
        <CheckBox>
          I agree with <span className="bold">terms</span> and{' '}
          <span className="bold">policies.</span>
        </CheckBox>
        <Button type="submit" btnStyleType="full">
          Log In
        </Button>
      </form>
      <div className="btn-wrapper">
        <Button type="button" btnStyleType="full">
          <span className="flex items-center justify-center">
            <FaGithub className="w-[2rem] h-[2rem] mr-3" /> GitHub
          </span>
        </Button>
        <Button type="button" btnStyleType="line">
          Go To Sing up
        </Button>
      </div>
    </>
  );
}
