export default function Modal({ children }) {
  return (
    <div className="fixed inset-0 z-10 overflow-y-auto bg-black bg-opacity-25	">
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-white rounded-lg shadow-lg p-6 w-80">{children}</div>
      </div>
    </div>
  );
}
