export default function Button({ text }) {
  return (
    <button className="border-white border-2 text-white w-40 h-12 rounded-md font-bold hover:bg-black hover:text-[#2271d1] hover:border-[#2271d1] hover:shadow-custom-inset">
      {text}
    </button>
  );
}
