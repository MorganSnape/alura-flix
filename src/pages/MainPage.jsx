import FirstSection from "../components/FirstSection";
import CardsContainer from "../components/CardsContainer";

export default function MainPage() {
  return (
    <>
      <FirstSection />
      <div className="flex flex-col justify-center gap-28 bg-black pt-20">
        <CardsContainer />
        <CardsContainer />
      </div>
    </>
  );
}
