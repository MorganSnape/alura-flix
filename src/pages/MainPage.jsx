import FirstSection from "../components/FirstSection";
import Card from "../components/Card";

export default function MainPage() {
  return (
    <>
      <FirstSection />
      <section className="flex flex-row gap-x-4 justify-center gap-y-8 w-full pt-6 bg-black">
        <Card />
        <Card />
        <Card />
      </section>
    </>
  );
}
