import Button from "./Button";
import Input from "./Input";
import Select from "./Select";
export default function FormularioEditarCard() {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <form className="flex flex-col gap-4 w-1/2 border-2 border-[#6BD1FF] rounded-lg p-4 bg-black px-36 py-14">
        <h3 className="w-full text-white text-3xl font-bold">EDITAR CARD:</h3>
        <Input
          title={"Título"}
          placeholder={"Título del video"}
          name={"titulo"}
        />

        <Select />

        <Input
          title={"Imagen"}
          placeholder={"URL del a imagen"}
          name={"imagen"}
        />
        <Input title={"Video"} placeholder={"URL del video"} name={"video"} />

        <div className="flex flex-row gap-4 w-full justify-between">
          <Button text="Guardar" />
          <Button text="Cancelar" />
        </div>
      </form>
    </div>
  );
}
