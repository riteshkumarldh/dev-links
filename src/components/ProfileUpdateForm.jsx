import ProfileInput from "./ProfileInput";

export default function ProfileUpdateForm() {
  return (
    <div className="p-5 bg-gray-100 rounded-xl">
      <form>
        <ProfileInput />
        <ProfileInput />
        <ProfileInput />
      </form>
    </div>
  );
}
