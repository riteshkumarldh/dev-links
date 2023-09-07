export default function Button({ children, className }) {
  return (
    <button
      className={`py-3 w-full rounded-lg transition-all duration-200 ${className}`}
    >
      {children}
    </button>
  );
}
