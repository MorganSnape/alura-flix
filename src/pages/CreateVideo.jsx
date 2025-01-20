import Button from "../components/Button";

export default function CreateVideo() {
  return (
    <section className=" bg-[#191919] w-full min-h-screen text-white flex justify-center">
      <form className="flex flex-wrap justify-center content-start gap-12 gap-y-12 w-4/5 p-4  ">
        <div className="flex flex-col gap-4 w-full text-center pt-12">
          <h3 className="w-full  text-3xl font-bold">AGREGAR NUEVO VIDEO</h3>
          <p>Complete el formulario para crear una nueva tarjeta de video</p>
        </div>

        <div className="flex flex-col gap-4 w-2/5">
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
        <div className="flex flex-col gap-4 w-2/5">
          <label htmlFor="titulo" className="text-white">
            Categorias
          </label>
          <select
            name="Categorias"
            className="border-2 border-[#6BD1FF] rounded-lg p-2 text-white bg-[#191919]"
          >
            <option value="Front End">Front End</option>
            <option value="Back End">Back End</option>
            <option value="Innovación y Gestión">Innovación y Gestión</option>
          </select>
        </div>
        <div className="flex flex-col gap-4 w-2/5">
          <label htmlFor="descripcion" className="text-white bg-transparent">
            Imagen
          </label>
          <input
            id="descripcion"
            placeholder="URL del a imagen"
            className="border-2 border-[#6BD1FF] rounded-lg p-2 text-white bg-transparent"
          />
        </div>
        <div className="flex flex-col gap-4 w-2/5">
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
        <div className="flex flex-row gap-4 w-full justify-start">
          <Button text="Guardar" />
          <Button text="Cancelar" />
        </div>
      </form>
    </section>
  );
}
