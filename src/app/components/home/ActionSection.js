export default function ActionSection({ src, text, onClick }) {
  return (
    <div
      onClick={onClick}
      className="flex flex-col justify-center items-center bg-secondary w-20 h-20 p-1 text-white rounded-2xl text-sm"
    >
      {svg(src)}
      <p className="text-center text-sm">{text}</p>
    </div>
  );
}

const svg = (text) => {
  switch (text) {
    case "todos":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 512 512"
        >
          <path fill="#ffffff" d="M307.94 248L216 154.52V242a6 6 0 0 0 6 6Z" />
          <path
            fill="#ffffff"
            d="M184 268V144H60a12 12 0 0 0-12 12v328a12 12 0 0 0 12 12h248a12 12 0 0 0 12-12V280H196a12 12 0 0 1-12-12m182-148h85.94L360 26.52V114a6 6 0 0 0 6 6"
          />
          <path
            fill="#ffffff"
            d="M340 152a12 12 0 0 1-12-12V16H172a12 12 0 0 0-12 12v84h42.12A40.81 40.81 0 0 1 231 124.14l109.16 111a41.11 41.11 0 0 1 11.83 29V400H452a12 12 0 0 0 12-12V152Z"
          />
        </svg>
      );
    case "reportar":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 16 16"
        >
          <path
            fill="#ffffff"
            d="M8.9 1.199A.5.5 0 0 0 8 1.5v2a.5.5 0 0 0 1 0v-.508l.61.81a.5.5 0 0 0 .586.162l1.488-.598l-.658 1.976A.5.5 0 0 0 11.5 6h1.577l-1.385 1.11a.5.5 0 0 0 0 .78L13.077 9H11.5a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .313-.89L12.804 7.5l2.009-1.61A.5.5 0 0 0 14.5 5h-2.306l.78-2.342a.5.5 0 0 0-.66-.622l-2.136.858zM1.637 8l-.09.624A2 2 0 0 0 1 10v3a1 1 0 0 0 2 0h5a1 1 0 0 0 2 0v-3c0-.533-.209-1.017-.549-1.376L9.362 8H10a.5.5 0 0 0 0-1h-.75l-.03.001l-.102-.713A1.5 1.5 0 0 0 7.633 5H3.367a1.5 1.5 0 0 0-1.485 1.288L1.781 7H1a.5.5 0 0 0 0 1zm1.73-2h4.265a.5.5 0 0 1 .495.43l.229 1.602A2.012 2.012 0 0 0 8 8H3c-.122 0-.24.01-.356.032l.228-1.603A.5.5 0 0 1 3.367 6M8 10.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0m-4.5.5a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1"
          />
        </svg>
      );
    default:
      return null;
  }
};
