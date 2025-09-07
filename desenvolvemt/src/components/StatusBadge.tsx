export default function StatusBadge({ vivo }: { vivo: boolean }) {
  return (
    <span
      className={`px-4 py-2 rounded-full text-sm font-semibold ${
        vivo
          ? "bg-green-100 text-green-800 border border-green-300"
          : "bg-red-100 text-red-800 border border-red-300"
      }`}
    >
      {vivo ? "Localizada" : "Desaparecida"}
    </span>
  );
}