import Button from './Button.jsx';
export default function Header() {
  return (
    <header className="bg-[#65C8EF] text-white w-full h-24 border-b-4 border-[#2271d1]">
      <nav className="flex justify-between items-center w-full h-full px-10">
        <div> 
          <img src="./Logo.svg" alt="Logo" className="h-10" />
        </div>
        <div className="flex gap-4">
          <Button text="HOME" />
          <Button text="NUEVO VIDEO" />
        </div>
      </nav>
    </header>
  );
}  