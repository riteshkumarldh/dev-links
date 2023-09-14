import Button from "./Button";

export default function ProfileDetails() {
  return (
    <div className="bg-white rounded-3xl flex flex-col justify-between w-full">
      <div>Hello</div>
      <div className="py-6 border-t border-t-gray-300 mt-auto w-full flex justify-end pr-10">
        <Button
          type="submit"
          className="bg-bl-300 w-max px-6 text-white font-semibold hover:bg-bl-200 disabled:bg-bl-200 "
        >
          Save
        </Button>
      </div>
    </div>
  );
}
