import { useState } from "react";
import { useLink } from "../utils/uselink";

import github from "../assets/icons/github.svg";
import mentor from "../assets/icons/mentor.svg";
import twitter from "../assets/icons/twitter.svg";
import linkedin from "../assets/icons/linkedin.svg";
import youtube from "../assets/icons/youtube.svg";
import facebook from "../assets/icons/facebook.svg";
import twitch from "../assets/icons/twitch.svg";
import dev from "../assets/icons/dev.svg";
import codewars from "../assets/icons/codewars.svg";
import codepen from "../assets/icons/codepen.svg";
import fcc from "../assets/icons/fcc.svg";
import gitlab from "../assets/icons/gitlab.svg";
import hashnode from "../assets/icons/hashnode.svg";
import stackof from "../assets/icons/stackof.svg";

const options = [
  {
    id: 1,
    name: "GitHub",
    icon: github,
    bgColor: "#1A1A1A",
    textColor: "#fff",
  },
  {
    id: 2,
    name: "Frontend Mentor",
    icon: mentor,
    bgColor: "#fff",
    textColor: "#000",
  },
  {
    id: 3,
    name: "Twitter",
    icon: twitter,
    bgColor: "#43B7E9",
    textColor: "#fff",
  },
  {
    id: 4,
    name: "LinkedIn",
    icon: linkedin,
    bgColor: "#2D68FF",
    textColor: "#fff",
  },
  {
    id: 5,
    name: "YouTube",
    icon: youtube,
    bgColor: "#EE3939",
    textColor: "#fff",
  },
  {
    id: 6,
    name: "Facebook",
    icon: facebook,
    bgColor: "#2442AC",
    textColor: "#fff",
  },
  {
    id: 7,
    name: "Twitch",
    icon: twitch,
    bgColor: "#EE3FC8",
    textColor: "#fff",
  },
  {
    id: 8,
    name: "Dev.to",
    icon: dev,
    bgColor: "#333",
    textColor: "#fff",
  },
  {
    id: 9,
    name: "Codewars",
    icon: codewars,
    bgColor: "#8A1A50",
    textColor: "#fff",
  },
  {
    id: 10,
    name: "Codepen",
    icon: codepen,
    bgColor: "#333",
    textColor: "#fff",
  },
  {
    id: 11,
    name: "FreeCodeCamp",
    icon: fcc,
    bgColor: "#302267",
    textColor: "#fff",
  },
  {
    id: 12,
    name: "Gitlab",
    icon: gitlab,
    bgColor: "#EB4925",
    textColor: "#fff",
  },
  {
    id: 13,
    name: "Hashnode",
    icon: hashnode,
    bgColor: "#0330D1",
    textColor: "#fff",
  },
  {
    id: 14,
    name: "Stack Overflow",
    icon: stackof,
    bgColor: "#EC7100",
    textColor: "#fff",
  },
];

export default function CustomSelectBox({ link }) {
  const { dispatch } = useLink();
  const [selectOpen, setSelectOpen] = useState(false);

  const handleAddPlateform = (linkId, plateform, icon, color, textColor) => {
    dispatch({
      type: "editLink",
      payload: { linkId, plateform, icon, link: link.link, color, textColor },
    });

    setSelectOpen(false);
  };

  return (
    <div className="relative">
      <button
        type="button"
        // onBlur={() => setSelectOpen(false)}
        onClick={() => setSelectOpen((prev) => !prev)}
        tabIndex={0}
        className="flex items-center w-full bg-white rounded-xl justify-between px-4 border border-gray-300 h-12 focus:outline-1 focus:outline focus:outline-bl-300 cursor-pointer"
      >
        <div className="flex gap-3 items-center">
          {link.plateform ? (
            <>
              <span>
                <img src={link.icon} alt={link.plateform} />
              </span>
              <span>{link.plateform}</span>
            </>
          ) : (
            <span className="text-sm text-gray-500">Select Plateform</span>
          )}
        </div>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="9"
            viewBox="0 0 14 9"
            fill="none"
          >
            <path d="M1 1L7 7L13 1" stroke="#633CFF" strokeWidth="2" />
          </svg>
        </span>
      </button>

      {selectOpen && (
        <ul
          className="absolute left-0 top-[110%] max-h-40 overflow-auto border border-gray-300 shadow rounded-xl w-full bg-white z-10 "
          role="listbox"
        >
          {options?.map((option) => (
            <li
              key={option.id}
              className="flex gap-3 items-center py-3 border-b border-b-gray-300 last:border-none cursor-pointer hover:bg-gray-100 px-4"
              role="option"
              tabIndex={0}
              onClick={() =>
                handleAddPlateform(
                  link.id,
                  option.name,
                  option.icon,
                  option.bgColor,
                  option.textColor
                )
              }
            >
              <span>
                <img src={option.icon} alt={option.name} />
              </span>
              <span>{option.name}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
