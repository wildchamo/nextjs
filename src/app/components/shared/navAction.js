export default function NavAction({ type, isActive, onButtonClick }) {
  return (
    <>
      <div
        onClick={onButtonClick}
        className={` "w-20 h-20 rounded-full flex items-center justify-center" ${
          isActive ? "bg-tertiary" : ""
        }`}
      >
        <Icon type={type} />
      </div>
    </>
  );
}

function Icon({ type }) {
  switch (type) {
    case "home":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 24 24"
        >
          <path fill="#ffffff" d="M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8h5Z" />
        </svg>
      );
    case "user":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 256 256"
        >
          <path
            fill="#ffffff"
            d="M230.93 220a8 8 0 0 1-6.93 4H32a8 8 0 0 1-6.92-12c15.23-26.33 38.7-45.21 66.09-54.16a72 72 0 1 1 73.66 0c27.39 8.95 50.86 27.83 66.09 54.16a8 8 0 0 1 .01 8Z"
          />
        </svg>
      );
    case "logout":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 24 24"
        >
          <g fill="#ffffff">
            <path
              fillRule="evenodd"
              d="M16.125 12a.75.75 0 0 0-.75-.75H4.402l1.961-1.68a.75.75 0 1 0-.976-1.14l-3.5 3a.75.75 0 0 0 0 1.14l3.5 3a.75.75 0 1 0 .976-1.14l-1.96-1.68h10.972a.75.75 0 0 0 .75-.75Z"
              clipRule="evenodd"
            />
            <path d="M9.375 8c0 .702 0 1.053.169 1.306a1 1 0 0 0 .275.275c.253.169.604.169 1.306.169h4.25a2.25 2.25 0 0 1 0 4.5h-4.25c-.702 0-1.053 0-1.306.168a1 1 0 0 0-.275.276c-.169.253-.169.604-.169 1.306c0 2.828 0 4.243.879 5.121c.878.879 2.292.879 5.12.879h1c2.83 0 4.243 0 5.122-.879c.879-.878.879-2.293.879-5.121V8c0-2.828 0-4.243-.879-5.121C20.617 2 19.203 2 16.375 2h-1c-2.829 0-4.243 0-5.121.879c-.879.878-.879 2.293-.879 5.121Z" />
          </g>
        </svg>
      );
    default:
      return null;
  }
}
