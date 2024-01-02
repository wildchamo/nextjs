import SectionWrapper from "./hoc/SectionWrapper";

const FormSection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-5 md:gap-10">
      <div className="flex flex-col lg:w-[50%] space-y-3">
        <h2 className="text-header text-[2.5rem] leading-[3rem] font-bold">
          Es hora de empezar invirtiendo en tu seguridad
        </h2>
        <span className="text-mutedForeground">
          Mantenga a su familia segura. Asegúrese de que todos sus activos
          valiosos estén protegidos ¡Nosotros lo ayudaremos con eso!
        </span>
      </div>
      <div className="my-8 rounded-xl p-0.5 bg-gradient-to-b from-gradientGreen to-background transition-all duration-250 hover:bg-gradient-to-t hover:from-secondary hover:to-primary">
        <div className="max-w-lg bg-background p-6 rounded-xl shadow-xl">
          <form>
            <label className="block font-bold mb-1" htmlFor="nombreApellido">
              Nombre y Apellido
            </label>
            <input
              type="text"
              id="nombreApellido"
              name="nombreApellido"
              className="w-full px-4 py-2 border border-mutedForeground/50 rounded-md focus:outline-none focus:border-secondary mb-4 hover:cursor-pointer hover:border-secondary"
            />

            <label className="block font-bold  mb-1" htmlFor="email">
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              className="w-full px-4 py-2 border border-mutedForeground/50 rounded-md focus:outline-none focus:border-secondary mb-4 hover:cursor-pointer hover:border-secondary"
            />

            <label className="block font-bold  mb-1" htmlFor="numeroContacto">
              Numero de Contacto
            </label>
            <input
              type="text"
              id="numeroContacto"
              name="numeroContacto"
              className="w-full px-4 py-2 border border-mutedForeground/50 rounded-md focus:outline-none focus:border-secondary mb-4 hover:cursor-pointer hover:border-secondary"
            />

            <label className="block font-bold mb-1">
              ¿Cuéntanos, cuál o cuales servicios estás buscando?
            </label>
            <div className="flex flex-col sm:grid sm:grid-cols-2 gap-4 mb-4 text-sm">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="ARL"
                  name="servicios"
                  className="mr-2 hover:cursor-pointer"
                />
                <label htmlFor="ARL">ARL</label>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="accidentesPersonales"
                  name="servicios"
                  className="mr-2 hover:cursor-pointer"
                />
                <label htmlFor="accidentesPersonales">Accidentes Personales</label>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="responsabilidadCivil"
                  name="servicios"
                  className="mr-2 hover:cursor-pointer"
                />
                <label htmlFor="responsabilidadCivil">
                  Responsabilidad Civil (RC)
                </label>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="polizaCumplimiento"
                  name="servicios"
                  className="mr-2 hover:cursor-pointer"
                />
                <label htmlFor="polizaCumplimiento">Póliza de Cumplimiento</label>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="segurosAutomoviles"
                  name="servicios"
                  className="mr-2 hover:cursor-pointer"
                />
                <label htmlFor="segurosAutomoviles">Seguros de Automóviles</label>
              </div>
            </div>

            <label className="block font-bold mb-1" htmlFor="mensaje">
              Mensaje
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              rows="4"
              className="w-full px-4 py-2 border border-mutedForeground/50 rounded-md focus:outline-none focus:border-secondary mb-4 hover:cursor-pointer hover:border-secondary"
            ></textarea>

            <button className="w-full py-3 px-6 font-bold uppercase text-sm text-background rounded-2xl bg-button hover:bg-button/80 transition-all duration-150">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(FormSection, "quote");
