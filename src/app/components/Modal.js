export default function Modal({ children }) {
  return (
    <div className="fixed inset-0 z-10 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-white rounded-lg shadow-lg p-6">{children}</div>
      </div>
    </div>
  );
}
