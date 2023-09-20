import { useLink } from "../utils/uselink";

import Button from "./Button";
import LinkAddInfo from "./LinkAddInfo";
import LinksFormTop from "./LinksFormTop";
import LinkAddForm from "./LinkAddForm";
import RightBottomBtn from "./RightBottomBtn";

export default function LinksForm() {
  const { links, dispatch } = useLink();

  const handleAddLink = () => {
    dispatch({ type: "addLink" });
  };

  return (
    <div className="bg-white rounded-3xl flex flex-col justify-between w-full">
      <div className="p-10 flex flex-col">
        <LinksFormTop
          description="Add/edit/remove links below and then share all your profiles with the
        world!"
          title="Customize your links"
        />
        <Button
          className="border border-bl-300 text-bl-300 rounded-lg font-medium px-4 hover:bg-bl-100"
          // onClick={() => setIsClicked((prev) => !prev)}
          onClick={handleAddLink}
        >
          + Add new link
        </Button>

        <form className="flex flex-col justify-between">
          {links.length > 0 ? <LinkAddForm /> : <LinkAddInfo />}
        </form>
      </div>
      <RightBottomBtn disabled={links.length < 1} />
    </div>
  );
}
