import Title from '@/components/ui/Title';
import RegisterForm from '@/components/RegisterForm';

export default function Login() {
  return (
    <>
      <section className="section-wrapper">
        <div>
          <Title type="main">Sign Into App</Title>
          <Title type="sub">Please enter your details to continue.</Title>
        </div>
        <RegisterForm />
      </section>
    </>
  );
}
