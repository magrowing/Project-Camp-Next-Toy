import Title from '@/components/ui/Title';
import LoginForm from '@/components/LoginForm';

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
