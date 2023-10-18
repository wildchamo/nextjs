
export default function EmailTemplate({ firstName }) {


  return (
    <div>
      <h2>
        Nombre usuario <b>{nombre}</b>{" "}
      </h2>
      <h2>
        Identificación <b>{identificacion}</b>{" "}
      </h2>
      <h2>
        Ciudad <b>{ciudad}</b>{" "}
      </h2>
      <h1>Welcome, {firstName}!</h1>
    </div>
  );
}
