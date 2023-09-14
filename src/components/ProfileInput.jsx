export default function ProfileInput({ id, type, label, placeholder, error }) {
  return (
    <div className="sm:flex md:block lg:flex items-center">
      <label htmlFor={id} className="text-sm w-40 mb-1 text-gray-700">
        {label}
      </label>
      <div className="relative grow">
        <input
          type={type}
          id={id}
          className="w-full border border-gray-300 h-12 placeholder:text-gray-500 placeholder:text-sm px-4 rounded-lg focus:outline-bl-300 focus:outline"
          placeholder={placeholder}
        />
        <span className="sm:absolute md:static lg:absolute top-1/2 -translate-y-1/2 right-2 text-xs text-red-500">
          {error}
        </span>
      </div>
    </div>
  );
}
