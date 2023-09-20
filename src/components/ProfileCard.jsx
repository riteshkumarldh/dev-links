import { useLink } from "../utils/uselink";

export default function ProfileCard({ details }) {
  const { links } = useLink();

  return (
    <>
      <div className="flex flex-col items-center px-14">
        <div className="h-24 w-24 bg-gray-200 rounded-full mb-5 skelton"></div>
        {details?.firstName || details?.lastName ? (
          <div className="h-4 flex-nowrap rounded-xl mb-2 flex gap-1 items-center px-4">
            <span className="whitespace-nowrap font-semibold text-md">
              {details?.firstName}
            </span>
            <span className="whitespace-nowrap font-semibold text-md">
              {details?.lastName}
            </span>
          </div>
        ) : (
          <div className="w-40 h-4 bg-slate-200 rounded-xl mb-2 skelton"></div>
        )}

        {details?.email ? (
          <div className="h-4 flex-nowrap rounded-xl mb-2 flex gap-1 items-center px-4">
            <span className="whitespace-nowrap font-semibold text-xs text-gray-500">
              {details?.email}
            </span>
          </div>
        ) : (
          <div className="w-20 h-3 bg-slate-200 rounded-lg skelton"></div>
        )}
      </div>
      <div className=" mt-10 flex flex-col gap-5 h-[340px] overflow-auto hide__scrollbar">
        {links?.map((link) =>
          link.plateform ? (
            <a
              href={link.link}
              target="_blank"
              rel="noreferrer"
              className={`w-full min-h-[44px] rounded-xl px-4 flex justify-between items-center `}
              key={link.id}
              style={{
                background: `${link.color}`,
              }}
            >
              <div className="flex items-center gap-3">
                <img
                  src={link.icon}
                  alt={link.plateform}
                  width={16}
                  height={16}
                  className="filter"
                />
                <span
                  className="text-white"
                  style={{ color: `${link.textColor}` }}
                >
                  {link.plateform}
                </span>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M2.66663 7.3333V8.66664H10.6666L6.99996 12.3333L7.94663 13.28L13.2266 7.99997L7.94663 2.71997L6.99996 3.66664L10.6666 7.3333H2.66663Z"
                  fill={`${link.textColor}`}
                />
              </svg>
            </a>
          ) : (
            <div
              key={link.id}
              className="w-full min-h-[44px] bg-gray-200 rounded-xl skelton"
            ></div>
          )
        )}
      </div>
    </>
  );
}
