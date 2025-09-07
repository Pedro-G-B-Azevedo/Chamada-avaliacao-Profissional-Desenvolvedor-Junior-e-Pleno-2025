import { UltimaOcorrencia } from "@/types/api";

interface PessoaDesaparecidaProps {
  nome: string;
  idade: number;
  sexo: "MASCULINO" | "FEMININO";
  vivo: boolean;
  ultimaOcorrencia: UltimaOcorrencia;
  children: React.ReactNode;
}

const PessoaDesaparecida = ({
  nome,
  idade,
  sexo,
  vivo,
  ultimaOcorrencia,
  children,
}: PessoaDesaparecidaProps) => {
  return (
    <div className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden flex flex-col">
      <div className="relative">
        {children}

        {/* Ribbon diagonal */}
        <div
            className={`absolute top-6 -left-12 w-48 text-center transform -rotate-45 text-white text-sm font-bold py-2 shadow-lg ${
                vivo ? "bg-green-600" : "bg-red-600"
            }`}
            >
            {vivo ? "Localizado" : "Desaparecido"}
        </div>
      </div>

      <div className="p-4 flex flex-col gap-1">
        <h3 className="text-lg font-bold truncate">{nome}</h3>
        <p className="text-sm text-gray-600">
          {idade} anos • {sexo === "MASCULINO" ? "Masculino" : "Feminino"}
        </p>
        <p className="text-sm">
          <span className="font-medium">Desaparecido em:</span>{" "}
          {new Date(ultimaOcorrencia.dtDesaparecimento).toLocaleDateString("pt-BR")}
        </p>
        {ultimaOcorrencia.localDesaparecimentoConcat && (
          <p className="text-sm">
            <span className="font-medium">Local:</span>{" "}
            {ultimaOcorrencia.localDesaparecimentoConcat}
          </p>
        )}
      </div>
    </div>
  );
};

export default PessoaDesaparecida;
