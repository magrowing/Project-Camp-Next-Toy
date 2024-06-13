import Button from '@/components/Button';
import CheckBox from '@/components/CheckBox';
import LoginForm from '@/components/LoginForm';
import TextField from '@/components/TextField';
import Title from '@/components/Title';

export default function Login() {
  return (
    <>
      <section className="section-wrapper">
        <div>
          <Title type="main">Login Into App</Title>
          <Title type="sub">Please enter your details to continue.</Title>
        </div>
        <LoginForm />
      </section>
    </>
  );
}
