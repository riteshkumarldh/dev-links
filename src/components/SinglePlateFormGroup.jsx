import { useState } from "react";
// import { useForm } from "react-hook-form";

import { useLink } from "../utils/uselink";

import linkIcon from "../assets/icons/icon-link.svg";

import CustomSelectBox from "./CustomSelectBox";
import InputBox from "./InputBox";

export default function SinglePlateFormGroup({ link, index }) {
  // const { register, watch } = useForm();
  // const inputWatch = watch("linkInput");
  // console.log(inputWatch);
  const [linkInput, setLinkInput] = useState("");
  const { dispatch } = useLink();

  const handleChange = (e, linkId) => {
    setLinkInput(e.target.value);

    dispatch({
      type: "editLink",
      payload: {
        linkId,
        link: e.target.value,
        plateform: link.plateform,
        icon: link.icon,
        color: link.color,
        textColor: link.textColor,
      },
    });
  };

  return (
    <div className="bg-gray-100 p-6 rounded-xl flex flex-col gap-3">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="flex flex-col gap-1">
            <span className="block h-[0.5px] w-3 bg-gray-600"></span>
            <span className="block h-[0.5px] w-3 bg-gray-600"></span>
          </div>
          <h2 className="text-gray-600 font-semibold">
            Link #<span>{index + 1}</span>
          </h2>
        </div>
        <button className="text-gray-600 hover:text-gray-800">Remove</button>
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
          // register={register("linkInput")}
          value={linkInput}
          onChange={(e) => handleChange(e, link.id)}
        />
      </div>
    </div>
  );
}
