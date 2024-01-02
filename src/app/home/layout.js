import MenuInferior from "../components/shared/menuInferior";
import MenuSuperior from "../components/shared/menuSuperior";

export default function LayoutHome({ children }) {
  return (
    <div className="flex justify-center h-screen">
      <div className="max-w-screen-sm w-full">
        <MenuSuperior />
        <section className="mx-8 my-4">{children}</section>
        <MenuInferior />
      </div>
    </div>
  );
}
