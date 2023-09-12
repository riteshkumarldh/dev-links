import github from "../assets/icons/github.svg";

const options = [
  {
    id: 1,
    name: "GitHub",
    icon: github,
  },
  {
    id: 2,
    name: "Frontend Mentor",
    icon: github,
  },
  {
    id: 3,
    name: "Twitter",
    icon: github,
  },
  {
    id: 4,
    name: "LinkedIn",
    icon: github,
  },
  {
    id: 5,
    name: "YouTube",
    icon: github,
  },
  {
    id: 6,
    name: "Facebook",
    icon: github,
  },
  {
    id: 7,
    name: "Twitch",
    icon: github,
  },
  {
    id: 8,
    name: "Dev.to",
    icon: github,
  },
  {
    id: 9,
    name: "Codewars",
    icon: github,
  },
  {
    id: 10,
    name: "Codepen",
    icon: github,
  },
  {
    id: 11,
    name: "FreeCodeCamp",
    icon: github,
  },
  {
    id: 12,
    name: "Gitlab",
    icon: github,
  },
  {
    id: 13,
    name: "Hashnode",
    icon: github,
  },
  {
    id: 14,
    name: "Stack Overflow",
    icon: github,
  },
];

export default function CustomSelectBox({ selectOpen, setSelectOpen }) {
  return (
    <div className="relative">
      <div
        onBlur={() => setSelectOpen(false)}
        onClick={() => setSelectOpen((prev) => !prev)}
        tabIndex={0}
        className="flex items-center bg-white rounded-xl justify-between px-4 border border-gray-300 h-12 focus:outline-1 focus:outline focus:outline-bl-300 cursor-pointer"
      >
        <div className="flex gap-3 items-center">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <g clipPath="url(#clip0_112_610)">
                <path
                  d="M9.98187 2.28805C8.67799 1.98507 7.32201 1.98507 6.01813 2.28805C5.26507 1.82619 4.69013 1.61392 4.272 1.52432C4.09354 1.48404 3.91093 1.46506 3.728 1.46779C3.64476 1.47004 3.56192 1.48004 3.48053 1.49765L3.46987 1.49979L3.4656 1.50192H3.4624L3.60853 2.01499L3.4624 1.50299C3.38746 1.52416 3.31807 1.56149 3.2591 1.61235C3.20013 1.66321 3.15302 1.72637 3.12107 1.79739C2.80637 2.50214 2.74642 3.29436 2.95147 4.03845C2.42041 4.68203 2.13101 5.49099 2.13333 6.32539C2.13333 7.98192 2.62187 9.09552 3.45493 9.81125C4.0384 10.3126 4.74667 10.5793 5.45707 10.7318C5.34527 11.0601 5.30313 11.4081 5.33333 11.7537V12.3915C4.8992 12.4822 4.5984 12.4534 4.384 12.383C4.11627 12.2945 3.9104 12.1163 3.71307 11.8603C3.60991 11.7223 3.51379 11.5792 3.42507 11.4315L3.36427 11.3323C3.28749 11.2047 3.20783 11.0788 3.12533 10.9547C2.92267 10.655 2.62187 10.2795 2.13547 10.1515L1.6192 10.0161L1.34827 11.0486L1.86453 11.1841C1.94987 11.2054 2.0608 11.2854 2.2432 11.5531C2.31341 11.6588 2.38098 11.7662 2.44587 11.8753L2.5184 11.9926C2.61867 12.1547 2.73387 12.3339 2.8672 12.5089C3.13707 12.8609 3.50507 13.2161 4.0512 13.3963C4.42453 13.5201 4.84907 13.5499 5.33333 13.4753V15.4667C5.33333 15.6082 5.38952 15.7438 5.48954 15.8438C5.58956 15.9439 5.72522 16.0001 5.86667 16.0001H10.1333C10.2748 16.0001 10.4104 15.9439 10.5105 15.8438C10.6105 15.7438 10.6667 15.6082 10.6667 15.4667V11.6662C10.6667 11.3302 10.6517 11.0219 10.5568 10.735C11.264 10.5857 11.9669 10.319 12.5472 9.81765C13.3792 9.09659 13.8667 7.97232 13.8667 6.30619V6.30512C13.864 5.47756 13.5745 4.67652 13.0475 4.03845C13.2523 3.2947 13.1923 2.50289 12.8779 1.79845C12.8462 1.72735 12.7993 1.66406 12.7405 1.61301C12.6817 1.56197 12.6124 1.52442 12.5376 1.50299L12.3915 2.01499C12.5376 1.50299 12.5365 1.50299 12.5355 1.50299L12.5333 1.50192L12.5291 1.49979L12.5195 1.49765C12.4931 1.4908 12.4664 1.48546 12.4395 1.48165C12.3836 1.4735 12.3273 1.46887 12.2709 1.46779C12.088 1.46508 11.9054 1.48406 11.7269 1.52432C11.3099 1.61392 10.7349 1.82619 9.98187 2.28805Z"
                  fill="#737373"
                />
              </g>
              <defs>
                <clipPath id="clip0_112_610">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </span>
          <span>GitHub</span>
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
      </div>

      {selectOpen && (
        <ul
          className="absolute left-0 top-[110%] max-h-52 overflow-auto border border-gray-300 shadow rounded-xl w-full bg-white z-10 "
          role="listbox"
        >
          {options?.map((option) => (
            <li
              key={option.id}
              className="flex gap-3 items-center py-3 border-b border-b-gray-300 last:border-none cursor-pointer hover:bg-gray-100 px-4"
              role="option"
              tabIndex={0}
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
