import Button from "./Button";
export default function FormularioEditarCard() {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <form className="flex flex-col gap-4 w-1/2 border-2 border-[#6BD1FF] rounded-lg p-4 bg-black px-36 py-14">
        <h3 className="w-full text-white text-3xl font-bold">EDITAR CARD:</h3>
        <div className="flex flex-col gap-4">
          <label htmlFor="titulo" className="text-white">
            Título
          </label>
          <input
            type="text"
            id="titulo"
            placeholder="Título del video"
            className="border-2 border-[#6BD1FF] rounded-lg p-2 text-white bg-transparent"
          />
        </div>
        <div className="flex flex-col gap-4">
          <label htmlFor="titulo" className="text-white">
            Categorias
          </label>
          <select
            name="Categorias"
            className="border-2 border-[#6BD1FF] rounded-lg p-2 text-white bg-black"
          >
            <option value="Front End">Front End</option>
            <option value="Back End">Back End</option>
            <option value="Innovación y Gestión">Innovación y Gestión</option>
          </select>
        </div>
        <div className="flex flex-col gap-4">
          <label htmlFor="descripcion" className="text-white bg-transparent">
            Imagen
          </label>
          <input
            id="descripcion"
            placeholder="URL del a imagen"
            className="border-2 border-[#6BD1FF] rounded-lg p-2 text-white bg-transparent"
          />
        </div>
        <div className="flex flex-col gap-4">
          <label htmlFor="url" className="text-white">
            Video
          </label>
          <input
            type="text"
            id="url"
            placeholder="URL del video"
            className="border-2 border-[#6BD1FF] rounded-lg p-2 text-white bg-transparent"
          />
        </div>
        <div className="flex flex-row gap-4 w-full justify-between">
          <Button text="Guardar" />
          <Button text="Cancelar" />
        </div>
      </form>
    </div>
  );
}
