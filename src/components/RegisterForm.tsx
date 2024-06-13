import TextField from './ui/TextField';
import CheckBox from './ui/CheckBox';
import Button from './ui/Button';

export default function RegisterForm() {
  return (
    <>
      <form className="form-wrapper">
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
      </form>
      <div className="btn-wrapper">
        <Button type="button" btnStyleType="line">
          Go To Login In
        </Button>
      </div>
    </>
  );
}
