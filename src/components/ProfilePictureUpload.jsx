import ImageUpload from "./ImageUpload";

export default function ProfilePictureUpload() {
  return (
    <div className="p-5 bg-gray-100 rounded-xl">
      <div className="flex justify-between items-center">
        <p className="text-gray-600 text-sm">Profile picture</p>
        <ImageUpload />
        <p className="text-gray-600 text-sm max-w-[230px]">
          Image must be below 1024x1024px. Use PNG or JPG format.
        </p>
      </div>
    </div>
  );
}
