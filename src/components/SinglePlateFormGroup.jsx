import linkIcon from "../assets/icons/icon-link.svg";

import CustomSelectBox from "./CustomSelectBox";
import InputBox from "./InputBox";

export default function SinglePlateFormGroup({ link }) {
  return (
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
      <CustomSelectBox link={link} />
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
  );
}
