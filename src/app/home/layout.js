import MenuInferior from "../components/shared/menuInferior";
import MenuSuperior from "../components/shared/menuSuperior";

export default function LayoutHome({ children }) {
  return (
    <div className="h-screen">
      <MenuSuperior />
      <section className="mx-8 my-4">{children}</section>
      <MenuInferior />
    </div>
  );
}
