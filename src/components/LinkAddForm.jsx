import InputBox from "./InputBox";
import linkIcon from "../assets/icons/icon-link.svg";
import CustomSelectBox from "./CustomSelectBox";
import { useState } from "react";

export default function LinkAddForm() {
  const [selectOpen, setSelectOpen] = useState(false);
  return (
    <div className="mt-10 flex flex-col gap-11">
      <div className="bg-gray-100 p-6 rounded-xl flex flex-col gap-3">
        <div className="flex justify-between items-center">
          <div>
            <div>
              <span></span>
              <span></span>
            </div>
            <h2>
              Link #<span>1</span>
            </h2>
          </div>
          <button>Remove</button>
        </div>
        <CustomSelectBox
          selectOpen={selectOpen}
          setSelectOpen={setSelectOpen}
        />
        <div>
          <InputBox
            icon={linkIcon}
            id="link"
            type="url"
            label="Link"
            placeholder="https://www.github.com/benwright"
            error="Error"
          />
        </div>
      </div>
    </div>
  );
}
