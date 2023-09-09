import { NavLink } from "react-router-dom";
export default function NavbarLinks() {
  return (
    <nav className="flex gap-2 sm:gap-4 items-center">
      <NavLink
        to="/"
        className="flex items-center gap-1 px-4 py-3 rounded-lg font-semibold group"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
        >
          <path
            d="M11.154 14.6508C11.2414 14.7379 11.3107 14.8413 11.3581 14.9553C11.4054 15.0693 11.4297 15.1914 11.4297 15.3148C11.4297 15.4382 11.4054 15.5604 11.3581 15.6743C11.3107 15.7883 11.2414 15.8918 11.154 15.9789L10.6899 16.4429C9.81057 17.3223 8.61791 17.8163 7.3743 17.8163C6.1307 17.8163 4.93804 17.3223 4.05868 16.4429C3.17932 15.5636 2.6853 14.3709 2.6853 13.1273C2.6853 11.8837 3.17932 10.691 4.05868 9.81169L5.94305 7.9281C6.78796 7.0811 7.92476 6.58921 9.12057 6.55319C10.3164 6.51717 11.4807 6.93974 12.3751 7.73435C12.4674 7.81642 12.5427 7.91588 12.5966 8.02705C12.6505 8.13821 12.682 8.2589 12.6892 8.38223C12.6965 8.50556 12.6794 8.62911 12.6389 8.74582C12.5984 8.86254 12.5353 8.97014 12.4532 9.06247C12.3711 9.15481 12.2717 9.23007 12.1605 9.28397C12.0493 9.33787 11.9287 9.36934 11.8053 9.3766C11.682 9.38385 11.5585 9.36675 11.4417 9.32625C11.325 9.28576 11.2174 9.22267 11.1251 9.1406C10.5888 8.66429 9.89074 8.4109 9.17377 8.43224C8.4568 8.45359 7.77508 8.74807 7.26805 9.25544L5.38524 11.1367C4.85771 11.6642 4.56135 12.3797 4.56135 13.1258C4.56135 13.8718 4.85771 14.5873 5.38524 15.1148C5.91277 15.6423 6.62826 15.9387 7.3743 15.9387C8.12035 15.9387 8.83583 15.6423 9.36337 15.1148L9.82743 14.6508C9.9145 14.5636 10.0179 14.4944 10.1317 14.4473C10.2455 14.4001 10.3675 14.3758 10.4907 14.3758C10.6139 14.3758 10.7359 14.4001 10.8497 14.4473C10.9635 14.4944 11.0669 14.5636 11.154 14.6508ZM16.9415 3.557C16.0614 2.679 14.869 2.18591 13.6259 2.18591C12.3827 2.18591 11.1903 2.679 10.3102 3.557L9.84618 4.02107C9.67006 4.19719 9.57112 4.43606 9.57112 4.68513C9.57112 4.9342 9.67006 5.17307 9.84618 5.34919C10.0223 5.52531 10.2612 5.62426 10.5102 5.62426C10.7593 5.62426 10.9982 5.52531 11.1743 5.34919L11.6384 4.88513C12.1659 4.3576 12.8814 4.06123 13.6274 4.06123C14.3735 4.06123 15.089 4.3576 15.6165 4.88513C16.144 5.41266 16.4404 6.12815 16.4404 6.87419C16.4404 7.62023 16.144 8.33572 15.6165 8.86325L13.7329 10.7476C13.2254 11.2548 12.5433 11.5488 11.8262 11.5696C11.109 11.5904 10.4111 11.3363 9.87509 10.8593C9.78275 10.7773 9.67515 10.7142 9.55844 10.6737C9.44172 10.6332 9.31817 10.6161 9.19484 10.6233C9.07152 10.6306 8.95082 10.6621 8.83966 10.716C8.7285 10.7699 8.62904 10.8451 8.54696 10.9375C8.46488 11.0298 8.4018 11.1374 8.36131 11.2541C8.32081 11.3708 8.30371 11.4944 8.31096 11.6177C8.31821 11.741 8.34969 11.8617 8.40359 11.9729C8.45748 12.0841 8.53275 12.1835 8.62509 12.2656C9.51882 13.06 10.6824 13.4829 11.8776 13.4476C13.0729 13.4123 14.2095 12.9215 15.0548 12.0758L16.9391 10.1922C17.8182 9.3123 18.3121 8.11957 18.3126 6.87585C18.313 5.63212 17.8199 4.43905 16.9415 3.55857V3.557Z"
            fill="#737373"
            className="group-hover:fill-bl-300"
          />
        </svg>
        <span className="hidden sm:block group-hover:text-bl-300">Links</span>
      </NavLink>
      <NavLink
        to="/profile"
        className="flex items-center gap-1 px-4 py-3 rounded-lg font-semibold group"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
        >
          <path
            d="M10.5 1.5625C8.83122 1.5625 7.19992 2.05735 5.81238 2.98448C4.42484 3.9116 3.34338 5.22936 2.70477 6.77111C2.06616 8.31286 1.89907 10.0094 2.22463 11.6461C2.55019 13.2828 3.35379 14.7862 4.53379 15.9662C5.7138 17.1462 7.21721 17.9498 8.85393 18.2754C10.4906 18.6009 12.1871 18.4338 13.7289 17.7952C15.2706 17.1566 16.5884 16.0752 17.5155 14.6876C18.4427 13.3001 18.9375 11.6688 18.9375 10C18.935 7.763 18.0453 5.61833 16.4635 4.03653C14.8817 2.45473 12.737 1.56498 10.5 1.5625ZM6.71641 15.357C7.15163 14.7619 7.72107 14.2779 8.37849 13.9442C9.0359 13.6106 9.76276 13.4367 10.5 13.4367C11.2373 13.4367 11.9641 13.6106 12.6215 13.9442C13.2789 14.2779 13.8484 14.7619 14.2836 15.357C13.1778 16.1412 11.8556 16.5625 10.5 16.5625C9.14436 16.5625 7.82221 16.1412 6.71641 15.357ZM8.3125 9.375C8.3125 8.94235 8.4408 8.51942 8.68116 8.15969C8.92153 7.79996 9.26317 7.51958 9.66288 7.35401C10.0626 7.18845 10.5024 7.14513 10.9268 7.22953C11.3511 7.31394 11.7409 7.52228 12.0468 7.8282C12.3527 8.13413 12.5611 8.52391 12.6455 8.94824C12.7299 9.37257 12.6866 9.81241 12.521 10.2121C12.3554 10.6118 12.075 10.9535 11.7153 11.1938C11.3556 11.4342 10.9327 11.5625 10.5 11.5625C9.91984 11.5625 9.36344 11.332 8.95321 10.9218C8.54297 10.5116 8.3125 9.95516 8.3125 9.375ZM15.6563 14.0578C15.0486 13.2849 14.2741 12.6595 13.3906 12.2281C13.9537 11.658 14.3355 10.934 14.4881 10.1474C14.6408 9.36074 14.5573 8.54653 14.2484 7.80718C13.9394 7.06783 13.4187 6.43637 12.7517 5.99223C12.0847 5.5481 11.3013 5.31112 10.5 5.31112C9.69869 5.31112 8.91528 5.5481 8.24831 5.99223C7.58135 6.43637 7.06062 7.06783 6.75165 7.80718C6.44267 8.54653 6.35925 9.36074 6.51187 10.1474C6.66449 10.934 7.04634 11.658 7.60938 12.2281C6.72592 12.6595 5.9514 13.2849 5.34375 14.0578C4.58051 13.0903 4.10512 11.9274 3.972 10.7022C3.83888 9.47711 4.05341 8.23925 4.59104 7.13037C5.12867 6.02148 5.96767 5.08639 7.01199 4.43212C8.05631 3.77786 9.26375 3.43086 10.4961 3.43086C11.7284 3.43086 12.9359 3.77786 13.9802 4.43212C15.0245 5.08639 15.8635 6.02148 16.4012 7.13037C16.9388 8.23925 17.1533 9.47711 17.0202 10.7022C16.8871 11.9274 16.4117 13.0903 15.6484 14.0578H15.6563Z"
            fill="#737373"
            className="group-hover:fill-bl-300"
          />
        </svg>
        <span className="hidden sm:block group-hover:text-bl-300">
          Profile Details
        </span>
      </NavLink>
    </nav>
  );
}
