import Card from "./Card";
import TagTitle from "./TagTitle";

export default function CardsContainer() {
  return (
    <section className="flex flex-col  gap-x-4 justify-start gap-8 px-28 w-full">
      <div>
        <TagTitle text="FRONT END" />
      </div>
      <div className="flex flex-row items-center justify-between flex-wrap">
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
}
