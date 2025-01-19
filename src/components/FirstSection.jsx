import TagTitle from "./TagTitle";

export default function FirstSection() {
  return (
    <section className="h-screen relative text-white">
      <div>
        <TagTitle text="FRONT END" />
        <div className="flex flex-col gap-y-4">
          <h1>Challenge React</h1>
          <p>
            Este challenge es una forma de aprendizaje. Es un mecanismo donde
            podrás comprometerte en la resolución de un problema para poder
            aplicar todos los conocimientos adquiridos en la formación React.
          </p>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex justify-center -z-10 h-screen w-full overflow-hidden">
        <div className="relative">
          <img
            src="/images/landing.png"
            className="object-cover w-full object-top"
            alt="Imagen con superposición azul"
          />
          <div className="absolute inset-0 bg-[#001233] bg-opacity-50 w-full h-full"></div>
        </div>
      </div>
    </section>
  );
}
