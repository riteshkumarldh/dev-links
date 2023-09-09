import { useState } from "react";

import Button from "./Button";
import LinkAddInfo from "./LinkAddInfo";
import LinksFormTop from "./LinksFormTop";
import LinkAddForm from "./LinkAddForm";

export default function LinksForm() {
  const [isClicked, setIsClicked] = useState(true);
  return (
    <div className="flex-1 bg-white p-10 rounded-3xl">
      <LinksFormTop />
      <Button className="border border-bl-300 text-bl-300 rounded-lg font-medium px-4 hover:bg-bl-100">
        + Add new link
      </Button>

      <form>
        {isClicked ? <LinkAddForm /> : <LinkAddInfo />}

        <div>
          <Button
            disabled={!isClicked}
            className="bg-bl-300 w-max px-6 text-white font-semibold hover:bg-bl-200 disabled:bg-bl-200"
          >
            Save
          </Button>
        </div>
      </form>
    </div>
  );
}
