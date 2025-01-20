import FirstSection from "../components/FirstSection";
import CardsContainer from "../components/CardsContainer";
import FormularioEditarCard from "../components/FormularioEditarCard";

export default function MainPage() {
  return (
    <>
      <FirstSection />
      <div  className="bg-black ">
        <div className="flex flex-col justify-center gap-28 pt-20">
          <CardsContainer />
          <CardsContainer />
        </div>
        <FormularioEditarCard />
      </div>
    </>
  );
}
