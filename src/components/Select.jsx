export default function Select() {
  return (
    <label className="text-white flex flex-col gap-4">
      Categorias
      <select
        id="select-categorias"
        name="Categorias"
        className="border-2 border-[#6BD1FF] rounded-lg p-2 text-white bg-black"
        defaultValue="Selecciona una categoria"
      >
        <option value="Front End">Front End</option>
        <option value="Back End">Back End</option>
        <option value="Innovación y Gestión">Innovación y Gestión</option>
      </select>
    </label>
  );
}
