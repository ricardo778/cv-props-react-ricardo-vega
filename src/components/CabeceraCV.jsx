// src/components/CabeceraCV.jsx
export default function CabeceraCV(props) {
  return (
    <header>
      <h1>{props.nombre}</h1>
      <h2>{props.profesion}</h2>
      <hr />
    </header>
  );
}
