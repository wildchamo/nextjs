import SectionWrapper from "./hoc/SectionWrapper";
import { soatTableInfo } from "./constants";
import AccordionTable from "./ui/AccordionTable";

const QuoteCalculator = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-y-4">
      <h2 className="text-header text-[2rem] font-bold">
        Conoce el Valor de Tú SOAT
      </h2>
      <span className="text-foreground">
        A través de nuestra página consulte el valor de su Soat.
      </span>
        <AccordionTable accordionData={soatTableInfo} />
    </div>
  );
};

export default SectionWrapper(QuoteCalculator, "calculator");
