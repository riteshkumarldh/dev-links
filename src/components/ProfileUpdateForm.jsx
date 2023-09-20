import ProfileInput from "./ProfileInput";

export default function ProfileUpdateForm({ register, errors }) {
  return (
    <div className="p-5 bg-gray-100 rounded-xl">
      <div className="flex flex-col gap-4">
        <ProfileInput
          id="firstName"
          type="text"
          label="First Name*"
          placeholder="e.g. John"
          error={errors?.firstName?.message}
          register={register("firstName", {
            required: {
              value: true,
              message: "Can't be empty",
            },
          })}
        />
        <ProfileInput
          id="lastName"
          type="text"
          label="Last Name*"
          placeholder="e.g. Appleseed"
          error={errors?.lastName?.message}
          register={register("lastName", {
            required: {
              value: true,
              message: "Can't be empty",
            },
          })}
        />
        <ProfileInput
          id="email"
          type="email"
          label="Email"
          placeholder="e.g. email@example.com"
          error={errors?.email?.message}
          register={register("email", {
            required: {
              value: true,
              message: "Email is required",
            },
          })}
        />
      </div>
    </div>
  );
}
