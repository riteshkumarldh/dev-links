import InputBox from "./InputBox";
import linkIcon from "../assets/icons/icon-link.svg";

export default function LinkAddForm() {
  return (
    <div className="mt-10">
      <div>
        <div className="flex justify-between items-center mb-3">
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
        <div></div>
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
