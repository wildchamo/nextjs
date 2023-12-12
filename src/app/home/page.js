import PicoyPlaca from "../components/PicoyPlaca.js";
import MisSeguros from "../components/MisSeguros";
import MisReportes from "../components/MisReportes";

export default function Home() {
  return (
    <main className="mx-8 pb-20">
      <PicoyPlaca/>
      <MisSeguros />
      <MisReportes />
    </main>
  );
}
