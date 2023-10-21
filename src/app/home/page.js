import PicoyPlaca from "../components/PicoyPlaca.js";
import MisSeguros from "../components/MisSeguros";
import MisReportes from "../components/MisReportes";

export default function Home() {
  return (
    <main className="mr-8 ml-8">
      <PicoyPlaca/>
      <MisSeguros />
      <MisReportes />
    </main>
  );
}
