import PicoyPlaca from "../components/home/PicoyPlaca.js";
import MisSeguros from "../components/home/MisSeguros.js";
import MisReportes from "../components/home/MisReportes.js";

export default function Home() {
  return (
    <main className="pb-20">
      <PicoyPlaca/>
      <MisSeguros />
      <MisReportes />
    </main>
  );
}
