import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import message from "../assets/icons/message.svg";
import lock from "../assets/icons/lock.svg";

import InputBox from "./InputBox";
import Button from "./Button";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("login submitted", data);

    reset();
  };

  return (
    <div className="bg-white p-10 max-w-[476px] w-full">
      <div>
        <div className="flex flex-col gap-1 mb-10">
          <h2 className="text-[32px] font-bold">Login form</h2>
          <p className="text-gray-500">
            Add your details below to get back into the app
          </p>
        </div>

        <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
          <InputBox
            icon={message}
            label="Email address"
            placeholder="e.g. alex@email.com"
            id="email"
            type="email"
            error={errors.email?.message}
            register={register("email", {
              required: {
                value: true,
                message: "Email is required to login",
              },
            })}
          />
          <InputBox
            icon={lock}
            label="Password"
            placeholder="Enter Your password"
            id="password"
            type="password"
            error={errors.password?.message}
            register={register("password", {
              required: {
                value: true,
                message: "Password required for login",
              },
            })}
          />
          <Button className="bg-[#633CFF] text-white hover:bg-[#BEADFF]">
            Login
          </Button>
          <p className="text-gray-500">
            Don’t have an account?{" "}
            <Link to="/register" className="text-[#633CFF]">
              Create account
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
