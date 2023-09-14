import ProfileInput from "./ProfileInput";

export default function ProfileUpdateForm() {
  return (
    <div className="p-5 bg-gray-100 rounded-xl">
      <form className="flex flex-col gap-3">
        <ProfileInput
          id="firstName"
          type="text"
          label="First Name*"
          placeholder="e.g. John"
          error="Can't be empty"
        />
        <ProfileInput
          id="lastName"
          type="text"
          label="Last Name*"
          placeholder="e.g. Appleseed"
          error="Can't be empty"
        />
        <ProfileInput
          id="email"
          type="email"
          label="Email"
          placeholder="e.g. email@example.com"
          error="Email required"
        />
      </form>
    </div>
  );
}
