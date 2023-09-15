import { useNavigate } from "react-router-dom";
import Button from "./Button";

export default function PreviewTopBar() {
  const navigate = useNavigate();

  return (
    <div className=" bg-white py-3 rounded-xl flex px-4 justify-between">
      <Button
        onClick={() => navigate("/")}
        className="w-max whitespace-nowrap  border-2 border-blue-700 px-4 font-semibold text-blue-700 hover:bg-bl-100"
      >
        Back to Editor
      </Button>
      <Button className="w-max whitespace-nowrap  border-2 border-blue-700 px-4 font-semibold bg-blue-700 text-white hover:bg-blue-600">
        Share link
      </Button>
    </div>
  );
}
