import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import message from "../assets/icons/message.svg";
import lock from "../assets/icons/lock.svg";

import InputBox from "./InputBox";
import Button from "./Button";

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("form submitted", data);

    reset();
  };
  return (
    <div className="bg-white p-10 max-w-[476px] w-full">
      <div>
        <div className="flex flex-col gap-1 mb-10">
          <h2 className="text-[32px] font-bold">Create account</h2>
          <p className="text-gray-500">
            Let’s get you started sharing your links!
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
                message: "Email is required",
              },
            })}
          />
          <InputBox
            icon={lock}
            label="Password"
            placeholder="At least 8 characters"
            id="password"
            type="password"
            error={errors.password?.message}
            register={register("password", {
              required: {
                value: true,
                message: "Password is required",
              },
            })}
          />
          <InputBox
            icon={lock}
            label="Confirm Password"
            placeholder="At least 8 characters"
            id="confirm_password"
            type="password"
            error={errors.confirm_password?.message}
            register={register("confirm_password", {
              required: {
                value: true,
                message: "confirm Password is required",
              },
            })}
          />
          <Button
            type="submit"
            className="bg-[#633CFF] text-white hover:bg-[#BEADFF]"
          >
            Register
          </Button>
          <p className="text-gray-500">
            Already have an account?{" "}
            <Link to="/login" className="text-[#633CFF]">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
