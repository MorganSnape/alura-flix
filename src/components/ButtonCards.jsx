export default function ButtonCards({ text }) {
  return (
    <button className=" w-1/2 flex justify-center py-4 text-white bg-black font-bold cursor-pointer hover:bg-gray-700">{text}</button>
  );
}