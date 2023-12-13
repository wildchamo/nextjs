import MenuInferior from "../components/menuInferior";
import MenuSuperior from "../components/menuSuperior";

export default function LayoutHome({ children }) {
  return (
    <div className="h-screen">
      <MenuSuperior />
      <section className="mx-8 my-4">{children}</section>
      <MenuInferior />
    </div>
  );
}
