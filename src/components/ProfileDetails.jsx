import { useForm } from "react-hook-form";

import LinksFormTop from "./LinksFormTop";
import ProfilePictureUpload from "./ProfilePictureUpload";
import ProfileUpdateForm from "./ProfileUpdateForm";
import RightBottomBtn from "./RightBottomBtn";
import { useEffect } from "react";

export default function ProfileDetails({ setDetails }) {
  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (val) => {
    console.log(val);
  };

  useEffect(() => {
    const subscription = watch((value) => {
      setDetails(value);
    });
    return () => subscription.unsubscribe();
  }, [watch, setDetails]);
  return (
    <form
      className="bg-white rounded-3xl flex flex-col justify-between w-full"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <div className="p-10">
        <LinksFormTop
          description="Add your details to create a personal touch to your profile."
          title="Profile Details"
        />
        <div className="flex flex-col gap-5">
          <ProfilePictureUpload />
          <ProfileUpdateForm register={register} errors={errors} />
        </div>
      </div>
      <RightBottomBtn type="submit" />
    </form>
  );
}
