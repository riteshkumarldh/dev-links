import LinksFormTop from "./LinksFormTop";
import ProfilePictureUpload from "./ProfilePictureUpload";
import ProfileUpdateForm from "./ProfileUpdateForm";
import RightBottomBtn from "./RightBottomBtn";

export default function ProfileDetails() {
  return (
    <div className="bg-white rounded-3xl flex flex-col justify-between w-full">
      <div className="p-10">
        <LinksFormTop
          description="Add your details to create a personal touch to your profile."
          title="Profile Details"
        />
        <div className="flex flex-col gap-5">
          <ProfilePictureUpload />
          <ProfileUpdateForm />
        </div>
      </div>
      <RightBottomBtn />
    </div>
  );
}
