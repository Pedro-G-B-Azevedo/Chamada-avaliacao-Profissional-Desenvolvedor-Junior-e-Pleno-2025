import StatusBadge from "@/components/StatusBadge";
import { getPessoaById } from "@/services/apiService";
import Image from "next/image";

export default function PessoaCardDetalhes({ pessoa }: { pessoa: Awaited<ReturnType<typeof getPessoaById>> }) {
  const { nome, idade, sexo, vivo, urlFoto, ultimaOcorrencia } = pessoa;

  return (
    <section className="bg-white shadow rounded-2xl p-6 flex gap-6">
      <div className="w-48 h-48 flex-shrink-0">
        {urlFoto ? (
          <Image
            src={urlFoto}
            alt="Foto de {nome}"
            width={192}
            height={192}
            className="w-full h-full object-cover rounded-xl"    
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-100 rounded-xl">
            <span className="text-gray-400">Sem foto</span>
          </div>
        )}
      </div>

      <div className="flex flex-col gap-3">
        <h1 className="text-2xl font-bold">{nome}</h1>
        <StatusBadge vivo={vivo} />
        <p><strong>Idade:</strong> {idade} anos</p>
        <p><strong>Sexo:</strong> {sexo}</p>
        <p>
          <strong>Data do desaparecimento:</strong>{" "}
          {new Date(ultimaOcorrencia.dtDesaparecimento).toLocaleDateString("pt-BR")}
        </p>
        {ultimaOcorrencia.dataLocalizacao && (
          <p>
            <strong>Data da localização:</strong>{" "}
            {new Date(ultimaOcorrencia.dataLocalizacao).toLocaleDateString("pt-BR")}
          </p>
        )}
        <p><strong>Local:</strong> {ultimaOcorrencia.localDesaparecimentoConcat}</p>
        <p><strong>Informações:</strong> {ultimaOcorrencia.ocorrenciaEntrevDesapDTO.informacao ?? "Não informado"}</p>
      </div>
    </section>
  );
}