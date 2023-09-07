import Logo from "../components/Logo";
import RegisterForm from "../components/RegisterForm";

export default function RegisterPage() {
  return (
    <section className="min-h-screen flex flex-col gap-14 items-center justify-center bg-gray-100">
      <Logo />
      <RegisterForm />
    </section>
  );
}
