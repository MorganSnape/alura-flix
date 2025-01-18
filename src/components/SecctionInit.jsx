import Tag from "./Tag";

export default function SectionInit() {
  return (
    <article>
      <Tag text="FRONT END" />
      <div className="flex flex-col gap-y-4">
        <h1>Challenge React</h1>
        <p>
          Este challenge es una forma de aprendizaje. Es un mecanismo donde
          podrás comprometerte en la resolución de un problema para poder
          aplicar todos los conocimientos adquiridos en la formación React.
        </p>
      </div>
    </article>
  );
}
