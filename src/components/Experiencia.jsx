export default function Experiencia() {
  const experiencia = [
    { id: 1, puesto: "Desarrollador Full Stack", empresa: "microsoft", periodo: "2026-2026" },
    { id: 2, puesto: "Aprendiz", empresa: "SENA", periodo: "2025-2026" }
  ];

  // Renderiza condicionalmente si no hay experiencia
  if (experiencia.length === 0) {
    return (
      <section>
        <h3>Experiencia Profesional</h3>
        <p>No se ha registrado experiencia profesional.</p>
      </section>
    );
  }

  return (
    <section>
      <h3>Experiencia Profesional</h3>
      <ul>
        {experiencia.map((exp) => (
          <li key={exp.id}>
            <strong>{exp.puesto}</strong> - {exp.empresa} ({exp.periodo})
          </li>
        ))}
      </ul>
    </section>
  );
}