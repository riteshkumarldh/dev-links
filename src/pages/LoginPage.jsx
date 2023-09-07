import LoginForm from "../components/LoginForm";
import Logo from "../components/Logo";

export default function LoginPage() {
  return (
    <section className="min-h-screen flex flex-col gap-14 items-center justify-center bg-gray-100">
      <Logo />
      <LoginForm />
    </section>
  );
}
