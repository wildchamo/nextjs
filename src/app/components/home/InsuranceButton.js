export default function InsuranceButton({ text, onClick }) {
  const initials = text
    .split(" ")
    .map((word) => word[0])
    .join("");

  return (
    <div
      onClick={onClick}
      className="flex flex-col justify-center items-center bg-secondary w-20 h-20 p-1 text-white rounded-2xl text-sm"
    >
      <h2 className="text-2xl uppercase">{initials}</h2>
      <p className="text-center text-sm">{text}</p>
    </div>
  );
}
