import Button from "../components/Button";
import Input from "../components/Input";
import Select from "../components/Select";

export default function CreateVideo() {
  return (
    <section className=" bg-black w-full min-h-screen text-white flex justify-center">
      <form className="flex flex-wrap justify-center content-start gap-12 gap-y-12 w-4/5 p-4  ">
        <div className="flex flex-col gap-4 w-full text-center pt-12">
          <h3 className="w-full  text-3xl font-bold">AGREGAR NUEVO VIDEO</h3>
          <p>Complete el formulario para crear una nueva tarjeta de video</p>
        </div>

        <div className="w-2/5">
          <Input
            title={"Título"}
            placeholder={"Título del video"}
            name={"titulo"}
          />
        </div>
        <div className="w-2/5">
          <Select />
        </div>
        <div className="w-2/5">
          <Input
            title={"Imagen"}
            placeholder={"URL del a imagen"}
            name={"imagen"}
          />
        </div>
        <div className="w-2/5">
          <Input title={"Video"} placeholder={"URL del video"} name={"video"} />
        </div>

        <div className="flex flex-row gap-4 w-full justify-start">
          <Button text="Guardar" />
          <Button text="Cancelar" />
        </div>
      </form>
    </section>
  );
}
