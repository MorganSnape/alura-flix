import TagTitle from "./TagTitle";

export default function FirstSection() {
  return (
    <section className="h-[calc(100vh-96px)] relative text-white flex flex-row items-center justify-evenly">
      <div className="flex flex-col items-start gap-y-4 text-center w-1/2">
        <TagTitle text="FRONT END" />
        <div className="flex flex-col items-start gap-2">
          <h1 className="text-3xl">Challenge React</h1>
          <p className="text-xl text-left">
            Este challenge es una forma de aprendizaje. Es un mecanismo donde
            podrás comprometerte en la resolución de un problema para poder
            aplicar todos los conocimientos adquiridos en la formación React.
          </p>
        </div>
      </div>
      <div className="box w-[500px] h-[280px] rounded-3xl overflow-hidden border-4 border-[#6BD1FF]">
        <img src="/images/landing.png" alt="Box" className="object-cover w-full h-full object-center"/>
      </div>
      <div className="absolute bottom-0 -z-10 h-full w-full overflow-hidden">
        <div className="relative h-full w-full">
          <img
            src="/images/landing.png"
            className="object-cover w-full h-full object-center"
            alt="Imagen con superposición azul"
          />
          <div className="absolute inset-0 bg-[#001233] bg-opacity-50 w-full h-full"></div>
        </div>
      </div>
    </section>
  );
}
