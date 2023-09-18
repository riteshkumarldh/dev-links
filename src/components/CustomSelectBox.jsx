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
  },
  {
    id: 2,
    name: "Frontend Mentor",
    icon: mentor,
  },
  {
    id: 3,
    name: "Twitter",
    icon: twitter,
  },
  {
    id: 4,
    name: "LinkedIn",
    icon: linkedin,
  },
  {
    id: 5,
    name: "YouTube",
    icon: youtube,
  },
  {
    id: 6,
    name: "Facebook",
    icon: facebook,
  },
  {
    id: 7,
    name: "Twitch",
    icon: twitch,
  },
  {
    id: 8,
    name: "Dev.to",
    icon: dev,
  },
  {
    id: 9,
    name: "Codewars",
    icon: codewars,
  },
  {
    id: 10,
    name: "Codepen",
    icon: codepen,
  },
  {
    id: 11,
    name: "FreeCodeCamp",
    icon: fcc,
  },
  {
    id: 12,
    name: "Gitlab",
    icon: gitlab,
  },
  {
    id: 13,
    name: "Hashnode",
    icon: hashnode,
  },
  {
    id: 14,
    name: "Stack Overflow",
    icon: stackof,
  },
];

export default function CustomSelectBox({ link }) {
  const { dispatch } = useLink();
  const [selectOpen, setSelectOpen] = useState(false);

  const handleAddPlateform = (linkId, plateform, icon) => {
    dispatch({ type: "editLink", payload: { linkId, plateform, icon } });

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
                handleAddPlateform(link.id, option.name, option.icon)
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
