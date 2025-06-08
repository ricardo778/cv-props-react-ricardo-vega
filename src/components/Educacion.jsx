export default function Educacion() {
  const educacion = [
    { id: 1, titulo: "Tecnologia en Analisis y Desarrollo de Software", universidad: "SENA", periodo: "2025-2026" }
  ];

  return (
    <section>
      <h3>Educación</h3>
      <ul>
        {educacion.map((edu) => (
          <li key={edu.id}>
            <strong>{edu.titulo}</strong> - {edu.universidad} ({edu.periodo})
          </li>
        ))}
      </ul>
    </section>
  );
}