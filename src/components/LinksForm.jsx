import { useState } from "react";

import Button from "./Button";
import LinkAddInfo from "./LinkAddInfo";
import LinksFormTop from "./LinksFormTop";
import LinkAddForm from "./LinkAddForm";
import RightBottomBtn from "./RightBottomBtn";

export default function LinksForm() {
  const [isClicked, setIsClicked] = useState(true);
  return (
    <div className="bg-white rounded-3xl flex flex-col justify-between w-full">
      <div className="  p-10  flex flex-col">
        <LinksFormTop
          description="Add/edit/remove links below and then share all your profiles with the
        world!"
          title="Customize your links"
        />
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
      <RightBottomBtn disabled={!isClicked} />
    </div>
  );
}
