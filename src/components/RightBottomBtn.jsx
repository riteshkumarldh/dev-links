import { useLink } from "../utils/uselink";

import Button from "./Button";

export default function RightBottomBtn({ onClick }) {
  const { links } = useLink();
  return (
    <div className="py-6 border-t border-t-gray-300 mt-auto w-full flex justify-end pr-10">
      <Button
        disabled={links.length < 1}
        onClick={onClick}
        type="submit"
        className="bg-bl-300 w-max px-6 text-white font-semibold hover:bg-bl-200 disabled:bg-bl-200 "
      >
        Save
      </Button>
    </div>
  );
}
