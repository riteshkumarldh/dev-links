export default function InputBox({
  id,
  type,
  label,
  placeholder,
  icon,
  error,
}) {
  return (
    <div>
      <label htmlFor={id} className="text-xs mb-1 text-gray-700">
        {label}
      </label>
      <div className="relative">
        <input
          type={type}
          id={id}
          name={id}
          className="w-full border border-gray-400 h-12 placeholder:text-gray-500 placeholder:text-sm pl-11 rounded-lg focus:outline-purple-600 focus:outline"
          placeholder={placeholder}
        />
        <img
          src={icon}
          alt="icon"
          className="absolute top-1/2 -translate-y-1/2 px-4"
        />
        <span className="absolute top-1/2 -translate-y-1/2 right-2 text-xs text-red-500">
          {error}
        </span>
      </div>
    </div>
  );
}
