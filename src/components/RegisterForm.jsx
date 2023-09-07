import { Link } from "react-router-dom";

import message from "../assets/icons/message.svg";
import lock from "../assets/icons/lock.svg";

import InputBox from "./InputBox";
import Button from "./Button";

export default function RegisterForm() {
  return (
    <div className="bg-white p-10 max-w-[476px] w-full">
      <div>
        <div className="flex flex-col gap-1 mb-10">
          <h2 className="text-[32px] font-bold">Create account</h2>
          <p className="text-gray-500">
            Let’s get you started sharing your links!
          </p>
        </div>

        <form className="flex flex-col gap-6">
          <InputBox
            icon={message}
            label="Email address"
            placeholder="e.g. alex@email.com"
            id="email"
            type="email"
            error="Enter correct Email"
          />
          <InputBox
            icon={lock}
            label="Password"
            placeholder="At least 8 characters"
            id="password"
            type="password"
            error="Enter correct password"
          />
          <InputBox
            icon={lock}
            label="Confirm Password"
            placeholder="At least 8 characters"
            id="confirm_password"
            type="password"
            error="Enter correct password"
          />
          <Button className="bg-[#633CFF] text-white hover:bg-[#BEADFF]">
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
