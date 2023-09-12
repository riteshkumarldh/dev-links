export default function InputBox({
  id,
  type,
  label,
  placeholder,
  icon,
  error,
  register,
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
          className="w-full border border-gray-300 h-12 placeholder:text-gray-500 placeholder:text-sm pl-11 rounded-lg focus:outline-bl-300 focus:outline"
          placeholder={placeholder}
          {...register}
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
