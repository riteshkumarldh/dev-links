import { useState } from "react";

import Button from "./Button";
import LinkAddInfo from "./LinkAddInfo";
import LinksFormTop from "./LinksFormTop";
import LinkAddForm from "./LinkAddForm";

export default function LinksForm() {
  const [isClicked, setIsClicked] = useState(true);
  return (
    <div className="bg-white rounded-3xl flex flex-col justify-between w-full">
      <div className="  p-10  flex flex-col">
        <LinksFormTop />
        <Button
          className="border border-bl-300 text-bl-300 rounded-lg font-medium px-4 hover:bg-bl-100"
          onClick={() => setIsClicked((prev) => !prev)}
        >
          + Add new link
        </Button>

        <form className="flex flex-col justify-between">
          {isClicked ? <LinkAddForm /> : <LinkAddInfo />}
        </form>
      </div>
      <div className="py-6 border-t border-t-bl-200 mt-auto w-full flex justify-end pr-10">
        <Button
          type="submit"
          disabled={!isClicked}
          className="bg-bl-300 w-max px-6 text-white font-semibold hover:bg-bl-200 disabled:bg-bl-200 "
        >
          Save
        </Button>
      </div>
    </div>
  );
}
