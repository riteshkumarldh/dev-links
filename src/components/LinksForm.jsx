import Button from "./Button";
import LinkAddInfo from "./LinkAddInfo";
import LinksFormTop from "./LinksFormTop";

export default function LinksForm() {
  return (
    <div className="flex-1 bg-white p-10 rounded-3xl">
      <LinksFormTop />
      <Button className="border border-bl-300 text-bl-300 rounded-lg font-medium px-4 hover:bg-bl-100">
        + Add new link
      </Button>

      <LinkAddInfo />
    </div>
  );
}
