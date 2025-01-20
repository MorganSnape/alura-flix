export default function Input({ placeholder, title, name }) {
  return (
    <label className="text-white flex flex-col gap-4">
      {title}
      <input
        type="text"
        id={`input-${title}`}
        placeholder={placeholder}
        name={name}
        className="border-2 border-[#6BD1FF] rounded-lg p-2 text-white bg-transparent"
      />
    </label>
  );
}
