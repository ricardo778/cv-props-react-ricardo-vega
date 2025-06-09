import Habilidades from "./Habilidades";

export default function ToggleHabilidades({ habilidades }) {
  return (
    <section>
      <button>
        Mostrar/Ocultar Habilidades
      </button>

      {/* Este renderizado condicional aún no funciona */}
      <Habilidades habilidades={habilidades} />
    </section>
  );
}
