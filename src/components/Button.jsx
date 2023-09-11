export default function Button({
  children,
  className,
  disabled,
  type,
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={`py-3 w-full rounded-lg transition-all duration-200 outline-none focus:ring-4 focus:ring-bl-200  ${className}`}
    >
      {children}
    </button>
  );
}
